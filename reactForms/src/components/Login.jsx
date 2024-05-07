import { useState } from "react";

export default function Login({ toogle }) {
  function handleClick() {
    console.log("hai");
    toogle(false);
  }
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  function handleChange(indentifier, event) {
    setEnteredValues((prev) => ({
      ...prev,
      [indentifier]: event.target.value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("sucessfull !!");
    console.log(enteredValues);
    setEnteredValues({ email: "", password: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleChange("email", event)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) => handleChange("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
      <p className="signup-btn">
        <span>Don't have a account </span>
        <span>
          <a className="signup-link" href="#" onClick={handleClick}>
            Sign-Up ?
          </a>
        </span>
      </p>
    </form>
  );
}
