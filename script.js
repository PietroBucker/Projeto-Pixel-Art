const colors = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonRandom = document.querySelector('#button-random-color');
const selectedColor = document.querySelectorAll('.color');

function colorPalette() {
  const color = document.querySelectorAll('.color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'blue';
  color[3].style.backgroundColor = 'green';
}
function setColorStorage() {
  const setColor = colors.innerHTML;
  localStorage.setItem('colorPalette', JSON.stringify(setColor));
}
function getColorStorage() {
  const getColor = localStorage.getItem('colorPalette');
  if (getColor !== null) {
    colors.innerHTML = JSON.parse(getColor);
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
  parametro.className = 'pixel';
  parametro.style.border = '1px solid black';
  parametro.style.width = '40px';
  parametro.style.height = '40px';
  parametro.style.backgroundColor = 'white';
  parametro.style.display = 'inline-block';
  parametro.style.margin = '0';
}
function createPixels() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const creatPixel = document.createElement('div');
      pixelStyle(creatPixel);
      pixelBoard.appendChild(creatPixel);
    }
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}
function selectColor(event) {
  const teste = event.target;
  console.log(teste);
  if (teste.className === 'color selected') {
    teste.className = 'color';
  } else {
    selectedColor[0].className = 'color';
    selectedColor[1].className = 'color';
    selectedColor[2].className = 'color';
    selectedColor[3].className = 'color';
    teste.className = 'color selected';
  }
}

window.onload = function iniciar() {
  buttonRandom.addEventListener('click', randomColorPalette);
  buttonRandom.addEventListener('click', setColorStorage);
  colors.addEventListener('click', selectColor);

  createPixels();
  colorPalette();
  getColorStorage();
};
