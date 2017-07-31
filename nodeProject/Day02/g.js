/**
 * http://usejsdoc.org/
 * 이벤트리스너 
 */


//process.addListener('exit', ()=> { //(이벤트의종류,실행해야할펑션)
//	console.log('exit call'); // process.exit(); 를실행하면 이게작동된다
//});


process.on('exit', ()=> { //(이벤트의종류,실행해야할펑션)
	console.log('exit call'); // process.exit(); 를실행하면 이게작동된다
}); // 요즘은 on으로바뀌어가는추세 

//이벤트리스너는 커스텀이벤트도가능하다
//process.on('doAdd', ()=> { 
//	console.log('doAdd call'); 
//});

process.once('doAdd', ()=> {  //한번만실행하는것 on과는 다르다  딱 한번만 실행하고 만다 
	console.log('doAdd call'); 
});


// on계속 부르면 한다   once 한번하면 또못씀 

function fnc (){
	process.exit();
}
function foo(){
	process.emit('doAdd'); // emit 는 (함수명 )을 실행한다  
//	console.log('foo');
}

setInterval(foo,1000); // 1초마다 foo 라는함수를 실행시켜라 

var a = setTimeout(fnc,5000); //5초가지난다음에 fnc 를한번만 실행해라 
//셋인터발이나 셋 임아웃이나  몇초후에하는건데 하면안되는거라면 클리어타임아웃을사용해서 실행하지못하게
//만들수도있다 
//clearTimeout(a);
























