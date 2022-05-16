const inputSize = document.querySelector("#font-size-control");
console.log(inputSize);

const textSize = document.querySelector("#text");
console.log(textSize);

inputSize.addEventListener("input", onInputChange);

function onInputChange() {
  textSize.style.fontSize = `${inputSize.value}px`;
}
