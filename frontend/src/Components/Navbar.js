import { Nav } from "react-bootstrap";

function Header({ scrollToRef }) {
  const liStyle =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green-400 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav class="bg-transparent">
      <div class="max-w-screen-xl flex text-xl xl:text-2xl sm:flex-wrap items-center justify-between mx-auto pt-8 pl-8 md:px-8">
        <Nav class="hidden w-full md:block md:w-auto" id="navbar-default">
          <Nav.Link className="px-2  hover:text-green-400" href="#linkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link className="px-2  hover:text-green-400" href="#instagram">
            <i className="fa-brands fa-instagram"></i>
          </Nav.Link>
          <Nav.Link className="px-2  hover:text-green-400" href="#twitter">
            <i className="fa-brands fa-twitter"></i>
          </Nav.Link>
          <Nav.Link className="px-2  hover:text-green-400" href="#youtube">
            <i className="fa-brands fa-youtube"></i>
          </Nav.Link>
          <Nav.Link className="px-2  hover:text-green-400" href="#github">
            <i className="fa-brands fa-github"></i>
          </Nav.Link>
        </Nav>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <Nav class="hidden w-full md:flex md:w-auto md:flex-none">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Nav.Link href="#about" class={liStyle}>
                About
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#projects" class={liStyle}>
                Projects
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#bio" class={liStyle}>
                Bio
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#contact" class={liStyle}>
                Contact
              </Nav.Link>
            </li>
          </ul>
        </Nav>
      </div>
    </nav>
  );
}

export default Header;
