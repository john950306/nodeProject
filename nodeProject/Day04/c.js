/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();


//app.use(express.static('public'));
//app.use('/static', express.static(__dirname + '/public'));
app.use( express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/aaa', function (req, res) {
	res.send('aaa임마!!!!!!!!');
});//라우팅!
app.get('/aaa.html', function (req, res) {
	res.send('aaa임마!!!!!!!!');
});//라우팅!
app.post('/aaa', function (req, res) {
	res.send('poerpwopfaoefa마!!!!!!!!');
});//안쓰고하면 405에러
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});


//노드프로젝트로 옮긴다 




app.listen(63000);



































