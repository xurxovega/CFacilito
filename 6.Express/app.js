var express = require('express');

var app = express();

// app.get('/', function(req, res){})
app.get('/', (req, res)=> { 
    res.send('hola mundo');
})

app.listen(8080);