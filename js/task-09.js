const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', handleChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = document.body.style.backgroundColor;
}
