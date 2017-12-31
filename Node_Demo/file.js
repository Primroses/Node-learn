var fs = require('fs')
module.exports ={
    readSync :(path)=>{
        // "同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
        var data = fs.readFileSync(path ,'utf-8');
        console.log(data)
        console.log("同步执行完成")
    },
    read :(path)=>{
        // new 一个 promise 对象 去完成 异步操作
        var pro = new Promise((res , rej)=>{
            fs.readFile(path,(err , data )=>{
                if(err){
                    rej(err)
                }else{
                    // 异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，
                    // 后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。
                    res(data)
                    console.log(data.toString())
                }
            })
        })
        console.log("异步操作完成")
        return pro
        
    }
}