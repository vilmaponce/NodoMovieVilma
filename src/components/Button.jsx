import React from "react";

const Button = ({ children, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${className}`}
    >
      {icon && <i className={`bi ${icon} mr-2`}></i>
    }
      {children}
    </button>
  );
};

export default Button;