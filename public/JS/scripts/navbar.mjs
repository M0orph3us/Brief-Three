export function burgerMenu() {
  const burgerMenuOpen = document.querySelector("#burger-menu-open");
  const burgerContainer = document.querySelector("#burger-container");
  burgerMenuOpen.addEventListener("click", () => {
    burgerContainer.style.display = "flex";
    burgerMenuOpen.style.display = "none";
  });
  const burgerClose = document.querySelector("#burger-close");
  burgerClose.addEventListener("click", () => {
    burgerContainer.style.display = "none";
    burgerMenuOpen.style.display = "block";
  });
}

export function userMenu() {
  const userProfil = document.querySelector("#user");
  const userContainer = document.querySelector("#user-container");
  userProfil.addEventListener("click", () => {
    if (window.getComputedStyle(userContainer).display === "none") {
      userContainer.style.display = "flex";
    } else {
      userContainer.style.display = "none";
    }
  });
}
