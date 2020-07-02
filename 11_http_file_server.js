/* get required modules */
var http = require('http');
var fs = require('fs');

/* set args */
var port = Number(process.argv[2]);
var file = process.argv[3];

/* create the server object and process the request / response */
var server = http.createServer(function(request, response)
{
    /* header for the response */
    response.writeHead(200, {
        'content-type': 'text/plain'
    });

    /* set stream and pipe the response */
    var stream = fs.createReadStream(file);
    stream.pipe(response);
});
server.listen(port);
