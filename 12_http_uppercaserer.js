/* get required modules */
var http = require('http');
var map = require('through2-map');

/* set args */
var port = Number(process.argv[2]);

/* create the server object and process the request / response */
var server = http.createServer(function(request, response)
{
    /* check for post */
    if ( request.method == 'POST' )
    {
        /* set stream and pipe the response */
        request.pipe(map(function(chunk)
        {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
    else
    {
        return response.end('Send me a POST!');
    }
});
server.listen(port);
