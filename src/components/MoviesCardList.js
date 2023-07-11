import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";
import {
  SCREEN_SIZE_L,
  SCREEN_SIZE_S,
  CARDS_VIEW_L,
  CARDS_VIEW_M,
  CARDS_VIEW_S,
} from "../utils/constants";

function MoviesCardList({  
  isNotFoundMovies,
  movies,
  savedMovies,
  onMovieAddMark,
  onMovieDelete,
  isQueryError,
  isSavedFilms,
}) {
  const [isShowMovies, setIsShowMovies] = useState(0); // количество отображаемых фильмов
  const { pathname } = useLocation();

  // метод отображения карточек в зависимости от ширины экрана
  function getShowMovies() {
    const screenSizeWindow = window.innerWidth;
    if (screenSizeWindow > SCREEN_SIZE_L) {
      setIsShowMovies(CARDS_VIEW_L);
    } else if (
      screenSizeWindow > SCREEN_SIZE_S &&
      screenSizeWindow < SCREEN_SIZE_L
    ) {
      setIsShowMovies(CARDS_VIEW_M);
    } else {
      setIsShowMovies(CARDS_VIEW_S);
    }
  }

  // получение фильмов в зависимости от параметров экрана
  useEffect(() => {
    getShowMovies();
  }, []);

  // метод показа карточек по клику на кнопку еще
  function showMoreMovies() {
    const screenSizeWindow = window.innerWidth;
    if (screenSizeWindow > SCREEN_SIZE_L) {
      setIsShowMovies(isShowMovies + 3);
    } else if (
      screenSizeWindow > SCREEN_SIZE_S &&
      screenSizeWindow < SCREEN_SIZE_L
    ) {
      setIsShowMovies(isShowMovies + 2);
    } else {
      setIsShowMovies(isShowMovies + 2);
    }
  }

  // метод получить сохраненную карточку
  function getSavedMovies(savedMovies, movie) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  }

  return (
    <section className="cards content__cards">
      {isNotFoundMovies ? "Ничего не найдено" : ""}
      {isQueryError
        ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        : ""}
      {pathname === "/movies" ? (
        <>
          <ul className="cards__content">
            {movies.slice(0, isShowMovies).map((movie) => (
              <MoviesCard
                key={isSavedFilms ? movie._id : movie.id}
                movieCard={movie}
                savedMovies={savedMovies}
                isSavedFilms={isSavedFilms}
                saved={getSavedMovies(savedMovies, movie)}
                onMovieDelete={onMovieDelete}
                onMovieAddMark={onMovieAddMark}
              />
            ))}
          </ul>
          {movies.length > isShowMovies ? (
            <button
              aria-label="кнопка показа следующих фильмов"
              type="button"
              className="cards__more"
              onClick={showMoreMovies}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <ul className="cards__content">
          {movies.map((movie) => (
            <MoviesCard
              key={isSavedFilms ? movie._id : movie.id}
              movieCard={movie}
              savedMovies={savedMovies}
              isSavedFilms={isSavedFilms}
              saved={getSavedMovies(savedMovies, movie)}
              onMovieDelete={onMovieDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
