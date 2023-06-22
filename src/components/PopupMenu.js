import React from "react";
import { Link } from "react-router-dom";

function PopupMenu({ isOpen, onClose }) {
    return(
   <div className={`popup-menu popup-menu_view_list ${!isOpen ? '' : 'popup-menu_is-opened'}`}>
    <div className={`popup-menu__content ${!isOpen ? '' : 'popup-menu__content_is-opened'}`}>
      <button aria-label="Закрыть диалоговое окно" type="button" onClick={onClose} className="popup-menu__close"></button>
      <div className="popup-menu__navigation">
        <ul className="popup-menu__links">
          <li><Link to="/" aria-label="Главная" onClick={onClose} className="popup-menu__link" >Главная</Link></li>
          <li><Link to="/movies" aria-label="Фильмы" onClick={onClose} className="popup-menu__link popup-menu__link_active" >Фильмы</Link></li>
          <li><Link to="/saved-movies" aria-label="Сохранённые фильмы" onClick={onClose} className="popup-menu__link">Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" aria-label="Профиль" onClick={onClose} className="popup-menu__link-account">Аккаунт</Link>
      </div>
    </div>
  </div>
    )
}

export default PopupMenu;