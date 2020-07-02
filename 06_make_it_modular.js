var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];
mymodule(dir, ext, function(err, data)
{
    if ( err )
    {
        console.log(err);
    }
    else
    {
        var num_files = data.length;
        if (num_files > 0)
        {
            for (i = 0; i < num_files; i++)
            {
                console.log(data[i]);
            }
        }
    }
});
