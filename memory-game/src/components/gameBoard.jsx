import React, { useState } from "react";

export default function GameBoard() {
  const [NoGrids, setNoGrids] = useState(4);
  function onChangeGrids(e) {
    const size = parseInt(e.target.value);
    // console.log(size);

    // if (size >= 2 && size <= 10)
    setNoGrids(size);
  }
  return (
    <div className="w-fit ml-auto mr-auto mt-10 flex flex-col gap-10 justify-center">
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
    </div>
  );
}
