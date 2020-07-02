var output = 0;
var arg_num = process.argv.length;
for(i=2; i<arg_num; i++)
{
    output += Number(process.argv[i]);
}
console.log(output);
