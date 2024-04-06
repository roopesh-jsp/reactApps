import Button from "./Button.jsx";
import Project from "./Project";

export default function Sidebar({ onAdd, projects, onSelect, selected }) {
  return (
    <aside className="bg-stone-900 w-1/3 text-stone-100 px-3 py-16 rounded-r-xl  md:w-72  ">
      <h2 className="uppercase font-medium mx-3 ">your Projects</h2>
      <Button onClick={onAdd}>+ project</Button>
      <ul className="my-10">
        {projects.map((item) => {
          let classes =
            "w-full text-left font-semibold py-1 px-3 rounded m-2 hover:bg-stone-700 ";
          if (item.id === selected) {
            classes += " bg-stone-700";
          } else {
            classes += " ";
          }
          return (
            <li
              key={item.id}
              className={classes}
              onClick={() => onSelect(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
