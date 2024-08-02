require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact", async (req, res) => {
  const result = await sendMail(req.body);
  res.json({ data: result });
});

app.get("/sample", (req, res) => {
  res.json({ msg: "Hello World" });
});

const sendMail = (body) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    let mailOptions = {
      from: body.email,
      sender: body.email,
      to: process.env.EMAIL,
      subject: body.subject,
      text: `${body.body}\n ${body.email}`,
    };

    transporter.sendMail(mailOptions, (err, res) => {
      if (err) reject({ Error: true, msg: err.message });
      else resolve({ Error: false, msg: res.response });
    });
  });
};

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
