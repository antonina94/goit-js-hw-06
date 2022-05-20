const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

// for (let i = 0; i < allCategories.length; i += 1) {
//   const allTitle = allCategories[i].querySelectorAll("h2");
//   // console.log(allTitle[0]);
//   console.log("Category: ", allTitle[0].textContent);
//   const allItems = allCategories[i].querySelectorAll("ul li");
//   console.log("Elements:", allItems.length);
// }

const allAray = allCategories.forEach((category) => {
  const allTitle = category.querySelectorAll("h2")[0].textContent;
  console.log("Category:", allTitle);
  const allItems = category.querySelectorAll("ul li").length;
  console.log("Elements:", allItems);
});
