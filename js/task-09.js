function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16) .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body')
const buttonColor = document.querySelector('.change-color')
const colorChange = document.querySelector('.color')

buttonColor.addEventListener('click', onChangeColorBody )

function onChangeColorBody(){
  bodyColor.style.backgroundColor = getRandomHexColor()
  colorChange.textContent = bodyColor.style.backgroundColor
}

