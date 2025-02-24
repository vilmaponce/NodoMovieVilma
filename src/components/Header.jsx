import React from "react";

const Header = ({ onOpenModal }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 px-6 flex items-center justify-center shadow-md">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="font-['Orbitron'] text-3xl font-bold text-pink-500 tracking-wide">
            {/* Icono de clapperboard */}
            <i className="bi bi-camera-reels text-3xl text-pink-600"></i>
            NODO Movies ✨
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={onOpenModal}
            className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Watchlist
          </button>
          <i className="ph ph-user-circle text-4xl text-pink-500 hover:text-pink-400 cursor-pointer transition-colors duration-300"></i>
        </div>
      </div>
    </header>
  );
};


export default Header;