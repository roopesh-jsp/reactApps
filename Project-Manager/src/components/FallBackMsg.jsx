import image from "../assets/no-projects.png";
import Button from "./Button.jsx";
export default function FallBackMsg({ onAdd }) {
  return (
    <div className="flex flex-col  items-center my-20 w-full">
      <img src={image} className="w-28" />
      <p className=" text-md font-semibold uppercase mt-5">
        no project selected
      </p>
      <p className="mt-0 ">choose one or create a new project</p>
      <p className="my-5">
        <Button onClick={onAdd}>create new project</Button>
      </p>
    </div>
  );
}
