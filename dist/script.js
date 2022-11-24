const colors = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonRandom = document.querySelector('#button-random-color');
const buttonClear = document.querySelector('#clear-board');
const buttonVqv = document.querySelector('#generate-board');
const inputSize = document.querySelector('#board-size');
let selectedColor = document.querySelectorAll('.color');
const colorSelected = 'color selected';
const pBoard = '#pixel-board';
let input = 0;
function colorPalette() {
  const color = selectedColor;
  color[0].className = colorSelected;
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'blue';
  color[3].style.backgroundColor = 'green';
}
function setColorStorage() {
  const setColor = colors.innerHTML;
  // console.log(setColor);
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
  param.style.border = '0.5px solid aquamarine';
  param.style.width = '40px';
  param.style.height = '40px';
  param.style.background = 'white';
  param.style.display = 'inline-block';
  param.style.margin = '0';
}
function buttonVqvEvent() {
  input = inputSize.value;
  if (input <= 0) {
    alert('Board inválido!');
  }
}
function inicializaInput() {
  input = inputSize.value;
  pixelBoard.innerHTML = '';
}
function inputComparsion() {
  if (input < 5) {
    input = 5;
    document.body.style.zoom = '100%';
  } else if (input > 50) {
    input = 50;
    document.body.style.zoom = '90%';
  }
}
function createPixels() {
  inputComparsion();
  for (let i = 0; i < input; i += 1) {
    for (let j = 0; j < input; j += 1) {
      const creatPixel = document.createElement('div');
      creatPixel.classList.add('board');
      pixelStyle(creatPixel);
      pixelBoard.appendChild(creatPixel);
    }
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
  localStorage.setItem('cleanPixel', pixelBoard.innerHTML);
}
function selectColor(event) {
  const getColor = event.target;
  if (getColor.id !== 'color-palette') {
    if (getColor.className === colorSelected) {
      getColor.className = colorSelected;
    } else {
      selectedColor[0].className = 'color';
      selectedColor[1].className = 'color';
      selectedColor[2].className = 'color';
      selectedColor[3].className = 'color';
      getColor.className = colorSelected;
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
function clearBoard() {
  const clean = localStorage.getItem('cleanPixel');
  pixelBoard.innerHTML = clean;
}
function savePixelStorage() {
  const getPixel = document.querySelector(pBoard);
  localStorage.setItem('pixelBoard', getPixel.innerHTML);
}
function getPixeCanvaslStorage() {
  const setPixel = localStorage.getItem('pixelBoard');
  if (setPixel !== null) {
    pixelBoard.innerHTML = setPixel;
  }
}
function setSizeCanvas() {
  const teste1 = document.querySelector(pBoard);
  // console.log(JSON.stringify(teste1.innerHTML));
  const try1 = JSON.stringify(teste1.innerHTML);
  localStorage.setItem('boardSize', try1);
}
function getCanvasSize() {
  const teste2 = localStorage.getItem('boardSize');
  pixelBoard.innerHTML = JSON.parse(teste2);
  if (teste2 === null) {
    createPixels();
  }
}
window.onload = function inicializa() {
  buttonVqv.addEventListener('click', inicializaInput);
  buttonRandom.addEventListener('click', randomColorPalette);
  buttonRandom.addEventListener('click', setColorStorage);
  colors.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', getColorPixelStorage);
  buttonClear.addEventListener('click', clearBoard);
  pixelBoard.addEventListener('click', savePixelStorage);
  buttonVqv.addEventListener('click', buttonVqvEvent);
  buttonVqv.addEventListener('click', createPixels);

  getCanvasSize();
  colorPalette();
  getColorStorage();
  getPixeCanvaslStorage();
  buttonVqv.addEventListener('click', setSizeCanvas);
};
