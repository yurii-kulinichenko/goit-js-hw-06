const text = document.querySelector("#name-input");
const finalText = document.querySelector("#name-output");
const handleInputChange = (e) => {
  finalText.textContent = e.target.value || "Anonymous";
};
text.addEventListener("input", handleInputChange);
