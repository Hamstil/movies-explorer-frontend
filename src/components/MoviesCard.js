import { React } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movieCard,
  savedMovies,
  saved,
  isSavedFilms,
  onMovieDelete,
  onMovieAddMark,
}) {
  const { pathname } = useLocation();

  // метод добавления фильма в закладки и удаления
  function onClickMovieMark() {
    if (saved) {
      onMovieDelete(savedMovies.filter((m) => m.movieId === movieCard.id)[0]);
    } else {
      onMovieAddMark(movieCard);
    }
  }

  // метод удаления карточки
  function onDelete() {
    onMovieDelete(movieCard);
  }

  // метод конвертации времени (длительность фильма)
  function converDuration(duration) {
    return `${Math.floor(duration / 60)} ч ${duration % 60} мин`;
  }

  return (
    <li className="card">
      <div className="card__group">
        <div className="card__group-description">
          <h2 className="card__title">{movieCard.nameRU}</h2>
          <p className="card__duration">{converDuration(movieCard.duration)}</p>
        </div>
        {pathname !== "/saved-movies" ? (
          <button
            onClick={onClickMovieMark}
            aria-label="кнопка сохранения фильма"
            type="button"
            className={`card__bookmark ${saved ? "card__bookmark_enable" : ""}`}
          ></button>
        ) : (
          <button
            aria-label="кнопка сохранения фильма"
            type="button"
            className="card__bookmark-delete"
            onClick={onDelete}
          ></button>
        )}
      </div>
      <a
        href={movieCard.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="card__link"
      >
        <img
          src={
            isSavedFilms
              ? movieCard.image
              : `https://api.nomoreparties.co/${movieCard.image.url}`
          }
          alt={movieCard.nameRU}
          className="card__image"
        />
      </a>
    </li>
  );
}

export default MoviesCard;
