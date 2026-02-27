import path from 'path';

// Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// 1. Obtener el directorio base (la carpeta que contiene al archivo)
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName); // Resultado: ./data

// 2. Obtener el nombre del archivo sin la extensión (.txt)
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName); // Resultado: example

// 3. Obtener solo la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName); // Resultado: .txt

// 4. Unir segmentos de ruta para crear una nueva (forma segura)
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath); // Resultado: /user/docs/newfile.txt