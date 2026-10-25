import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>My Favorite Movies</h2>

      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;