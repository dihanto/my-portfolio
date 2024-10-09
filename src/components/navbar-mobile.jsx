import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
    return (
        <footer className="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-opacity-80 backdrop-blur-md backdrop-opacity-90 bg-slate-100 dark:bg-[#131313]">
        <nav className="flex justify-around py-4 text-xs">
          <Link  to="/" className="text-slate-800 hover:text-slate-400 dark:text-gray-200 dark:hover:text-white ">Home</Link >
          <Link  to="/about" className="text-slate-800 hover:text-slate-400 dark:text-gray-200 dark:hover:text-white ">About</Link >
          <Link  to="/project" className="text-slate-800 hover:text-slate-400 dark:text-gray-200 dark:hover:text-white ">Portfolio</Link >
        </nav>
      </footer>
    )
}