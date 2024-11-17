import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkmode');
    return savedMode === 'on' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkmode', 'on');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkmode', 'off');
    }
  }, [isDarkMode]);

  return (
    <div className="darkmode-toggle">
      <p>Dark Mode</p>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkMode;
