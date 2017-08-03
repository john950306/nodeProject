/**
 * http://usejsdoc.org/
 */

var a= function(){
	console.log("외부사용안되지만 공유용에선 사용가능하다 ");
};

var myfoo =  function(){
	
	this.name = '이요한';
	
	console.log('222'+this.name);

};
myfoo.prototype.doa = function(){
	console.log('doa');
};
myfoo.prototype.setName = function(name){
	this.name =name ;
};




module.exports = new myfoo();



// -----------------------
//module.exports = function(){
//	
//	this.name = '이요한';
//	
//	console.log('222'+name);
//
//	this.doa = function(){
//		console.log('doa');
//	};
//	this.setName =function(name){
//		this.name =name ;
//	}
//	
//	return this;
//	//리턴이없으면
////	return undefined;
//
//};

































