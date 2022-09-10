let counterValue = document.querySelector("#value");
const countIncrement = document.querySelector('[data-action="increment"]');
const countDecrement = document.querySelector('[data-action="decrement"]');
const countUp = () => counterValue.textContent++;
const countDown = () => counterValue.textContent--;
countIncrement.addEventListener("click", countUp);
countDecrement.addEventListener("click", countDown);
