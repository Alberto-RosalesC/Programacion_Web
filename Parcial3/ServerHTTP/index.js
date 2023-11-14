const http = require('http');

const servidor = http.createServer((req, res) => {
    //Configuración de encabezados para permitir CORS
    
    /*res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');*/

    // Respuesta del servidorr
    res.write("Servidor http Node contestado a petición GET");
    res.end();
});

servidor.listen(8082, () => {
    console.log("Servidor Node HTTP corriendo en el puerto 8082");
});


