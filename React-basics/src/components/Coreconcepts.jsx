import { CORE_CONCEPTS } from "../data";
import Coreconcept from "./Coreconcept";
import Section from "./Section";
export default function Coreconcepts() {
  return (
    <Section title="Core-concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return <Coreconcept {...item} />;
        })}
      </ul>
    </Section>
  );
}
