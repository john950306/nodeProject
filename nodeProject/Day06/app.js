/**
 * http://usejsdoc.org/
 */



const express = require('express');

const errorHandler = require('express-error-handler');//에러페이지 핸들러 176p

const path = require('path');

const app = express();

const bodyParser = require('body-parser'); //바디파서

const multer  = require('multer') ; //파일업로드



var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, './uploads');
//	    cb(null, './Day06/uploads'); 안됨
	  },
	  filename: function (req, file, cb) {
//	    cb(null, file.fieldname + '-' + Date.now())
//	    cb(null, file.fieldname ); // 덮어쓰기
//		cb(null,file.originalname); // 진또배기이름
		  var fname = file.originalname;
		  var idx = fname.lastIndexOf('.');
		 var fa = fname.substring(0,idx);
		 var fb = fname.substring(idx);
		 fname = fa+Date.now()+fb;
	    cb(null, fname );
	  }
	});
//파일업로드 두개
var upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'f1', maxCount: 1 }, { name: 'f2', maxCount: 8 }]);


var handler = errorHandler({ //핸들러
	  static: { 
	    '404':'./public/e1.html' 
	  }
	});


//app.use('/static', express.static(path.join(__dirname, 'public'))); //라우팅하기전에 선언해줘야함 static 은 com/static/퍼블릭안에있는파일이여서 주소가기니까없애버리자
app.use( express.static(path.join(__dirname, 'public')));

//바디파서
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) ;


//라우팅
app.get('/', function(req, res){
  res.send('hello world 11' +req.aaaa.name);
});
// ---------------------
//폼데이터 라우팅
//app.get('/form',(req,res)=>{
//	var name= req.query.name;
//	var age =req.query.age;
//	res.send(`이름 : ${name}  나이 : ${age} `);
//	
//});
//
//// :데이터 라우팅
//app.get('/form/:name/:age',(req,res)=>{
//	var name= req.params.name;
//	var age =req.params.age;
//	res.send(`이름 : ${name}  나이 : ${age} `);
//	
//});

app.get(['/form','/form/:name/:age'],(req,res)=>{
//	var name= [req.query.name,req.params.name];
//	var age = [req.query.age,req.params.age];
	var name= req.query.name||req.params.name;
	var age = req.query.age||req.params.age;
	res.send(`이름 : ${name}  나이 : ${age} `);
	
});

// ------------------------
//포스트방식 
//app.post('/form',(req,res)=>{
//	var name= req.body.name
//	var age = req.body.age
//	res.send(`post 이름 : ${name}  나이 : ${age} `);
//	
//});

 //---------
//파일업로드  포스트방식이랑안겹치게끔해라 
//app.post('/form',upload.single('f'),(req,res)=>{
//app.post('/form',upload.array('f',2),(req,res)=>{
//	var name= req.body.name;
//	var age = req.body.age;
//	
//	console.log(req.files);   //파일업로드는 files로받을수있다 하나짜리 file 멀티는 files
////	console.log(req.file);
//	
//	res.send(`post 이름 : ${name}  나이 : ${age} `);
//	
//});

app.post('/form',cpUpload,(req,res)=>{
	var name= req.body.name;
	var age = req.body.age;
	
	console.log(req.files);   //파일업로드는 files로받을수있다 하나짜리 file 멀티는 files
//	console.log(req.file);
	
	res.send(`post 이름 : ${name}  나이 : ${age} `);
	
});


//--------------




//클라이언트 400대 /서버  500 대 오류처리
app.use(function (err, req, res, next) {
  console.log(err);
//  res.status(500); // 안해줘도 알아서 200함 
  res.send('서버가 바쁨');
});//404위에 

app.use( errorHandler.httpError(404) );
app.use( handler );


//서버시작
app.listen(63000,()=>{
	console.log('서버시작');
});


































