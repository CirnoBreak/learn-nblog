var http = require('http');
var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};
var req = http.request(options, function (res) {
    console.log('STATUS ' + res.statusCode);
    console.log('Headers ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function () {
        console.log('ok');
    })
    req.on('error', function () {
        console.log('problem with request: ' + e.message);
    });
});
req.write('data\n');
req.write('data\n');
req.end();

