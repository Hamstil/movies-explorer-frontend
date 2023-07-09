function replaceErrToText(value, pathname) {
  let numberErr = value.replace(/^\D+/g, "");

  if (pathname === "/signin") {    
    let errMessage;
    if (numberErr === "400") {
      errMessage = "При авторизации произошла ошибка.";
    } else if (numberErr === "401") {
      errMessage = "Неверая почти или пароль";
    } else if (numberErr === "404") {
      errMessage = "Ничего не найдено";
    } else if (numberErr === "500") {
      errMessage = "На сервере произошла ошибка";
    }
    return errMessage;
  }
  else if (pathname === '/signup') {
    let errMessage;
    if (numberErr === "400") {
      errMessage = "При регистрации произошла ошибка.";
    } else if (numberErr === "401") {
      errMessage = "Неверая почти или пароль";
    } else if (numberErr === "409") {
      errMessage = "Пользователь с таким email уже есть";
    } else if (numberErr === "404") {
      errMessage = "Ничего не найдено";
    } else if (numberErr === "500") {
      errMessage = "На сервере произошла ошибка";
    }
    return errMessage;
  }
  else if (pathname === '/profile') {
    let errMessage;
    if (numberErr === "400") {
      errMessage = "При оновлении профиля произошла ошибка.";
    } else if (numberErr === "401") {
      errMessage = "Неверая почти или пароль";
    } else if (numberErr === "409") {
      errMessage = "Пользователь с таким email уже есть";
    } else if (numberErr === "404") {
      errMessage = "Ничего не найдено";
    } else if (numberErr === "500") {
      errMessage = "На сервере произошла ошибка";
    }
    return errMessage;
  }
}

export default replaceErrToText;
