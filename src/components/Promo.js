import React from "react";
import NavTab from "./NavTab";

function Promo() {
  return (
    <section className="hero content__hero">
      <div className="hero__info">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
