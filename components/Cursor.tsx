import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const hoverTargets = document.querySelectorAll(
      'a, button, .cursor-hover-target'
    );

    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // Run only once

  const cursorSize = isHovering ? 48 : 12;
  const clickScale = isClicking ? 0.8 : 1;

  return (
    <div
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            transform: `translate(-50%, -50%) scale(${clickScale})`,
            backgroundColor: isHovering ? 'rgba(192, 132, 252, 0.1)' : 'rgb(192, 132, 252)',
            border: isHovering ? '2px solid rgb(192, 132, 252)' : 'none',
        }}
    />
  );
};

export default Cursor;
