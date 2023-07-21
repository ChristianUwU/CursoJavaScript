
//UTILIZANDO EL CONDICIONAL IF, ELSE IF Y ELSE
let a = 15;
if ( a > 10) {
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay();

console.log( {dia} );

if ( dia === 0) {
    console.log('Es domingo');
}

/*
 dia = 0 => es asignacion
 dia == 0 => igualdad de caractares no importa el tipo
 dia === 0 => evalua tanto valor interno como tipado 
*/

//SIN USAR EL IF UNICAMENTE OBJETOS

dia = 5;
const diasLetras = { //mediante objetos
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

const diasLetras2 = [  //Mediante arreglos
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

console.log( diasLetras2[dia] || 'Dia no definido');

//OPERADORES BOOLEANOS
const regresaFalse = () =>{
    console.log('Regresa falso');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true
console.log( !regresaFalse() ); //true

//OPERACION CONDICIONAL TERNEARIO
/*
* Dias de semana abrimos a las 11
* pero los fines de semana abrimos a las 9
*///ENTRA A UN SITIO WEB, PARA CONSULTAR SI ESTA ABIERTO HOY

const dia2 = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

horaApertura = ( [0,6].includes(dia2) ) ? 9 : 11;
// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`
// }
mensaje = (horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
console.log({ horaApertura, mensaje });

//Switch
const dia3 = 2;
switch (dia3) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        break;
}
//While y do While

const carros = ['Ford', 'Manza', 'Honda', 'Toyota'];
let i = 0;
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

//for for in for of

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
//for tradicional
for (let i = 0; i < heroes.length; i++) {
    console.log( heroes[i]);
}

console.warn('For in');
for (const i in heroes) {
    console.log(heroes[i]);
}
console.warn('For of'); //extrae el valor del arreglo
for (const heroe of heroes) {
    console.log( heroe )
}