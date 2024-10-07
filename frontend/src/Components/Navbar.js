import { Nav } from "react-bootstrap";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery } from "react-responsive";

const GradientTextLeft = ({ children }) => (
  <div
    style={{
      background: "linear-gradient(to right, #6eface 0%, #66f705 100%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      scale: "1",
      //textShadow: "1px 1px 2px #000000",
    }}
  >
    {children}
  </div>
);

const GradientTextRight = ({ children }) => (
  <div
    style={{
      background: "linear-gradient(to right, #4bfae5 0%, #05ebf7 50%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      scale: "1",
      //textShadow: "1px 1px 2px #000000",
    }}
  >
    {children}
  </div>
);

function Header({ scrollToRef }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const liStyle = "block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-white";

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);

  console.log(isNavOpen);

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex text-2xl xl:text-3xl sm:flex-wrap items-center justify-start md:justify-between mx-auto pt-8 pl-8 md:px-8 2xl:px-0">
        <GradientTextLeft>
          <Nav className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Nav.Link
              className="pr-4  hover:text-white"
              href="https://www.linkedin.com/in/raphael-becker-832690173/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Nav.Link>
            <Tooltip title="available soon">
              <Nav.Link className="px-4  hover:text-white" href="#instagram">
                <i
                  className="fa-brands fa-instagram"
                  data-tip="Follow us on Instagram"
                  data-for="instagram-tooltip"
                ></i>
              </Nav.Link>
            </Tooltip>
            <Tooltip title="available soon">
              <Nav.Link className="px-4   hover:text-white" href="#twitter">
                <i className="fa-brands fa-twitter"></i>
              </Nav.Link>
            </Tooltip>
            <Tooltip title="available soon">
              <Nav.Link className="px-4   hover:text-white" href="#youtube">
                <i className="fa-brands fa-youtube"></i>
              </Nav.Link>
            </Tooltip>
            <Nav.Link
              className="px-4  hover:text-white"
              href="https://github.com/RaphaelBecker"
            >
              <i className="fa-brands fa-github"></i>
            </Nav.Link>
          </Nav>
        </GradientTextLeft>

        <div>
          <button
            onClick={handleNavToggle}
            type="button"
            className="inline-flex items-start p-2 ml-3 text-sm text-spring-green rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="navbar-default"
            style={{ display: isNavOpen ? "block" : "none" }}
          >
            {isSmallScreen && (
              <Nav>
                <div className="flex text-5xl flex-wrap flex-col pt-6">
                  <div className="flex-row">
                    <GradientTextLeft>
                      <Nav.Link
                        className="p-2 md:p-8 hover:text-white"
                        href="https://www.linkedin.com/in/raphael-becker-832690173/"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Nav.Link>

                      <Nav.Link
                        className="p-2 md:p-8 hover:text-white"
                        href="#instagram"
                      >
                        <i
                          className="fa-brands fa-instagram"
                          data-tip="Follow us on Instagram"
                          data-for="instagram-tooltip"
                        ></i>
                      </Nav.Link>

                      <Nav.Link
                        className="p-2 md:p-8 hover:text-white"
                        href="#twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Nav.Link>

                      <Nav.Link
                        className="p-2 md:p-8 hover:text-white"
                        href="#youtube"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </Nav.Link>

                      <Nav.Link
                        className="p-2 md:p-8 hover:text-white"
                        href="https://github.com/RaphaelBecker"
                      >
                        <i className="fa-brands fa-github"></i>
                      </Nav.Link>
                    </GradientTextLeft>
                  </div>
                  <div className="flex-row">
                    <GradientTextRight>
                      <Nav.Link
                        onClick={() => scrollToRef("aboutRef")}
                        className={liStyle}
                      >
                        About
                      </Nav.Link>

                      <Nav.Link
                        onClick={() => scrollToRef("projectsRef")}
                        className={liStyle}
                      >
                        Projects
                      </Nav.Link>

                      <Nav.Link
                        href="https://medium.com/@becker.r15"
                        className={liStyle}
                      >
                        Blog
                      </Nav.Link>

                      <Nav.Link
                        onClick={() => scrollToRef("contactRef")}
                        className={liStyle}
                      >
                        Contact
                      </Nav.Link>
                    </GradientTextRight>
                  </div>
                </div>
              </Nav>
            )}
          </div>
        </div>

        <GradientTextRight>
          <Nav className="hidden w-full md:flex md:w-auto md:flex-none">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li key={"11"}>
                <Nav.Link
                  onClick={() => scrollToRef("aboutRef")}
                  className={liStyle}
                >
                  About
                </Nav.Link>
              </li>
              <li key={"12"}>
                <Nav.Link
                  onClick={() => scrollToRef("projectsRef")}
                  className={liStyle}
                >
                  Projects
                </Nav.Link>
              </li>

              <li key={"13"}>
                {" "}
                <Nav.Link
                  href="https://medium.com/@becker.r15"
                  className={liStyle}
                >
                  Blog
                </Nav.Link>
              </li>

              <li key={"14"}>
                <Nav.Link
                  onClick={() => scrollToRef("contactRef")}
                  className={liStyle}
                >
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </GradientTextRight>
      </div>
    </nav>
  );
}

export default Header;
