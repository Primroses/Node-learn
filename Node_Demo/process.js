// process.stdin   process.stdout  例子
// process.stdin.resume();
// process.stdin.on('data',(chunk)=>{
//     process.stdout.write(chunk)
// })


//  例子 遍历了 agrv 这个数组
// process.argv.forEach((val,index,array)=>{
//     console.log(index+ " "+val)
// })

// nextTick 方法 接受一个参数 参数是一个 被推迟的函数 下一个同步方法执行完毕或 异步方法的事件回调函数执行是调用
// function foo(){
//     console.log("foo")
// }
// process.nextTick(foo)
// console.log("bar")

