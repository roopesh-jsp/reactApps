import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [palyerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    if (isEditing) {
      setIsEditing(false);
    } else setIsEditing(true);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={palyerName} onChange={handleChange}></input>
        ) : (
          <span className="player-name"> {palyerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
