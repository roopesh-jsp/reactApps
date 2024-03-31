import { useState } from "react";
export default function AuthInputs() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handlechange(setFun, value) {
    setFun(value);
  }
  function handleClick() {
    setSubmitted(true);
  }
  const notvalidMail = submitted && !mail.includes("@");
  const notvalidPass = submitted && pass.length < 6;
  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label className={notvalidMail ? "invalid" : ""}>email</label>
          <input
            type="email"
            className={notvalidMail ? "invalid" : ""}
            onChange={(event) => handlechange(setMail, event.target.value)}
          />
        </p>
        <p>
          <label className={notvalidPass ? "invalid" : ""}>password</label>
          <input
            type="password"
            className={notvalidPass ? "invalid" : ""}
            onChange={(event) => handlechange(setPass, event.target.value)}
          />
        </p>
      </div>
      <div className="actions">
        <button className="text-button">create new account</button>
        <button className="button" onClick={handleClick}>
          submit
        </button>
      </div>
    </div>
  );
}
