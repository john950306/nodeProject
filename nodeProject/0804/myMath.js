/**
 * http://usejsdoc.org/
 */


//exports.myMax = ()=>{
//var max = arguments[0];
//if(arguments.length===0){
//return max;
//}else{
//for( i=0;i<arguments.length -1 ;i++){
//if(max<arguments[i]){
//max=arguments[i];
//}
//}
//return max;
//}
//};

//가 안됨 결국  ()=> 쓰지 않는방향으로 가야할것같다 

exports.myMax =function(){
	var max = arguments[0];
	if(arguments.length===0){
		return max;
	}else{
		for( i=0 ; i<arguments.length-1 ; i++){
			if(max<arguments[i]){
				max=arguments[i];
			}
		}
		return max;
	}
};


//exports.myMax =function(){
//var arr = [];
//if(arguments.length===0){
//return 0;
//}else{
//for(i= 0 ; i<arguments.length-1;i++){
//arr.push(arguments[i]);
//}
//return Math.max.apply(null,arr);
//}
//};
//배열로도가능


exports.myMin = function(){
	var min = arguments[0];
	if(arguments.length===0){
		return min;
	}else{
		for( i=0 ; i<arguments.length-1 ; i++){
			if(min>arguments[i]){
				min=arguments[i];
			}
		}
		return min;
	}
};


exports.Average = function(){
	var avg =0 ;
	var sum =0;
	if(arguments.length===0){
		return 0;
	}else{
		for(i= 0 ; i< arguments.length;i++){
			sum+=arguments[i];
		}
		return avg = sum/arguments.length;
	}

};
exports.sortAsc = function(){
	var arr= [];
	if(arguments.length===0){
		return 0;
	}else{
		for(i= 0 ; i <arguments.length;i++){
			arr.push(parseInt(arguments[i]));
		}
		arr.sort((a,b)=>a-b);
		return arr;
	}
};
exports.sortDesc = function(){
	var arr= [];
	if(arguments.length===0){
		return 0;
	}else{
		for(i= 0 ; i <arguments.length;i++){
			arr.push(parseInt(arguments[i]));
		}
		arr.sort((a,b)=>b-a);
		return arr;
	}
};


exports.countNum = function(num,arr){
	var cnt=0;
	console.log(typeof cnt);
	if(arguments.length===2){
		if(typeof num === "number"){
			for(i = 0 ; i<arr.length ; i++){
				if(num===arr[i]){
					cnt++;
				}
			}
			return cnt;
		}
	}else{
		return '매게변수 (숫자,배열)으로입력해주세요';
	}
};











