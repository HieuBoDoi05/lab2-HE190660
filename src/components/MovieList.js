import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies = [], onSelectMovie }) => {
  if (!movies || movies.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>k tim thay</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
};

export default MovieList;