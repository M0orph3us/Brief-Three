import { Users } from "../class/Users.mjs";

const btnRegister = document.querySelector("#btn-register");

const alertTarget = document.querySelector("#register-modal");

btnRegister.addEventListener("click", register);

export function register() {
  const emailValue = document.querySelector("#email-register").value;
  const passwordValue = document.querySelector("#password-register").value;
  const password2Value = document.querySelector("#password2-register").value;

  const patternMail = /\@/;
  const regexMail = new RegExp(patternMail);
  const checkFormatMail = regexMail.test(emailValue);

  const patternPassword = "";
  const regexPassword = new RegExp(patternPassword);
  const checkFormatPassword = regexPassword.test(passwordValue);
  const checkFormatPassword2 = regexPassword.test(password2Value);

  if (emailValue === "") {
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent = "Your email address cannot be empty";
    alertTarget.prepend(para);
  }

  if (!checkFormatMail) {
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent = "Your email address is not in the correct format";
    alertTarget.prepend(para);
  }

  if (passwordValue.length < 6) {
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent = "Your password must contain at least 6 characters";
    alertTarget.prepend(para);
  }

  if (password2Value.length < 6) {
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent =
      "Your second password must contain at least 6 characters";
    alertTarget.prepend(para);
  }

  if (password2Value !== passwordValue) {
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent = "Your second password does not match the first";
    alertTarget.prepend(para);
  }
  let password = "";
  if (
    emailValue !== "" &&
    checkFormatMail &&
    passwordValue.length > 6 &&
    password2Value.length > 6 &&
    password2Value === passwordValue
  ) {
    password = passwordValue;
    const newUser = new Users(emailValue, password);
    newUser.register();
    const para = document.createElement("p");
    para.textContent = "";
    para.classList.add("alert");
    para.textContent = `Hello ${emailValue}, you are registered`;
    alertTarget.prepend(para);
  }
}
