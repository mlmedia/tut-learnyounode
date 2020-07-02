/* get required libraries */
var net = require('net');

/* set arg vars */
var port = Number( process.argv[2] );

/* function to zerofill the date values */
function zerofill(i)
{
    return (i < 10 ? '0' : '') + i;
}

/* set and format the date */
function now ()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var date_string = year + '-' + zerofill(month + 1) + '-' + zerofill(day) + ' ' + zerofill(hours) + ':' + zerofill(mins);
    return date_string;
}

/* create the server and write the data string to the socket */
var server = net.createServer(function(socket)
{
    socket.write(now() + "\n");
    socket.end();
});
server.listen(port);
