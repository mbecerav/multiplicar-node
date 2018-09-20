// npm init *crear documentacion*
//Requireds
//const fs = require('fs');
const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch ( comando ){

    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}`))
            .catch( e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');

}







//const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = "5";

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(argv.base);

//multiplicar.crearArchivo;
