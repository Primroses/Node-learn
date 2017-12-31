var mysql = require("mysql")
var connect = mysql.createConnection({
    host :"localhost",
    port:3306,
    database :'mydb1',
    user:'root',
    password : 'root'
})
connect.connect((err)=>{
    if(err){
        console.log('与Mysql连接失败')
    }
    else{
        console.log('与mysql链接成功')
        connect.end((err)=>{
            if(err){
                console.log('关闭数据库失败')
            }else{
                console.log('关闭成功')
            }
        })
    }
})