import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelect, turns }) {
  const gameBoard = initialBoard;
  console.log(turns);
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

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
                <button onClick={() => onSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
