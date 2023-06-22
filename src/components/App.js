import { React, useState } from "react";
import { Switch, Route } from "react-router-dom"
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

function App() {
  const [isPopupMenu, seIisPopupMenu] = useState(false); // попап меню
  const [isLoggedIn] = useState(false); // залогинин ли пользователь

  // метод состояния попапа меню
  function handlePopupMenuClick() {
    seIisPopupMenu(true);
  }

  // метод закрытия попапов
  function closeAllPupups() {
    seIisPopupMenu(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={!isLoggedIn} onPopupMenu={handlePopupMenuClick} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header isLoggedIn={isLoggedIn} onPopupMenu={handlePopupMenuClick} />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header isLoggedIn={isLoggedIn} onPopupMenu={handlePopupMenuClick} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header isLoggedIn={isLoggedIn} onPopupMenu={handlePopupMenuClick} />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <PopupMenu onClose={closeAllPupups} isOpen={isPopupMenu} />
    </div>
  );
}

export default App;
