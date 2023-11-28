import { useState } from "react";
import "./Form.css";
function Form() {
  var [email, setEmail] = useState("");
  var [text, setText] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 10 || email.length < 10 || !validateEmail(email)) {
      if (text.length < 10) {
        alert("Text must be at least 10 characters long");
      }
      if (email.length < 10 || !validateEmail(email)) {
        alert("Please enter a valid email address");
      }
      return;
    }

    alert("Success Send");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="section-titile padding-bottom-16">
        <div className="section-title-1">Contact</div>
        <div className="section-title-2">Me</div>
      </div>
      <label className="font-normal">Email</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        className="form-input"
      />
      <br />

      <label className="font-normal">Text</label>
      <textarea
        type="text"
        value={text}
        onChange={handleTextChange}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Send Mail
      </button>
    </form>
  );
}

export default Form;
