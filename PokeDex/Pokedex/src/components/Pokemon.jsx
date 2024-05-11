import { useEffect, useState } from "react";

export default function Pokemon({ Pokemon }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [Pokemon]);

  return <div>pokemon</div>;
}
