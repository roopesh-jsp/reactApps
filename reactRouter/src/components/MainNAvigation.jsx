import { NavLink, Link } from "react-router-dom";
export default function MainNavigation() {
  return (
    <header>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active Link" : "Link")}
          >
            back
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active Link" : "Link")}
          >
            {/**absolute path overrides present paths and appends after domain name */}{" "}
            products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active Link" : "Link")}
          >
            store
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
