// console.log(module);

// function fun2(res){
//     res.write ("this is fun a ")
// }
// 没有 default 也行?
// module.exports  = fun2;


// console.log(module)
// module 里面就已经有了print 对象
// var module = new Module() // new 一个 module 对象
// var exports = module.exports 相当于 exports 是 module.exports的引用

// 改变exports的指向后所添加的exports.xxx都是无效的。因为require返回的只会是module.exports

// 支持 输出多个方法
// module.exports = {
//     fun1:(res)=>{
//         res.write("this is fun1")
//     },
//     fun2 :(res)=>{
//         res.write("this is fun2")
//     }
// }
console.log(module)