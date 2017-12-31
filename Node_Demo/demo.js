
// var express = require('express')
// var app = express()
// app.get("/nihao",(req,res)=>{
//     res.status(200)
//     res.send("nihao")
// })
// app.listen(8080)

// app.on("操作 监听",{"回调函数"})


var http = require("http");
var app = http.createServer((req, res) => {
    res.end()
}).listen(8080)

// setTimeout 来设置超时时间
app.setTimeout(10 * 1000, function (socket) {
    console.log("服务超时")
    console.log(socket)
});

// AMD 规范
define(['require','dependency'], function (require, factory) {
    'use strict';

});
//CMD规范
define(function(require,exports,module){

})

// 核心判断代码
    if(hasDefine){
        // AMD or CMD environment
        define(definition)
    }else if(hasExports){
        // Common Node module
        module.exports = definition();
    }else{
        // 最后就挂载到 Window 变量 让浏览器this指向 window对象
        this[name] = definition()
    }