
const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = document.querySelector("input[data-length]");
console.log(inputLength);

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputLength.value.length === Number(inputLength.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
  else{
      input.classList.add('invalid')
      input.classList.remove('valid')
  }
}
