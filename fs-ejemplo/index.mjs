import fs from 'fs';

// Leer un archivo de manera asíncrona

fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer:', err);
        return;
    }
    console.log('Contenido del archivo:', data);

    fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
        if (err) throw err;
        console.log('Archivo creado y escrito');

        // Renombrar el archivo recién creado
        fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => { //error de sintaxis corregido
            if (err) throw err;
            console.log('Archivo renombrado');
        });
    });
});