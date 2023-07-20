import { useState } from "react";
import NavbarList from "./NavbarList";

function Navbar() {
  const [isOpen, setIsOpen] = useState();
  return (
    //  {/* <!-- Nav Start --> */}
    <section className="fixed w-full bg-black">
      <div className="flex h-20">
        <div className="flex items-center">
          <a href="#">
            <h1 className="mx-8 text-4xl font-bold tracking-wider">
              <span className="text-red-600">R</span>endy
            </h1>
          </a>
        </div>
        {/* <!-- md start --> */}
        <div className="flex justify-end items-center mr-20 w-full">
          <div className="hidden md:block">
            <ul className="flex gap-10">
              <NavbarList />
            </ul>
          </div>
        </div>
        {/* <!-- md end --> */}
        {/* <!-- burgerlist button start --> */}
        <div className="flex items-center w-full justify-end mr-8 md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ion-icon size="large" name="menu-outline"></ion-icon>
          </button>
        </div>
        {/* <!-- burgerlist button end --> */}
      </div>
      {/* <!-- navbar burgerlist --> */}
      <nav id="navbar" className={`${isOpen ? "" : "hidden"}`}>
        <div className="bg-red-600 h-screen w-[45%] md:w-[25%] right-0 top-0 absolute pl-8">
          <ul>
            <li>
              <button
                className="mb-5 md:mb-10 mt-7"
                onClick={() => setIsOpen(!isOpen)}
              >
                <ion-icon size="large" name="close-outline"></ion-icon>
              </button>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#home">
                Home
              </a>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#about-me">
                About Me
              </a>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#skills">
                Skills
              </a>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#experience">
                Experience
              </a>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#project">
                Project
              </a>
            </li>
            <li className="mb-3">
              <a className="hover:text-black duration-500" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- navbar burgerlist --> */}
    </section>
    // {/* <!-- Nav End --> */}
  );
}

export default Navbar;
