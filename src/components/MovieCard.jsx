
import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.stopPropagation();

    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            type="button"
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={onFavoriteClick}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Year: {movie.release_date?.split('-')[0] || 'N/A'}</p>
        <p>Rating: {movie.vote_average?.toFixed(1) ?? 'N/A'}</p>
      </div>
    </div>
  );
}

export default MovieCard;
