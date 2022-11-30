const counterRef = document.querySelector('#counter');
const decrementButtonRef = counterRef.querySelector('button[data-action="decrement"]');
const incrementButtonRef = counterRef.querySelector('button[data-action="increment"]');
const valueRef = counterRef.querySelector('#value');

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

decrementButtonRef.addEventListener('click', () => {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});
incrementButtonRef.addEventListener('click', () => {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
