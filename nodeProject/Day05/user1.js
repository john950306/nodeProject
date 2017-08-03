/**
 * http://usejsdoc.org/
 */
//295p

 //제대로정리안됨 유저2생성해서다시해보자

var user = function(name,age){
	this.name =name ;
	this.age =age;
	
};

user.prototype.getName = function(){
	cons();
	return this.name;
};

var cons = function(){
	console.log('c');
};


module.exports = new user('이요한',23);

//------------------

//var user ={
//		getUser : function(){
//			return {id : 'ㅅsetsdf.' , name : "이요한"};
//		}
//};
//
//module.exports =user;
// npm에 배포하려면 모듈에 추가를시켜야함 !!!
//습관적으로 해봐랑 

//------------------
//exports.getUser = function(){
//
//	console.log(arguments);
//	//	arguments.forEach(function(v){
////		console.log(v);
////	}); //안됨 아그먼트스는 유사배열이라 
//	
//	return {id : '안농농농', name : '방방방방방'};
//};





