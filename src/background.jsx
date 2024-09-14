import React, { useRef, useEffect } from 'react';

const BackgroundAnimated = () => {
  const canvasRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    const circleCount = window.innerWidth / 12;
    const maxRadius = window.innerWidth / 6;
    const Color = {
      vector: ['#0da694', '#257aa8', '#3251BF'],
      getRandom: () => {
        return Color.vector[Math.floor(Math.random() * Color.vector.length)];
      },
    };

    class Circle {
      constructor(
        r_min = randomNumber(maxRadius * 0.9, 20),
        x = randomNumber(canvas.width, r_min),
        y = randomNumber(canvas.height, r_min),
        dx = randomNumber(0.05, -0.05, [0]), // Reduced speed range
        dy = randomNumber(0.05, -0.05, [0]), // Reduced speed range
        color = Color.getRandom()
      ) {
        this.r_min = r_min;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.r = r_min;
      }

      draw() {
        c.save();
        c.filter = 'blur(5px)';
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
      }

      run() {
        if (this.x + this.r > canvas.width || this.x - this.r < 0) this.dx *= -1;
        if (this.y + this.r > canvas.height || this.y - this.r < 0) this.dy *= -1;
        if (this.r > this.r_min) this.r -= 0.01; // Slower radius reduction
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function init() {
      circlesRef.current = [];
      for (let i = circleCount; i > 0; i--) {
        circlesRef.current.push(new Circle());
      }
    }

    function animation() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      circlesRef.current.forEach((circle) => circle.run());
      requestAnimationFrame(animation);
    }

    function randomNumber(max = 1, min = 0, forbidden = []) {
      let res;
      do {
        res = Math.random() * (max - min) + min; // Changed to return float
      } while (forbidden.some((num) => num === res));
      return res;
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust circles if they're outside the new boundaries
      circlesRef.current.forEach(circle => {
        if (circle.x + circle.r > canvas.width) circle.x = canvas.width - circle.r;
        if (circle.y + circle.r > canvas.height) circle.y = canvas.height - circle.r;
      });
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animation();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BackgroundAnimated;