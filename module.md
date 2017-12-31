# 模块系统
## CommonJS规范
> Web的发展，使得在浏览器中出现了更多，更强的Api供JavaScript使用。但是在Web后端JavaScript的规范却远远落后，有自身的缺陷。
- 没有模块系统
- 标准库较少
  ECMAScipt仅定义了部分核心库，对文件系统，IO操作却没有标准API
- 没有标准接口
  JavaScript几乎没有定义过Web服务器或者是数据库之类的标准统一接口
- 缺乏包管理系统
  导致JavaScript应用中基本没有自动加载和安装的能力

## CommonJS的模块规范
> CommonJS对模块的定义十分简单，主要分为模块引用，模块定义和模块标识3个部分

**模块引用**

```var math = require('math')```

在CommonJS规范中，存在require()方法，接受模块标识，**以此引入模块的API**

**模块定义**

```
// math.js
exports.add = function(){
    var sum = 0;
    var i = 0;
    var args = arguments;
    var l = args.length;
    while(i<l){
        sum + = args[i++];
    }
    return sum;
};

```

**在另外一个文件中就可以使用这个add方法**

```
// program.js
var math = require('math');
exports.increment = function(val){
    return math.add(val,1);
}
```