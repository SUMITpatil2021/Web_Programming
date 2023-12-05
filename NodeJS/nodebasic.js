console.log("File Name : "+__filename);
console.log("Directory Name :"+__dirname);

//gloabal function 

setTimeout(function(){
		console.log("After 3000 ms")},3000);

//global Object

console.log("Process id PID : "+process.pid);
console.log("cwd : "+process.cwd());
