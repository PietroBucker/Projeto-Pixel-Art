const colors = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonRandom = document.querySelector('#button-random-color');
let selectedColor = document.querySelectorAll('.color');
// const colorPix = document.querySelector('.selected');
function colorPalette() {
  const color = selectedColor;
  color[0].className = 'color selected';
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'blue';
  color[3].style.backgroundColor = 'green';
}
function setColorStorage() {
  const setColor = colors.innerHTML;
  console.log(setColor);
  localStorage.setItem('colorPalette', setColor);
}
function getColorStorage() {
  const getColor = localStorage.getItem('colorPalette');
  if (getColor !== null) {
    colors.innerHTML = getColor;
    selectedColor = document.querySelectorAll('.color');
  }
}
function randomColorPalette() {
  const colorBox = document.querySelectorAll('.color');
  for (let index = 1; index < colorBox.length; index += 1) {
    const randomR = Math.floor(Math.random() * 255 + 1);
    const randomG = Math.floor(Math.random() * 255 + 1);
    const randomB = Math.floor(Math.random() * 255 + 1);
    if ((randomR !== randomG) !== randomB) {
      colorBox[
        index
      ].style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
  }
}
function pixelStyle(parametro) {
  const param = parametro;
  param.className = 'pixel';
  param.style.border = '1px solid black';
  param.style.width = '40px';
  param.style.height = '40px';
  param.style.background = 'white';
  param.style.display = 'inline-block';
  param.style.margin = '0';
}
function createPixels() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const creatPixel = document.createElement('div');
      creatPixel.classList.add('board');
      pixelStyle(creatPixel);
      pixelBoard.appendChild(creatPixel);
    }
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}
function selectColor(event) {
  const getColor = event.target;
  if (getColor.id !== 'color-palette') {
    if (getColor.className === 'color selected') {
      getColor.className = 'color selected';
    } else {
      selectedColor[0].className = 'color';
      selectedColor[1].className = 'color';
      selectedColor[2].className = 'color';
      selectedColor[3].className = 'color';
      getColor.className = 'color selected';
    }
  }
}
function getColorPixelStorage(event) {
  const getsSelected = document.querySelector('.selected');
  const getColor = getsSelected.style.backgroundColor;
  const gerTarget = event.target;
  if (gerTarget.id !== 'pixel-board') {
    gerTarget.style.backgroundColor = getColor;
    gerTarget.style.borderColor = getColor;
  }
}

window.onload = function inicializa() {
  buttonRandom.addEventListener('click', randomColorPalette);
  buttonRandom.addEventListener('click', setColorStorage);
  colors.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', getColorPixelStorage);
  colorPalette();
  getColorStorage();
  createPixels();
};
