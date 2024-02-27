export function selectFormNewProperty() {
  const btnSelectNewProperty = document.querySelector(
    "#btn-select-new-property"
  );
  const formNewProperty = document.querySelector("#form-new-property");
  const houseInputContainer = document.querySelector("#house-input-container");
  const apartmentInputContainer = document.querySelector(
    "#apartment-input-container"
  );
  const landInputContainer = document.querySelector("#land-input-container");

  btnSelectNewProperty.addEventListener("click", () => {
    const selectValue = document.querySelector("#select-new-property").value;
    switch (selectValue) {
      case "house":
        console.log("house");
        formNewProperty.style.display = "flex";
        houseInputContainer.style.display = "flex";
        apartmentInputContainer.style.display = "none";
        landInputContainer.style.display = "none";
        break;
      case "apartment":
        console.log("apartment");
        formNewProperty.style.display = "flex";
        apartmentInputContainer.style.display = "flex";
        landInputContainer.style.display = "none";
        houseInputContainer.style.display = "none";
      case "land":
        console.log("land");
        formNewProperty.style.display = "flex";
        landInputContainer.style.display = "flex";
        apartmentInputContainer.style.display = "none";
        break;
      default:
        "house";
        console.log("default");
    }
  });
}
