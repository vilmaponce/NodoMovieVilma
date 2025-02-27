import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isBackgroundColor, setBackgroundColor] = useState(true); // Estado inicial    

  const changeColor = () => {
    setBackgroundColor(!isBackgroundColor);
  };

  return (
    <footer className={`${isBackgroundColor ? "bg-gray-900" : "bg-gray-600"} py-6 px-6 flex flex-col items-center justify-center shadow-inner`}>
      
      <div className="w-full max-w-6xl flex flex-col items-center space-y-3 text-center">
        <p className={`${isBackgroundColor ? "text-gray-500":"text-white"} text-sm uppercase tracking-wider`}>
          DIPLOMATURA UNIVERSITARIA DESARROLLO WEB FULL STACK CON JAVASCRIPT
        </p>
        <p className={`${isBackgroundColor ? "text-gray-500":"text-white"  } text-sm uppercase tracking-wider`}>
          VILMA PONCE
        </p>
        <a
          href="https://github.com/vilmaponce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors duration-300"
        >
          <i className="bi bi-github"></i>
          <span className="font-['Orbitron'] text-sm">github.com/vilmaponce</span>
        </a>
        <p className="text-gray-400 text-sm">&copy; {currentYear}</p>
      </div>
      <button
        onClick={changeColor}
        className={`mt-4 px-4 py-2 ${isBackgroundColor ? "bg-yellow-400 hover:bg-yellow-600" : "bg-gray-900 hover:bg-gray-800"} text-white rounded transition-colors duration-300 flex items-center space-x-2`}
      >
        <i className={isBackgroundColor ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
        <span>{isBackgroundColor ? "Modo Claro" : "Modo Oscuro"}</span>
      </button>
    </footer>
  );
};

export default Footer;
