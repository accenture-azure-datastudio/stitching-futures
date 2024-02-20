import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Button(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative ${props.className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
    >
      {props.children}
      <FaArrowRight
        className={`ml-2 icon absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ${
          isHovered ? 'right-2' : 'opacity-0'
        }`}
      />
    </button>
  );
}

export default Button;
