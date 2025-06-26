function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  const boxArray = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxArray.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxArray);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value.trim());

  if (amount < 1 || amount > 100) return;

  destroyBoxes();
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
