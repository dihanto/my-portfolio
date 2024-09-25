import hero from "../public/hero.png";
import project1 from "../public/40626.jpg";
import project2 from "../public/5643919.jpg";
import project3 from "../public/7533464.jpg";
export default function Hero() {
  return (
    <>
      <div className="pt-6 lg:pt-10 dark:bg-slate-800 bg-slate-50">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full self-end relative md:w-[60%] md:order-2 font-semibold">
              <p className="bg-sky-400 text-white z-20 w-40 rounded-full text-xs text-center right-2 top-32 px-3 py-1.5 absolute shadow-sm md:right-56 md:top-60">
                Go{" "}
              </p>
              <p className="bg-blue-500 text-white z-20 w-44 rounded-full text-xs text-center left-1 top-56 px-3 py-1.5 absolute shadow-sm md:left-44 md:top-96">
                React{" "}
              </p>
              <p className="bg-yellow-400 text-white z-20 w-48 rounded-full text-xs text-center left-44 top-72 px-3 py-1.5 absolute shadow-sm md:left-[440px] md:top-[410px]">
                Javascript{" "}
              </p>
              <img
                src={hero}
                alt="hero"
                className="max-w-full mx-auto scale-75 z-2"
              />
            </div>
            <div className="w-full self-center md:ml-8 px-4 md:w-[40%] md:mt-64">
              <h1 className="text-3xl font-bold md:text-5xl dark:text-white text-slate-900">
                Coding for life
              </h1>
              <p className="text-sm text-slate-600 py-4 dark:text-white text-slate-900">
                Passionate coder fluent in Go, React, and JavaScript.
                Transforming innovative ideas into seamless, functional
                solutions. Let my code speak for itself.
              </p>
              <div className="ml-[196px] md:ml-4 flex relative text-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-slate-900 bg-gradient-to-r from-sky-400 to-sky-200 dark:from:sky-600 dark:to-sky-400 rounded-full pl-4 pr-14 py-[10px] my-3"
                >
                  Hire Me!
                  <div className="w-9 h-9 rounded-full z-10 bg-slate-700 dark:bg-slate-100 my-auto top-[14.5px] left-[88px] absolute">
                    <span className="text-white dark:text-slate-900 absolute bottom-2 left-3">
                      →
                    </span>
                  </div>
                </a>
              </div>
              <div className="flex mb-20 relative md:ml-1 ml-44">
                <img
                  src={project1}
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-5"
                />
                <img
                  src={project2}
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-10 z-10"
                />
                <img
                  src={project3}
                  alt="javascript"
                  className="w-7 h-7 rounded-full border border-white absolute left-[60px] z-20"
                />
                <a href="#" className="absolute left-[90px] mx-0">
                  <span className="text-base font-semibold ml-3 text-slate-900 dark:text-white">10+</span>
                  <span className="text-base text-slate-600 dark:text-white">project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
