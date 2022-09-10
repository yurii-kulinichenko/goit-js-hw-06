const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");


const handleInput = (e) => {
  const inputText = e.target.value.trim()
  input.classList.add("invalid");
  if (inputText.length === Number(dataLength)) {
    input.classList.replace("invalid", "valid");
  }
};

input.addEventListener("blur", handleInput);
