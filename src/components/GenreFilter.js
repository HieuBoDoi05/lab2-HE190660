import React from 'react';

const GenreFilter = ({ selectedGenre, onGenreChange }) => {
  const genres = ['All Genres', 'Action', 'Animation', 'Comedy', 'Drama', 'Romance', 'Sci-Fi'];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="genre-select" style={{ marginRight: '8px', fontWeight: 'bold' }}>Genre:</label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        style={{ padding: '8px' }}
      >
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;