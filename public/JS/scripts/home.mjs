import { LocalStorage } from "../class/LocalStorage.mjs";

export function selectList() {
  const selectCards = document.querySelector("#select-cards-list");
  function updateCardsList() {
    const selectCardsValue = selectCards.value;
    const cardsListDefault = document.querySelector("#cards-list-default");
    const cardsListTarget = document.querySelector("#cards-list-container");
    switch (selectCardsValue) {
      case "allProducts":
        while (cardsListTarget.firstChild) {
          cardsListTarget.removeChild(cardsListTarget.firstChild);
        }
        cardsListDefault.style.display = "grid";
        cardsListTarget.style.display = "none";
        createCardsAllProducts();
        break;
      case "houses":
        while (cardsListTarget.firstChild) {
          cardsListTarget.removeChild(cardsListTarget.firstChild);
        }
        while (cardsListDefault.firstChild) {
          cardsListDefault.removeChild(cardsListDefault.firstChild);
        }
        cardsListDefault.style.display = "none";
        cardsListTarget.style.display = "grid";
        createCardsHouse();
        break;
      case "apartments":
        while (cardsListTarget.firstChild) {
          cardsListTarget.removeChild(cardsListTarget.firstChild);
        }
        while (cardsListDefault.firstChild) {
          cardsListDefault.removeChild(cardsListDefault.firstChild);
        }
        cardsListDefault.style.display = "none";
        cardsListTarget.style.display = "grid";
        createCardsApartment();

        break;

      case "lands":
        while (cardsListTarget.firstChild) {
          cardsListTarget.removeChild(cardsListTarget.firstChild);
        }
        while (cardsListDefault.firstChild) {
          cardsListDefault.removeChild(cardsListDefault.firstChild);
        }
        cardsListDefault.style.display = "none";
        cardsListTarget.style.display = "grid";
        createCardsLand();
        break;

      default:
    }
  }
  window.onload = updateCardsList;
  selectCards.addEventListener("change", updateCardsList);
}

function createCardsHouse() {
  console.log("house");
  const storage = new LocalStorage();
  const dataHouse = storage.getStorageHouse();

  const cardsListTarget = document.querySelector("#cards-list-container");
  for (const value of dataHouse) {
    const createContainerDescription = document.createElement("div");
    createContainerDescription.classList.add("container-description");
    createContainerDescription.style.position = "absolute";
    createContainerDescription.style.display = "none";

    const createCardContainer = document.createElement("div");
    createCardContainer.id = value.id;
    createCardContainer.classList.add("card-container");
    createCardContainer.style.cursor = "pointer";
    createCardContainer.addEventListener("click", () => {
      createContainerDescription.style.display = "flex";
    });

    cardsListTarget.append(createCardContainer);

    const createX = document.createElement("i");
    createX.classList.add("fa-solid", "fa-x", "close-description");
    createX.addEventListener("click", (e) => {
      e.stopPropagation();
      createContainerDescription.style.display = "none";
    });

    const cardContainerTarget = document.getElementById(value.id);

    const createTitle = document.createElement("h3");
    createTitle.classList.add("cards-tilte");
    createTitle.textContent = value.title;

    const createLocation = document.createElement("p");
    createLocation.classList.add("card-location");
    createLocation.textContent = value.location;

    const createM2 = document.createElement("p");
    createM2.classList.add("card-m2");
    createM2.textContent = value.m2;

    const createPrice = document.createElement("p");
    createPrice.classList.add("card-price");
    createPrice.textContent = value.price;

    const createAt = document.createElement("p");
    createAt.classList.add("card-createdAt");
    createAt.textContent = value.createdAt;

    cardContainerTarget.append(
      createTitle,
      createLocation,
      createM2,
      createPrice,
      createAt,
      createContainerDescription
    );
    const createDescription = document.createElement("p");
    createDescription.classList.add("card-description");
    createDescription.textContent = value.description;

    const createNumberOfRooms = document.createElement("p");
    createNumberOfRooms.classList.add("card-number-of-rooms");
    createNumberOfRooms.textContent = value.numberOfRooms;

    const createaNumberOfStories = document.createElement("p");
    createaNumberOfStories.classList.add("card-number-of-stories");
    createaNumberOfStories.textContent = value.numberOfStories;

    const createFurnished = document.createElement("p");
    createFurnished.classList.add("card-furnished");
    createFurnished.textContent = value.furnished;

    const createGarden = document.createElement("p");
    createGarden.classList.add("card-garden");
    createGarden.textContent = value.garden;

    const createaPool = document.createElement("p");
    createaPool.classList.add("card-pool");
    createaPool.textContent = value.pool;

    createContainerDescription.append(
      createDescription,
      createNumberOfRooms,
      createaNumberOfStories,
      createFurnished,
      createGarden,
      createaPool,
      createX
    );
  }
}

function createCardsLand() {
  console.log("land");
  const storage = new LocalStorage();
  const dataLand = storage.getStorageLand();

  for (const value of dataLand) {
    const cardsListTarget = document.querySelector("#cards-list-container");

    const createContainerDescription = document.createElement("div");
    createContainerDescription.classList.add("container-description");
    createContainerDescription.style.position = "absolute";
    createContainerDescription.style.display = "none";

    const createCardContainer = document.createElement("div");
    createCardContainer.id = value.id;
    createCardContainer.classList.add("card-container");
    createCardContainer.style.cursor = "pointer";
    createCardContainer.addEventListener("click", () => {
      createContainerDescription.style.display = "flex";
    });

    cardsListTarget.append(createCardContainer);

    const createX = document.createElement("i");
    createX.classList.add("fa-solid", "fa-x", "close-description");
    createX.addEventListener("click", (e) => {
      e.stopPropagation();
      createContainerDescription.style.display = "none";
    });

    const cardContainerTarget = document.getElementById(value.id);

    const createTitle = document.createElement("h3");
    createTitle.classList.add("cards-tilte");
    createTitle.textContent = value.title;

    const createLocation = document.createElement("p");
    createLocation.classList.add("card-location");
    createLocation.textContent = value.location;

    const createM2 = document.createElement("p");
    createM2.classList.add("card-m2");
    createM2.textContent = value.m2;

    const createPrice = document.createElement("p");
    createPrice.classList.add("card-price");
    createPrice.textContent = value.price;

    const createAt = document.createElement("p");
    createAt.classList.add("card-createdAt");
    createAt.textContent = value.createdAt;

    cardContainerTarget.append(
      createTitle,
      createLocation,
      createM2,
      createPrice,
      createAt,
      createContainerDescription
    );
    const createDescription = document.createElement("p");
    createDescription.classList.add("card-description");
    createDescription.textContent = value.description;

    const createBuildable = document.createElement("p");
    if (value.createBuildable === true) {
      createBuildable.textContent = "Yes";
    } else {
      createBuildable.textContent = "No";
    }

    createContainerDescription.append(
      createDescription,
      createBuildable,
      createX
    );
  }
}

function createCardsApartment() {
  console.log("apartment");
  const storage = new LocalStorage();
  const dataApartment = storage.getStorageApartment();
  for (const value of dataApartment) {
    const cardsListTarget = document.querySelector("#cards-list-container");

    const createContainerDescription = document.createElement("div");
    createContainerDescription.classList.add("container-description");
    createContainerDescription.style.position = "absolute";
    createContainerDescription.style.display = "none";

    const createCardContainer = document.createElement("div");
    createCardContainer.id = value.id;
    createCardContainer.classList.add("card-container");
    createCardContainer.style.cursor = "pointer";
    createCardContainer.addEventListener("click", () => {
      createContainerDescription.style.display = "flex";
    });

    cardsListTarget.append(createCardContainer);

    const createX = document.createElement("i");
    createX.classList.add("fa-solid", "fa-x", "close-description");
    createX.addEventListener("click", (e) => {
      e.stopPropagation();
      createContainerDescription.style.display = "none";
    });

    const cardContainerTarget = document.getElementById(value.id);

    const createTitle = document.createElement("h3");
    createTitle.classList.add("cards-tilte");
    createTitle.textContent = value.title;

    const createLocation = document.createElement("p");
    createLocation.classList.add("card-location");
    createLocation.textContent = value.location;

    const createM2 = document.createElement("p");
    createM2.classList.add("card-m2");
    createM2.textContent = value.m2;

    const createPrice = document.createElement("p");
    createPrice.classList.add("card-price");
    createPrice.textContent = value.price;

    const createAt = document.createElement("p");
    createAt.classList.add("card-createdAt");
    createAt.textContent = value.createdAt;

    cardContainerTarget.append(
      createTitle,
      createLocation,
      createM2,
      createPrice,
      createAt,
      createContainerDescription
    );
    const createDescription = document.createElement("p");
    createDescription.classList.add("card-description");
    createDescription.textContent = value.description;

    const createNumberOfRooms = document.createElement("p");
    createNumberOfRooms.classList.add("card-number-of-rooms");
    createNumberOfRooms.textContent = value.numberOfRooms;

    const createaFloors = document.createElement("p");
    createaFloors.classList.add("card-floors");
    createaFloors.textContent = value.floors;

    const createaElevator = document.createElement("p");
    createaElevator.classList.add("card-floors");
    createaElevator.textContent = value.elevator;

    const createFurnished = document.createElement("p");
    createFurnished.classList.add("card-furnished");
    createFurnished.textContent = value.furnished;

    const createBalcony = document.createElement("p");
    createBalcony.classList.add("card-balcony");
    createBalcony.textContent = value.balcony;

    createContainerDescription.append(
      createDescription,
      createNumberOfRooms,
      createFurnished,
      createBalcony,
      createaFloors,
      createaElevator,
      createX
    );
  }
}

function createCardsAllProducts() {
  const storage = new LocalStorage();
  const allData = storage.getStorage();

  for (const key in allData) {
    if (Object.hasOwnProperty.call(allData, key)) {
      const element = allData[key];
      for (const value of element) {
        const cardsListDefault = document.querySelector("#cards-list-default");
        const createContainerDescription = document.createElement("div");
        createContainerDescription.classList.add("container-description");
        createContainerDescription.style.position = "absolute";
        createContainerDescription.style.display = "none";

        const createCardContainer = document.createElement("div");
        createCardContainer.id = value.id;
        createCardContainer.classList.add("card-container");
        createCardContainer.style.cursor = "pointer";
        createCardContainer.addEventListener("click", () => {
          createContainerDescription.style.display = "flex";
        });

        cardsListDefault.append(createCardContainer);

        const createX = document.createElement("i");
        createX.classList.add("fa-solid", "fa-x", "close-description");
        createX.addEventListener("click", (e) => {
          e.stopPropagation();
          createContainerDescription.style.display = "none";
        });

        const cardContainerTarget = document.getElementById(value.id);

        const createTitle = document.createElement("h3");
        createTitle.classList.add("cards-tilte");
        createTitle.textContent = value.title;

        const createLocation = document.createElement("p");
        createLocation.classList.add("card-location");
        createLocation.textContent = value.location;

        const createM2 = document.createElement("p");
        createM2.classList.add("card-m2");
        createM2.textContent = value.m2;

        const createPrice = document.createElement("p");
        createPrice.classList.add("card-price");
        createPrice.textContent = value.price;

        const createAt = document.createElement("p");
        createAt.classList.add("card-createdAt");
        createAt.textContent = value.createdAt;

        cardContainerTarget.append(
          createTitle,
          createLocation,
          createM2,
          createPrice,
          createAt,
          createContainerDescription
        );
        const createDescription = document.createElement("p");
        createDescription.classList.add("card-description");
        createDescription.textContent = value.description;

        const createNumberOfRooms = document.createElement("p");
        createNumberOfRooms.classList.add("card-number-of-rooms");
        createNumberOfRooms.textContent = value.numberOfRooms;

        const createaFloors = document.createElement("p");
        createaFloors.classList.add("card-floors");
        createaFloors.textContent = value.floors;

        const createaElevator = document.createElement("p");
        createaElevator.classList.add("card-floors");
        createaElevator.textContent = value.elevator;

        const createFurnished = document.createElement("p");
        createFurnished.classList.add("card-furnished");
        createFurnished.textContent = value.furnished;

        const createBalcony = document.createElement("p");
        createBalcony.classList.add("card-balcony");
        createBalcony.textContent = value.balcony;

        createContainerDescription.append(
          createDescription,
          createNumberOfRooms,
          createFurnished,
          createBalcony,
          createaFloors,
          createaElevator,
          createX
        );
      }
    }
  }
}
