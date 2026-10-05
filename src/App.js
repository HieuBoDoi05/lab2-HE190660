import React, { useState, useMemo } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { movies as initialMovies } from './datas/movies';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

const MainApp = () => {
  const { theme } = useTheme();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [sortOption, setSortOption] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);

 
  const filteredAndSortedMovies = useMemo(() => {
    return initialMovies
      .filter((movie) => {
        
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());

        
        const matchesGenre = selectedGenre === 'All Genres' || movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
      })
      .sort((a, b) => {
        
        if (sortOption === 'highToLow') {
          return b.rating - a.rating;
        }
        if (sortOption === 'lowToHigh') {
          return a.rating - b.rating;
        }
        return 0; 
      });
  }, [searchTerm, selectedGenre, sortOption]);

  const appStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#121212' : '#f5f5f5',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyles}>
      <Header />

      <main style={{ padding: '20px 0' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <SearchBar onSearchChange={setSearchTerm} />

          <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />

          {/* Sort Movies by rating */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="sort-select" style={{ marginRight: '8px', fontWeight: 'bold' }}>Sort by:</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{ padding: '8px' }}
            >
              <option value="default">Default</option>
              <option value="highToLow">Rating: High -&gt; Low</option>
              <option value="lowToHigh">Rating: Low -&gt; High</option>
            </select>
          </div>
        </div>

        <MovieList movies={filteredAndSortedMovies} onSelectMovie={setSelectedMovie} />
      </main>

      <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}