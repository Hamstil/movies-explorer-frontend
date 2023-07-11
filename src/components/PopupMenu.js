import React from "react";
import { Link, NavLink } from "react-router-dom";

function PopupMenu({ isOpen, onClose }) {
  return (
    <div
      className={`popup-menu popup-menu_view_list ${
        !isOpen ? "" : "popup-menu_is-opened"
      }`}
    >
      <div
        className={`popup-menu__content ${
          !isOpen ? "" : "popup-menu__content_is-opened"
        }`}
      >
        <button
          aria-label="Закрыть диалоговое окно"
          type="button"
          onClick={onClose}
          className="popup-menu__close"
        ></button>
        <div className="popup-menu__navigation">
          <nav className="popup-menu__links">
            <NavLink
              exact
              to="/"
              aria-label="Главная"
              onClick={onClose}
              className={(isActive) =>
                "popup-menu__link" +
                (isActive ? " popup-menu__link_active" : "")
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              aria-label="Фильмы"
              onClick={onClose}
              className="popup-menu__link"
              activeClassName="popup-menu__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              aria-label="Сохранённые фильмы"
              onClick={onClose}
              className="popup-menu__link"
              activeClassName="popup-menu__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link
            to="/profile"
            aria-label="Профиль"
            onClick={onClose}
            className="popup-menu__link-account"
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupMenu;
