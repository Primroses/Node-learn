# Node简单接口实现(连接mysql)

**先引入模块**
```
var express = require('express');
// express 框架是构建服务器的

var querystring = require('querystring');
// querystring 中间件 是用来获取 请求接口的参数

var app = express();
// 构建了一个 服务器

var fs = require('fs')
// 文件操作模块

var mysql = require('mysql');
// mysql 模块 封装了 连接mysql数据库 和操作数据库的底层操作
```


```
// 创建连接池 用来回收 连接 
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: 'root'
});

```


```
// 服务器 的请求方式 是post 请求的路径是 '/select'(前面加上你的主机号和端口号)
app.post('/select',(req,res)=>{

    //请求跨域问题 先设置好
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/x-www-form-urlencoded");

    // Node的规范 先把err放前面

    pool.getConnection((err, connect) => {
        if (err) { console.log('链接失败') }
        else { 
            var str ;

            // 拿到一个连接 然后操作数据库
            connect.query('select *from student',(err,result)=>{
                if(err){
                    str ="查询失败"
                }else{
                    // 返回JSON 到前台
                    // str = '{"errcode":"200","errmsg":"ok","data":'+JSON.stringify(result)+'}'
                    // 模板 字符串
                    str = `{"errcode":"200","errmsg":"ok","data":${JSON.stringify(result)}}`
                }
                // 释放资源
                connect.release()
                res.send(str)
            })
        }
    })
})
```

```

// 服务器监听8090端口
app.listen(8090,()=>{
    console.log("服务器开始工作了")
})

```