import { LocalStorage } from "../class/LocalStorage.mjs";
const storage = new LocalStorage();

function createCards(data) {
  const cardsListTarget = document.querySelector("#cards-list-container");
  for (const value of data) {
    const createCardContainer = document.createElement("div");
    createCardContainer.id = value.id;
    createCardContainer.classList.add("card-container");

    cardsListTarget.append(createCardContainer);

    const cardContainerTarget = document.getElementById(value.id);

    const createTitle = document.createElement("h3");
    createTitle.textContent = value.title;
    createTitle.classList.add("cards-tilte");

    const createLocation = document.createElement("p");
    createLocation.textContent = value.location;
    createLocation.classList.add("card-location");

    const createDescription = document.createElement("p");
    createDescription.textContent = value.description;
    createDescription.classList.add("card-description");

    const createM2 = document.createElement("p");
    createM2.textContent = value.m2;
    createM2.classList.add("card-m2");

    const createPrice = document.createElement("p");
    createPrice.textContent = value.price;
    createPrice.classList.add("card-price");

    cardContainerTarget.append(
      createTitle,
      createLocation,
      createDescription,
      createM2,
      createPrice
    );
  }
}

function createCardsHouse() {
  const dataHouse = storage.getStorageHouse();
  createCards(dataHouse);
}

function createCardsLand() {
  const descriptionTarget = document.querySelector("#description-card");
  const dataLand = storage.getStorageLand();
  createCards(dataLand);
  const createBuildable = document.createElement("p");
  for (const value of dataLand) {
    if (value.createBuildable === true) {
      createBuildable.textContent = "Yes";
    } else {
      createBuildable.textContent = "No";
    }
    descriptionTarget.append(createBuildable);
  }
}

function createCardsApartment() {
  const dataApartment = storage.getStorageApartment();
  createCards(dataApartment);
  for (const value of dataApartment) {
  }
}

function createCardsAllProducts() {
  const allData = storage.getStorage();
  for (const key in allData) {
    if (Object.hasOwnProperty.call(allData, key)) {
      const element = allData[key];
      for (const value of element) {
        const createCardContainer = document.createElement("div");
        createCardContainer.id = value.id;
        createCardContainer.classList.add("card-container");

        cardsListTarget.append(createCardContainer);

        const cardContainerTarget = document.getElementById(value.id);

        const createTitle = document.createElement("h3");
        createTitle.textContent = value.title;
        createTitle.classList.add("cards-tilte");

        const createLocation = document.createElement("p");
        createLocation.textContent = value.location;
        createLocation.classList.add("card-location");

        const createDescription = document.createElement("p");
        createDescription.textContent = value.description;
        createDescription.classList.add("card-description");

        const createM2 = document.createElement("p");
        createM2.textContent = value.m2;
        createM2.classList.add("card-m2");

        const createPrice = document.createElement("p");
        createPrice.textContent = value.price;
        createPrice.classList.add("card-price");

        cardContainerTarget.append(
          createTitle,
          createLocation,
          createDescription,
          createM2,
          createPrice
        );
      }
    }
  }
}
