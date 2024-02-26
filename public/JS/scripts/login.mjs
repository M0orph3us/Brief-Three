import { Users } from "../class/Users.mjs";

export function showHidenLoginModal() {
  const loginModal = document.querySelector("#login-modal");
  loginModal.style.display = "flex";

  const closeModal = document.querySelector("#close-login-modal");
  closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
  });
}

export function showPasswordLoginForm() {}

export function login() {
  const alertLoginTarget = document.querySelector("#login-modal");

  const emailLoginValue = document.querySelector("#email-login").value;
  const passwordLoginValue = document.querySelector("#password-login").value;

  const loginUser = new Users(emailLoginValue, passwordLoginValue);
  const existingAlerts = document.querySelector("#alertLogin");
  if (existingAlerts !== null) {
    existingAlerts.remove();
  }
  if (emailLoginValue !== "" && passwordLoginValue !== "") {
    if (loginUser.login()) {
      const para = document.createElement("p");
      para.classList.add("valid");
      para.textContent = `Welcome ${emailLoginValue}, you are connected`;
      alertLoginTarget.prepend(para);
    } else {
      const para = document.createElement("p");
      para.classList.add("error");
      para.id = "alertLogin";
      if (loginUser.checkUserMailExist()) {
        para.textContent = `Your password does not match your email ${emailLoginValue}`;
        alertLoginTarget.prepend(para);
      } else {
        para.textContent = `This email ${emailLoginValue} address does not exist.`;
        alertLoginTarget.prepend(para);
      }
    }
  }
}

export function createAdminBoard() {
  const adminBoardTarget = document.querySelector("#adminboard-container");
  const logoutTarget = document.querySelector("#logout-container");
  function getUserConnected() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      const getData = localStorage.getItem(user);
      const getDataParse = JSON.parse(getData);
      if (getDataParse.isConnected === true) {
        const userConnected = user;
        return userConnected;
      }
    }
    return false;
  }
  if (getUserConnected() !== false) {
    const linkAdminboard = document.createElement("a");
    linkAdminboard.href = "/public/pages/adminboard.html";
    linkAdminboard.classList.add("adminboard-link");
    linkAdminboard.id = "adminboard-link";
    linkAdminboard.textContent = "admin board";
    adminBoardTarget.append(linkAdminboard);

    const img = document.createElement("i");
    img.classList.add("img-logout");
    img.id = "img-logout";
    img.classList.add("fa-solid fa-right-from-bracket");
    img.alt = "icon logout";
    logoutTarget.append(img);

    const login = document.querySelector("#login");
    login.remove();
    const register = document.querySelector("#register");
    register.remove();
  }
}

export function logout() {
  function getUserConnected() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      const getData = localStorage.getItem(user);
      const getDataParse = JSON.parse(getData);
      if (getDataParse.isConnected === true) {
        const userConnected = user;
        return userConnected;
      }
    }
    return false;
  }

  const getData = localStorage.getItem(getUserConnected());
  const getDataParse = JSON.parse(getData);
  getDataParse.isConnected = false;

  const getDataStringify = JSON.stringify(getDataParse);
  localStorage.setItem(getUserConnected(), getDataStringify);

  const adminBoard = document.querySelector("#adminboard-link");
  adminBoard.remove();
  const imgLogout = document.querySelector("#img-logout");
  imgLogout.remove();
}
