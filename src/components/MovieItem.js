import React from 'react';

const MovieItem = ({ movie, onSelectMovie }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        width: '240px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <h3>{movie.title}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Rating:</strong>  {movie.rating}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <button onClick={() => alert(`Added "${movie.title}" to Favorites!`)}>yêu thích</button>
        <button onClick={() => onSelectMovie(movie)}>mô tả</button>
      </div>
    </div>
  );
};

export default MovieItem;