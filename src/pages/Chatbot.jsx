import React from "react";
import Header from "../components/Header"; // if it's in a parent folder

function Chatbot() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold">John Doe</h2>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800">
                {/* Icon for settings */}
                <i className="fas fa-cog"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                {/* Icon for more */}
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-4 overflow-auto h-96">
            {/* Date */}
            <div className="text-center text-sm text-gray-500">
              14 October, Sunday
            </div>

            {/* Incoming Text Message */}
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
              <div className="bg-gray-200 p-4 rounded-xl max-w-xs">
                <p>
                  This is a sample big message with a longer text paragraph.
                </p>
                <span className="text-xs text-gray-500 block mt-2">
                  10:08 AM
                </span>
              </div>
            </div>

            {/* Outgoing Audio Message */}
            <div className="flex justify-end items-start space-x-4">
              <div className="bg-purple-500 text-white p-4 rounded-xl max-w-xs">
                <div className="flex items-center space-x-2">
                  <button className="focus:outline-none">
                    {/* Play Icon */}
                    <i className="fas fa-play"></i>
                  </button>
                  <div className="flex-grow">
                    <div className="h-2 bg-white rounded-lg w-full"></div>
                  </div>
                  <span className="text-sm">0:30</span>
                </div>
                <span className="text-xs text-gray-300 block mt-2">
                  10:08 AM
                </span>
              </div>
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
            </div>

            {/* Incoming Voice Note */}
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
              <div className="bg-gray-200 p-4 rounded-xl max-w-xs">
                <div className="flex items-center space-x-2">
                  <button className="focus:outline-none">
                    {/* Play Icon */}
                    <i className="fas fa-play"></i>
                  </button>
                  <div className="flex-grow">
                    <div className="h-2 bg-gray-400 rounded-lg w-full"></div>
                  </div>
                  <span className="text-sm">1:20</span>
                </div>
                <span className="text-xs text-gray-500 block mt-2">
                  10:09 AM
                </span>
              </div>
            </div>

            {/* Outgoing Text Message */}
            <div className="flex justify-end items-start space-x-4">
              <div className="bg-purple-500 text-white p-4 rounded-xl max-w-xs">
                <p>This is a sample message for a chat.</p>
                <span className="text-xs text-gray-300 block mt-2">
                  10:10 AM
                </span>
              </div>
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center p-4 bg-gray-100 border-t border-gray-300">
            <input
              type="text"
              className="flex-grow bg-white p-3 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
              placeholder="Message..."
            />
            <button className="ml-4 text-purple-500 hover:text-purple-600">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
