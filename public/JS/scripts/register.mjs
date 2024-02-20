import { Users } from "../class/Users.mjs";

// const btnRegister = document.querySelector("#btn-register");

// btnRegister.addEventListener("click", register);

export function register() {
  function alert(text, alertClass = "error") {
    const existingAlerts = document.querySelectorAll("#alertRegister");
    existingAlerts.forEach((alert) => alert.remove());
    const para = document.createElement("p");
    para.classList.add(alertClass);
    para.id = "alertRegister";
    para.textContent = text;
    alertRegisterTarget.prepend(para);
  }
  const alertRegisterTarget = document.querySelector("#register-modal");
  const emailRegisterValue = document.querySelector("#email-register").value;
  const passwordRegisterValue =
    document.querySelector("#password-register").value;
  const password2RegisterValue = document.querySelector(
    "#password2-register"
  ).value;

  const patternMail = /\@/;
  const regexMail = new RegExp(patternMail);
  const checkFormatMail = regexMail.test(emailRegisterValue);

  const patternPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  const regexPassword = new RegExp(patternPassword);
  const checkFormatPassword = regexPassword.test(passwordRegisterValue);

  if (emailRegisterValue === "") {
    const text = "Your email address cannot be empty";
    alert(text);
  } else if (!checkFormatMail) {
    const text = "Your email address is not in the correct format";
    alert(text);
  } else if (!checkFormatPassword) {
    const text =
      "Your password must contain at least one capital letter, 1 number and 1 special character (@, $, !, %, *, ?, &)";
    alert(text);
  } else if (passwordRegisterValue.length < 6) {
    const text = "Your password must contain at least 6 characters";
    alert(text);
    // } else if (password2RegisterValue.length < 6) {
    //   const text = "Your second password must contain at least 6 characters";
    //   alert(text);
  } else if (password2RegisterValue !== passwordRegisterValue) {
    const text = "Your second password does not match the first";
    alert(text);
  }

  let password = "";
  if (
    emailRegisterValue !== "" &&
    checkFormatMail &&
    checkFormatPassword &&
    passwordRegisterValue.length > 6 &&
    // password2RegisterValue.length > 6 &&
    password2RegisterValue === passwordRegisterValue
  ) {
    password = passwordRegisterValue;
    const newUser = new Users(emailRegisterValue, password);
    if (newUser.checkUserMailExist()) {
      const text = `An account with this email ${emailRegisterValue} address already exists`;
      alert(text);
    } else {
      newUser.register();
      const text = `Hello ${emailRegisterValue}, you're registered`;
      alert(text, "valid");
    }
  }
}
