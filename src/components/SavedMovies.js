import { React, useState, useEffect } from "react";
import { DURATION_FILTR } from "../utils/constants";
import Header from "./Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Footer from "./Footer";

function SavedMovies({
  isLoggedIn,
  isLoading,
  onPopupMenu,
  isQueryError,
  savedMovies,
  onMovieDelete,
}) {
  const [isCheckbox, setIsCheckbox] = useState(false); // изначальное состояние чекбокса
  const [isSavedMovies, setIsSavedMovies] = useState(savedMovies); // инициализация сохраненных фильмов
  const [isQuerySaved, setIsQuerySaved] = useState(""); // стейт запроса
  const [isNotFoundMovies, setIsNotFoundMovies] = useState(false); // состояние когда ничего не найдено

  // метод фильтрации по длительности фильма
  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < DURATION_FILTR);
  }

  // метод фильтрации фильмов по названию
  function filterMoviesFromSearch(movies, searchMovie) {
    // eslint-disable-next-line array-callback-return
    const searchedFilms = movies.filter((movie) => {
      const movieRU = String(movie.nameRU).toLowerCase().trim();
      const movieEN = String(movie.nameEN).toLowerCase().trim();
      const searchFilm = searchMovie.toLowerCase().trim();
      if (movieRU.indexOf(searchFilm) !== -1) {
        return movieRU;
      } else if (movieEN.indexOf(searchFilm) !== -1) {
        return movieEN;
      }
    });
    return searchedFilms;
  }

  // отображение карточчек сохраненных фильмов
  useEffect(() => {
    const movieList = filterMoviesFromSearch(savedMovies, isQuerySaved);
    if (isCheckbox) {
      setIsSavedMovies(filterDuration(movieList));
    } else {
      setIsSavedMovies(movieList);
    }
  }, [isCheckbox, isQuerySaved, savedMovies]);

  // сабмит по форме поиска
  function handleSearchMoviesSaved(queryMovie) {
    setIsQuerySaved(queryMovie);
  }

  // метод изменения checkbox
  function handleCheckbox() {
    setIsCheckbox(!isCheckbox);
  }

  // установка ошибка поиска
  useEffect(() => {
    if (isSavedMovies.length === 0) {
      setIsNotFoundMovies(true);
    } else {
      setIsNotFoundMovies(false);
    }
  }, [isSavedMovies]);

  return (
    <main className="content">
      <Header isLoggedIn={isLoggedIn} onPopupMenu={onPopupMenu} />
      <SearchForm
        isCheckbox={isCheckbox}
        onCheckbox={handleCheckbox}
        onSearchMovies={handleSearchMoviesSaved}
      />
      <MoviesCardList
        isLoading={isLoading}
        isSavedFilms={true}
        isQueryError={isQueryError}
        isNotFoundMovies={isNotFoundMovies}
        movies={isSavedMovies}
        savedMovies={savedMovies}
        onMovieDelete={onMovieDelete}
      />      
      <Footer />
    </main>
  );
}

export default SavedMovies;
