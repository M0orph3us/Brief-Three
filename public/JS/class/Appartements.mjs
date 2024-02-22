import { BienImmobilier } from "./BienImmobilier.mjs";

export class Appartements extends BienImmobilier {
  // params
  #floors;
  #elevator;
  #numberOfRooms;
  #furnished;
  #balcony;

  // constructor
  constructor(
    title,
    description,
    price,
    location,
    m2,
    floors,
    elevator,
    numberOfRooms,
    balcony,
    furnished
  ) {
    super(title, description, price, location, m2);
    this.#floors = floors;
    this.#elevator = elevator;
    this.#numberOfRooms = numberOfRooms;
    this.#balcony = balcony;
    this.#furnished = furnished;

    this.setStorage();
  }

  // setters & getters
  // get floors() {
  //   return this.#floors;
  // }
  // set floors(floors) {
  //   this.#floors = floors;
  // }

  // get elevator() {
  //   return this.#elevator;
  // }
  // set elevator(elevator) {
  //   this.#elevator = elevator;
  // }

  // get numberOfRooms() {
  //   return this.#numberOfRooms;
  // }
  // set numberOfRooms(numberOfRooms) {
  //   this.#numberOfRooms = numberOfRooms;
  // }

  // get balcony() {
  //   return this.#balcony;
  // }
  // set balcony(balcony) {
  //   this.#balcony = balcony;
  // }

  // get furnished() {
  //   return this.#furnished;
  // }
  // set furnished(furnished) {
  //   this.#furnished = furnished;
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
      price: this.price,
      location: this.location,
      m2: this.m2,
      floors: this.#floors,
      elevator: this.#elevator,
      numberOfRooms: this.#numberOfRooms,
      furnished: this.#furnished,
      balcony: this.#balcony,
      createdAt: currentDate,
    };
    getStorageParse.appartements.push(data);
    const dataStringify = JSON.stringify(getStorageParse);
    localStorage.setItem("products", dataStringify);
  }
}
