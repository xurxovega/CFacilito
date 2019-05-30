var http = require('http');


http.createServer( (req, res) => { //Esta función se ejecuta cada vez que el navegador hace un petición con Node
    //req -> Request: Solicitud
    //res -> Response: Respuesta
    console.log('Hola Mundo');

    res.end(); // Hay que finalizar la respuesta para que el navegador sepa que ya acabó.
    
}).listen(1414);

