export default function Project() {
  return (
    <div className="py-10 pb-80 bg-slate-50 dark:bg-slate-800" id="project">
      <h1 className="text-4xl font-bold mx-5  md:ml-[690px] mb-9 text-slate-900 dark:text-white">Project</h1>
      <div className="md:flex items-stretch md:mt-10  md:h-[320px]">
        <div className="mx-14 md:w-1/3 h-full border-2 border-slate-500 px-5 md:py-10  rounded-2xl mb-7">
          <a
            href="https://github.com/dihanto/gosnap"
            className=" md:text-center mx-7 text-slate-900 dark:text-white"
          >
            <h2 className="text-lg font-semibold mb-3"> Gosnap</h2>
            <p className="text-left">
              GoSnap is a powerful API built using the Go programming language
              that enables users to seamlessly upload, like, and comment on
              photos. With GoSnap, users can easily share their precious moments
              and interact with each others photo uploads through a robust and
              user-friendly interface.
            </p>
          </a>
        </div>
        <div className="mx-14 md:w-1/3 h-full border-2 border-slate-500 px-5 py-10 rounded-2xl mb-7">
          <a
            href="https://github.com/dihanto/go-toko"
            className=" md:text-center mx-7 text-slate-900 dark:text-white"
          >
            <h2 className="text-lg font-semibold mb-3"> Gotoko</h2>
            <p className="text-left ">
              go-toko is a simple e-commerce API written in Go. It provides
              essential features for managing products, customers, and orders
              for online retailers.
            </p>
          </a>
        </div>
        <div className="mx-14 md:w-1/3 h-full border-2 border-slate-500 px-5 py-10 rounded-2xl">
          <a
            href="https://github.com/dihanto/gosnap-nextjs"
            className=" text-center mx-7 text-slate-900 dark:text-white"
          >
            <h1 className="text-lg font-semibold mb-3">Gosnap Front End</h1>
            <p className="text-left">
              GoSnap Front End is the front-end code written using Next.js, a
              React-based framework. It handles the user interface of the web
              application, leveraging Next.js features for efficient
              development, including server-side rendering and automatic code
              splitting.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
