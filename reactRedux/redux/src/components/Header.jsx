import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
export default function Header() {
  const auth = useSelector((x) => x.auth.authentified);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(authActions.login());
  }
  return (
    <header>
      <h1>Redux</h1>
      {auth && (
        <nav>
          <ul>
            <li>home</li>
            <li>contact</li>
            <li>
              <button onClick={handleLogout}>log out</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
