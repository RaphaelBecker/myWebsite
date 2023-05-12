import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-tr from-gray-700 to-gray-800 text-gray-400 py-8">
        <div className="container mx-auto p-8 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus velit eget sapien faucibus aliquam. Sed euismod erat sit
              amet tellus gravida.
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-500 leading-loose">
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              555-555-5555
              <br />
              email@example.com
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="list-reset">
              <li>
                <a href="#home" className="text-gray-500 hover:scale-110">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-gray-100">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-500 hover:text-gray-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-gray-100"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Social Media</h4>
            <ul className="list-reset">
              <li>
                <a
                  href="#facebook"
                  className="text-gray-500 hover:text-gray-100"
                >
                  <i className="fab fa-facebook-square mr-2"></i>Facebook
                </a>
              </li>
              <li>
                <a
                  href="#twitter"
                  className="text-gray-500 hover:text-gray-100"
                >
                  <i className="fab fa-twitter-square mr-2"></i>Twitter
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  className="text-gray-500 hover:text-gray-100"
                >
                  <i className="fab fa-instagram-square mr-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-8 text-center">
          <p className="text-gray-600">
            © 2023 Made by me with{" "}
            {<i class="fa-sharp fa-solid fa-heart text-red-700"></i>} All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
