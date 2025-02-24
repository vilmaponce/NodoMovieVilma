import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-6 px-6 flex items-center justify-center shadow-inner">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-3 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          DIPLOMATURA UNIVERSITARIA DESARROLLO WEB FULL STACK CON JAVASCRIPT
        </p>
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          VILMA PONCE
        </p>
        <a
          href="https://github.com/vilmaponce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors duration-300"
        >
          <i class="bi bi-github"></i>
          <span className="font-['Orbitron'] text-sm">github.com/vilmaponce</span>
        </a>
        <p className="text-gray-400 text-sm">&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;