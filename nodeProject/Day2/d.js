/**
 * http://usejsdoc.org/
 */

var os = require('os');

var name = os.hostname();
console.log(name);


//path 
var path = require('path');


// __filename; 파일이어디있고 파일확장자가뭔지
// __dirname; 경로명 
console.log(__filename);
console.log(__dirname);

var img = path.join(__dirname,'img');
console.log(img);
var test = path.join(__dirname,'img','test.png');
console.log(test);

// .  현재경로 
// .. 상위경로 

//var foo = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
var foo = path.join('/foo', 'bar','..', 'baz/asdf', 'quux', '..');
//위는  \foo\baz\asdf가나올거같다 
console.log(foo);
//quux까지갔다가 그 상위 인 asdf를와서 asdf를볼수있다
//path는 경로를 위해 사용  


//자바스크립트는 싱글쓰레드 두개의작업이 동시에안된다 














