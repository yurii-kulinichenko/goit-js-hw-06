const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map((item) => {
  let listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerHTML = item;
  document.querySelector("#ingredients").append(listItem);
});
