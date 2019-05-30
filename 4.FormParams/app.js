var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    
    if ( req.url.indexOf('favicon.ico')  > 0 ) { return; }

    fs.readFile('./app.html', (err, html) => {

        var htmlString = html.toString();
        var varsToCatch = htmlString.match(/[^\{\}]+(?=\})/g);
        console.log(varsToCatch);
        var name = 'Darío J. Vega Silva';
        var age = '15';

        // Con esto buscamos los parametros en la URL.
        // 1º Partimos la URL de path y los parámetros. http://localhost:1414/?name=Dario
        // 2º de los parámetros, partimos todos para un array
        var paramsArray = [];
        if (req.url.indexOf('?') > 0 ){
            var urlData = req.url.split('?');
            paramsArray = urlData[1].split('&');
            //paramsArray = 'name=dario'
        };
        // console.log(paramsArray.length);
        var params = [];
        for(let i = 0; i < paramsArray.length; i++){
            let paramsData = paramsArray[i].split('=');
            //console.log(paramsData);
            params[paramsData[0]] = paramsData[1];
        }
        // console.log(params);

        for (var i = 0; i < varsToCatch.length; i++) {
            // Busca dentro de Parametros por orden del bucle, el valor según i. y sustituimos por valor asignado.
            value = params[varsToCatch[i]]; 
            htmlString = htmlString.replace('{' + varsToCatch[i] + '}', value);
        }
       
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(htmlString);
        res.end();
    });
}).listen(1414);
