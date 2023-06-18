import React from "react";

function NavTab() {
  return (
    <ul className="hero__menu">
      <li>
        <a href="#about" aria-label="О проекте" className="hero__link">
          О проекте
        </a>
      </li>
      <li>
        <a href="#tech" aria-label="Технологии" className="hero__link">
          Технологии
        </a>
      </li>
      <li>
        <a href="#student" aria-label="Студент" className="hero__link">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
