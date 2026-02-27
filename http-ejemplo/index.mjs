import http from 'http';

// Crear el servidor HTTP básico
const server = http.createServer((req, res) => {
    // Definimos el estado de la respuesta (200 = OK)
    res.statusCode = 200;
    
    // Configuramos la cabecera para decir que enviamos texto plano
    res.setHeader('Content-Type', 'text/plain');
    
    // Enviamos el mensaje final y cerramos la conexión
    res.end('¡Hola, Mundo desde mi servidor Node.js!');
});

// Configurar el servidor para que escuche en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});