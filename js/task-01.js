const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

// for (let i = 0; i < allCategories.length; i += 1) {
//   const allTitle = allCategories[i].querySelectorAll("h2");
//   // console.log(allTitle[0]);
//   console.log("Category: ", allTitle[0].textContent);
//   const allItems = allCategories[i].querySelectorAll("ul li");
//   console.log("Elements:", allItems.length);
// }


const allArray = [...allCategories].map(
  (category) => `Category: ${category.querySelectorAll("h2")[0].textContent} 
  Elements: ${category.querySelectorAll("ul li").length}`
). join('\n');

console.log(allArray)