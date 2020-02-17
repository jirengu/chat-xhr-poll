let http = require('http')
let url = require('url')
let fs = require('fs')

let msgQueue = []
console.log('浏览器打开 http://localhost:3001')
http.createServer((req, res)=>{
  let pathObj = url.parse(req.url, true)
	if(pathObj.pathname === '/send'){
		console.log(pathObj.query.msg)
    msgQueue.push(pathObj.query.msg)
    res.end('ok')
  } else if(pathObj.pathname === '/getMsg') {
  	res.end(JSON.stringify(msgQueue))
  } else {
	  fs.readFile(__dirname + '/index.html', function(err, data){
      res.writeHead(200)
      res.end(data)
	  })
	}
}).listen(3001)

