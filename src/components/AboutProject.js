import React from "react";

function AboutProject() {
  return (
    <section className="about content__about" id="about">
      <h2 className="section-title">О проекте</h2>
      <ul className="about__description">
        <li>
          <h3 className="about__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__description-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="about__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__description-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about__time">
        <p className="about__time-text about__time-text_theme_dark">1 неделя</p>
        <p className="about__time-text about__time-text_theme_light">
          4 недели
        </p>
        <p className="about__time-text about__time-text_theme_light-1">
          Back-end
        </p>
        <p className="about__time-text about__time-text_theme_light-1">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
