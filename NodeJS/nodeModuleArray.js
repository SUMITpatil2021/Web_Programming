exports.primeNumber=function(arr){
	 prime=arr.filter(function(v){ 
		flag=true;
		for(i=2;i<v;i++)
			{
			if(v%i==0)
			{ 
			flag=false;
			 break;
			}	
			}
		if(flag==true && v!=1)
			return v;
}) 
return prime;
} 

exports.stringArray=function(arr){
	str=arr.reduce(function(s,v) {
		return s.length>v.length?s:v;
})
return str;
} 


exports.curDate=function(){
	var cdate = new Date(); 
	return cdate ;
}