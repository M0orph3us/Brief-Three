export class LocalStorage {
  pseudo;

  constructor(pseudo) {
    this.pseudo = pseudo;
  }

  getStorage() {
    const getStorage = localStorage.getItem(this.pseudo);
    const getStorageParse = JSON.parse(getStorage);
    return getStorageParse;
  }
}
