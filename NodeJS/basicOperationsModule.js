exports.isPrime=function(n){
	flag=true;
	for(i=2;i<=n;i++)
	{
	   if(n%i==0)
		flag=false;
	break;
	}
	
	if(flag==true && n>1)
	 flag=true;
return flag;
}


exports.calFact=function (n){
	fact=1 
	for(i=1;i<=n;i++)
	{
	fact=fact*i;
	}
	return fact;
} 

exports.isPerfect=function(n){
	sum=0;
	for(i=1;i<n;i++)
	{	
		if(n%i==0)
		{	
		sum+=i;
		}		
	} 
	if(sum==n)
	{	
	console.log(n+" is Perfect Number ")
	} 
	else
	{
	console.log(n+" is not a Perfect Number ")
	}
}

