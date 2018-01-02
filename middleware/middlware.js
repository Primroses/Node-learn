app.use((ctx,next)=>{
	ctx.name = 'Lucy';
	next();
})

app.use((ctx,next)=>{
	ctx.age = 12;
	next();
})

app.use((ctx,next)=>{
	console.log(`${ctx.name} is ${ctx.age} years old`)
	// Lucy is 12 years old
	next();
})

app.go({}) 
// =>启动执行 最后会调用callback打印 =>{name:'Lucy' ,age:12}
ctx 参数是app.go 接受的对象，调用app.go 其实会调用目标函数的callback 
在调用callback 之前 先让参数ctx 通过一系列的中间件，最后才会传递给callback

使用app.use 插入任意中间件，中间件是一个函数，可以被传入一个ctx和next ，调用next
的时候会执行下一个中间件，如果不调用next会阻止接下来的所有中间件的执行，也不会执行
app.callback