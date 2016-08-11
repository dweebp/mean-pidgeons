var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
    res.send('\
        <!DOCTYPE html>\
        <head>\
        <title>Mean pidgeons</title>\
        <base href="/">\
        <head>\
        <body>\
            <div ui-view></div>\
            <script src="bundle.js"></script>\
        </body>\
    ');
});

app.listen(PORT, function(){
    console.log('app running on port', PORT);
});

