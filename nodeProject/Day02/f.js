/**
 * http://usejsdoc.org/
 */



// url 을사용해보자

var url = require('url');


var surl = 'http://user:pass@host.com:8080/p/a/t/h?query=string&name=korea&age=20#hash';

var cururl = url.parse(surl); // parse 객체가된다 
console.log(cururl);

var href = cururl.href;
console.log('-------------');
console.log('href : '+href);
console.log('host : '+cururl.host);
console.log('query : '+cururl.query);

console.log('-------------');
const querystring = require('querystring');
var obj = querystring.parse(cururl.query);// json객체 반환  

console.log(obj); 
console.log('obj : '+obj.query);












