import classes from "./challengeTab.module.css";
export default function ChallengesTab({ onSelect, type }) {
  return (
    <>
      <button
        onClick={() => onSelect("active")}
        className={type === "active" ? classes.active : ""}
      >
        active
      </button>
      <button
        onClick={() => onSelect("done")}
        className={type === "done" ? classes.active : ""}
      >
        completed
      </button>
      <button
        onClick={() => onSelect("failed")}
        className={type === "failed" ? classes.active : ""}
      >
        failed
      </button>
    </>
  );
}
