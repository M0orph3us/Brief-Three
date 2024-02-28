import { Terrains } from "../class/Terrains.mjs";
import { Maisons } from "../class/Maisons.mjs";
import { Appartements } from "../class/Appartements.mjs";

export function selectFormNewProperty() {
  const formNewProperty = document.querySelector("#input-container");
  const houseInputContainer = document.querySelector("#house-input-container");
  const apartmentInputContainer = document.querySelector(
    "#apartment-input-container"
  );
  const landInputContainer = document.querySelector("#land-input-container");
  const btnFormNewProperty = document.querySelector("#btn-form-new-property");

  const selectValue = document.querySelector("#select-new-property").value;
  switch (selectValue) {
    case "house":
      formNewProperty.style.display = "flex";
      houseInputContainer.style.display = "flex";
      btnFormNewProperty.style.display = "block";

      apartmentInputContainer.style.display = "none";
      landInputContainer.style.display = "none";
      break;
    case "apartment":
      formNewProperty.style.display = "flex";
      apartmentInputContainer.style.display = "flex";
      btnFormNewProperty.style.display = "block";

      landInputContainer.style.display = "none";
      houseInputContainer.style.display = "none";
      break;
    case "land":
      formNewProperty.style.display = "flex";
      landInputContainer.style.display = "flex";
      btnFormNewProperty.style.display = "block";

      apartmentInputContainer.style.display = "none";
      houseInputContainer.style.display = "none";
      break;
    default:
      "house";
  }
}

function inputValue() {
  const titleValue = document.querySelector("#title").value;
  const descriptionValue = document.querySelector("#description").value;
  const priceValue = document.querySelector("#price").value;
  const locationValue = document.querySelector("#location").value;
  const m2Value = document.querySelector("#m2").value;

  const data = {
    title: titleValue,
    description: descriptionValue,
    price: priceValue,
    location: locationValue,
    m2: m2Value,
  };
  return data;
}
function inputLandValue(data) {
  const landValue = document.querySelector("#buildable").value;

  const newLand = new Terrains(
    data.title,
    data.description,
    data.price,
    data.location,
    data.m2,
    landValue
  );
}

function inputHouseValue(data) {
  const houseNumberOfRoomsValue = document.querySelector(
    "#house-number-of-rooms"
  ).value;
  const numberOfStoriesValue =
    document.querySelector("#number-of-stories").value;
  const houseFurnishedValue = document.querySelector("#house-furnished").value;
  const gardenValue = document.querySelector("#garden").value;
  const poolValue = document.querySelector("#pool").value;
  const newHouse = new Maisons(
    data.title,
    data.description,
    data.price,
    data.location,
    data.m2,
    houseNumberOfRoomsValue,
    numberOfStoriesValue,
    houseFurnishedValue,
    gardenValue,
    poolValue
  );
}

function inputApartmentValue(data) {
  const floorsValue = document.querySelector("#floors").value;
  const apartmentNumberOfRoomsValue = document.querySelector(
    "#apartment-number-of-rooms"
  ).value;
  const elevatorValue = document.querySelector("#elevator").value;
  const apartmentFurnishedValue = document.querySelector(
    "#apartment-furnished"
  ).value;
  const balconyValue = document.querySelector("#balcony").value;
  const newApartment = new Appartements(
    data.title,
    data.description,
    data.price,
    data.location,
    data.m2,
    floorsValue,
    elevatorValue,
    apartmentNumberOfRoomsValue,
    apartmentFurnishedValue,
    balconyValue
  );
}

export function setLocalStorage() {
  const selectValue = document.querySelector("#select-new-property").value;
  switch (selectValue) {
    case "house":
      inputHouseValue(inputValue());
      break;
    case "apartment":
      inputApartmentValue(inputValue());
      break;
    case "land":
      inputLandValue(inputValue());
      break;
  }
}
