'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <label htmlFor="theme-select">Select Theme: </label>
      <select id="theme-select" value={theme} onChange={handleChange}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
