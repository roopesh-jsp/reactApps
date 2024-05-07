export default function Login({ toogle }) {
  function handleClick() {
    console.log("hai");
    toogle(false);
  }
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
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
