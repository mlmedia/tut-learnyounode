/* required libraries */
var http = require('http');
var bl = require('bl');

/* set empty results array + counter */
var results = [];
var count = 0;

/* function to get http responses and pass to the results array */
function http_get(index)
{
    http.get(process.argv[2 + index], function (response)
    {
        response.pipe(bl(function (err, data)
        {
            if (err)
            {
                return console.error(err);
            }
            results[index] = data.toString();
            count++;

            if (count == 3)
            {
                print_results();
            }
        }));
    });
}

/* loop through for all 3 url arguments */
for (var i = 0; i < 3; i++)
{
    http_get(i);
}

/* print each result - triggered after the count gets to 3 above */
function print_results ()
{
    for (var i = 0; i < 3; i++)
    {
        console.log(results[i]);
    }
}
