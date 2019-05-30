var http = require('http');
var fs = require('fs');

// var html = fs.readFileSync('./app.html'); // Lectura de fichero síncrona

http.createServer( (req, res) => {
    fs.readFile('./app.html', (err, data) => {
/*         res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(data); */

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({name:'Darío', surname: 'Vega Silva'}));
        res.end(); 
    });
}).listen(1414);
