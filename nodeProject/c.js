/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();


//app.use(express.static('public'));
//app.use('/static', express.static(__dirname + '/public'));
//app.use('/lee', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));


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

// login.html불러오기가

//폼처리
app.get('/form', function (req, res) {
	var name = req.query.name;
	var age = req.query.age;
	var mail = req.query.mail;
	var rad = req.query.rad;
	var tel = req.query.tel;
//	var tel = req.query.tel[0]+'   '+req.query.tel[1]+'   ' +req.query.tel[2];
	//배열은 두방법으로읽을수있고 
	
	
	
	var output = "이름 : "+name +"<br>";
	output += ",나이 : "+age +"<br>";
	//
	if(mail=='yes'){
		output += "그래넌 쳐맞아도싸 쒸빠빠빠빠빠ㅏ깎빠까빢빠까ㅃ까ㅃ<br>";
	}
	//
	switch(rad){
	case '1' :
		output +='탕수육 그렇게조금먹고살수있습니까?..';
		break;
	case '2' :
		output +="당신은 평범한 닝겐";
		break;
	case '3' :
		output +="쵸~~~~~~~~~~~~~~~~~돼지";
		break;
	}
	
	
	//배열
	
//	output+= tel;
	output += '그를 위해 전화주세요 : ' + tel[0] + '-' + tel[1] + '-' + tel[2] + '<br>';
	//두방법으로 쓸수있다 
	
	
	res.send(output);
});//라우팅!






// 08 02 연습문제풀이 
app.get('/calc', function (req, res) {
	var output ='잘못입력하셧습니다';
	var s1 = parseInt(req.query.se1);
	var s2 = parseInt(req.query.se2);
//	var calc = req.query.calc;
	switch(req.query.calc){
	case '1'://덧셈
		output = s1 +" + "+s2+" = " + /*(parseInt(s1)+parseInt(s2)) */( s1+s2);
		break;
	case '2'://뺄셈
		output = s1 +" - "+s2+" = " +  /*(parseInt(s1)-parseInt(s2)) */(s1-s2) ;
		break;
	case '3'://곱셈
		output = s1 +" * "+s2+" = " +  /*(parseInt(s1)*parseInt(s2)) */ (s1*s2);
		break;
	case '4'://나눗셈
		output = s1 +" / "+s2+" = " +  /*(parseInt(s1)/parseInt(s2)) */(s1/s2) ;
		break;
	
	}
	
	res.send(output);
	
	
});






app.listen(63000);



































