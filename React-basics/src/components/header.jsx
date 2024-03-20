import logo from "../assets/react-core-concepts.png";
import "../index.css";
const arr = ["Fudamental", "Core", "Important", "Easy", "Insane"];
const randomint = function (maax) {
  return Math.floor(Math.random() * (maax + 1));
};
export default function Header() {
  const i = arr[randomint(arr.length - 1)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {i} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
