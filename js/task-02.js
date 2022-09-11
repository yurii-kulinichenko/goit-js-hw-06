const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map((item) => {

  const listItem = document.createElement("li");
  console.log(listItem)
  listItem.textContent = item;
  listItem.classList.add("item");
  return listItem;
  })
  
  document.querySelector("#ingredients").append(...list)
