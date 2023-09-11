import React from "react";

export const Projects = () => {
  return (
    <>
      <section className="body-font mx-6 lg:ml-20">
        <div className="mb-8 font-Cinzel text-4xl underline decoration-green-500 underline-offset-8 ">
          Projects
        </div>
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="mb-10 border-b border-gray-200 pb-10 md:mb-0 md:w-1/2 md:border-b-0 md:border-r md:py-8 md:pr-12">
            <h1 className="title-font mb-2 text-2xl font-medium  sm:text-3xl">
              1#{" "}
              <span className=" font-SyneMono text-4xl underline decoration-red-600 underline-offset-4">
                SocioCouch
              </span>{" "}
              an Social Media Web Application
            </h1>
            <p>
              {"I'm"} Ex-Employee of{" "}
              <a
                href="https://www.aegissoftwares.com/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="cursor-pointer font-Caveat text-2xl underline decoration-green-500 underline-offset-2"
              >
                {" "}
                Aegis Software{" "}
              </a>{" "}
              on SocioCouch project that all about social media platform with
              multiple language {'["hindi"], ["English"], ["Gujarati"]'}{" "}
              supported with more functionality.
            </p>
            <ul className="ml-8 list-disc">
              <li>
                Implemented JWT Authentication in APIs and Google OAuth using
                Reactjs.
              </li>
              <li>
                Created{" "}
                <span className="underline decoration-yellow-400 underline-offset-2">
                  test cases for REST APIs{" "}
                </span>{" "}
                and Debugging application.
              </li>
              <li>
                Used{" "}
                <span className="underline decoration-yellow-400 underline-offset-2">
                  {" "}
                  FFMPEG for video and image compression{" "}
                </span>{" "}
                during media uploads.
              </li>
              <li>
                Added advanced features like{" "}
                <span className="underline decoration-yellow-400 underline-offset-2">
                  {" "}
                  indexing, transaction rollback, logging, and WebSockets{" "}
                </span>{" "}
                for real-time communication.
              </li>
              <li>Designed SQL schema using Django ORM.</li>
              <li>
                Utilized Docker to containerize the application. Implemented
                caching using Redis.
              </li>
            </ul>

            <div className="mt-4 inline-flex items-center text-indigo-500">
              Unfortunately Project Was Shutdown So I {"Can't"} Give you Live
              Link
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font mb-3 text-lg font-semibold tracking-wider ">
              Tech Used ⚙
            </h2>
            <nav className="-mb-1 flex list-none flex-wrap">
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Django & DRF</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">ReactJs</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">PostgreSQL & Redis</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">WebSockets </a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">GitLab</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Docker</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Nginx</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">FFmpeg</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Kafka | More</a>
              </li>
            </nav>
          </div>
        </div>
        <div className="my-4 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
          <span className="dark: absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900">
            🔮
          </span>
        </div>
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="mb-10 border-b border-gray-200 pb-10 md:mb-0 md:w-1/2 md:border-b-0 md:border-r md:py-8 md:pr-12">
            <h1 className="title-font mb-2 text-2xl font-medium  sm:text-3xl">
              2#{" "}
              <span className=" font-SyneMono text-4xl underline decoration-red-600 underline-offset-4">
                Vendora
              </span>{" "}
              an Social Media Web Application{" "}
              <a
                href="https://github.com/MohdHassanAnsari/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="cursor-pointer font-Caveat text-3xl underline decoration-green-500 underline-offset-2"
              >
                {" "}
                Created By MySelf{" "}
              </a>
            </h1>
            <p className="text-base leading-relaxed">
              {"I'm "} creating that project to shape my skills that project
              will contains everything that Software Developer Should Know.
            </p>
            <ul className="ml-8 list-disc">
              <li>
                {"I'm"} trying to build project that content{" "}
                <span className="underline decoration-yellow-400 underline-offset-2">
                  {" "}
                  All treading Full-Stack Tech with DevOps.
                </span>{" "}
                Like I will use PostgreSQL for more sensitive data like User
                details, product description titles pricing and for more product
                details like each part details, reviews Comments others will
                store in mongoDB and I will ad many functionality as {
                  "it’s"
                }{" "}
                required. And will deploy on aws will use{" "}
                <span className="underline decoration-yellow-400 underline-offset-2">
                  S3 to store media{" "}
                </span>{" "}
                and deploy on lambda.
              </li>
              <li>For the Front-end {"I'm"} Using ReactJs Tailwind CSS.</li>
              <li>For the Back-end {"I'm"} Using DRF, ExpressJs.</li>
              <li>For the Database {"I'm"} Using PostgreSQL, MongoDB,</li>
              <li>Designed SQL schema using Django ORM.</li>
            </ul>
            <a
              href="https://github.com/MohdHassanAnsari"
              className="mt-4 inline-flex items-center text-indigo-500 underline underline-offset-4 "
            >
              GitHub Repo {"->"}
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font mb-3 text-lg font-semibold tracking-wider ">
              Tech Used ⚙
            </h2>
            <nav className="-mb-1 flex list-none flex-wrap">
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">DRF & ExpressJs</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">ReactJs</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">PostgreSQL & MongoDB</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Docker & AWS </a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">GitHub</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">JWT & OAuth</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Nginx</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Tailwind CSS</a>
              </li>
              <li className="mb-1 w-1/2 lg:w-1/3">
                <a className=" hover:">Redis | More</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
