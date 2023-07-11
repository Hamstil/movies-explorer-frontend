import React from "react";
import useFormWithValidation from "../hooks/useFormWithValidation";
import useErrrorToText from "../hooks/useErrrorToText";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Login({ handleLogin, isRequestError, isTextRequestError }) {
  const { pathname } = useLocation();

  // Получение ошибки в текстовом формате
  const textError = useErrrorToText(isTextRequestError, pathname);

  // вычитываем переменные и методы из кастомного хука
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      email: "",
      password: "",
    });

  const { email, password } = values;

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    e.preventDefault();

    // передаем значения управляемых компонентов во внешний обработчик
    if (isValid) {
      handleLogin(password, email);
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
        <h2 className="authorization__title">Рады видеть!</h2>
        <form
          name="login"
          className="authorization__from"
          onSubmit={handleSubmit}
        >
          <label className="authorization__from-field-login">
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
              minLength="4"
              maxLength="40"
              pattern="\S+@\S+\.\S+"
              required
            />
            <span className="authorization__from-error authorization-email-error authorization__from-error_active">
              {errors.email}
            </span>
          </label>
          <label className="authorization__from-field-login">
            <span className="authorization__from-description">Пароль</span>
            <input
              id="authorization-password"
              type="password"
              name="password"
              value={password || ""}
              onChange={handleChange}
              placeholder="Введите пароль"
              className={`authorization__from-input authorization__from-input_text_password ${
                errors.password ? "authorization__from-error_active" : ""
              }`}
              minLength="4"
              maxLength="200"
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
            aria-label="Кнопка войти"
            className={`authorization__from-button ${
              !isValid ? "authorization__from-button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className="authorization__redirect">
          Ещё не зарегистрированы?
          <Link className="authorization__redirect-link" to="/signup">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
