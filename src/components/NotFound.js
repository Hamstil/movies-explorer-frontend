import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-faund">
      <div className="not-faund__description">
        <h1 className="not-faund__title">404</h1>
        <p className="not-faund__subtitle">Страница не найдена</p>
      </div>
      <Link
        className="not-faund__link"
        to=""
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
