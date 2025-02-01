import { Bell, Menu, Mic, MoveLeft, Search, Upload, User } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div
      id="Navbar"
      className="flex justify-between gap:10 lg:gap-20 py-2 px-3 mb-4 "
    >
      <div
        className={`md:flex gap-4 items-center  ${
          showSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size={"icon"}>
          <Menu />
        </Button>
        <a href="/">LOGO.</a>
      </div>
      <div
        className={`flex-grow gap-4 justify-center  ${
          showSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showSearch && (
          <Button
            size={"icon"}
            onClick={() => setShowSearch(false)}
            className="md:hidden flex"
          >
            <MoveLeft />
          </Button>
        )}
        <div className=" flex flex-grow max-w-[400px] ">
          <input
            type="search"
            placeholder="search"
            className="w-full border border-secondary-border px-3 py-1 rounded-l-full outline-none focus:border-blue-500"
          />
          <Button
            variant="default"
            size={"default"}
            className="px-4 py-1 rounded-r-full border border-secondary-border border-l-0"
          >
            <Search />
          </Button>
        </div>
        <Button size={"icon"}>
          <Mic />
        </Button>
      </div>
      <div
        className={`gap-2 md:gap-4 md:flex ${showSearch ? "hidden" : "flex"}`}
      >
        <Button
          variant="ghost"
          size={"icon"}
          className="md:hidden"
          onClick={() => setShowSearch(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size={"icon"} className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size={"icon"}>
          <Upload />
        </Button>
        <Button variant="ghost" size={"icon"}>
          <Bell />
        </Button>
        <Button variant="ghost" size={"icon"}>
          <User />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
