import image from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={image} alt="" />
      <h1>Investment calculator</h1>
    </header>
  );
}
