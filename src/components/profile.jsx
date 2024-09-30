import { useState } from "react";
import "../public/css/profile.css";
import profile from '../public/img/profile.png';


export default function Profile() {
  const [activeTab, setActiveTab] = useState(1);

  const data = {
    tech: [
      {
        id: 1,
        name: "HTML",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        status: "Advanced",
      },
      {
        id: 2,
        name: "CSS",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        status: "Advanced",
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
        status: "Advance",
      },
      {
        id: 4,
        name: "Go",
        imageUrl: "https://cdn.icon-icons.com/icons2/2699/PNG/512/golang_logo_icon_171073.png",
        status: "Advance",
      },
      {
        id: 5,
        name: "Redis",
        imageUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redis_plain_logo_icon_146366.png",
        status: "Beginner",
      },
      {
        id: 6,
        name: "Rust",
        imageUrl: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_rust_icon_130185.png",
        status: "Beginner",
      },
      {
        id: 7,
        name: "NodeJS",
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
        status: "Beginner",
      },
      {
        id: 8,
        name: "Tailwind",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        status: "Advance",
      },
      {
        id: 9,
        name: "Bootstrap",
        imageUrl:
          "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
        status: "Intermediate",
      },
      {
        id: 10,
        name: "ReactJS",
        imageUrl:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        status: "Beginner",
      },
    ],
    tools: [
      {
        id: 1,
        name: "Git",
        imageUrl:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        status: "Version Control",
      },
      {
        id: 2,
        name: "GitHub",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        status: "Git Hosting",
      },
      {
        id: 3,
        name: "NPM",
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
        status: "Package Manager",
      },
      {
        id: 4,
        name: "MySQL",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
        status: "Database",
      },
      {
        id: 5,
        name : "PostgreSQL",
        imageUrl: "https://cdn.icon-icons.com/icons2/2667/PNG/512/folder_postgres_icon_161286.png",
        status: "Database",
      }
    ],
  };

  const { tech, tools } = data;

  return (
    <div className="md:mt-[100px] container mx-auto max-w-7xl">
      <div className="bg-slate-200 dark:bg-[#393e3f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-sky-50 mx-3 mb-5">
        <article data-page="about">
          <header>
            <div className="text-2xl font-bold text-slate-800 dark:text-white mb-5 fadein-bot title-section flex items-center">
              About Me &nbsp;
              <div
                className="h-[1px] w-32 bg-sky-500 dark:bg-sky-400 md:w-96 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration="600"
              ></div>
            </div>
          </header>

          <section className="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center text-slate-800 dark:text-white">
            <div className="flex justify-center">
              <img
                className="w-9/12 rounded-full mb-3 fadein-up"
                src={profile}
                alt="Foto"
              />
            </div>
            <div className="md:w-7/12">
              <p className="mb-3 md:mb-7 fadein-left fadeins-1">
                &nbsp; &nbsp; &nbsp; Hi everyone! My name is Dihanto. I'm a web
                developer with a strong focus on backend technologies,
                particularly in the Go programming language. I started my
                journey in early 2023 and have since expanded my expertise to
                include frontend development, becoming proficient in HTML, CSS,
                and JavaScript.
              </p>
              <p className="mb-3 fadein-left fadeins-2">
                &nbsp; &nbsp; &nbsp; I approach web development as both a craft
                and an art, where functionality and user experience meet
                creativity. My goal is to build websites that are not only
                efficient and user-friendly but also visually engaging, ensuring
                that your brand’s message is delivered in the most compelling
                way possible.
              </p>
            </div>
          </section>
        </article>
      </div>
      <div className="px-5 py-5 md:px-12 md:py-10 text-left text-sky-50 mx-3">
        <article data-page="about">
          <header>
            <div className="text-2xl font-bold text-slate-800 dark:text-white mb-5 fadein-bot title-section flex items-center">
              <div
                className="h-[1px] w-10 bg-sky-500 md:w-20 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration="600"
              ></div>
              &nbsp; Skills
            </div>
          </header>
          <section>
            <div>
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-3 rounded-lg hover:text-slate-800 dark:hover:text-white ${
                      activeTab === 1
                        ? "text-sky-500 bg-sky-500 dark:text-white dark:bg-sky-400 bg-opacity-10"
                        : ""
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Tech Stack
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    className={`inline-block px-4 py-3 rounded-lg hover:text-slate-800 dark:hover:text-white ${
                      activeTab === 2
                        ? "text-sky-500 bg-sky-500 dark:text-white dark:bg-sky-400 bg-opacity-10"
                        : ""
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    Tools
                  </button>
                </li>
              </ul>
            </div>
            <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tech.map((item) => (
                  <div key={item.id}>
                    <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-sky-500 dark:border-sky-400 px-2 py-2 hover:bg-sky-500 dark:hover:bg-sky-400 hover:bg-opacity-10 md:gap-3 lg:px-3">
                      <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                        <img
                          alt={item.name}
                          loading="lazy"
                          width="32"
                          height="32"
                          className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                          src={item.imageUrl}
                        />
                      </div>
                      <div className="flex items-center text-sm md:text-base lg:text-lg">
                        <span className="tech font-medium text-secondary transition-all duration-300 translate-y-0 text-slate-800 dark:text-white">
                          {item.name}
                        </span>
                        <span className="status-tech opacity-0 absolute mt-5 text-[10px] text-sky-500 dark:text-sky-400 transition-all duration-300 md:text-xs lg:text-sm">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tools.map((item) => (
                  <div key={item.id}>
                    <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-sky-500 dark:border-sky-400 px-2 py-2 hover:bg-sky-500 dark:hover:bg-sky-400 hover:bg-opacity-10 md:gap-3 lg:px-3">
                      <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                        <img
                          alt={item.name}
                          loading="lazy"
                          width="32"
                          height="32"
                          className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                          src={item.imageUrl}
                        />
                      </div>
                      <div className="flex items-center text-sm md:text-base lg:text-lg">
                        <span className="tech font-medium text-secondary transition-all duration-300 translate-y-0 text-slate-800 dark:text-white">
                          {item.name}
                        </span>
                        <span className="status-tech opacity-0 absolute mt-5 text-[10px] text-sky-500 dark:text-sky-400 transition-all duration-300 md:text-xs lg:text-sm">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
