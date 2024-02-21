export class BienImmobilier {
  // params
  #id;
  #title;
  #description;
  #price;
  #location;
  #m2;

  // constructor
  constructor(title, description, price, location, m2) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#price = price;
    this.#location = location;
    this.#m2 = m2;
  }

  // setters & getters

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }

  get description() {
    return this.#description;
  }
  set description(description) {
    this.#description = description;
  }

  get price() {
    return this.#price;
  }
  set price(price) {
    this.#price = price;
  }

  get location() {
    return this.#location;
  }
  set location(location) {
    this.#location = location;
  }

  get m2() {
    return this.#m2;
  }
  set m2(m2) {
    this.#m2 = m2;
  }

  // methods
}
