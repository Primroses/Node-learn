// var express = require('express')
// var app = express()
// var mysql = require("mysql")
// var querystring = require('querystring')

var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: 'root'
})

// app.get('/index', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write('<head><meta charset="utf-8" /><title>使用post方法向服务器端提交数据</title></head>');
//     res.write("你好")
    
// })

// app.post('/index.html',(req,res)=>{
//     req.on('data',(data)=>{
//         var obj = querystring.parse(data.toString())
//         pool.getConnection((err,connect)=>{
//             if(err){console.log('链接失败')}
//             else{
//                 var str;
//                 connect.query('insert into student set ?',{num:obj.num,name:obj.name},(err,result)=>{
//                     if(err){
//                         str = '插入失败'
//                     }else{
//                         str ='插入成功'
//                     }
//                     connect.release()
//                     res.send(str)
//                 })
//             }
//         })
//     })
// })
// 只能是 post 提交？
// app.get('/', (req, res) => {
//     // res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Content-Type", "application/x-www-form-urlencoded");
//     req.on('data', (data) => {
//         // var stu = querystring.parse(data.toString())
//         console.log("你他妈滴")
//         pool.getConnection((err, connect) => {
//             if (err) { console.log('链接失败') }
//             else { 
//                 // var str ;
//                 // connect.query('select *from student',(err,result)=>{
//                 //     if(err){
//                 //         str ="查询失败"
//                 //     }else{
//                 //         str = '{"errcode":"200","errmsg":"ok","data":'+JSON.stringify(result)+'}'
//                 //     }
//                 //     connect.release()
//                 //     res.send(str)
//                 // })
//                 console.log("查询了")
//             }
//         })
//     })
//     // res.send({"errcode":"200","errmsg":"ok"})
// })
// app.listen(8080)