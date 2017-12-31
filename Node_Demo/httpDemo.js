var http = require('http')
var fun = require('./function')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    if(req.url!=="/favicon.ico"){
        // 清除第二次的 favicon.ico 的请求
        var functionName = "fun1"
        // 用字符串 调用函数
        // fun[functionName](res)

        console.log('访问')
        res.write('hello world')
        res.end("你好 师姐")
    }
}).listen(8080)