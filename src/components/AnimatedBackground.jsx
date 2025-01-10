import React, { useEffect, useState } from 'react';

const words = [
  'Innovation',
  'Creativity',
  'Technology',
  'Design',
  'Collaboration',
  'Excellence',
  'Vision',
  'Growth',
  'Leadership',
  'Passion',
];

const AnimatedWord = ({ word }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const randomizePosition = () => {
    setPosition({
      left: Math.random() * 80, 
      top: Math.random() * 80,  
    });
  };

  useEffect(() => {
    
    randomizePosition();

    
    const timeout = setTimeout(() => {
      randomizePosition(); 
      setVisible(true);
    }, Math.random() * 5000);

    
    return () => clearTimeout(timeout);
  }, []);

  
  const handleAnimationEnd = () => {
    setVisible(false); 
    randomizePosition();
    setTimeout(() => setVisible(true), Math.random() * 5000); 
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.left}%`,
        top: `${position.top}%`,
        opacity: 0,
        animation: 'typeIn 2s forwards, fadeOut 2s 5s forwards',
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      {word}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {words.map((word, index) => (
        <AnimatedWord key={`${word}-${index}`} word={word} />
      ))}
      <style jsx>{`
        @keyframes typeIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 0.3;
          }
        }
        @keyframes fadeOut {
          to {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
