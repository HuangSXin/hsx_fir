const http = require("http");
const server = http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	if(req.url.endsWith('api')){
		res.end(JSON.stringify({a:1,b:2}));
	}
}).listen(8080)
