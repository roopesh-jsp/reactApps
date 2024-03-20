export default function TabButton({ children, onSelect, isSlected }) {
  function click() {
    console.log("click");
  }
  return (
    <li>
      <button className={isSlected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
