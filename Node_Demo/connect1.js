var mysql = require("mysql")
var connect = mysql.createConnection({
    host :"localhost",
    port:3306,
    database :'mydb1',
    user:'root',
    password : 'root',
    multipleStatements : true,
    // 允许执行多条语句
})

var pool = mysql.createPool({
    host :"localhost",
    port:3306,
    database :'mydb1',
    user:'root',
    password : 'root'
})

connect.connect((err)=>{
    if(err){
        console.log("连接失败")
    }else{
        console.log("链接成功")
        connect.query(
            'insert into student set ?',{num:'001',name:'张君'},(err,result)=>{
                if(err){
                    console.log('插入失败')
                }else{
                    // connect.query(
                    //     'select * from student where num = ?',['001'],(err,result)=>{
                    //         if(err){console.log("查询失败")}
                    //         else{
                    //             console.log(result);
                    //             connect.end()
                    //         }
                    //     }
                    // )
                    console.log(result.insertId)
                    connect.end()
                }
            }
        )
    }
})