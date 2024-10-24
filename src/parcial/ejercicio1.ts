  // genere un triangulo de numeros con 5 filas utilizando ciclos for anidados.
 const arrayNumberTriangle = [];
 for (let i = 1; i <= 5; i++) {
     let row = [];
     for (let j = 1; j <= i; j++) {
         row.push(j);
     }
     arrayNumberTriangle.push(row);
 }
 console.log('Triangulo ', arrayNumberTriangle, 'arrayNumberTriangle');
