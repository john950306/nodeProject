/**
 * http://usejsdoc.org/
 */


module.exports.myMax = ()=>{
	var max = arguments[0];
	if(arguments.length===0){
		return undefined;
	}else{
		for( i=0;i<arguments.length   ;i++){
			if(max<arguments[i]){
				max=arguments[i];
			}
		}
		return max;
	}
};

//가 안됨 결국  ()=> 쓰지 않는방향으로 가야할것같다 

module.exports.myMax =function(){
	var max = arguments[0];
	if(arguments.length===0){
		return undefined;
	}else{
		for( i=0 ; i<arguments.length ; i++){
			if(max<arguments[i]){
				max=arguments[i];
			}
		}
		return max;
	}
};


module.exports.myMax =function(){
	var arr = [];
	if(arguments.length===0){
		return 0;
	}else{
		for(i= 0 ; i<arguments.length  ;i++){
			arr.push(arguments[i]);
		}
		return Math.max.apply(null,arr);
	}
};
//배열로도가능


module.exports.myMin = function(){
	var min = arguments[0];
	if(arguments.length===0){
		return undefined;
	}else{
		for( i=0 ; i<arguments.length ; i++){
			if(min>arguments[i]){
				min=arguments[i];
			}
		}
		return min;
	}
};


module.exports.Average = function(){
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


module.exports.sortAsc = function(){
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


module.exports.sortDesc = function(){
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


module.exports.countNum = function(num,arr){
	var cnt=0;
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
		return undefined;
	}
};
//어디부터 어디까지를 입력받았을때 그값의 랜덤을 리턴해줌

module.exports.myRandom = function(min ,max ){
	var cnt = 0;
	for(i=min-1 ; i<max;i++){
		cnt++;
	}
	if(min>=0){
		return (Math.floor(((Math.random()*cnt)+1)));
	}else{
		var anx = -min;
		return (Math.floor(((Math.random()*cnt)+1))) -(anx+1);
	}
};

module.exports.myArrRandom = function(arr){
	if(arguments.length===0){
		return undefined;
	}else{
		if(arr.length===0){
			return undefined;
		}else{
			return arr[Math.floor((Math.random()*arr.length))];
		}
	}


};


module.exports.dafsdfasdf = function(arr,con){

	var brr =[arr.length];
	for(i=0;i<arr.length;i++){
		brr[i]=con;
	}
	return brr;
};




