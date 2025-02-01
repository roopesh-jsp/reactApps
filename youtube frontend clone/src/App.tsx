import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CatogeryPill from "./components/CatogeryPill";
// import categories from "./data/data";
import { categories } from "./data/data.ts";

function App() {
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <div>sidebar</div>
        <div className="sticky top-0 pb-4 z-10">
          <CatogeryPill
            categories={categories}
            selected={selectedCat}
            onSelect={setSelectedCat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
