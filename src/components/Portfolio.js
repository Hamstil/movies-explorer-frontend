import React from "react";

function Portfolio() {
  return (
    <ul className="student__portfolio-links">
      <li className="student__portfolio-link">
        <a
          href="https://github.com/Hamstil/how-to-learn"
          target="_blank"
          className="student__portfolio-link-text"
          rel="noreferrer"
        >
          Статичный сайт <span>↗</span>
        </a>
      </li>
      <li className="student__portfolio-link">
        <a
          href="https://hamstil.github.io/russian-travel"
          target="_blank"
          className="student__portfolio-link-text"
          rel="noreferrer"
        >
          Адаптивный сайт <span>↗</span>
        </a>
      </li>
      <li className="student__portfolio-link">
        <a
          href="https://github.com/Hamstil/react-mesto-auth"
          target="_blank"
          className="student__portfolio-link-text"
          rel="noreferrer"
        >
          Одностраничное приложение <span>↗</span>
        </a>
      </li>
    </ul>
  );
}

export default Portfolio;
