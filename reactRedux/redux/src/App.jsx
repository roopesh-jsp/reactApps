import { Fragment } from "react";
import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import User from "./components/USer.jsx";
import { useSelector } from "react-redux";

export default function App() {
  const auth = useSelector((x) => x.auth.authentified);
  return (
    <Fragment>
      <Header />

      {auth ? <User /> : <Auth />}
      <Counter />
    </Fragment>
  );
}
