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
  const btnContainerMobileTarget = document.querySelector(
    "#btn-connection-mobile"
  );
  const btnContainerDesktopTarget = document.querySelector(
    "#btn-connection-desktop"
  );

  const btnLoginDesktop = document.querySelector("#btn-login-modal-desktop");
  const btnLoginMobile = document.querySelector("#btn-login-modal-mobile");

  const btnRegisterDesktop = document.querySelector(
    "#btn-register-modal-desktop"
  );
  const btnRegisterMobile = document.querySelector(
    "#btn-register-modal-mobile"
  );

  for (let k = 0; k < localStorage.length; k++) {
    const user = localStorage.key(k);
    const getData = localStorage.getItem(user);
    const getDataParse = JSON.parse(getData);
    if (getDataParse.isConnected === true) {
      btnLoginDesktop.style.display = "none";
      btnLoginMobile.style.display = "none";

      btnRegisterDesktop.style.display = "none";
      btnRegisterMobile.style.display = "none";

      const createAdminLinkDesktop = document.createElement("a");
      createAdminLinkDesktop.href = "/public/pages/adminBoard.html";
      createAdminLinkDesktop.classList.add("admin-link");
      createAdminLinkDesktop.textContent = "Admin Board";

      const createLogoutDesktop = document.createElement("i");
      createLogoutDesktop.classList.add(
        "fa-solid",
        "fa-right-from-bracket",
        "fa-xl"
      );
      createLogoutDesktop.style.cursor = "pointer";
      createLogoutDesktop.addEventListener("click", () => {
        getDataParse.isConnected = false;
        const getDataStringify = JSON.stringify(getDataParse);
        localStorage.setItem(user, getDataStringify);
        window.location.href = "/public/pages/home.html";
      });
      btnContainerDesktopTarget.append(
        createAdminLinkDesktop,
        createLogoutDesktop
      );

      const createAdminLinkMobile = document.createElement("a");
      createAdminLinkMobile.href = "/public/pages/adminBoard.html";
      createAdminLinkMobile.classList.add("admin-link");
      createAdminLinkMobile.textContent = "Admin Board";
      const createLogoutMobile = document.createElement("i");
      createLogoutMobile.classList.add(
        "fa-solid",
        "fa-right-from-bracket",
        "fa-xl"
      );
      createLogoutMobile.style.cursor = "pointer";
      createLogoutMobile.addEventListener("click", () => {
        getDataParse.isConnected = false;
        const getDataStringify = JSON.stringify(getDataParse);
        localStorage.setItem(user, getDataStringify);
        window.location.href = "/public/pages/home.html";
      });

      btnContainerMobileTarget.append(
        createAdminLinkMobile,
        createLogoutMobile
      );
    }
  }
}

export function logout() {
  function getUserConnected() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      const getData = localStorage.getItem(user);
      const getDataParse = JSON.parse(getData);
      if (getDataParse.isConnected === true) {
        getDataParse.isConnected = false;
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
