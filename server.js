var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
    res.send('\
        <!DOCTYPE html>\
        <head>\
        <title>Mean pidgeons</title>\
        <base href="/">\
         <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">\
        <head>\
        <body>\
            <div class="layout-row">\
                <div ui-view="topPanel"></div>\
            </div>\
            <div class="layout-column flex-33">\
                <div ui-view="leftPanel"></div>\
            </div>\
            <div class="layout-column flex-66">\
                <div ui-view="mainContent"></div>\
            </div>\
            <script src="bundle.js"></script>\
        </body>\
    ');
});

app.listen(PORT, function(){
    console.log('app running on port', PORT);
});

