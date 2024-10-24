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
const arrayNumberCuadra = arrayNumber.map((num) => num * num);
console.log(arrayNumberCuadra, 'arrayNumberSquare');
const arrayNumberFilter = arrayNumber.filter((num) => num % 2 === 0);
console.log(arrayNumberFilter, 'arrayNumberFilter');
const arrayNumberReduce = arrayNumber.reduce((r, num) => r + num, 0);
console.log(arrayNumberReduce, 'arrayNumberReduce');
const arrayFru = nameFrut.join(' ');
console.log(arrayFru, 'arrayFru');
const arrayNumberFind = [10, 20, 30, 40, 50];
const numberFind = arrayNumberFind.find((num) => num > 25);
const indexFind = arrayNumberFind.indexOf(numberFind);
console.log(numberFind, 'numberFind');
console.log(indexFind, 'indexFind');
const arrayNumberEvery = arrayNumber.every((num) => num > 0);
console.log(arrayNumberEvery, 'arrayNumberEvery');
const arrayNumberSome = arrayNumber.some((num) => num > 40);
console.log(arrayNumberSome, 'arrayNumberSome');
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcat = array1.concat(array2);
console.log(arrayConcat, 'arrayConcat');
const arraySort = [5, 1, 4, 2, 3];
const arrayAsc = arraySort.sort((a, b) => a - b);
const arrayDes = arrayAsc.reverse();
console.log(arrayAsc, 'arrayAsc');
console.log(arrayDes, 'arrayDes');
const arraySortName = nameFrut.sort();
console.log(arraySortName, 'arraySortName');
const arrayNumberIncludes = arrayNumberFind.filter(num => num === 4);
console.log('si retorna un array bacio es porque el numero 4 no esta presente', arrayNumberIncludes, 'arrayNumberIncludes');
//# sourceMappingURL=ejercicio2.js.map