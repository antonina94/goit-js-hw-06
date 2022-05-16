const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerEl = document.querySelector("ul");

const makeIngredients = (ingredients) => {
  return ingredients.map((item) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = item;
    ingredientsItem.classList.add("item");
    return ingredientsItem;
  });
};
const elements = makeIngredients(ingredients);

containerEl.append(...elements);
