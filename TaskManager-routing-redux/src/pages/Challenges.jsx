import ChallengesComp from "../components/Challenges";
import Header from "../components/Header";
import classes from "./challenges.module.css";
import ironMan from "../assets/ironMan3.png";
export default function ChallengesPage() {
  return (
    <>
      <div className={classes.background}>
        <img src={ironMan} alt="" />
      </div>
      <div className={classes.mm}>
        <Header />
        <ChallengesComp />
      </div>
    </>
  );
}
