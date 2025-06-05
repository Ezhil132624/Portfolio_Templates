import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on larger screens
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const addEventListeners = () => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    handleLinkHoverEvents();
    setHidden(false);

    return () => {
      removeEventListeners();
    };
  }, []);

  if (typeof window === 'undefined') return null;

  // Don't render custom cursor on mobile
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className={`custom-cursor outer ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      <div 
        className={`custom-cursor inner ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-150' : ''} ${linkHovered ? 'scale-0' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
          z-index: 9999;
        }
        .outer {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(59, 130, 246, 0.5);
          transition: all 0.2s ease-out;
        }
        .inner {
          width: 8px;
          height: 8px;
          background-color: rgba(59, 130, 246, 0.8);
          transition: all 0.1s ease-out;
        }
        @media (max-width: 768px) {
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Cursor;