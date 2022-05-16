const buttonDecrEl = document.querySelector("[data-action = decrement]");
// console.log(buttonDecrEl);

const valueEl = document.querySelector("#value");
// console.log(valueEl);

const buttonIncrEl = document.querySelector("[data-action = increment]");
// console.log(buttonIncrEl);

const counterValue = 0;

function onButtonDecrClick(event) {
  const counterValue = Number(valueEl.textContent);
  valueEl.textContent = counterValue - 1;
  console.log(counterValue);
}

buttonDecrEl.addEventListener("click", onButtonDecrClick);

function onButtonIncrClick(event) {
  const counterValue = Number(valueEl.textContent);
  valueEl.textContent = counterValue + 1;
  console.log(counterValue);
}
buttonIncrEl.addEventListener("click", onButtonIncrClick);
