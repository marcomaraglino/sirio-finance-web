import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="relative w-52 h-52 group">
      <img 
        src={imageSrc} 
        alt={title}
        loading="lazy"
        className='p-5 w-full h-full object-contain transition-all duration-500 group-hover:blur-xl'
      />
      <div className="absolute inset-0 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-sans text-white text-left text-3xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Card;