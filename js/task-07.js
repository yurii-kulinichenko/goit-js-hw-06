const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const handleInput = (e) => {
 text.style.fontSize = `${e.target.value}px`;
};
input.addEventListener("input", handleInput);
