import React, { useState, useEffect, useRef } from 'react';

const ScrollTypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const elementRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const typeText = () => {
            if (i < text.length) {
              setDisplayedText(text.slice(0, i + 1));
              i++;
              timerRef.current = setTimeout(typeText, speed);
            }
          };
          typeText();
        } else {
          // Clear the timer when the element is not in view
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, speed]);
  return (
    <p className='font-sans min-h-52 max-md:min-h-80 max-h-fit text-left text-gray-700 text-lg leading-relaxed p-4 px-12 md:px-44'>
      {displayedText}
    </p>
  );
};

export default ScrollTypingEffect;