import { useState } from "react";
import { WINNING_COMBINATIONS } from "../winningCombinations";
import Gameover from "./Gameover";
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelect, turns, handleRematch }) {
  const gameBoard = [...initialBoard.map((array) => [...array])];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = "";

  for (const combination of WINNING_COMBINATIONS) {
    const firstBox = gameBoard[combination[0].row][combination[0].column];
    const secondBox = gameBoard[combination[1].row][combination[1].column];
    const thirdBox = gameBoard[combination[2].row][combination[2].column];
    if (firstBox && firstBox === secondBox && secondBox === thirdBox) {
      winner = firstBox;
    }
  }
  let hasDraw = turns.length === 9 && !winner;

  //   const [gameBoard, setGameBoard] = useState(initialBoard);
  //   function updateBoard(rowIndex, colIndex) {
  //     setGameBoard((oldBoard) => {
  //       const newBorad = [...oldBoard.map((innerarray) => [...innerarray])]; // deep clone for 2 levela
  //       newBorad[rowIndex][colIndex] = playerSymbol;
  //       return newBorad;
  //     });
  //     onSelect();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
      {(winner || hasDraw) && (
        <Gameover winner={winner} onSelect={handleRematch} />
      )}
    </ol>
  );
}
