import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-blue-600 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
            <h1 className="text-lg font-bold text-white">Your Website</h1>
          </div>
          <nav className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </nav>
          <nav className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
              <li>
                <a
                  href="#"
                  className="block md:inline-block text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:inline-block text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:inline-block text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:inline-block text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
