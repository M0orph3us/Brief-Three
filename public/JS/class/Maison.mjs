import { BienImmobilier } from "./BienImmobilier.mjs";

class Maison extends BienImmobilier {
  // params
  #numberOfRooms;
  #numberOfStories;
  #furnished;
  #garden;
  #pool;

  // constructor
  constructor(numberOfRooms, numberOfStories, furnished, garden, pool) {
    super();
    this.#numberOfRooms = numberOfRooms;
    this.#numberOfStories = numberOfStories;
    this.#furnished = furnished;
    this.#garden = garden;
    this.#pool = pool;

    this.setStorage();
  }

  // setters & getters
  get numberOfRooms() {
    return this.#numberOfRooms;
  }
  set numberOfRooms(numberOfRooms) {
    this.#numberOfRooms = numberOfRooms;
  }

  get numberOfStories() {
    return this.#numberOfStories;
  }
  set numberOfStories(numberOfStories) {
    this.#numberOfStories = numberOfStories;
  }

  get furnished() {
    return this.#furnished;
  }
  set furnished(furnished) {
    this.#furnished = furnished;
  }

  get garden() {
    return this.#garden;
  }
  set garden(garden) {
    this.#garden = garden;
  }

  get pool() {
    return this.#pool;
  }
  set pool(pool) {
    this.#pool = pool;
  }

  //   methods
  setStorage() {
    const data = {};
  }

  setCard() {}
}
