/**
 * http://usejsdoc.org/
 */


const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const multer  = require('multer');
const error = require('express-error-handler');

app.use(express.static(__dirname+'/public'));

//--- 포스트방식
//parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json 
app.use(bodyParser.json());
//---

//파일업로드
//var upload = multer({dest:'uploads/'});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
//		cb(null, file.fieldname );//덮어쓰기
	}
});

var upload = multer({ storage: storage });



//app.all('*',(req,res)=>{
//res.status(404).send('여기에 html이있다면잘뜨겠지?');
//}); // 이런것말고 또 익스프레스 에러 핸들러 가있으니까 그걸쓰자!

//에러핸들러!
var eh = error({
	static : {
		'404': './public/e.html'
//			,'500': './public/e1.html'
	}
});

app.get('/d500',(req,res)=>{
	var name = req.query.name;
	var output ='';
	if(name){
		output = 'get : '+name;
	}else{
		output = req.queㅁry.name;
	}

	res.send(output);

});


//포스트방식 a.html

app.post('/dprocess',(req,res)=>{


	res.send('키미노...포스트와?...'+req.body.name);
});

//겟방식 a.html
//app.get('/dprocess',(req,res)=>{

//var num = req.query.num;


//res.send('키미노...나마에와?...'+req.query.name+'   '+num);
//});


//겟방식 url 파라미터
app.get('/dprocess/:name/:num',(req,res)=>{

	var num = req.params.num;


	res.send('키미노...나마에와?...'+req.params.name+'   '+num);
});





//미들웨어 
app.use((req,res,next)=>{
	console.log('b미들웨어');

	next();

});

//app.use((req,res,next)=>{
//console.log('a미들웨어');

//if(!req.query.name){
//req.query.name ='홍길동';
//req.madata = {id :req.query.name , name :'data'};

//}

//next();

//});


app.get('/readdata',(req,res)=>{
	var format = req.query.format;
	var obj ={name : '홍길동',age :30};

	if(format=== 'json'){

//		res.set('Content-Type','application/json');
		res.type('json');
		res.send(obj);

	}else{
		res.type('html');
		var output = `
			<html>
			<body>
			이름  : ${obj.name} <br> 나이 : ${obj.age} 
			</body>
			</html>`;

		res.send(output);
	}

});
app.post('/dfile',upload.array('f',10),(req,res)=>{
	var file = req.files ;
	console.log('d'+file);
	res.send('filetest : '+file);


});

app.get('/',(req,res)=>{
	console.log('/미들웨어');

	app.set('iname',req.query.name);

	res.send('야임마! 너냐? '+req.ip+'   '+req.query.name); // 샌드는앤드까지함

});
app.get('/read',(req,res)=>{

	res.send('name : '+app.get('iname'));
	console.log('read 미들웨어');
});

app.get('/member',(req,res)=>{
	var name = req.query.name;

	if(!name){
		res.redirect('/');
		return ;  // 리다이렉트랑 리턴이랑같이다녀야한다 
	}

	var output = `name : ${name}`;
	res.send(output);


});

//에러핸들러
app.use(error.httpError(404));
//app.use(error.httpError(500));
app.use(eh);


app.listen(63000,()=>{
	console.log('앙~서버띠~');
});






