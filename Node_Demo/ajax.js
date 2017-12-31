var http = require("http")
var server = http.createServer((req,res)=>{
    if(req!=="/favicon.ico"){
        res.setHeader()// 来设置头
        res.writeHead(200,
            {'Content-Type':'text/plain',
            'Access-Control-Allow-Origin':"*"
        }) 
        res.write("你好")
    }
    res.end()
}).listen(8080)