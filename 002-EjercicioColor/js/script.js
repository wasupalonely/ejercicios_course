const btnColor = document.querySelector('.btn');
const bodyColor = document.querySelector('body');

const colores = [
    'red',
    'blue',
    'green',
    'yellow',
    'black',
    'purple',
    'pink',
    'orange',
    'brown',
    'gray',]

bodyColor.style.backgroundColor = 'pink';
btnColor.addEventListener('click', changeColor);

function changeColor() {
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    bodyColor.style.backgroundColor = randomColor;
}