// var http = require('http')
// var url = require('url')
// var server = http.createServer((sreq, sres) => {
//     var url_parts = url.parse(sreq.url);
//     var options = {
//         host: "www.amazon.cn",
//         port: 80,
//         path: url_parts.pathname,
//         headers: sreq.headers
//     }
//     var req = http.get(options, (res) => {
//         sres.writeHead(res.statusCode, res.headers)
//         res.pipe(sres)
//     })
//     sreq.pipe(req)
// })
// server.listen(8080,"localhost")


var http=require("http");
var url=require("url");
var server=http.createServer(function(sreq,sres){
    var url_parts=url.parse(sreq.url);
    var opts={
        host:"www.taobao.cn",
        port:80,
        path:url_parts.pathname,
        headers:sreq.headers
    };
    var creq=http.get(opts, function (cres) {
        sres.writeHead(cres.statusCode,cres.headers);
        cres.pipe(sres);
    });
    sreq.pipe(creq);
});
server.listen(1337,"127.0.0.1", function () {
    console.log("开始监听"+server.address().port+"......");
});

// var express = require('express');
// var request = require('request');
// var app = express();
// app.use('/', function(req, res) {
//     var url = 'https://www.baidu.com/' + req.url;
//     req.pipe(request(url)).pipe(res);
// });
// app.listen(process.env.PORT || 3000);
