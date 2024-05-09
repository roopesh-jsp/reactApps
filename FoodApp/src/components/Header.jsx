import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>FoodApp</h1>
      </div>
      <nav>
        <button>cart (0)</button>
      </nav>
    </header>
  );
}
