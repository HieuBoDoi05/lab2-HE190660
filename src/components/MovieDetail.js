import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: '#fff',
          color: '#333',
          padding: '24px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '90%'
        }}
      >
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Duration:</strong> {movie.duration} mins</p>
        <p><strong>Description:</strong> {movie.description}</p>
        <button onClick={onClose} style={{ marginTop: '12px', padding: '6px 12px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;