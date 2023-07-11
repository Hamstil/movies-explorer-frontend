import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation({ isLogin, isPopupMenuOpen }) {
  if (isLogin) {
    return (
      <ul className="header-menu__authorization">
        <li>
          <Link
            to="/signup"
            aria-label="Регистрация"
            className="header-menu__signup"
          >
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" aria-label="Логин" className="header-menu__signin">
            Войти
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <>
        <div className="header-menu__navigation">
          <ul className="header-menu__links">
            <li>
              <NavLink
                to="/movies"
                aria-label="Фильмы"
                className="header-menu__link"
                activeClassName="header-menu__link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                aria-label="Сохранённые фильмы"
                className="header-menu__link"
                activeClassName="header-menu__link_active"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link
            to="/profile"
            aria-label="Профиль"
            className="header-menu__link-account"
          >
            Аккаунт
          </Link>
        </div>
        <button
          aria-label="Открыть и закрытие меню пользователя"
          type="button"
          onClick={isPopupMenuOpen}
          className="header-menu__burger"
        ></button>
      </>
    );
  }
}

export default Navigation;
