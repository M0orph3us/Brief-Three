"use strict";
// To create the localStorage if it does not exist
const checkLocalStorage = localStorage.getItem("products");
if (checkLocalStorage === null) {
  const data = {
    maisons: [],
    appartements: [],
    terrains: [],
  };
  const dataStringify = JSON.stringify(data);
  localStorage.setItem("products", dataStringify);
}

//  functions for users register
import {
  register,
  showRegisterModal,
  showPasswordRegisterForm,
} from "./scripts/register.mjs";

const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", register);

const btnRegisterModalsDesktop = document.querySelector(
  "#btn-register-modal-desktop"
);
btnRegisterModalsDesktop.addEventListener("click", showRegisterModal);

const btnRegisterModalsMobile = document.querySelector(
  "#btn-register-modal-mobile"
);
btnRegisterModalsMobile.addEventListener("click", showRegisterModal);

const eyeCloseRegister = document.querySelector("#eye-close-register");
eyeCloseRegister.addEventListener("click", showPasswordRegisterForm);

// functions for users login
import {
  login,
  logout,
  showHidenLoginModal,
  createAdminBoard,
} from "./scripts/login.mjs";

const btnLoginModalsDesktop = document.querySelector(
  "#btn-login-modal-desktop"
);
btnLoginModalsDesktop.addEventListener("click", showHidenLoginModal);
const btnLoginModalsMobile = document.querySelector("#btn-login-modal-mobile");
btnLoginModalsMobile.addEventListener("click", showHidenLoginModal);

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", () => {
  login();
  createAdminBoard();
});
createAdminBoard();

// functions for navbar
import { burgerMenu, userMenu } from "./scripts/navbar.mjs";
burgerMenu();
userMenu();

// functions for home page
import { selectList } from "./scripts/home.mjs";
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  if (currentPage === "/public/pages/home.html") {
    selectList();
  }
});

// functions for new property page
import {
  selectFormNewProperty,
  inputChangeContainerMobilResponsive,
  setInput,
} from "./scripts/newProperty.mjs";
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  if (currentPage === "/public/pages/new-property.html") {
    setInput();

    selectFormNewProperty();

    const btnFormNewPropertyHouse = document.querySelector(
      "#btn-form-new-property-house"
    );
    btnFormNewPropertyHouse.addEventListener("click", () => {});
    inputChangeContainerMobilResponsive();
  }
});

// function to prevent an unconnected user from accessing the admin page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  if (currentPage === "/public/pages/adminboard.html") {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      const getData = localStorage.getItem(user);
      const getDataParse = JSON.parse(getData);
      if (getDataParse.isConnected === false) {
        window.location.href = "/public/pages/home.html";
        alert("Vous n'avez pas la permission");
      }
    }
  }
});
