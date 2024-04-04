import Challenge from "./components/Challenge.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="Easy" targetTime="1" />
        <Challenge title="Not Easy" targetTime="2" />
        <Challenge title="Tough" targetTime="20" />
        <Challenge title="Props Only" targetTime="15" />
      </div>
    </>
  );
}

export default App;
