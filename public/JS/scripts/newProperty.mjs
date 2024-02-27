export function selectFormNewProperty() {
  const btnSelectNewProperty = document.querySelector(
    "#btn-select-new-property"
  );
  const formNewProperty = document.querySelector("#input-container");
  const houseInputContainer = document.querySelector("#house-input-container");
  const apartmentInputContainer = document.querySelector(
    "#apartment-input-container"
  );
  const landInputContainer = document.querySelector("#land-input-container");
  const btnFormNewProperty = document.querySelector("#btn-form-new-property");

  btnSelectNewProperty.addEventListener("click", () => {
    const selectValue = document.querySelector("#select-new-property").value;
    console.log("value", selectValue);
    switch (selectValue) {
      case "house":
        console.log("house");
        formNewProperty.style.display = "flex";
        houseInputContainer.style.display = "flex";
        btnFormNewProperty.style.display = "block";

        apartmentInputContainer.style.display = "none";
        landInputContainer.style.display = "none";
        break;
      case "apartment":
        console.log("apartment");
        formNewProperty.style.display = "flex";
        apartmentInputContainer.style.display = "flex";
        btnFormNewProperty.style.display = "block";

        landInputContainer.style.display = "none";
        houseInputContainer.style.display = "none";
        break;
      case "land":
        console.log("land");
        formNewProperty.style.display = "flex";
        landInputContainer.style.display = "flex";
        btnFormNewProperty.style.display = "block";

        apartmentInputContainer.style.display = "none";
        houseInputContainer.style.display = "none";
        break;
      default:
        "house";
        console.log("default");
    }
  });
}
function inputLandValue() {
  const titleValue = document.querySelector("#title").value;
  const descriptionValue = document.querySelector("#description").value;
  const priceValue = document.querySelector("#price").value;
  const locationValue = document.querySelector("#location").value;
  const m2Value = document.querySelector("#m2").value;
  const landValue = document.querySelector("#buildable").value;
  const arrayValue = [
    titleValue,
    descriptionValue,
    priceValue,
    locationValue,
    m2Value,
    landValue,
  ];
  return arrayValue;
}
const btnFormNewProperty = document.querySelector("#btn-form-new-property");
btnFormNewProperty.addEventListener("click", () => {
  const selectValue = document.querySelector("#select-new-property").value;
  if (selectValue === "land") {
    inputLandValue();
    console.log(inputLandValue());
  }
});
