let color;
function getRandomHexColor() {
  return (color = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
const bodyColor = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const colorTitle = document.querySelector(".color");
const changeColor = () => {
  getRandomHexColor();
  colorTitle.textContent = `${color}`;
  bodyColor.style.backgroundColor = `${color}`;
};

changeBtn.addEventListener("click", changeColor);
