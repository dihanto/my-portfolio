// eslint-disable-next-line react/prop-types
export default function Navbar({ isClick }) {
  console.log(isClick);
  return (
    <div
      className={`${
        isClick ? "block" : "hidden"
      } absolute py-5 bg-white shadow-lg rounded-lg max-w-[230px] right-4 top-12 lg:block lg:right-9 lg:top-4 lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none z-10 transition duration-200 ease-in-out`}
    >
      <ul className="block md:flex font-semibold">
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300"
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300"
          >
            Profile
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300"
          >
            Project
          </a>
        </li>
        <li className="group">
          <a
            href="#"
            className="text-sm text-slate-800 py-2 mx-8 flex group-hover:text-sky-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
