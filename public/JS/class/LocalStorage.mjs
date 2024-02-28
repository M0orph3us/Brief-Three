export class LocalStorage {
  // constructor
  constructor() {}
  //   methods

  getStorage() {
    const getStorage = localStorage.getItem("products");
    const data = JSON.parse(getStorage);
    return data;
  }

  getAllStorage() {
    const getStorage = localStorage.getItem("products");
    const data = JSON.parse(getStorage);
    return data;
  }
  getStorageLand() {
    const land = this.getStorage().terrains;
    return land;
  }

  getStorageHouse() {
    const house = this.getStorage().maisons;
    return house;
  }

  getStorageApartment() {
    const apartment = this.getStorage().appartements;
    return apartment;
  }
}
