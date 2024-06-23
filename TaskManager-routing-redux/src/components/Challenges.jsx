import { useSelector } from "react-redux";
import ChallengesItem from "./ChallengeItem";
import classes from "./challenges.module.css";
import ChallengesTab from "./challengesTab";
// import { data } from "../assets/images";
import { useState } from "react";
export default function ChallengesComp() {
  const data = useSelector((state) => state.challenges);
  const [type, setType] = useState("active");

  const filteredData = {
    active: data.filter((el) => el.status === "active"),
    done: data.filter((el) => el.status === "done"),
    failed: data.filter((el) => el.status === "failed"),
  };

  return (
    <div className={classes.challenges}>
      <ChallengesTab onSelect={setType} type={type} />
      {filteredData[type].length > 0 &&
        filteredData[type].map((el, edx) => (
          <ChallengesItem key={edx} challenge={el} />
        ))}
    </div>
  );
}
