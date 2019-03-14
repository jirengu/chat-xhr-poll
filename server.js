let http = require('http')
let url = require('url')
let fs = require('fs')

let msgQueue = []
http.createServer((req, res)=>{
  var pathObj = url.parse(req.url, true)
	if(pathObj.pathname === '/') {
	  fs.readFile(__dirname + '/index.html', function(err, data){
      res.writeHead(200)
      res.end(data)
	  })
	} else if(pathObj.pathname === '/send'){
		console.log(pathObj.query.msg)
    msgQueue.push(pathObj.query.msg)
    res.end('ok')
  } else if(pathObj.pathname === '/getMsg') {
  	res.end(JSON.stringify(msgQueue))
  }
}).listen(3001)

