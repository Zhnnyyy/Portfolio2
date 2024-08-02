import React, { useState } from "react";
import { waveform } from "ldrs";
import "./contact.css";
function Contact() {
  waveform.register();
  const [submitted, setSubmitting] = useState(false);
  const [frmdata, setfrmdata] = useState({
    email: "",
    subject: "",
    body: "",
  });
  const [error, setError] = useState({
    email: "",
    subject: "",
    body: "",
  });

  const validateEmail = (data) => {
    return data.trim() ? "" : "Email is required";
  };

  const validateSubject = (data) => {
    return data.trim() ? "" : "Subject is required";
  };

  const validateBody = (data) => {
    return data.trim() ? "" : "Body is required";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setfrmdata((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    let error = "";
    switch (name) {
      case "email":
        error = validateEmail(value);
        break;
      case "subject":
        error = validateSubject(value);
        break;
      case "body":
        error = validateBody(value);
        break;
    }

    setError((prevError) => ({ ...prevError, [name]: error }));
  };

  const sendMail = async (e) => {
    e.preventDefault();

    //validate and replace state of error
    const newErrors = {
      email: validateEmail(frmdata.email),
      subject: validateSubject(frmdata.subject),
      body: validateBody(frmdata.body),
    };
    setError(newErrors);

    //validate form if empty input
    if (!Object.values(error).every((err) => err == ""))
      return alert("All fields are required");
    setSubmitting(true);
    const response = await fetch("/contact", {
      method: "POST",
      body: JSON.stringify(frmdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data.Error) {
      setSubmitting(false);
      alert("Email has been sent");
      setfrmdata({ email: "", subject: "", body: "" });
    } else {
      alert("Please try again");
    }
  };
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">Get in touch</h1>
      <div className="about-line"></div>

      <div className="form-container" onSubmit={sendMail}>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={frmdata.email}
            autoComplete="off"
            onChange={handleChange}
          />
          {error.email && (
            <div style={{ color: "red", fontSize: 12 }}>{error.email}</div>
          )}
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={frmdata.subject}
            onChange={handleChange}
          />
          {error.subject && (
            <div style={{ color: "red", fontSize: 12 }}>{error.subject}</div>
          )}
          <textarea
            placeholder="body"
            name="body"
            value={frmdata.body}
            onChange={handleChange}
          />
          {error.body && (
            <div style={{ color: "red", fontSize: 12 }}>{error.body}</div>
          )}
          <button type="submit" disabled={submitted}>
            {submitted ? (
              <l-waveform
                size="24"
                stroke="3"
                speed="1"
                color="white"
              ></l-waveform>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
