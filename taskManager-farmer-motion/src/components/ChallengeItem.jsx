import { useState } from "react";
import classes from "./challengeItem.module.css";
import { useDispatch } from "react-redux";
import { challengeActions } from "../store/challengeStore";
export default function ChallengesItem({ challenge }) {
  const { date, description, title, image } = challenge;
  const [expand, setexpand] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <div className={classes.challenge}>
        <img {...image} />
        <div className="challenge_data">
          <h1>{title}</h1>
          <h4>{date}</h4>
        </div>
      </div>
      <div className={classes.cta}>
        <button onClick={() => setexpand((prev) => !prev)}>view</button>
        <div className="cta_controls">
          <button
            onClick={() =>
              dispatch(
                challengeActions.onModify({
                  challenge: challenge,
                  status: "done",
                })
              )
            }
          >
            mark done
          </button>
          <button
            onClick={() =>
              dispatch(
                challengeActions.onModify({
                  challenge: challenge,
                  status: "failed",
                })
              )
            }
          >
            mark failed
          </button>
        </div>
      </div>
      <p className={expand ? classes.active : ""}>{description}</p>
    </div>
  );
}
