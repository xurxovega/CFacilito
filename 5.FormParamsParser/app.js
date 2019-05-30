var http = require('http');
var fs = require('fs');
var parser = require('./parser').parser;
var render = require('./render').render;

http.createServer((req, res) => {
    
    if ( req.url.indexOf('favicon.ico')  > 0 ) { return; }

    fs.readFile('./app.html', (err, html) => {
        
        var name = 'Darío J. Vega Silva';
        var age = '15';
       
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(render( html.toString(), parser(req)) );
        res.end();
    });
}).listen(1414);