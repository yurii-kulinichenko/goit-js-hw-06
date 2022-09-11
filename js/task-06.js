const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

const handleInput = (e) => {
  const inputText = e.target.value.trim();

  if (inputText.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", handleInput);
