    //diferentes formas de usar las funciones

    //Metodo 1
    function saludar( nombre ){
        console.log('Hola '+ nombre);
    };
    const nombre = 'Chris';
    saludar( nombre );

    //Metodo 2 funcion anonima
    const saludar2 = function( nombre ) {
        console.log('Hola '+ nombre);
    };

    saludar2( 'Maldonado' );

    //Metodo 3 funciones de flecha

    const saludar3 = () =>{
        console.log('Hola3')
    }
    saludar3();

    const sumar = (a, b) =>{
        return a + b;
    }
    console.log(sumar(5,6));

    function getAleatorio(){
        return Math.random();
    }

    console.log(getAleatorio());

    const getAleatorio2 = () =>Math.random();

    console.log(getAleatorio2());
