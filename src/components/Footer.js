import React from "react";

function Footer() {
    return(
    <footer className="footer page__footer">
    <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__information">
      <span className="footer__copyright">© 2023</span>
      <ul className="footer__links">
        <li><a href="https://practicum.yandex.ru" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a></li>
        <li><a href="https://github.com/Hamstil" target="_blank" className="footer__link" rel="noreferrer">Github</a></li>
      </ul>
    </div>
  </footer>
    )
}

export default Footer;