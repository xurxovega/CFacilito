var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('./app.html', (err, html) => {
        
        // El código viene en HEXA con lo que hay que convertirlo a lenguaje humano
        var htmlString = html.toString(); 
        // Expresión regular que busca las llaves {}
        var varsToCatch = htmlString.match(/[^\{\}]+(?=\})/g);

        console.log(varsToCatch);

        var name = 'Darío J. Vega Silva';
        var age = '15';

        for (var i = 0; i < varsToCatch.length; i++){
            // Evalua el nombre de la variable del html y lo ejecuta como javaScript
            var value = eval(varsToCatch[i]);
            //console.log(varsToCatch[i], value);

            //Reemplaza el valor de html con llaves al valor de la variable.
            htmlString = htmlString.replace('{{'+ varsToCatch[i] + '}}', value);
        }
        console.log(htmlString);

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(htmlString); 
        res.end();
    });
}).listen(1414);
