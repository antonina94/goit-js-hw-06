const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerUl = document.querySelector("ul");

const makeIngredients = (ingredients) => {
  return ingredients.map((item) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = item;
    ingredientsItem.classList.add("item");
    return ingredientsItem;
  });
};
const elements = makeIngredients(ingredients);

containerUl.append(...elements);

// const elements = ingredients.map(item =>{
//   const ingredientsItem = document.createElement('li');
// ingredientsItem.textContent = item
// ingredientsItem.classList.add('item');
// return ingredientsItem
// })
// console.log(elements)
