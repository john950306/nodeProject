/**
 * http://usejsdoc.org/
 */


var pri = function(){
	console.log('내부함수');
};


//모듈
exports.add = function(a,b){  //exports안에 우리가만드는 함수를 만들어주면 다른js에서도 리콰이어 를써서 가져올수있다 
	pri();
	return a+b;
};


var num = 100; //private 느낌
exports.MAX =100; // public 느낌















