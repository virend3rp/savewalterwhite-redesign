import React, { useEffect, useState } from 'react';

const GlitchCounter = () => {
  const [count, setCount] = useState('000000');

  useEffect(() => {
    const interval = setInterval(() => {
      const glitch = Math.floor(Math.random() * 900000) + 100000;
      setCount(glitch.toString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl md:text-2xl font-mono text-green-400 bg-black p-3 rounded-md border border-green-600 glitch">
      ${count} raised
    </div>
  );
};

export default GlitchCounter;
