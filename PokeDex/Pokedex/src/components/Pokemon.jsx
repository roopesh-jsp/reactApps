import { useEffect, useState } from "react";

export default function Pokemon({ Pokemon }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        return setData(data);
      })
      .catch((err) => console.log(err));

    console.log(data);
  }, [Pokemon]);

  return (
    <div>
      {data && (
        <ul id="pokemon">
          <li className="pokemon_list">
            <p className="pokemon_name">{data.name}</p>
            {isLoading && <p>Loading Data...</p>}
            {data && <img src={data.sprites.front_default} alt="" />}
          </li>
          <li className="details">
            <p>type - {data.types[0].type.name}</p>
            <p>weigth - {data.weight}</p>
            <p className="ablities">
              ablities -
              {data.abilities.map((ability) => (
                <li key={ability.slot}>{ability.ability.name}</li>
              ))}
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}
