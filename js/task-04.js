const buttonDecrEl = document.querySelector("[data-action = decrement]");
console.log(buttonDecrEl);

const valueEl = document.querySelector("#value");
console.log(valueEl);

const buttonIncrEl = document.querySelector("[data-action = increment]");
console.log(buttonIncrEl);

let counterValue = 0;

function onButtonDecrClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

buttonDecrEl.addEventListener("click", onButtonDecrClick);

function onButtonIncrClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
buttonIncrEl.addEventListener("click", onButtonIncrClick);
