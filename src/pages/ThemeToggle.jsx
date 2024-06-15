import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  // State to track the current theme
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Save the theme preference to local storage
    localStorage.setItem('theme', newTheme);
    // Apply the theme-specific classes to the root element
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Effect to load the theme preference from local storage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      // Apply the theme-specific classes to the root element
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  return (
    <button onClick={toggleTheme} className={`px-4 py-2 rounded-md ${theme === 'light' ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-800 hover:bg-gray-700'}`}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
}

export default ThemeToggle;
