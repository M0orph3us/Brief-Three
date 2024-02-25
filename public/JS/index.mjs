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

const btnRegisterModal = document.querySelector("#btn-register-modal");
btnRegisterModal.addEventListener("click", showRegisterModal);

const eyeCloseRegister = document.querySelector("#eye-close-register");
eyeCloseRegister.addEventListener("click", showPasswordRegisterForm);

// functions for users login
import { login, createAdminBoard, showLoginModal } from "./scripts/login.mjs";
createAdminBoard();
const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", () => {
  login();
  createAdminBoard();
});

const btnLoginModal = document.querySelector("#btn-login-modal");
btnLoginModal.addEventListener("click", showLoginModal);

// function for users logout
import { logout } from "./scripts/logout.mjs";

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
      }
    }
  }
});
