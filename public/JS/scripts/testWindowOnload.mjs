const newPropertyTarget = document.querySelector("#new-property-container");
window.onload = () => {
  newPropertyTarget.innerHTML = '<form action="#" method="post" id="test">';
  for (let k = 0; k < 4; k++) {
    newPropertyTarget.innerHTML += `<label for="input${k}"></label>`;
    newPropertyTarget.innerHTML += `<input type="text" name="input${k}" id="input${k}"></input>`;
  }
  newPropertyTarget.innerHTML += "</form>";
};

const newPropertyTarget = document.querySelector("#new-property-container");
window.onload = () => {
  const createForm = document.createElement("form");
  createForm.id = "form-new-property";

  newPropertyTarget.append(createForm);

  for (let k = 0; k < 4; k++) {
    const createLabel = document.createElement("label");
    createLabel.htmlFor = `input-${k}`;
    createLabel.textContent = `Label ${k}`;

    const createInput = document.createElement("input");
    createInput.type = "text";
    createInput.name = `input-${k}`;
    createInput.id = `input-${k}`;

    createForm.append(createLabel, createInput);
  }
};
