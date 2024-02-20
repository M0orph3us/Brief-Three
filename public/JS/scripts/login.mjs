import { Users } from "../class/Users.mjs";

// const btnLogin = document.querySelector("#btn-login");

// btnLogin.addEventListener("click", login);

export function login() {
  const alertLoginTarget = document.querySelector("#login-modal");
  const emailLoginValue = document.querySelector("#email-login").value;
  const passwordLoginValue = document.querySelector("#password-login").value;

  const loginUser = new Users(emailLoginValue, passwordLoginValue);

  if (loginUser.login()) {
    const existingAlerts = document.querySelector("#alertLogin");
    existingAlerts.remove();
    const para = document.createElement("p");
    para.classList.add("valid");
    para.textContent = `Welcome ${emailLoginValue}, you are connected`;
    alertLoginTarget.prepend(para);
  } else {
    const para = document.createElement("p");
    para.classList.add("error");
    para.id = "alertLogin";
    para.textContent = `Your password does not match your email ${emailLoginValue}`;
    alertLoginTarget.prepend(para);
  }
}
