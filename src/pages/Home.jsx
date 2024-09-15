import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("Chat");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 via-blue-200 to-pink-200">
      <Header />
      <div className="flex flex-col justify-center items-center w-full max-w-3xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 lg:mb-4">
          Fruit.AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-12">
          "Be Healthy!"
        </p>

        {/* Grid of Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full px-4 sm:px-0">
          {/* Chat Button */}
          <Link to="/ChatBot" className="w-full">
            <button className="w-full bg-yellow-200 text-purple-700 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-yellow-300 transition">
              Chat.
            </button>
          </Link>

          {/* Anonymous Button */}
          <Link to="/anonymous" className="w-full">
            <button className="w-full bg-blue-200 text-pink-500 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-blue-300 transition">
              Anonymous
            </button>
          </Link>

          {/* FAQs Button */}
          <Link to="/Faq" className="w-full">
            <button className="w-full bg-purple-200 text-blue-900 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-purple-300 transition">
              FAQs
            </button>
          </Link>

          {/* About Button */}
          <Link to="/about" className="w-full">
            <button className="w-full bg-pink-200 text-purple-600 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-pink-300 transition">
              About
            </button>
          </Link>

          {/* Translator Button */}
          <Link to="/services" className="w-full">
            <button className="w-full bg-green-200 text-purple-600 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-green-300 transition">
              Translator
            </button>
          </Link>

          {/* Contact Button */}
          <Link to="/contact" className="w-full">
            <button className="w-full bg-red-200 text-purple-600 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:bg-red-300 transition">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
