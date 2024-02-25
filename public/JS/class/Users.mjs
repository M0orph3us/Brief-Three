export class Users {
  #mail;
  #password;

  constructor(mail, password) {
    this.#mail = mail;
    this.#password = password;

    this.register();
  }

  register() {
    const currentDate = new Date().toLocaleDateString("en-GB");

    const userData = {
      password: this.#password,
      createdAt: currentDate,
      isConnected: false,
    };

    const userDataStringify = JSON.stringify(userData);
    localStorage.setItem(this.#mail, userDataStringify);
  }

  checkUserMailExist() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      if (user === this.#mail) {
        return true;
      }
    }
    return false;
  }

  login() {
    if (this.checkUserMailExist()) {
      const storageGet = localStorage.getItem(this.#mail);
      const storageGetParse = JSON.parse(storageGet);
      const passwordStorage = storageGetParse.password;
      if (this.#password === passwordStorage) {
        storageGetParse.isConnected = true;
        const userDataStringify = JSON.stringify(storageGetParse);
        localStorage.setItem(this.#mail, userDataStringify);
        return true;
      }
      return false;
    }
  }
}
