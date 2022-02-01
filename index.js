let variable = 'soy una variable'

const constante = 3.1416

let bool = true

let persona = {
    nombre: 'Rob',
    edad: 15,
    mayorDeEdad: true,
}

console.log(persona.nombre);

if (persona.edad >= 18 ) {
    console.log('Es mayor de edad')
} else {
    console.log('No es mayor de edad')
}

let lista = [ 'fresa', 'sandia', 'frutilla', 'banana' ];

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(lista[index] )  
}

function saludo(nombre) {
    console.log('Hola: ' + nombre);
}

saludo('Cristobal');

console.log('Hello World')

// Funciones de carrousel

const slides = document.querySelector('.slides');
console.log('slides, slides');

const slidesCount = slides.childElementCount;

console.log('slidesCount', slidesCount);

const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }
    slides.style.left = `${current}%`
}

//controls

document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
})
document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
})