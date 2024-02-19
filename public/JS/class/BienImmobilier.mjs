export class BienImmobilier {
  // params
  #id;
  title;
  description;
  price;
  location;

  // constructor
  constructor(title, description, price, location) {
    this.#id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
  }

  // Setters & Getters

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get title() {
    return this.title;
  }
  set title(title) {
    this.title = title;
  }

  get description() {
    return this.description;
  }
  set description(description) {
    this.description = description;
  }

  get price() {
    return this.price;
  }
  set price(price) {
    this.price = price;
  }

  get location() {
    return this.location;
  }
  set location(location) {
    this.location = location;
  }

  // methods
}
