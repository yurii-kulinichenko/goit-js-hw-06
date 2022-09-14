let counterValue = 0;
let count = document.querySelector("#value");
const countIncrement = document.querySelector('[data-action="increment"]');
const countDecrement = document.querySelector('[data-action="decrement"]');
const countUp = () => {
  counterValue++;
  count.textContent = counterValue;
};
const countDown = () => {
  counterValue--;
  count.textContent = counterValue;
};
countIncrement.addEventListener("click", countUp);
countDecrement.addEventListener("click", countDown);
