import hero from "../public/hero.png";
export default function Hero() {
  return (
    <>
      <div className="pt-6 lg:pt-20">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full self-end relative md:w-[60%] md:order-2 font-semibold">
              <img
                src={hero}
                alt="hero"
                className="max-w-full mx-auto scale-75 z-50"
              />
              <p className="bg-sky-400 text-white -z-20 w-40 rounded-full text-xs text-center right-2 top-32 px-3 py-1.5 absolute  shadow-sm md:right-56 md:top-60">
                Go{" "}
              </p>
              <p className="bg-blue-500 text-white w-44 rounded-full text-xs text-center left-1 top-56 px-3 py-1.5 absolute  shadow-sm md:left-44 md:top-96">
                React{" "}
              </p>
              <p className="bg-yellow-400 text-white w-48 rounded-full text-xs text-center left-44 top-72 px-3 py-1.5 absolute  shadow-sm md:left-[440px] md:top-[410px]">
                Javascript{" "}
              </p>
              <span className="absolute -z-10 -top-4 left-9 scale-75 md:left-80 md:scale-y-110 md:scale-x-100 md:top-2">
                <svg
                  viewBox="0 0 200 200"
                  width="300"
                  height="300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#38bdf8"
                    d="M63.5,-49.6C76.7,-34.1,77.9,-8,72,15.8C66,39.6,53,61.2,33.5,71.2C14.1,81.2,-11.8,79.6,-27,67.8C-42.1,55.9,-46.7,33.8,-52.1,11.5C-57.5,-10.8,-63.8,-33.3,-55.2,-47.7C-46.7,-62.2,-23.3,-68.5,0.9,-69.2C25.2,-69.9,50.3,-65.1,63.5,-49.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
              <span className="absolute -z-10 top-20 left-20 rotate-45 scale-75 md:scale-110 md:scale-y-125 md:left-56 md:top-20">
                <svg
                  viewBox="0 0 200 200"
                  width="300"
                  height="300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#bef264"
                    d="M63.5,-49.6C76.7,-34.1,77.9,-8,72,15.8C66,39.6,53,61.2,33.5,71.2C14.1,81.2,-11.8,79.6,-27,67.8C-42.1,55.9,-46.7,33.8,-52.1,11.5C-57.5,-10.8,-63.8,-33.3,-55.2,-47.7C-46.7,-62.2,-23.3,-68.5,0.9,-69.2C25.2,-69.9,50.3,-65.1,63.5,-49.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full self-center md:ml-8 px-4 md:w-[40%] md:mt-64">
              <h1 className="text-3xl font-bold md:text-5xl">
                Coding for life
              </h1>
              <p className="text-sm text-slate-600 py-4">
                Passionate coder fluent in Go, React, and JavaScript.
                Transforming innovative ideas into seamless, functional
                solutions. Let my code speak for itself.
              </p>
              <div className="ml-[196px] md:ml-4 flex relative text-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-slate-900 bg-gradient-to-r from-sky-400 to-sky-200 rounded-full pl-4 pr-14 py-[10px] my-3"
                >
                  Hire Me!
                  <div className="w-9 h-9 rounded-full z-10 bg-slate-700 my-auto top-[14.5px] left-[88px] absolute">
                    <span className="text-white absolute bottom-2 left-3">
                      →
                    </span>
                  </div>
                </a>
              </div>
              <div className="flex mb-20 relative md:ml-1 ml-44">
                <img
                  src="https://source.unsplash.com/200x200?javascript"
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-5"
                />
                <img
                  src="https://source.unsplash.com/200x200?javascript"
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-10 z-10"
                />
                <img
                  src="https://source.unsplash.com/200x200?javascript"
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-[60px] z-20"
                />
                <a href="#" className="absolute left-[90px] mx-0">
                  <span className="text-base font-semibold ml-3">10+</span>
                  <span className="text-base text-slate-600">project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
