import { ResumeButton } from "../buttons/ResumeButton";
import { GitHubSvg, LinkedInSvg } from "../svgs/LinkedIn";

export const Header = () => {
  return (
    <div>
      <section className="body-font mt-10 text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="/HeaderImg.png"
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font text-gradient-animation mb-1 font-Comfortaa text-5xl font-medium  sm:text-5xl">
              Full-Stack Developer.
            </h1>
            <p className="leading-relaxed text-gray-200 underline decoration-green-500 underline-offset-4 ">
              {"I'm "}a passionate Full Stack web App developer having an
              experience of developing Full Stack web applications with Python,
              Django, React.js, Cloud Technologies and containerized
              applications.
            </p>
            <p className="w-full pb-8 font-Caveat text-2xl text-white underline decoration-yellow-400 underline-offset-8">
              - Hassan Ansari
            </p>
            <span className="mb-6 md:hidden">
              <ResumeButton>Resume</ResumeButton>
            </span>
            <div className="flex w-full items-end justify-center md:justify-start"></div>
            <div className="flex md:flex-col lg:flex-row">
              <a
                href="https://www.linkedin.com/in/mdhassan413/"
                className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1 hover:bg-gray-200 focus:outline-none"
              >
                <LinkedInSvg />
                <span className="ml-2 flex flex-col items-start leading-none">
                  <span className="title-font font-medium">
                    {"Don't"} be stranger!
                  </span>
                </span>
              </a>
              <a
                href="https://github.com/MohdHassanAnsari"
                className="ml-4 mt-0 inline-flex items-center rounded-lg bg-gray-100 px-3 py-1 hover:bg-gray-200 focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0"
              >
                <GitHubSvg />
                <span className="ml-2 flex flex-col items-start leading-none">
                  <span className="title-font font-medium">
                    Projects timelines
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
