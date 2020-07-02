var fs = require('fs');
var output = 'no file';
if ( process.argv[2] )
{
    var filepath = process.argv[2];
    fs.readFile(filepath, function callback(err, data) {
        var filestring = data.toString();
        var splitstring = filestring.split("\n");
        var linecount = splitstring.length - 1;
        console.log(linecount);
    });
}
