// const inputRef = document.querySelector('input[type="number"]')
const inputRef = document.querySelector('input');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');
const divRef = document.querySelector('#controls');

inputRef.addEventListener('input', createAmount);
inputRef.addEventListener('focus', handleInputReset);
createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createAmount(event) {
  if (event.currentTarget.value > 0 && event.currentTarget.value <= 100) {
    inputRef.setAttribute(`data-amount`, `${event.currentTarget.value}`);
  } else {
    alert('Введіть ціле число у діапазоні від 1 до 100');
    inputRef.removeAttribute('data-amount');
  }
}

function handleInputReset(event) {
  event.currentTarget.value = '';
}

let boxes = '';
function createBoxes() {
  let width = 30;
  let height = 30;
  const amount = inputRef.getAttribute('data-amount');
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    const oneBox = `<div style = 'background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px'></div>`;
    boxes += oneBox;
  }
  divBoxesRef.insertAdjacentHTML('afterbegin', boxes);
  boxes = '';
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}
