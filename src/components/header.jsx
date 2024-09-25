import { useState } from "react";
import Navbar from "./navbar";

export default function Header({ onToggleDarkMode, isDarkMode }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="container dark:bg-slate-800 sticky top-0 z-50 bg-slate-50">
      <div className="pl-2 pb-5 pt-5 md:pt-7 md:pb-7 md:pl-11">
        <a href="#" className="font-bold text-lg text-slate-900 dark:text-white">
          Dihanto
        </a>
      </div>
      <div className="flex items-center px-4">
        <button
          type="button"
          className="block absolute right-4 top-4 md:hidden"
          onClick={handleClick}
        >
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 dark:bg-stone-200 ${
              isClicked ? "rotate-45" : ""
            } transition duration-200 ease-in-out origin-top-left `}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 dark:bg-stone-200 ${
              isClicked ? "scale-0" : ""
            } transition duration-300 ease-in-out`}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-slate-700 dark:bg-stone-200 ${
              isClicked ? "-rotate-45" : ""
            } transition duration-300 ease-in-out  origin-bottom-left`}
          ></span>
        </button>
      </div>
      <Navbar isClick={isClicked}  onToggleDarkMode={onToggleDarkMode} isDarkMode={isDarkMode}/>
    </div>
  );
}
