const fs = require('fs');

let listarTabla = (base, limite) => {

    console.log(`Listando: \n`);
    for( let i = 1; i<=limite; i++){
        console.log( `${i} x ${base} = ${i * base}\n` );
    };

}

let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if ( !Number(base) ){
            reject (`El valor introducido "${base}" no es un numero.`);
            return;
        }

        let data = '';

        for( let i = 1; i<=limite; i++){
            data += `${i} x ${base} = ${i * base}\n`;
        };

        fs.writeFile('tabla-2.txt', data, (err) => {
            
            if (err) 
                reject (err)
            else 
                resolve('El archivo ha sido creado!')
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}