/**
 * http://usejsdoc.org/
 */

const fs = require('fs');

var infile = fs.createReadStream('./sample.txt', {flags:'r'});
var outfile = fs.createWriteStream('../sample.txt', {flags:'w'});

infile.on('data',(data)=>{
console.log(data);
outfile.write(data);
});

infile.on('end',()=>{
	console.log('읽기종료');
	outfile.end(()=>{
		console.log('쓰기종료');
	});
});