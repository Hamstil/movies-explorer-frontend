import { React, useCallback, useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import mainApi from "../utils/MainApi";
import moviesApi from "../utils/MoviesApi";
import Header from "./Header";
import Main from "./Main";
import Movies from "./Movies";
import SavedMovies from "./SavedMovies";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
import PopupMenu from "./PopupMenu";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isPopupMenu, seIisPopupMenu] = useState(false); // попап меню
  const [isLoggedIn, setIsLoggedIn] = useState(false); // залогинин ли пользователь
  const [isLoading, setIsLoading] = useState(false); // стейт загрузчика
  const [currentUser, setCurrentUser] = useState({}); // текущий пользователь
  const [isSuccessUpdateUser, setIsSuccessUpdateUser] = useState(false); // стейт обносления пользователя
  const [isSavedMovies, setIsSavedMovies] = useState([]); // сохраненные фильмы
  const [isRequestError, setIsRequestError] = useState(false); // Ошибка запроса из mainApi
  const [isTextRequestError, setIsTextRequestError] = useState(""); // Текст ошибка запроса
  const [isQueryError, setIsQueryError] = useState(false); // Ошибка запроа к moviesApi
  const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Информация о юзере
  const history = useHistory();
  const { pathname } = useLocation();

  // метод логина
  function handleLogin(password, email) {
    setIsLoading(true);
    mainApi
      .login(password, email)
      .then((data) => {
        if (data.token) {
          setIsRequestError(false);
          localStorage.setItem("token", data.token);
          setIsLoggedIn(true);
          setCurrentUser({ name: data.name, email: data.email });
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ name: data.name, email: data.email })
          );
          history.push("/movies");
        }
      })
      .catch((err) => {
        setIsRequestError(true);
        setIsTextRequestError(err);
      })
      .finally(() => setIsLoading(false));
  }

  // метод регистрации
  function handleRegister(name, email, password) {
    setIsLoading(true);
    mainApi
      .regitration(name, email, password)
      .then((data) => {
        setIsRequestError(false);
        handleLogin(password, email);
      })
      .catch((err) => {
        setIsRequestError(true);
        setIsTextRequestError(err);
      })
      .finally(() => setIsLoading(false));
  }

  // метод проверки токена
  useEffect(() => {
    let jwt = localStorage.getItem("token");
    if (jwt) {
      setIsLoggedIn(true);
      setCurrentUser(userInfo);
      history.push(pathname);
    } else {
      setIsLoggedIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // метод разлогинивания
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("initialMovies");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("foundMovies");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("userInfo");
  }, []);

  // метод обновления данных профиля
  function handleUpdateUser(name, email) {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((data) => {
        if (data) {
          setIsRequestError(false);
          setCurrentUser(data);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ name: data.name, email: data.email })
          );
          setIsSuccessUpdateUser(true);
          history.push("/profile");
        }
      })
      .catch((err) => {
        setIsRequestError(true);
        setIsTextRequestError(err);
      })
      .finally(() => setIsLoading(false));
  }

  // метод получения катрочек фильмов
  function getInitialMovies() {
    setIsLoading(true);
    moviesApi
      .getMoviesCards()
      .then((data) => {
        localStorage.setItem("initialMovies", JSON.stringify(data));
      })
      .catch((err) => {
        setIsQueryError(true);
      })
      .finally(() => setIsLoading(false));
  }

  // метод сохранения фильма
  function hanldeMovieSavedMark(movie) {
    setIsLoading(true);
    mainApi
      .addSavedMovies(movie)
      .then((newMovie) => {
        setIsSavedMovies([newMovie, ...isSavedMovies]);
      })
      .catch((err) => {
        console.log(err);
        setIsRequestError(true);
        setIsTextRequestError(err);
      })
      .finally(() => setIsLoading(false));
  }

  // метод удаления из сохраненных
  function handleMovieDeleteMark(movie) {
    setIsLoading(true);
    mainApi
      .removeSavedMovies(movie._id)
      .then(() => {
        setIsSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
        setIsRequestError(true);
        setIsTextRequestError(err);
      })
      .finally(() => setIsLoading(false));
  }

  // получение всех сохраненных фильмов
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setIsSavedMovies(movies);
        })
        .catch((err) => {
          setIsQueryError(true);
        });
    }
  }, [isLoggedIn]);

  // единичная загрузка фильмов
  useEffect(() => {
    if (isLoggedIn) {
      if (!Boolean(localStorage.getItem("initialMovies"))) {
        getInitialMovies();
      }
    }
  }, [isLoggedIn]);

  // метод обнуление ошибок при переходе по роутам
  useEffect(() => {
    setIsRequestError(false);
    setIsTextRequestError("");
    setIsSuccessUpdateUser(false);
  }, [history, pathname]);

  // метод состояния попапа меню
  function handlePopupMenuClick() {
    seIisPopupMenu(true);
  }

  // метод закрытия попапов
  function closeAllPupups() {
    seIisPopupMenu(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header
              isLoggedIn={!isLoggedIn}
              onPopupMenu={handlePopupMenuClick}
            />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            onPopupMenu={handlePopupMenuClick}
            onMovieDelete={handleMovieDeleteMark}
            onMovieAddMark={hanldeMovieSavedMark}
            savedMovies={isSavedMovies}
            isQueryError={isQueryError}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            onPopupMenu={handlePopupMenuClick}
            onMovieDelete={handleMovieDeleteMark}
            savedMovies={isSavedMovies}
            isQueryError={isQueryError}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            isSuccessUpdateUser={isSuccessUpdateUser}
            onPopupMenu={handlePopupMenuClick}
            handleLogout={handleLogout}
            handleUpdateUser={handleUpdateUser}
            isRequestError={isRequestError}
            isTextRequestError={isTextRequestError}
          />
          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                handleLogin={handleLogin}
                isRequestError={isRequestError}
                isTextRequestError={isTextRequestError}
              />
            )}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                handleRegister={handleRegister}
                isRequestError={isRequestError}
                isTextRequestError={isTextRequestError}
              />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <PopupMenu onClose={closeAllPupups} isOpen={isPopupMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
