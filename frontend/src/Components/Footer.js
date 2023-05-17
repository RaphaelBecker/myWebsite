import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-16 bg-gradient-to-tr from-gray-700 to-gray-800 text-gray-400">
        <div className="  text-center">
          <p className="text-gray-600">
            © 2023 Made by me with{" "}
            {<i className="fa-sharp fa-solid fa-heart text-red-700"></i>}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
