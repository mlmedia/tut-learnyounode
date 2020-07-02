/* get required modules */
var http = require('http');
var url = require('url');

/* set args */
var port = Number(process.argv[2]);

/* function to parse time + return object with hours minutes and secs only */
function parsetime (time) {
    return {
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
    }
}

/* convert time to UNIX */
function unixtime (time) {
    return {
        unixtime : time.getTime()
    }
}

/* create the server object and process the request / response */
var server = http.createServer(function(request, response)
{
    /* set vars */
    var parsed_url = url.parse(request.url, true);
    var time = new Date(parsed_url.query.iso);
    var result;

    /* pass the result if the request url is api/parsetime or api/unixtime */
    if (/^\/api\/parsetime/.test(request.url))
    {
        result = parsetime(time);
    }
    else if (/^\/api\/unixtime/.test(request.url))
    {
        result = unixtime(time);
    }

    /* if result OK, write header and send to client */
    if (result)
    {
        /* header for the response */
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(result));
    }
    /* otherwise go to 404 page */
    else
    {
        response.writeHead(404);
        response.end();
    }
});
server.listen(port);
