import React, { useRef } from 'react';

const SearchBar = ({ onSearchChange }) => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    if (inputRef.current) {
      onSearchChange(inputRef.current.value);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="search-input" style={{ marginRight: '8px', fontWeight: 'bold' }}>Tim Ten Phim:</label>
      <input
        id="search-input"
        ref={inputRef}
        type="text"
        placeholder="..."
        onChange={handleInputChange}
        style={{ padding: '8px', width: '250px' }}
      />
    </div>
  );
};

export default SearchBar;