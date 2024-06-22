import cityImg from "../assets/city.jpg";
import classes from "./home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <header>
        <div className={classes.background_image}>
          <img src={cityImg} alt="background-img" />
        </div>
        <div className={classes.mainHeading}>
          <h1> are you ready for challenges</h1>
          <button>
            <Link to="/challenges">get started</Link>
          </button>
        </div>
      </header>
      <main>
        <div className={classes.content}>
          <h1>There's never been a better time.</h1>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it's personal growth, professional
            achievements, or just for fun, we've got you covered.
          </p>
        </div>
        <div className={classes.content}>
          <h1>Why Challenge Yourself?</h1>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </div>
        <div className={classes.content}>
          <h1>Features</h1>
          <p>
            Custom challenge creation: Set the rules, define your pace. Track
          </p>
          <p>
            your progress: See your growth over time with our analytics tools.
          </p>
          <p>
            Community Support: Join our community and get motivated by peers.
          </p>
        </div>
        <div className={classes.content}>
          <h1>Join Thousands Embracing The Challenge</h1>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It's been a transformative experience!” - Alex P.
          </p>
        </div>
      </main>
    </>
  );
}
