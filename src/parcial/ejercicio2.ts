// punto 2
const arrayNumber: number []=[1,2,3,4,5];
const nameFrut: string [] = ['uva','banano', 'pera', 'manzana'];
const arrayBooleans: boolean []= [false, true];

// crea un array de tuplas que contenga un numero y una palabra que lo represente
const arrayTuplas: [number, string][] = [
    [1, 'uva'],
    [2, 'banano'],
    [3, 'pera'],
    [4, 'manzana']
];

// añadir numero 6
arrayNumber.push(6);
console.log(arrayNumber, 'arrayNumber');

// eliminar el ultimo elemento del array de numeros
arrayNumber.pop();

// encuentra el indice del numero 3 en el array de numeros
const indexNumber = arrayNumber.indexOf(3);
console.log(indexNumber, 'indexNumber');

//extrae una parte del array de numeros desde el segundo hasta el cuarto elemento
const arrayNumberSlice = arrayNumber.slice(1,4);
console.log(arrayNumberSlice, 'arrayNumberSlice');


// eleve al cuadrado todos los numeros del array de numeros usando map
const arrayNumberCuadra = arrayNumber.map((num) => num * num);
console.log(arrayNumberCuadra, 'arrayNumberSquare');

// filtrar los numeros pares del array de numeros
const arrayNumberFilter = arrayNumber.filter((num) => num % 2 === 0);
console.log(arrayNumberFilter, 'arrayNumberFilter');

// sumar todos los numeros del array utilizando reduce.
const arrayNumberReduce = arrayNumber.reduce((r, num) => r + num, 0);
console.log(arrayNumberReduce, 'arrayNumberReduce');

// divide una cadena de texto en un array de palabras nameFrut y luego vuelve a unirlas en una cadena ceparadas por comas.
const arrayFru = nameFrut.join(' ');
console.log(arrayFru, 'arrayFru');

// encuentra el primer numero mayor que 25 en el array
const arrayNumberFind = [10,20,30,40,50];
const numberFind = arrayNumberFind.find((num) => num > 25);
const indexFind = arrayNumberFind.indexOf(numberFind);
console.log(numberFind, 'numberFind');
console.log(indexFind, 'indexFind');

// verifica si todos los numeros son positivos
const arrayNumberEvery = arrayNumber.every((num) => num > 0);
console.log(arrayNumberEvery, 'arrayNumberEvery');

// verifica si algun numero es mayor que 40
const arrayNumberSome = arrayNumber.some((num) => num > 40);
console.log(arrayNumberSome, 'arrayNumberSome');

// combina los arrays array1[1,2,3] y [4,5,6] en un solo array.
const array1 = [1,2,3];
const array2 = [4,5,6];
const arrayConcat = array1.concat(array2);
console.log(arrayConcat, 'arrayConcat');

// ordenar el array [5,1,4,2,3] de menor a mayor y luego revierte el orden.
const arraySort = [5,1,4,2,3];
const arrayAsc = arraySort.sort((a, b) => a - b);
const arrayDes = arrayAsc.reverse();
console.log(arrayAsc, 'arrayAsc');
console.log(arrayDes, 'arrayDes');
