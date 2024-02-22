import { BienImmobilier } from "./BienImmobilier.mjs";

export class Maisons extends BienImmobilier {
  // params
  #numberOfRooms;
  #numberOfStories;
  #furnished;
  #garden;
  #pool;

  // constructor
  constructor(
    title,
    description,
    price,
    location,
    m2,
    numberOfRooms,
    numberOfStories,
    furnished,
    garden,
    pool
  ) {
    super(title, description, price, location, m2);
    this.#numberOfRooms = numberOfRooms;
    this.#numberOfStories = numberOfStories;
    this.#furnished = furnished;
    this.#garden = garden;
    this.#pool = pool;

    this.setStorage();
  }

  // setters & getters
  // get numberOfRooms() {
  //   return this.#numberOfRooms;
  // }
  // set numberOfRooms(numberOfRooms) {
  //   this.#numberOfRooms = numberOfRooms;
  // }

  // get numberOfStories() {
  //   return this.#numberOfStories;
  // }
  // set numberOfStories(numberOfStories) {
  //   this.#numberOfStories = numberOfStories;
  // }

  // get furnished() {
  //   return this.#furnished;
  // }
  // set furnished(furnished) {
  //   this.#furnished = furnished;
  // }

  // get garden() {
  //   return this.#garden;
  // }
  // set garden(garden) {
  //   this.#garden = garden;
  // }

  // get pool() {
  //   return this.#pool;
  // }
  // set pool(pool) {
  //   this.#pool = pool;
  // }

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
      numberOfRooms: this.#numberOfRooms,
      numberOfStories: this.#numberOfStories,
      furnished: this.#furnished,
      garden: this.#garden,
      pool: this.#pool,
      createdAt: currentDate,
    };
    getStorageParse.maisons.push(data);
    const dataStringify = JSON.stringify(getStorageParse);
    localStorage.setItem("products", dataStringify);
  }

  setDescription() {}
}
