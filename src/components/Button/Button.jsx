import React from "react";

const Button = ({ content, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105 hover:to-orange-600 cursor-pointer transition-all duration-300 "
    >
      {content}
    </button>
  );
};

export default Button;