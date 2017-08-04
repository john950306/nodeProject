/**
 * http://usejsdoc.org/
 */



const express = require('express');
const path = require('path');
const app = express();
const errorHandler = require('express-error-handler');//에러페이지 핸들러 176p

var handler = errorHandler({ //핸들러
	  static: {
	    '404':'./public/e1.html'
	  }
	});


//app.use('/static', express.static(path.join(__dirname, 'public'))); //라우팅하기전에 선언해줘야함 static 은 com/static/퍼블릭안에있는파일이여서 주소가기니까없애버리자
app.use( express.static(path.join(__dirname, 'public')));


 
//라우팅
app.get('/', function(req, res){
  res.send('hello world 11' +req.aaaa.name);
});

//폼데이터 라우팅
app.get('/form',(req,res)=>{
	var name= req.query.name;
	var age =req.query.age;
	res.send(`이름 : ${name}  나이 : ${age} `);
	
});

// :데이터 라우팅

app.get('/form/:name/:age',(req,res)=>{
	var name= req.params.name;
	var age =req.params.age;
	res.send(`이름 : ${name}  나이 : ${age} `);
	
});

app.use( errorHandler.httpError(404) );
app.use( handler );


//서버시작
app.listen(63000,()=>{
	console.log('서버시작');
});


































