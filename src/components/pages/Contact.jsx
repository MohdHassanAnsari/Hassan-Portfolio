import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="body-font text-white">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-1 text-2xl font-medium text-white sm:text-3xl">
              Contact Me
            </h1>

            <hr className="mx-auto my-1 h-1 w-48 rounded border-0 bg-white dark:bg-green-700 md:my-3" />

            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-white bg-white  px-3 py-1 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border border-white bg-white  px-3 py-1 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="h-32 w-full resize-none rounded border border-white bg-white  px-3 py-1 text-base leading-6 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-600 px-8 py-2 text-lg text-black hover:bg-indigo-500 focus:outline-none">
                  Submit
                </button>
              </div>
              <div className="mt-8 w-full border-t border-white p-2 pt-8 text-center">
                <a
                  href="mailto:ah1769413@gamil.com"
                  className="text-white underline decoration-red-700 underline-offset-4"
                >
                  ah1769413@gmail.com
                </a>
                <p className="my-5 leading-normal">
                  Thane Maharashtra,
                  <br />
                  India 421302
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
