import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

export default function Root() {
  const navigation = useNavigate();
  return (
    <>
      {navigation.state === "loading" && <p>Loading...</p>}
      <MainNavigation />
      <Outlet />
    </>
  );
}
