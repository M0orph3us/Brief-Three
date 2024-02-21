import { BienImmobilier } from "./BienImmobilier.mjs";

class Appartement extends BienImmobilier {
  // params
  #floors;
  #elevator;
  #numberOfRooms;
  #furnished;
  #garden;

  // constructor
  constructor(floors, elevator, numberOfRooms, garden, furnished) {
    super();
    this.#floors = floors;
    this.#elevator = elevator;
    this.#numberOfRooms = numberOfRooms;
    this.#garden = garden;
    this.#furnished = furnished;

    this.setStorage();
  }

  // setters & getters
  get floors() {
    return this.#floors;
  }
  set floors(floors) {
    this.#floors = floors;
  }

  get elevator() {
    return this.#elevator;
  }
  set elevator(elevator) {
    this.#elevator = elevator;
  }

  get numberOfRooms() {
    return this.#numberOfRooms;
  }
  set numberOfRooms(numberOfRooms) {
    this.#numberOfRooms = numberOfRooms;
  }

  get garden() {
    return this.#garden;
  }
  set garden(garden) {
    this.#garden = garden;
  }

  get furnished() {
    return this.#furnished;
  }
  set furnished(furnished) {
    this.#furnished = furnished;
  }

  //   methods
  setStorage() {}

  setCard() {}
}
