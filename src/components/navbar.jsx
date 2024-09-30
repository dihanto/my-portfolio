import { Link } from "react-router-dom";
import "../public/css/style.css";
import dark from "../public/img/dark.png";
import light from "../public/img/light.png";

export default function Navbar({
  onToggleDarkMode,
  isDarkMode,
  onActiveLink,
  activeLink,
}) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col">
      <nav className="max-w-7xl px-8 top-0 md:fixed z-[50] w-screen backdrop-blur-md bg-slate-100 dark:bg-[#121212] bg-opacity-80 py-5">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <button className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap fadein-bot text-sky-600 hover:text-sky-900 dark:hover:text-sky-300">
              Dihanto&lt;/&gt;
            </span>
          </button>

          <div className="md:order-2 flex gap-4 items-center h-full">
            <div className="flex fadein-bot">
              <button
                  className="fadein-bot hover:bg-gray-50 md:hover:bg-transparent block pl-3 pr-4 py-2"
                  onClick={onToggleDarkMode}
                >
                  <img src={isDarkMode ?  dark : light } alt="Dark Mode" className="w-9 rounded-full my-auto" />
                </button>
            </div>
            <div className="flex  fadein-bot">
              <a href="https://github.com/dihanto">
                <img
                  src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                  alt="GitHub"
                  className="w-9 rounded-full my-auto"
                />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center w-full md:w-auto md:order-1">
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm font-medium text-slate-800">
              <li>
              <Link
                to="/"
                onClick={() => onActiveLink("/")}
                className={`fadein-bot hover:bg-gray-50 md:hover:bg-transparent block pl-3 pr-4 py-2 ${
                  activeLink === "/"
                    ? "text-slate-50 dark:text-slate-50 dark:hover:text-slate-50 border-b-4 border-blue-400 text-slate-900"
                    : "dark:text-slate-600 dark:md:hover:text-slate-300"
                }`}
                aria-current={activeLink === "/" ? "page" : undefined}
              >
                Home
              </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => onActiveLink("/about")}
                  className={`fadein-bot hover:bg-gray-50 md:hover:bg-transparent block pl-3 pr-4 py-2 text-slate-700 md:hover:text-slate-900 ${
                    activeLink === "/about"
                      ? "text-slate-50 dark:text-slate-50 dark:hover:text-slate-50 border-b-4 border-blue-400"
                      : "dark:text-slate-600 dark:md:hover:text-slate-300"
                  }`}
                  aria-current={activeLink === "/about" ? "page" : undefined}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  onClick={() => onActiveLink("/project")}
                  className={`fadein-bot hover:bg-gray-50 md:hover:bg-transparent block pl-3 pr-4 py-2 text-slate-700 md:hover:text-slate-900 ${
                    activeLink === "/project"
                      ? "text-slate-50 dark:text-slate-50 dark:hover:text-slate-50 border-b-4 border-blue-400"
                      : "dark:text-slate-600 dark:md:hover:text-slate-300"
                  }`}
                  aria-current={activeLink === "/project" ? "page" : undefined}
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
