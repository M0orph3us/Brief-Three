export class Users {
  #pseudo;
  #password;

  constructor(pseudo, password) {
    this.#pseudo = pseudo;
    this.#password = password;
  }

  register() {
    const currentDate = new Date().toLocaleDateString("en-GB");

    const userData = {
      password: this.#password,
      createdAt: currentDate,
    };

    const userDataStringify = JSON.stringify(userData);
    localStorage.setItem(this.#pseudo, userDataStringify);
  }

  login() {
    let isConnected = false;
    const storageGet = localStorage.getItem(this.#pseudo);
    const storageGetParse = JSON.parse(storageGet);
    const passwordStorage = storageGetParse.password;
    if (this.#password === passwordStorage) {
      isConnected = true;
      return isConnected;
    }
  }
}
