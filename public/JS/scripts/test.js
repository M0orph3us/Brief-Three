import { Maisons } from "../class/Maisons.mjs";
import { Terrains } from "../class/Terrains.mjs";
import { BienImmobilier } from "../class/BienImmobilier.mjs";

// const mais = new Terrains("bellevue", "blabla", 1000, "Monaco", 15, "oui");

const checkLocalStorage = localStorage.getItem("products");
if (checkLocalStorage === null) {
  const data = {
    maisons: [],
    appartements: [],
    terrains: [],
  };
  const dataStringify = JSON.stringify(data);
  localStorage.setItem("products", dataStringify);
}

const getData = localStorage.getItem("products");
const getDataParse = JSON.parse(getData);

for (let k = 0; k < getDataParse.terrains.length; k++) {
  const id = getDataParse.terrains[k].price;
  console.log(id);
}
