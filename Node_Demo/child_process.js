var cp = require('child_process')
var sp1 = cp.spawn('node',['test.js','one','two','three','four'],{cwd:'./test'})
var sp2 = cp.spawn('node',['test2.js'],{stdio:'pipe'})
sp1.stdout.on('data',(data)=>{
    console.log(data);
    sp2.stdin.write(data)
})
