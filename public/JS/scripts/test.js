import { LocalStorage } from "../class/LocalStorage.mjs";

const test = new LocalStorage();
// test.getStorageLand();
// test.getStorageHouse();
// test.getStorageApartment();
// test.getAllStorage();
const cardsListTarget = document.querySelector("#cards-list-container");
test.getStorageLand().forEach((value) => {
  console.log(value);
  const createCardContainer = document.createElement("div");
  createCardContainer.id = value.id;
  createCardContainer.classList.add("card-container");

  cardsListTarget.append(createCardContainer);

  const cardContainerTarget = document.getElementById(value.id);

  const createTitle = document.createElement("h3");
  createTitle.textContent = value.title;

  const createLocation = document.createElement("p");
  createLocation.textContent = value.location;

  const createDescription = document.createElement("p");
  createDescription.textContent = value.description;

  const createM2 = document.createElement("p");
  createM2.textContent = value.m2;

  const price = document.createElement("p");
  price.textContent = value.price;

  cardContainerTarget.append(
    createTitle,
    createLocation,
    createDescription,
    createM2,
    price
  );
});
