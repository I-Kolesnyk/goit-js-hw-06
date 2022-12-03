const inputRef = document.querySelector('input[type="number"]');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

// inputRef.addEventListener('blur', createAmount);
createButtonRef.addEventListener('click', createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// let amount = 10;
// function createAmount(event) {
//   return (amount = Number(event.currentTarget.value));
// }

// console.log(amount);
let makeBoxes = '';
function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    const makeDiv = `<div style = 'background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px'></div>`;
    makeBoxes += makeDiv;
  }
  return console.log(makeBoxes);
}

createBoxes(5);
divBoxesRef.insertAdjacentHTML('afterbegin', makeBoxes);
console.log(divBoxesRef);
// const makeGalleryItem = ({ url, alt }) =>
//   `<li class='gallery__item'><img src=${url} alt='${alt}' width=300></li>`;

// const gallery = images.map(image => makeGalleryItem(image)).join('');
// const listRef = document.querySelector('.gallery');

// listRef.insertAdjacentHTML('afterbegin', gallery);
// console.log(listRef);
