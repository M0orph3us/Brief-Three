export class Users {
  #mail;
  #password;

  constructor(mail, password) {
    this.#mail = mail;
    this.#password = password;
  }

  register() {
    const currentDate = new Date().toLocaleDateString("en-GB");

    const userData = {
      password: this.#password,
      createdAt: currentDate,
    };

    const userDataStringify = JSON.stringify(userData);
    localStorage.setItem(this.#mail, userDataStringify);
  }

  checkUserMailExist() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      if (user === this.#mail) {
        return true;
      } else {
        return false;
      }
    }
  }

  login() {
    let isConnected = false;
    const storageGet = localStorage.getItem(this.#mail);
    const storageGetParse = JSON.parse(storageGet);
    const passwordStorage = storageGetParse.password;
    if (this.#password === passwordStorage) {
      isConnected = true;
      return isConnected;
    } else {
      return isConnected;
    }
  }
}
