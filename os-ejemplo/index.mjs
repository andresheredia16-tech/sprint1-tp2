import os from 'os';

// Arquitectura del procesador (ej: x64, arm64)
console.log('Arquitectura:', os.arch());

// Plataforma del sistema operativo (ej: win32, linux, darwin)
console.log('Plataforma:', os.platform());

// Memoria total disponible en el sistema (en bytes)
console.log('Memoria total:', os.totalmem(), 'bytes');

// Memoria RAM que no se está usando actualmente (en bytes)
console.log('Memoria libre:', os.freemem(), 'bytes');

// Información técnica de cada núcleo de la CPU
console.log('Información de la CPU:', os.cpus());