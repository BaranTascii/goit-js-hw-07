function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Rastgele hex renk al
  body.style.backgroundColor = newColor; // <body> arka plan rengini değiştir
  colorSpan.textContent = newColor; // <span class="color"> içine aynı rengi yaz
});