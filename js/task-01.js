const categoriesList = document.querySelector("#categories").children;
const number = categoriesList.length;
console.log(`Number of categories: ${number}`);

const handleCategoriesList = () => {
  [...categoriesList].forEach((item) => {
    let text = item.firstElementChild.textContent;
    console.log(`Category: ${text}`);
    let elementsNumber = item.lastElementChild.children.length;
    console.log(`Elements: ${elementsNumber}`);
  });
};
handleCategoriesList();
