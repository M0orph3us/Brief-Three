import { Terrains } from "../class/Terrains.mjs";
import { Maisons } from "../class/Maisons.mjs";
import { Appartements } from "../class/Appartements.mjs";

export function selectFormNewProperty() {
  const select = document.querySelector("#select-new-property");
  function updateForm() {
    const houseInputContainer = document.querySelector(
      "#form-new-property-house"
    );
    const inputRepeatHouse = document.querySelector(".input-repeat-house");
    const inputHouse = document.querySelector(".input-house");

    const apartmentInputContainer = document.querySelector(
      "#form-new-property-apartment"
    );
    const inputRepeatApartment = document.querySelector(
      ".input-repeat-apartment"
    );
    const inputApartment = document.querySelector(".input-apartment");

    const landInputContainer = document.querySelector(
      "#form-new-property-land"
    );

    const selectValue = select.value;

    switch (selectValue) {
      case "house":
        houseInputContainer.style.display = "flex";
        inputRepeatHouse.style.display = "flex";
        if (window.screen.width < 1024) {
          inputHouse.style.display = "none";
        }
        apartmentInputContainer.style.display = "none";
        landInputContainer.style.display = "none";
        break;
      case "apartment":
        apartmentInputContainer.style.display = "flex";
        inputRepeatApartment.style.display = "flex";
        if (window.screen.width < 1024) {
          inputApartment.style.display = "none";
        }
        landInputContainer.style.display = "none";
        houseInputContainer.style.display = "none";

        break;
      case "land":
        landInputContainer.style.display = "flex";
        apartmentInputContainer.style.display = "none";
        houseInputContainer.style.display = "none";
        break;
      default:
    }
  }
  window.onload = updateForm;
  select.addEventListener("change", updateForm);
}

export function inputChangeContainerMobilResponsive() {
  const inputRepeatHouse = document.querySelector(".input-repeat-house");
  const inputHouse = document.querySelector(".input-house");
  const btnChangeInputContainerHouse = document.querySelector(
    "#change-input-container-house"
  );
  btnChangeInputContainerHouse.addEventListener("click", () => {
    inputRepeatHouse.style.display = "none";
    inputHouse.style.display = "flex";
  });
  const btnBackHouseRepeat = document.querySelector("#btn-back-house-repeat");
  btnBackHouseRepeat.addEventListener("click", () => {
    inputRepeatHouse.style.display = "flex";
    inputHouse.style.display = "none";
  });

  const btnChangeInputContainerApartment = document.querySelector(
    "#change-input-container-apartment"
  );
  const inputRepeatApartment = document.querySelector(
    ".input-repeat-apartment"
  );
  const inputApartment = document.querySelector(".input-apartment");

  btnChangeInputContainerApartment.addEventListener("click", () => {
    inputRepeatApartment.style.display = "none";
    inputApartment.style.display = "flex";
  });
  const btnBackApartmentRepeat = document.querySelector(
    "#btn-back-apartment-repeat"
  );
  btnBackApartmentRepeat.addEventListener("click", () => {
    inputRepeatApartment.style.display = "flex";
    inputApartment.style.display = "none";
  });
}

export function setInput() {
  const formHouse = document.querySelector("#form-new-property-house");
  formHouse.addEventListener("submit", (e) => {
    e.preventDefault();
    const formDataHouse = new FormData(formHouse);

    const titleValue = formDataHouse.get("title");
    const descriptionValue = formDataHouse.get("description");
    const priceValue = formDataHouse.get("price");
    const locationValue = formDataHouse.get("location");
    const m2Value = formDataHouse.get("m2");

    const numberOfRoomsValue = formDataHouse.get("numberOfRooms");
    const numberOfStoriesValue = formDataHouse.get("numberOfStories");
    const furnishedValue = formDataHouse.get("furnished");
    const gardenValue = formDataHouse.get("garden");
    const poolValue = formDataHouse.get("pool");

    const newHouse = new Maisons(
      titleValue,
      descriptionValue,
      priceValue,
      locationValue,
      locationValue,
      m2Value,
      numberOfRoomsValue,
      numberOfStoriesValue,
      furnishedValue,
      gardenValue,
      poolValue
    );
  });

  const formApartment = document.querySelector("#form-new-property-apartment");
  formApartment.addEventListener("submit", (e) => {
    e.preventDefault();

    const formDataApartment = new FormData(formApartment);

    const titleValue = formDataApartment.get("title");
    const descriptionValue = formDataApartment.get("description");
    const priceValue = formDataApartment.get("price");
    const locationValue = formDataApartment.get("location");
    const m2Value = formDataApartment.get("m2");

    const floorsValue = formDataApartment.get("floors");
    const elevatorValue = formDataApartment.get("elevator");
    const numberOfRoomsValue = formDataApartment.get("numberOfRooms");
    const balconyValue = formDataApartment.get("balcony");
    const furnishedValue = formDataApartment.get("furnished");

    const newApartment = new Appartements(
      titleValue,
      descriptionValue,
      priceValue,
      locationValue,
      m2Value,
      floorsValue,
      elevatorValue,
      numberOfRoomsValue,
      balconyValue,
      furnishedValue
    );
  });

  const formLand = document.querySelector("#form-new-property-land");
  formLand.addEventListener("submit", (e) => {
    e.preventDefault();

    const formDataLand = new FormData(formLand);

    const titleValue = formDataLand.get("title");
    const descriptionValue = formDataLand.get("description");
    const priceValue = formDataLand.get("price");
    const locationValue = formDataLand.get("location");
    const m2Value = formDataLand.get("m2");
    const buildableValue = formDataLand.get("buildable");

    const newLand = new Terrains(
      titleValue,
      descriptionValue,
      priceValue,
      locationValue,
      m2Value,
      buildableValue
    );
  });
}
