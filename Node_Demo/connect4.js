var app = require('./connect3')
var pool = require('./connect2')
app.post('/update',(req,res)=>{

    // req.on('data',(data)=>{
    //     var obj = querystring.parse(data.toString());
    //     pool.getConnection((err, connect) => {
    //         if (err) { console.log('链接失败') }
    //         else { 
    //             var str ;
    //             connect.query('insert into student set ?', { num: obj.num, name: obj.name },(err,result)=>{
    //                 if(err){
    //                     str =  '{"errcode":"400","errmsg":"err"}'
    //                 }else{
    //                     // str = '{"errcode":"200","errmsg":"ok","data":'+JSON.stringify(result)+'}'
    //                     str =  '{"errcode":"200","errmsg":"ok"}'
    //                 }
    //                 connect.release()
    //                 res.send(str)
    //             })
    //         }
    //     })
    // })

    res.send({"errcode":"200","errmsg":"ok"})
})