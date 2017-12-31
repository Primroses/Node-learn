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

**模块标识**

模块标识就是传递给require()方法的参数，必须是符合*小驼峰*命名的字符串，或者是以*..，.*开头的相对路径

## Node模块

在Node中模块分两类，
- 一类是Node提供的模块是**核心模块**
- 另一类是用户编写的模块**文件模块**

**Node引入模块要经历三步**
- 路径分析
- 文件定位
- 编译执行

> Node程序启动时，部分**核心模块**直接加载进内存中，这部分省掉文件定位和编译执行两部分，所以它的加载速度是最快的。**文件模块**运行时动态加载的，需要路径分析，文件定位，和编译执行三个步骤



**路径分析**
- 核心模块 如http，fs，path等
- .或..开始的相对路径文件模块
- 以/开始的绝对路径文件模块
- 非路径形式的文件模块，如自定义的connect模块

**文件定位**
- 文件扩展名分析 require()中不包含文件扩展名，会依次按.js , .node ,.json次序依次补足扩展名，依次尝试
- 目录和包分析 首先会查找目录下的package.json 通过JSON.parse()解析出包描述的对象。如果没有package.json 就用index作为默认文件名

**包与NPM**
- 包结构
  
  package.json:包描述文件
  
  lib:用于存放JavaScript代码的目录

  doc:用于存放文档的目录

  test:用于存放单元测试用例的代码

>package.json 中重要的字段是 description(描述) version(版本)licenses(许可证) dependencies(依赖关系) script(脚本说明对象)

>lib 是用来存放用户自己写的代码

**NPM常用功能**

```
$ node -v
//查看 node的 版本 
```

```
$ npm install <package name>
// 安装某个包
```

```
$ npm 
// 弹出所有命令

```

**全局安装**
如果包含了命令行工具，需要执行一次```npm install <package name>```进行全局模式安装全局模式安装就统一安装到一个目录下如果Node可执行文件的位置/usr/local/bin/node 那么模块的目录就是/usr/local/bin/node/node_modules

**本地安装**
本地安装只需指明package.json文件所在位置即可，他可以是一个包含package.json的存档文件