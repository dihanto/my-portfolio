import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
    return (
        <footer className="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
        <nav className="flex justify-around py-4 text-xs">
          <Link  to="/" className="text-gray-300 hover:text-white">Home</Link >
          <Link  to="/about" className="text-gray-300 hover:text-white">About</Link >
          <Link  to="/project" className="text-gray-300 hover:text-white">Portfolio</Link >
        </nav>
      </footer>
    )
}