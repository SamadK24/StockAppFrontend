import React from 'react';

function AIChatBox({ message }) {
  return (
    <div className="flex items-center gap-4 m-4 p-4 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img 
        src="./AI-Image.png" 
        alt="AI Image" 
        width={70} 
        className="rounded-full border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <div className="w-3/4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-800 text-sm font-medium leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

export default AIChatBox;



