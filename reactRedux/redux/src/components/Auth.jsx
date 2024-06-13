import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

export default function Auth() {
  const auth = useSelector((x) => x.auth.authentified);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E mail</label>
        <input type="text" name="" id="email" />
      </div>
      <div>
        <label htmlFor="pass">password</label>
        <input type="password" name="" id="pass" />
      </div>
      <button>Submit</button>
    </form>
  );
}
