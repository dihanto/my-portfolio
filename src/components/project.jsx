import "../public/css/project.css";
import gotoko from "../public/img/gotoko.png";
import goresan from "../public/img/goresan.svg";
import gosnap from "../public/img/gosnap.png";
export default function Project() {
  const projects = [
    {
      id: 1,
      name: "Gosnap",
      imageUrl: gosnap,
      status:
        "A visually captivating platform inspired by Instagram, where moments come to life through photo sharing with friends and followers.",
      tech: "Go, Next.js, Tailwind",
      github: "https://github.com/dihanto/gosnap",
      demo: "https://gosnap-nextjs.vercel.app",
    },
    {
      id: 2,
      name: "Goresan Studio",
      imageUrl: goresan,
      status:
        "An elegant font marketplace designed for creatives. Complete with an intuitive admin panel and seamless PayPal integration, making font management effortless.",
      tech: "Go, Bootstrap, JavaScript",
      github: "",
      demo: "https://goresanstudio.com",
    },
    {
      id: 3,
      name: "Gotoko",
      imageUrl: gotoko,
      status:
        "A powerful e-commerce API, enabling seamless product uploads and management, designed to boost online shopping experiences.",
      tech: "Go",
      github: "https://github.com/dihanto/gotoko",
      demo: "",
    },
  ];

  return (
    <div className="md:mt-[100px] container mx-auto max-w-7xl">
      <div className="px-5 py-5 md:px-12 md:py-10 text-left mx-3">
        <article data-page="about">
          <header>
            <div className="text-2xl font-bold text-slate-800 dark:text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
              <h4>Past Project Experience</h4>
              <h4 className="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-sky-500 dark:from-slate-100 dark:to-sky-400">
                Explore the projects I've worked on so far
              </h4>
            </div>
          </header>
          <section>
            <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 xl:grid-cols-3 fade-zoom-in">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="item-card flex flex-col items-center gap-2 rounded bg-slate-100 dark:bg-[#1e1e1f] hover:bg-slate-50 dark:hover:bg-[#282828] border border-sky-600 dark:border-[#383838] rounded-xl text-slate-800 dark:text-sky-50 md:gap-3 px-5 py-5 lg:px-5"
                >
                  <div className="h-[110px] flex items-center">
                    <img
                      alt={project.name}
                      loading="lazy"
                      src={project.imageUrl}
                      className="drop-shadow-xl rounded w-full object-cover max-h-[100px] fill-black"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                    <div className="title-text font-medium text-secondary">
                      {project.name}
                    </div>
                    <div className="w-full text-left text-[10px] text-slate-800 dark:text-[#c1c1c1] md:text-xs lg:text-sm">
                      {project.status}
                    </div>
                    <div className="w-full mt-4 text-normal text-sm text-left text-sky-500 dark:text-sky-400">
                      {project.tech}
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="flex cursor-pointer items-end gap-2 text-primary">
                        {project.github && project.github !== "null" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            title="View github repository"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        )}
                        {project.demo && project.demo !== "null" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            title="View finished project"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="18"
                              width="18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
