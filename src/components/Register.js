import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFormWithValidation from "../hooks/useFormWithValidation";
import useErrrorToText from "../hooks/useErrrorToText";
import headerLogo from "../images/logo.svg";

function Register({ handleRegister, isRequestError, isTextRequestError }) {
  const { pathname } = useLocation();

  // Получение ошибки в текстовом формате
  const textError = useErrrorToText(isTextRequestError, pathname);

  // вычитываем переменные и методы из кастомного хука
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      name: "",
      email: "",
      password: "",
    });

  const { name, email, password } = values;

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    e.preventDefault();

    // передаем значения управляемых компонентов во внешний обработчик
    if (isValid) {
      handleRegister(name, email, password);
    }
    resetForm();
  }

  return (
    <main className="content page__content">
      <section className="authorization content__authorization">
        <Link to="/">
          {" "}
          <img
            src={headerLogo}
            alt="Логотип: Movies"
            className="content__logo"
          />
        </Link>
        <h2 className="authorization__title">Добро пожаловать!</h2>
        <form
          name="register"
          className="authorization__from"
          onSubmit={handleSubmit}
        >
          <label className="authorization__from-field">
            <span className="authorization__from-description">Имя</span>
            <input
              id="authorization-name"
              type="text"
              name="name"
              value={name || ""}
              onChange={handleChange}
              placeholder="Введите Имя"
              className={`authorization__from-input authorization__from-input_text_name ${
                errors.name ? "authorization__from-error_active" : ""
              }`}
              minLength="2"
              maxLength="40"
              required
            />
            <span className="authorization__from-error authorization-name-error authorization__from-error_active">
              {errors.name}
            </span>
          </label>
          <label className="authorization__from-field">
            <span className="authorization__from-description">email</span>
            <input
              id="authorization-email"
              type="email"
              name="email"
              value={email || ""}
              onChange={handleChange}
              placeholder="Введите email"
              className={`authorization__from-input authorization__from-input_text_email ${
                errors.email ? "authorization__from-error_active" : ""
              }`}
              minLength="2"
              maxLength="40"
              pattern="\S+@\S+\.\S+"
              required
            />
            <span className="authorization__from-error authorization-email-error authorization__from-error_active">
              {errors.email}
            </span>
          </label>
          <label className="authorization__from-field">
            <span className="authorization__from-description">Пароль</span>
            <input
              id="authorization-password"
              type="password"
              name="password"
              value={password || ""}
              onChange={handleChange}
              placeholder="Придумайте пароль"
              className={`authorization__from-input authorization__from-input_text_password ${
                errors.password ? "authorization__from-error_active" : ""
              }`}
              minLength="4"
              maxLength="40"
              required
            />
            <span className="authorization__from-error authorization-password-error authorization__from-error_active">
              {errors.password}
            </span>
          </label>
          {isRequestError ? (
            <p className="authorization__from-request-error">{textError}</p>
          ) : (
            ""
          )}
          <button
            aria-label="Кнопка регистрации"
            className={`authorization__from-button ${
              !isValid ? "authorization__from-button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="authorization__redirect">
          Уже зарегистрированы?
          <Link className="authorization__redirect-link" to="/signin">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
