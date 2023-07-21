    let persona = {
        nombre: 'Tony Stark',
        codeNombre: 'Iron Man',
        vivo: false,
        edad: 40,
        coords: {
            lat: 34.034,
            lng: -118.70
        },
        trajes: [
            'Mark I',
            'Mark V',
            'Hulkbuster'
        ],
        direccion: {
            zip: '10880, 90265',
            ubicacion: 'Malibu, California'
        }
    };

    console.log(persona);
    console.log('NOmbre: ', persona.nombre);
    console.log('Nombre:', persona);
    console.log('Nombre:', persona['nombre']);
    console.log('Edad:', persona.edad)
    console.log('Coors:', persona.coords.lat);
    console.log('Nro. Trajes:', persona.trajes.length);

    const x = 'vivo';
    console.log('vivo:',persona[x]);

    //eliminar un objeto

    delete persona.edad;
    console.log(persona);

    const entriesPare = Object.entries(persona);
    console.log( entriesPare );

    //para bloquear los objetos y no pueden hacer cambios
    Object.freeze( persona );

    const propiedades =  Object.getOwnPropertyNames( persona );
    const valores = Object.values( persona );

    console.log({ propiedades });
    console.log({ valores });

