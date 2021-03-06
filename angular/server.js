var express = require('express');
var app = express();
var argv = require('yargs').argv;

app.use('/', express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

var port = 3000;

if (argv.port) {
    port = argv.port;
} else if (typeof(config) !== 'undefined' && config.port) {
    port = config.port
}

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
