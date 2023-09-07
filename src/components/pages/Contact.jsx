import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [isSubmit, setSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jz7pwd",
        "template_1p7v3fi",
        form.current,
        "0StJlcaAx61SU1Cya",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmit(true);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <section className="body-font ">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-1 text-2xl font-medium  sm:text-3xl">
              Contact Me
            </h1>
            <hr className="mx-auto my-1 h-1 w-48 rounded border-0 bg-white dark:bg-green-700 md:my-3" />
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label htmlFor="name" className="text-sm leading-7 ">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      className="w-full rounded border border-white bg-white  px-3 py-1 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label htmlFor="email" className="text-sm leading-7 ">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      className="w-full rounded border border-white bg-white  px-3 py-1 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label htmlFor="message" className="text-sm leading-7 ">
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
                  <button
                    disabled={isSubmit}
                    type="submit"
                    value="Send"
                    className="mx-auto flex rounded border-0 bg-indigo-600 px-8 py-2 text-lg text-black hover:bg-indigo-500 focus:outline-none disabled:bg-gray-700 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-8 w-full border-t border-white p-2 pt-8 text-center">
              <a
                href="mailto:ah1769413@gmail.com"
                className=" underline decoration-red-700 underline-offset-4"
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
      </section>
    </>
  );
};
