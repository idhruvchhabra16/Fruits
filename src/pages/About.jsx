import React, { useState } from "react";
// import AboutModal from "./AboutModal"; // Import the modal component
import AboutModal from "../components/AboutModal";
import Header from "../components/Header";
const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {" "}
      <Header />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fruit.AI</h1>
        <p className="text-center mb-6">
          Learn more about us and how we help you choose the best fruits for a
          healthy life.
        </p>
        <button
          onClick={openModal}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          About Us
        </button>

        {/* Render Modal */}
        <AboutModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default AboutUs;
