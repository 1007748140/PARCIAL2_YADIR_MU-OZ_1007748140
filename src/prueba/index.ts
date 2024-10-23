/*1. Tipos Primitivos en TypeScript
1.1 Declara variables utilizando los tipos primitivos boolean, number, string, null y undefined.
Imprime sus valores en la consola.

1.2 Declara una variable utilizando any e intenta asignarle diferentes tipos de
valores (número, cadena, booleano). ¿Qué sucede? ¿Cuál es el comportamiento de any?
*/

let stateUser: boolean = true;
console.log(stateUser, 'stateUsers');

let modeloCar: number = 145;
console.log(modeloCar, 'modeloCar');


let tienda: any={
    producto: 'arroz',
    precio: 1000
}



function calculateCircleArea(radio: number, pi: number = 3.14 ) {
    return (pi* radio * radio);
}

let radio: number = 425

const areaCircle: number = calculateCircleArea(radio);
console.log('el area del circulo es: ', areaCircle)