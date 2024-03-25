import { CORE_CONCEPTS } from "../data";
import Coreconcept from "./Coreconcept";
export default function Coreconcepts() {
  return (
    <section id="core-concepts">
      <h2>Core-concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return <Coreconcept {...item} />;
        })}
      </ul>
    </section>
  );
}
