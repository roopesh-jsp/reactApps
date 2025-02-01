import React from "react";
import Button from "./Button";

type catogoriesProps = {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
};
export default function CatogeryPill({
  categories,
  selected,
  onSelect,
}: catogoriesProps) {
  console.log(selected);
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((ele, idx) => (
          <Button
            variant={`${selected === ele ? "dark" : "default"}`}
            className={` py-1 px-3 rounded-lg whitespace-nowrap`}
            key={idx}
            onClick={() => onSelect(ele)}
          >
            {ele}
          </Button>
        ))}
      </div>
    </div>
  );
}
