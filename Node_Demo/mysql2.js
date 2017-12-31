var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var app = express();

var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: 'root'
});
app.get('/index.html', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<head><meta charset="utf-8" /><title>使用post方法向服务器端提交数据</title></head>');
    var file = fs.createReadStream('index.html');
    // pipe()读取 index.html 文件内容，并将内容写入到 res中
    file.pipe(res);
});

app.post('/index.html', function(req, res) {
    console.log(req);
    req.on('data', function(data) {
        var obj = querystring.parse(data.toString());
        console.log(obj);
        pool.getConnection(function(err, connection) {
            if (err) {
                res.send('mysql连接失败');
            } else {
                var str;
                // connection.query('SQL',{参数},function(err,result){
                //     result.
                // });
                connection.query('insert into student set ?', { num: obj.num, name: obj.name },
                    function(err, result) {
                        if (err) str = '服务器端数据库插入失败';
                        else str = '服务端数据库插入成功';
                        connection.release();
                        res.send(str);
                    });
            }
        });
    });
});

app.listen(8080, "127.0.0.1");