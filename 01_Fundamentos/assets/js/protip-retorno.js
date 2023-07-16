
    function crearPersona( nombre, apellido ){
        return{
            nombre: nombre,
            apellido: apellido
        }
    }

    const crearPersona2 = ( nombre, apellido ) =>({nombre,apellido});

    const persona = crearPersona2( 'Christian', 'Maldonado');
    console.log(persona);

    function imprimirArgumento() {
        console.log( arguments );
    };
    
    imprimirArgumento(10, true, false, 'Chrsitian', 'Hola');

    const imprimirArgumento2 = ( ...argument ) => {
        console.log(argument);
    }
    imprimirArgumento2(10, true, false, 'Chrsitian', 'Hola');

    const imprimirArgumento3 = ( edad, ...argr ) =>{
        return argr;
    }
    const [casado, vivo, nombre, saludo] = imprimirArgumento3(10, true, false, 'Chrsitian', 'Hola');
    console.log({ casado, vivo, nombre, saludo });

    const { apellido:nuevoApellido } = crearPersona('Christian', 'Maldonado');
    console.log( { nuevoApellido } );


    let tony = {
        nombre: 'Tony Stark',
        codeNombre: 'Iron Man',
        vivo: false,
        edad: 40,
        trajes: [
            'Mark I',
            'Mark V',
            'Hulkbuster'
        ]
    };

    const imprimePropiedades = ( personaje ) =>{
        console.log(personaje.nombre);
        console.log(personaje.codeNombre);
        console.log(personaje.vivo);
        console.log(personaje.edad);
        console.log(personaje.trajes);

    }

    imprimePropiedades( tony );


    console.log('---------------------------------------------------------------------')

    const imprimePropiedades2 = ( { nombre, codeNombre, vivo, edad = 15, trajes } ) =>{
        console.log({nombre});
        console.log({codeNombre});
        console.log({vivo});
        console.log({edad});
        console.log({trajes});
    }
    imprimePropiedades2( tony );