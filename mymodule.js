var fs = require('fs');
var path = require('path');
function mymodule(dir, ext, callback)
{
    fs.readdir(dir, function (err, data)
    {
        if (err)
        {
            return callback(err, null);
        }
        else
        {
            output = [];
            var arr_num = data.length;
            if ( arr_num > 0 )
            {
                for (i=0;i<arr_num;i++)
                {
                    if( path.extname(data[i]) == '.' + ext )
                    {
                        output.push(data[i]);
                    }
                }
            }
            callback(null, output);
        }
    });
}
module.exports = mymodule;
