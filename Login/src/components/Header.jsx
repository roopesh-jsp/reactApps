import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16 ">
      <img src={logo} alt="A canvas" className="w-44 mb-4" />
      <h1 className="text-3xl text-center text-amber-800 font-semibold uppercase ">
        ReactArt
      </h1>
      <p className="">A community of artists and art-lovers.</p>
    </header>
  );
}
