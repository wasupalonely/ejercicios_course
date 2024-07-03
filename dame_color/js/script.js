const btnColor = document.querySelector('.btn');
const btnLang = document.querySelector('.btn-lang');
const bodyColor = document.querySelector('body');

let language = 'ES';
let color = bodyColor.style.backgroundColor;

const colores = [
    ['red', 'Rojo'],
    ['blue', 'Azul'],
    ['green', 'Verde'],
    ['yellow', 'Amarillo'],
    ['black', 'Negro'],
    ['purple', 'Morado'],
    ['pink', 'Rosado'],
    ['orange', 'Naranja'],
    ['brown', 'CAfé'],
    ['gray', 'Gris']
    ,]

bodyColor.style.backgroundColor = 'pink';
btnColor.addEventListener('click', changeColor);
btnLang.addEventListener('clcick', changeLanguage);

function changeLanguage() {
    if (language === 'ES') {
        language = 'EN';
        btnLang.textContent = 'ES';
    } else {
        language = 'ES';
        btnLang.textContent = 'EN';
    }

    btnColor.textContent = `El color actual es el ${color}`
}

function changeColor() {
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    bodyColor.style.backgroundColor = randomColor[0];
    btnColor.textContent = `El color actual es el ${language === 'EN' ? randomColor[0] : randomColor[1]}`;
    color = randomColor;
}