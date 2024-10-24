const arrayNumber = [1, 2, 3, 4, 5];
const nameFrut = ['uva', 'banano', 'pera', 'manzana'];
const arrayBooleans = [false, true];
const arrayTuplas = [
    [1, 'uva'],
    [2, 'banano'],
    [3, 'pera'],
    [4, 'manzana']
];
arrayNumber.push(6);
console.log(arrayNumber, 'arrayNumber');
arrayNumber.pop();
const indexNumber = arrayNumber.indexOf(3);
console.log(indexNumber, 'indexNumber');
const arrayNumberSlice = arrayNumber.slice(1, 4);
console.log(arrayNumberSlice, 'arrayNumberSlice');
const arrayNumberCuadra = arrayNumber.map((number) => number * number);
console.log(arrayNumberCuadra, 'arrayNumberSquare');
const arrayNumberFilter = arrayNumber.filter((number) => number % 2 === 0);
console.log(arrayNumberFilter, 'arrayNumberFilter');
//# sourceMappingURL=ejercicio1.js.map