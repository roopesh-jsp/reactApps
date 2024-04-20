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
    <div
      id="auth-inputs"
      className=" bg-slate-600 p-8 rounded text-white max-w-lg mx-auto "
    >
      <div className="controls">
        <p>
          <label className={notvalidMail ? "invalid" : ""}>
            email{" "}
            <span className=" relative left-5 text-s font-light">
              {notvalidMail ? " (should contain @ )" : ""}
            </span>
          </label>
          <input
            type="email"
            className={notvalidMail ? "invalid" : ""}
            onChange={(event) => handlechange(setMail, event.target.value)}
          />
        </p>
        <p>
          <label className={notvalidPass ? "invalid" : ""}>
            password
            <span className=" relative left-5 font-light text-xs">
              {notvalidPass ? " (should contain atleast 6 characters )" : ""}
            </span>
          </label>
          <input
            type="password"
            className={notvalidPass ? "invalid" : ""}
            onChange={(event) => handlechange(setPass, event.target.value)}
          />
        </p>
      </div>
      <div className="flex gap-3 justify-between">
        <button className="text-amber-400 hover:text-amber-600">
          create new account
        </button>
        <button
          className="bg-amber-500 rounded px-2 py-1 font-semiboldbold hover:bg-amber-600"
          onClick={handleClick}
        >
          submit
        </button>
      </div>
    </div>
  );
}
