import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function App() {
  const [playerTurn, setTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleActivePlayer(rowIndex, colIndex) {
    let currPlayer = "X";
    if (playerTurn.length > 0 && playerTurn[0].player === "X") {
      currPlayer = "O";
    }
    setActivePlayer((currActive) => (currActive === "X" ? "O" : "X"));
    setTurn((prevTurn) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelect={handleActivePlayer} turns={playerTurn} />
      </div>
      <Log turns={playerTurn} />
    </main>
  );
}

export default App;
