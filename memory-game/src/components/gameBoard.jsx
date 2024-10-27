import React, { useEffect, useState } from "react";

export default function GameBoard() {
  const [NoGrids, setNoGrids] = useState(4);

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setmatched] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  function onChangeGrids(e) {
    const size = parseInt(e.target.value);
    // console.log(size);

    if (size >= 2 && size <= 10) setNoGrids(size);
  }

  function initGame() {
    const totalCards = NoGrids * NoGrids;
    const NoPairs = Math.floor(totalCards / 2);
    const numbers = [...Array(NoPairs).keys()].map((ele, idx) => ele + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort((a, b) => Math.random() - 0.5)
      .map((ele, idx) => ({ id: idx, number: ele }));
    setCards(shuffledCards);
    setWon(false);
    setFlipped([]);
    setmatched([]);
    setDisabled(false);
  }

  function isMatched(id) {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[id].number) {
      setmatched([...matched, firstId, id]);
      setDisabled(false);
      setFlipped([]);
    } else {
      setTimeout(() => {
        setDisabled(false);
        setFlipped([]);
      }, 1000);
    }
  }

  function onFlip(id) {
    if (disabled || won) return;
    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        isMatched(id);
      } else {
        setDisabled(false);
        setFlipped([]);
      }
    }
  }

  function isFlipped(id) {
    return flipped.includes(id) || matched.includes(id);
  }
  function isSolved(id) {
    return matched.includes(id);
  }
  function checkWon() {
    console.log(cards.length === matched.length);

    return cards.length === matched.length;
  }

  useEffect(() => {
    initGame();
  }, [NoGrids]);
  // useEffect(() => {
  //   if (checkWon()) {
  //     setWon(true);
  //   }
  // }, [matched, NoGrids]);
  return (
    <div className="w-fit ml-auto mr-auto mt-10 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl text-center font-bold">Memory game</h1>
      <div className="flex gap-5 items-center ">
        <label htmlFor="grids" className="text-md font-semibold capitalize">
          enter no of grids (max:10)
        </label>
        <input
          type="number"
          id="grids"
          min={2}
          max={10}
          value={NoGrids}
          onChange={onChangeGrids}
          className="bg-slate-100 w-20 rounded-sm px-2 py-1 border-black border-2"
        />
      </div>
      {/* board */}
      <div
        className="grid gap-2 mb-4 "
        style={{
          gridTemplateColumns: `repeat(${NoGrids},minmax(0,1fr))`,
          width: `min(100%,${NoGrids * 6}em)`,
        }}
      >
        {cards.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={` flex  items-center justify-center cursor-pointer aspect-square font-bold rounded-lg  ${
                isFlipped(ele.id)
                  ? isSolved(ele.id)
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                  : "bg-slate-300 text-black"
              }`}
              onClick={() => onFlip(ele.id)}
            >
              {isFlipped(ele.id) ? ele.number : "?"}
            </div>
          );
        })}
      </div>
      {checkWon() && (
        <div className="font-bold  text-center animate-bounce duration-100">
          <h1 className="text-3xl capitalize text-green-600">you won</h1>
        </div>
      )}
      {checkWon() && (
        <button
          onClick={initGame}
          className="border-emerald-400 border-2 bg-green-200 px-5 py-2 rounded-md cursor-pointer capitalize"
        >
          reset
        </button>
      )}
    </div>
  );
}
