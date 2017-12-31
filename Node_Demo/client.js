// 服务端
var http = require("http")
var server = http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        // form 表单
        req.on('data', (data) => {
            console.log(1)
            // 转译
            console.log(decodeURIComponent(data))
            res.write(data)
        })
        req.on("end", () => {
            res.end()
        })
    }

}).listen(8080)