var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
    res.send( '<!DOCTYPE html>'+
        '<html>' +
        '<head>' +
        '<title>' + 'pidgeons' +
        '</title>' +
        '</head>' +
        '<body>' +
        '<h1>Pidgeons</h1>' +
        '<script src="bundle.js"></script>' +
        '</body>' +
        '</html>');

});

app.listen(PORT, function(){
    console.log('app running on port', PORT);
});

