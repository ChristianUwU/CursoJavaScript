let juegos = [
    'Zelda',
    'Mario',
    'Metroid',
    'Chromo'
]

console.log( 'Largo: ', juegos.length );

let primer = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log( {primer, ultimo} );
console.log(primer, ultimo);

juegos.forEach( (elemento, indice , arr) =>{
    console.log( { elemento, indice , arr } )
});

let nuevaLongitud = juegos.push('F-Zero'); //añade al final del arreglo
console.log( {nuevaLongitud, juegos} );

nuevaLongitud = juegos.unshift('Fire Emblem'); //añade al inicio del arreglo
console.log( {nuevaLongitud, juegos} );

juegoBorrado = juegos.pop();  //elimina el ultimo dato del arreglo
console.log( {juegoBorrado, juegos} );


let pos = 1;

console.log( { juegos } );
let juegosBorrados = juegos.splice(pos, 2);
console.log( {juegosBorrados, juegos} );

let metroidIndex = juegos.indexOf('Metroid');
console.log( {metroidIndex} )