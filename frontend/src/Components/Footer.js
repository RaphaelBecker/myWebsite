import React from "react";

const Footer = ({ scrollToRef }) => {
  return (
    <footer className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 via-gray-850 to-gray-800 text-cyan-200">
      <div>
        <h3 className="text-lg font-semibold">Raphael</h3>
        <p className="mt-1">Software Engineer</p>
      </div>

      <div className="relative h-16 w-16 m-auto">
        <div
          className="absolute inset-0 flex items-center justify-center animate-bounce shadow-sm"
          onClick={() => scrollToRef("homeRef")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-10 w-10 text-cyan-200 mx-auto hover:scale-125"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </div>
      </div>

      <div>
        <p className="text-sm text-cyan-200">
          © 2023 Made with <span className="text-red-500">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
