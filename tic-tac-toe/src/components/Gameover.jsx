export default function Gameover({ winner, onSelect }) {
  return (
    <div id="game-over">
      <h2>game over !</h2>
      {winner ? <p>You won, {winner} !</p> : <p>Match Draw !</p>}

      <p>
        <button onClick={onSelect}>Rematch !</button>
      </p>
    </div>
  );
}
