export default function Project() {
  return (
    <div className="my-10 mb-80 ">
      <h1 className="text-4xl font-bold ml-20  md:ml-[690px]">Project</h1>
      <div className="flex items-stretch mx-14 mt-14">
        <div className="w-1/3 text-center mx-7 border-2 border-black p-3">
          <a href="https://github.com/dihanto/gosnap"> Gosnap</a>
          <p>
            GoSnap is a powerful API built using the Go programming language
            that enables users to seamlessly upload, like, and comment on
            photos. With GoSnap, users can easily share their precious moments
            and interact with each others photo uploads through a robust and
            user-friendly interface.
          </p>
        </div>
        <div className="w-1/3 text-center mx-7 border-2 border-black p-3">
          <a href="https://github.com/dihanto/go-toko"> Gotoko</a>
          <p>
            go-toko is a simple e-commerce API written in Go. It provides
            essential features for managing products, customers, and orders for
            online retailers.
          </p>
        </div>
        <div className="w-1/3 text-center mx-7 border-2 border-black p-3">
          <a href="https://github.com/dihanto/gosnap-nextjs">
            Gosnap Front End
          </a>
          <p>
            GoSnap Front End is the front-end code written using Next.js, a
            React-based framework. It handles the user interface of the web
            application, leveraging Next.js features for efficient development,
            including server-side rendering and automatic code splitting.
          </p>
        </div>
      </div>
    </div>
  );
}
