import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-700">Fruit.AI</h1>

        {/* Hamburger Icon for Mobile */}
        <button className="text-purple-700 md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                SignIn
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Toggleable) */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 font-bold hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 font-bold hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-in"
                  className="text-gray-600 font-bold hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  SignIn
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 font-bold hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
