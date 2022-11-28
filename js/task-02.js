const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

// const elementsLi = [];

// for (const ingredient of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredient;
//   elementsLi.push(itemEl);
// }
// listRef.append(...elementsLi);
// console.log(listRef);

// const liArray = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredient;
//   return itemEl;
// });
// listRef.append(...liArray);
// console.log(listRef);

const createLiArray = array => {
  return array.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = item;
    return itemEl;
  });
};

const liArray = createLiArray(ingredients);
listRef.append(...liArray);
console.log(listRef);
