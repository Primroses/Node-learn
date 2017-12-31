const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});
// 执行所触发的事件 如果有回调函数 后面接参数
myEmitter.emit('event');

var promise = function(){
    EventEmitter.call(this);

}
console.log(promise);
const util = require('util');

function Animal(){    
    this.name = "Animal";    
    this.showName = function(){    
        console.log(this.name);    
    }    
}    

var Cat = function(){
    Animal.call(this);
}
util.inherits(Cat,Animal);
new Cat().showName()

