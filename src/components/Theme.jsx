import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleB = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = "Black";
    } else {
      setTheme('light');
      document.body.style.backgroundColor = "White";
    }
  };

  return (
    <div>
      <button onClick={toggleB}> Harsh </button>
    </div>
  );
};

export default Theme;