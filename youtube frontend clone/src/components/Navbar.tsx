import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div
      id="Navbar"
      className="flex justify-between gap:10 lg:gap-20 py-2 px-3 mb-4"
    >
      <div className="flex gap-4 items-center">
        <Button variant="ghost" size={"icon"}>
          <Menu />
        </Button>
        <a href="/">LOGO.</a>
      </div>
      <div className="flex gap-4">
        <div className="flex  flex-grow max-w-[500px] ">
          <input
            type="search"
            placeholder="search"
            className="flex-grow w-[100%] border border-secondary-border rounded-l-full px-3"
          />
          <Button variant="default" size={"default"}>
            <Search />
          </Button>
        </div>
        <Button variant="ghost" size={"icon"}>
          <Mic />
        </Button>
      </div>
      <div className="flex gap-4">
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
