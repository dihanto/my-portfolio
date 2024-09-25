// eslint-disable-next-line react/prop-types
export default function Navbar({ isClick, onToggleDarkMode, isDarkMode }) {
  const handleSmoothScroll = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${
        isClick ? "block" : "hidden"
      } absolute shadow-lg rounded-lg max-w-[230px] right-4 top-12 lg:block lg:right-9 lg:top-4 lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none z-10 transition duration-200 ease-in-out`}
    >
      <ul className="block md:flex font-semibold text-slate-800 dark:bg-slate-800">
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300 dark:text-white dark:group-hover:text-sky-200" 
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300  dark:text-white dark:group-hover:text-sky-200"
          >
            Profile
          </a>
        </li>
        <li className="group">
          <a
            href="#project"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300  dark:text-white dark:group-hover:text-sky-200"
            onClick={handleSmoothScroll}
          >
            Project
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300  dark:text-white dark:group-hover:text-sky-200"
          >
            Contact
          </a>
        </li>
        <li className="group">
          <button
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300  dark:text-white dark:group-hover:text-sky-200"
            onClick={onToggleDarkMode}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </div>
  );
}
