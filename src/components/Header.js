import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>Mini Movie Manager</h1>
      <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Switch to {theme === 'light' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </button>
    </header>
  );
};

export default Header;