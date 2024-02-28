import { BienImmobilier } from "./BienImmobilier.mjs";
export class Terrains extends BienImmobilier {
  // params
  #buildable;

  // constructor
  constructor(title, description, price, location, m2, buildable) {
    super(title, description, price, location, m2);
    this.#buildable = buildable;

    this.setStorage();
  }

  //   methods
  setStorage() {
    const currentDate = new Date().toLocaleDateString("en-GB");
    const getStorage = localStorage.getItem("products");
    const getStorageParse = JSON.parse(getStorage);
    const data = {
      title: this.title,
      id: this.id,
      description: this.description,
      price: this.price + "€",
      location: this.location,
      m2: this.m2 + "m2",
      buildable: this.#buildable,
      createdAt: currentDate,
    };
    getStorageParse.terrains.push(data);
    const dataStringify = JSON.stringify(getStorageParse);
    localStorage.setItem("products", dataStringify);
  }
}
