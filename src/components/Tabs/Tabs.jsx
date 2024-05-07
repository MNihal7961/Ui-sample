import React, { useState } from "react";


const Tabs = () => {
  const [tab, setTab] = useState("food");
  return (
    <div className="mt-3 tabs flex  items-center justify-center gap-4 ">
      <button
        onClick={() => setTab("food")}
        className={`${
          tab === "food" ? "bg-sky-500 text-white" : "bg-black text-white"
        } "text-white font-semibold border border-sky-500 py-2 px-8 hover:bg-sky-500 transition `}
      >
        FOOD
      </button>
      <button
        onClick={() => setTab("drinks")}
        className={`${
          tab === "drinks" ? "bg-sky-500 text-white" : "bg-black text-white"
        } "text-white font-semibold border border-sky-500 py-2 px-8 hover:bg-sky-500 transition `}
      >
        DRINKS
      </button>
      <button
        onClick={() => setTab("brunch")}
        className={`${
          tab === "brunch" ? "bg-sky-500 text-white" : "bg-black text-white"
        } "text-white font-semibold border border-sky-500   py-2 px-8 hover:bg-sky-500 transition `}
      >
        BRUNCH
      </button>
    </div>
  );
};

export default Tabs;
