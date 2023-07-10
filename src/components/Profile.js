import React, { useContext, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFormWithValidation from "../hooks/useFormWithValidation";
import useErrrorToText from "../hooks/useErrrorToText";
import Header from "./Header";
import Preloader from "./Preloader";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Profile({
  isLoggedIn,
  isLoading,
  isSuccessUpdateUser,
  onPopupMenu,
  handleLogout,
  isRequestError,
  isTextRequestError,
  handleUpdateUser,
}) {
  const [isFocusInput, setIsFocusInput] = useState(false); // стейт фокуса в форме
  const currentUser = useContext(CurrentUserContext); // текущий пользователь
  const inputRef = useRef(null); // доступ к инпуту
  const { pathname } = useLocation();

  // Получение ошибки в текстовом формате
  const textErrorProfile = useErrrorToText(isTextRequestError, pathname);

  // вычитываем переменные и методы из кастомного хука
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({
      name: "",
      email: "",
    });

  const { name, email } = values;

  // Обработчик нажатия на кнопку
  function handleSubmit(e) {
    e.preventDefault();
    // передаем значения управляемых компонентов во внешний обработчик
    if (isValid) {
      handleUpdateUser(name, email);
    }
    resetForm();
  }

  // метод фокуса по нажатию на кнопку редактирования
  function handleEdit(e) {
    e.preventDefault();
    inputRef.current.focus();
  }

  // метод фокуса на форме
  function handleFocusChenge() {
    setIsFocusInput(true);
  }

  // метод клика вне формы
  function handleBlurChenge(e) {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains("account__from") ||
      e.target.classList.contains("account")
    ) {
      setIsFocusInput(false);
    }
  }

  // метод проверки на схожесть юзера
  function checkForValidCurrntUser() {
    if (name === currentUser.name && email === currentUser.email) {
      return true;
    } else {
      return false;
    }
  }

  // появление кнопок редактирования и выхода после запроса на обновление профиля
  useEffect(() => {
    if (isRequestError || isSuccessUpdateUser) {
      setTimeout(() => {
        setIsFocusInput(false);
      }, 2000);
    }
  }, [isRequestError, isSuccessUpdateUser]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onPopupMenu={onPopupMenu} />
      <main className="content page__content" onClick={handleBlurChenge}>
        <section className="account content__account">
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <h2 className="account__title">Привет, {currentUser.name}!</h2>
              <form
                name="account"
                className="account__from"
                onSubmit={handleSubmit}
              >
                <label className="account__from-field">
                  <div className="account__from-field-profile">
                    <span className="account__from-description">Имя</span>
                    <input
                      id="account-name"
                      type="text"
                      name="name"
                      value={name || ""}
                      onChange={handleChange}
                      placeholder={currentUser.name}
                      onFocus={handleFocusChenge}
                      ref={inputRef}
                      className={`account__from-input account__from-input_text_name ${
                        errors.name ? "account__from-error_active" : ""
                      }`}
                      minLength="2"
                      maxLength="40"
                      required
                    />
                  </div>
                  <span className="account__from-error authorization-name-error account__from-error_active">
                    {errors.name}
                  </span>
                </label>

                <label className="account__from-field">
                  <div className="account__from-field-profile">
                    <span className="account__from-description">E-mail</span>
                    <input
                      id="account-email"
                      type="email"
                      name="email"
                      value={email || ""}
                      onChange={handleChange}
                      placeholder={currentUser.email}
                      onFocus={handleFocusChenge}
                      className={`account__from-input account__from-input_text_email ${
                        errors.email ? "account__from-error_active" : ""
                      }`}
                      minLength="4"
                      pattern="\S+@\S+\.\S+"
                      required
                    />
                  </div>
                  <span className="account__from-error authorization-email-error account__from-error_active">
                    {errors.email}
                  </span>
                </label>

                {isFocusInput ? (
                  <>
                    {isRequestError ? (
                      <p className="account__from-request-error">
                        {textErrorProfile}
                      </p>
                    ) : (
                      ""
                    )}
                    {isSuccessUpdateUser ? (
                      <p className="account__from-request-success">
                        Пользователь обновлен
                      </p>
                    ) : (
                      ""
                    )}
                    <button
                      aria-label="Кнопка сохранить"
                      className={`account__from-button ${
                        !isValid || checkForValidCurrntUser()
                          ? "account__from-button_disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={!isValid || checkForValidCurrntUser()}
                    >
                      Сохранить
                    </button>
                  </>
                ) : (
                  <ul className="account__links">
                    <li>
                      <button
                        type="submit"
                        aria-label="Редактировать"
                        className="account__link"
                        onClick={handleEdit}
                      >
                        Редактировать
                      </button>
                    </li>
                    <li>
                      <button
                        type="submit"
                        aria-label="Выйти из аккаунта"
                        className="account__link account__link_theme_light"
                        onClick={handleLogout}
                      >
                        Выйти из аккаунта
                      </button>
                    </li>
                  </ul>
                )}
              </form>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
