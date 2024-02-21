"use strict";

import { register } from "./scripts/register.mjs";
const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", register);

import { login, createAdminBoard } from "./scripts/login.mjs";
createAdminBoard();
const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", () => {
  login();
  createAdminBoard();
});

import { logout } from "./scripts/logout.mjs";

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
