import { Link, useNavigate } from "react-router-dom";
const products = [
  { id: "p1", item: "soap" },
  { id: "p2", item: "brush" },
  { id: "p3", item: "paste" },
  { id: "p4", item: "towel" },
  { id: "p5", item: "water" },
];

export default function Products() {
  const navigation = useNavigate();
  function handleNav() {
    navigation("/store");
  }
  return (
    <>
      <h1>products</h1>
      <ul>
        <li> </li>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.item}</Link>{" "}
            {/**relative paths ==> appends at last of present path */}
          </li>
        ))}
      </ul>
      <button onClick={handleNav}>Store</button>
    </>
  );
}
