"use strict";

import { register } from "./scripts/register.mjs";
const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", register);

import { login } from "./scripts/login.mjs";
const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", login);
