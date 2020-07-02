var fs = require('fs');
var path = require('path');
var output = 'no file';
if ( process.argv[2] )
{
    var dir = process.argv[2];
    var ok_ext = process.argv[3];
    fs.readdir(dir, function callback(err, data)
    {
        var arr_num = data.length;
        if ( arr_num > 0 )
        {
            for (i=0;i<arr_num;i++)
            {
                if( path.extname(data[i]) == '.' + ok_ext )
                {
                    console.log(data[i]);
                }
            }
        }
    });
}
