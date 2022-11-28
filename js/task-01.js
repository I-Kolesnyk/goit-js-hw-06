// Розрахунок кількості категорій

const listRef = document.querySelector('#categories');
console.log('Number of categories:', listRef.children.length);

/* Виведення заголовку категорій та 
кількості елементів у вкладеному списку */

const categoriesRef = listRef.querySelectorAll('.item');
const listInsideCategoryRef = listRef.querySelector;

const findCategoryTitleAndNumberOfLi = category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
};

categoriesRef.forEach(findCategoryTitleAndNumberOfLi);
