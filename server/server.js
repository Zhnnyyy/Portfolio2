const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.json({ Error: false });
});

app.post("/sample", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
