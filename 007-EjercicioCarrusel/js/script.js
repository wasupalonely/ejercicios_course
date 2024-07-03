const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const botones = document.querySelector(".btn");
const imagenes = document.querySelector(".images");

let imgMuestra = ["001", "002", "003"];

let contador = 0;

btnLeft.addEventListener("click", left);
btnRight.addEventListener("click", right);

function left() {
    contador--
    if (contador < 0) {
        contador = imgMuestra.length - 1
    }
    imagenes.style.background = `url(img/${imgMuestra[contador]}.jpg)`
}

function right() {
    contador++
    if (contador > imgMuestra.length - 1) {
        contador = 0
    }
    imagenes.style.background = `url(img/${imgMuestra[contador]}.jpg)`
}