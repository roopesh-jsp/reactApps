import { useParams, Link } from "react-router-dom";
export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>Product -details</h1>
      <h3>{params.pId}</h3>
      <button>
        <Link to=".." relative="route">
          Back-route
        </Link>
      </button>
      <button>
        <Link to=".." relative="path">
          Back-path
        </Link>
      </button>
    </>
  );
}
