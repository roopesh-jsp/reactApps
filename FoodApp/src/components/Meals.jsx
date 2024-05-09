import { useEffect } from "react";
import { useState } from "react";
import Meal from "./Meal.jsx";
export default function Meals() {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      setFetchedMeals(data);
    }
    getMeals();
    // fetch("http://localhost:3000/meals")
    //   .then((response) => response.json())
    //   .then((data) => setFetchedMeals(data));
  }, []);

  return (
    <ul id="meals">
      {fetchedMeals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
