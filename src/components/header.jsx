import { useState } from "react";
import Navbar from "./navbar";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="container">
      <div className="px-4">
        <a href="#" className="font-bold text-lg text-slate-900 py-5">
          Dihanto
        </a>
      </div>
      <div className="flex items-center px-4">
        <button
          type="button"
          className="block absolute right-4 md:hidden"
          onClick={handleClick}
        >
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 ${
              isClicked ? "rotate-45" : ""
            } transition duration-200 ease-in-out origin-top-left `}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 ${
              isClicked ? "scale-0" : ""
            } transition duration-300 ease-in-out`}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 ${
              isClicked ? "-rotate-45" : ""
            } transition duration-300 ease-in-out  origin-bottom-left`}
          ></span>
        </button>
      </div>
      <Navbar isClick={isClicked} />
    </div>
  );
}
