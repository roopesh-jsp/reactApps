import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNAvigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
