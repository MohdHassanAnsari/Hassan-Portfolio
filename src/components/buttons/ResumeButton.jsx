import React from "react";

export const ResumeButton = (Props) => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1USr_re9dEXBeM5Y8yWgKU0nVg9Say1cH"
      download="your-resume.pdf"
      className="mr-4 flex items-center justify-center rounded border-0 bg-yellow-500 px-4 py-1 text-base text-black duration-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 active:bg-yellow-700 md:ml-8 md:mr-4 md:mt-0 md:flex-wrap"
    >
      <span>{Props.children}</span>
      <span>
        <svg
          className="pl-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
        </svg>
      </span>
    </a>
  );
};
