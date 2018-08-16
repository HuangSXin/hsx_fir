////var a ="{"a":"1","b":"2"}";
//var a ={"a":"1","b":"2"};
////console.log(typeof JSON.parse(a));
//var b = JSON.stringify(a)
////var b = JSON.parse(a)
//console.log(b);
//console.log(typeof b);
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const server = http.createServer((req,res)=>{
	let filePath='';
	if(req.url=="/"){
		filePath =path.join(__dirname,"web","index.html");
	}
	else if(req.url.endsWith('.jpg')) {
		var fileName = req.url.slice(1);
		filePath=path.join(__dirname,"web","image",fileName);
	}else if(req.url.endsWith('.css')) {
		var fileName = req.url.slice(1);
		filePath=path.join(__dirname,"web","css",fileName);
	}
	else if(req.url.endsWith('.js')) {
		var fileName = req.url.slice(1);
		filePath=path.join(__dirname,"web","js",fileName);
	}
	
		fs.readFile(filePath,(err,data)=>{
			if(err){
				return;	
			}
			res.end(data); 
		})
	 
});
server.listen(9999);
   