var express = require('express');
var querystring = require('querystring');
var app = express();
var fs = require('fs')
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: 'root'
});
// 不用传参数的 情况
app.post('/select',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/x-www-form-urlencoded");
    pool.getConnection((err, connect) => {
        if (err) { console.log('链接失败') }
        else { 
            var str ;
            connect.query('select *from student',(err,result)=>{
                if(err){
                    str ="查询失败"
                }else{
                    // str = '{"errcode":"200","errmsg":"ok","data":'+JSON.stringify(result)+'}'
                    // 模板 字符串
                    str = `{"errcode":"200","errmsg":"ok","data":${JSON.stringify(result)}}`
                }
                connect.release()
                res.send(str)
            })
        }
    })
    // res.send({"errcode":"200","errmsg":"ok"})
})
app.post('/add',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/x-www-form-urlencoded");
    req.on('data',(data)=>{
        var obj = querystring.parse(data.toString());
        pool.getConnection((err, connect) => {
            if (err) { console.log('链接失败') }
            else { 
                var str ;
                // 封装对象 能传多个参数 
                connect.query('insert into student set ?', { num: obj.num, name: obj.name,grade:obj.grade,sex:obj.sex,phone:obj.phone },(err,result)=>{
                    if(err){
                        str =  '{"errcode":"400","errmsg":"err"}'
                    }else{
                        // str = '{"errcode":"200","errmsg":"ok","data":'+JSON.stringify(result)+'}'
                        str =  '{"errcode":"200","errmsg":"ok"}'
                    }
                    connect.release()
                    res.send(str)
                })
            }
        })
    })
    // res.send({"errcode":"200","errmsg":"ok"})
})

app.get('/show',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/x-www-form-urlencoded");
    res.send({"errcode":"200","errmsg":"ok"})
})

app.get("/demo7.html",(req,res)=>{
    var file = fs.createReadStream('./demo7.html');
    // pipe()读取 index.html 文件内容，并将内容写入到 res中
    file.pipe(res);
})

// 传参数的情况
app.listen(8090,()=>{
    console.log("草拟吗开始了")
})
