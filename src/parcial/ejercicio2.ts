  // genere un triangulo de numeros con 5 filas utilizando ciclos for anidados.




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
const arrayNumberCuadra = arrayNumber.map((number) => number * number);
console.log(arrayNumberCuadra, 'arrayNumberSquare');

// filtrar los numeros pares del array de numeros
const arrayNumberFilter = arrayNumber.filter((number) => number % 2 === 0);
console.log(arrayNumberFilter, 'arrayNumberFilter');