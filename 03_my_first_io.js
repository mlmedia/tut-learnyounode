var fs = require('fs');
var output = 'no file';
if ( process.argv[2] )
{
    var filepath = process.argv[2];
    var buffer = fs.readFileSync(filepath);
    var filestring = buffer.toString();
    var splitstring = filestring.split("\n");
    var linecount = splitstring.length - 1;
}
console.log(linecount);
