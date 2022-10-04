window.onload = function () {
const buttonRandom = document.querySelector('#button-random-color');

function randomColorPalette (){
  const colorBox = document.querySelectorAll('.color');
    for (let index = 1; index < colorBox.length; index += 1 ){
      const randomR = Math.floor(Math.random()*255+1);
      const randomG = Math.floor(Math.random()*255+1);
      const randomB = Math.floor(Math.random()*255+1);
      if(randomR !== randomG !== randomB){
      colorBox[index].style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
      }
    }
}
buttonRandom.addEventListener('click', randomColorPalette)





colorPalette();
};

function colorPalette() {
  const color = document.querySelectorAll('.color');
  console.log(color);
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'blue';
  color[3].style.backgroundColor = 'green';
}