var express = require("express")
var app =express();
var bodyParser = require('body-parser')
var fs = require('fs')
app.use(bodyParser)
app.post('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    var file = req.file["myfile"];
    fs.readFile(file.path ,(err,data)=>{
        if(err){res.send("读文件错误")}
        else{
            fs.writeFile(file.name,data,(err)=>{
                if(err){res.send("写文件失败")}
                else{
                    res.send("文件上传成功")
                }
            })
        }
    })
    console.log(req.file)
})
app.listen(8080)