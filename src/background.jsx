import React from "react";
import "./AnimatedBackground.css";

const BlurredCirclesBackground = () => {
  // Function to create multiple blurred circles
  const createCircles = () => {
    const circles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 200 + 100; // Random size between 100px and 300px
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 10 + 5}s`, // Random duration between 5s and 15s
        animationDelay: `${Math.random() * 5}s`, // Random delay
      };
      circles.push(<div key={i} className="blurred-circle" style={style}></div>);
    }
    return circles;
  };

  return <div className="blurred-circles-container">{createCircles()}</div>;
};

export default BlurredCirclesBackground;