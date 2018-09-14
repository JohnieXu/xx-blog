# 深入理解JS模块

## 引言

`JavaScript`的模块机制其实是借鉴的其他程序设计语言的, 如Java中package的概念, `import java.util.ArrayList;`; package就是逻辑上相关的代码组织到同一个包内，包内是一个相对独立的作用域，不用担心命名冲突等等, 当需要在外部使用的是否直接import相应的package即可。

由于`JavaScript`在设计之初的定位原因, 并没有提供类似模块的功能, 随后便出现了各种**模拟**类似的功能的规范。到今天(2018-5-28)ES6已经十分普及, ES6的模块机制已经大规模使用, 我们完全可以使用ES6提供的模块化规范(机制)。

## 类模块化

**类模块化**: 这是我自己理解的一个模块化概念, 指的是像**函数封装**, **对象**, **立即执行函数包装**这样的类似模块化的规范。

### 函数封装

函数就是对实现特定逻辑的一组语句的打包, JS的作用域也是基于函数的, 所以函数可以很自然的作为模块化, 这也是最开始实现模块化的一种方法。

```js
function func1(){
    ...
}
function func2(){
    ...
}
```
引用模块也即是调用函数, 存在污染全局变量的缺点, 变量冲突等缺点。

### 对象


```js
var myModule = {
    var1: 1,
    var2: 2,
    func1: function(){
        ...
    },
    func2: function(){
        ...
    }
}
```

将上面的函数封装在一个对象中, 引用模块即引用相应文件中对象上的属性, 如: `myModule.func1()`, 通过对象名(模块名)避免了全局变量污染, 但是存在安全问题, 如: 外部可以随意修改模块内部的属性和方法等。

### 立即执行函数

```js
var myModule = (function(){
    var var1 = 1;
    var var2 = 2;
    function func1(){
        ...
    }
    function func2(){
        ...
    }
    return {
        func1: func1,
        func2: func2
    };
})();
```

在上面对象的基础之上, 用立即执行函数进行封装, 可以解决全局变量污染, 防止模块内部属性和方法被外部修改, 这是当前主流模块规范的基础。

## CommonJS(NodeJS)

**CommonJS**: 通用模块规范, 主要由NodeJS具体实现; 根据CommonJS规范, 一个单独的文件就是一个模块。每一个模块都是一个单独的作用域, 也就是说, 在该模块内部定义的变量, 无法被其他模块读取, 除非定义为global(浏览器中为window)对象的属性。

CommonJS模块例子:

```js
//模块定义 myModule.js
var name = 'Byron';
function printName(){
    console.log(name);
}
function printFullName(firstName){
    console.log(firstName + name);
}
module.exports = {
    printName: printName,
    printFullName: printFullName
}
//加载模块
var myModule = require('./myModule.js');
myModule.printName();
```

### CommonJS模块存在的问题

require引入模块是同步的, 由于在浏览器环境下, JS都是通过script标签引入, 而这是天生异步的, 因此`CommonJS`在浏览器环境下无法正常加载(无法处理依赖问题)。NodeJS广泛采用CommonJS的原因主要是NodeJS的require模块都是在本地, 完全不用担心异步过程(即使在服务器上也是如此)。因此, 针对浏览器端异步require模块出现了`AMD`和`CMD`规范。

## AMD(RequireJS)

**AMD**: Asynchronous Module Definition(异步模块定义), 在浏览器端模块化开发的规范, 不是JavaScript原生支持, RequireJS是AMD规范的具体实现(严格上说是**RequireJS的推广中产生的AMD规范**)。

RequireJS模块例子:

```js
// 定义模块 myModule.js
define('myModule', ['dependency'], function(){
    var name = 'Byron';
    function printName(){
        console.log(name);
    }
    return {
        printName: printName
    };
});

// 加载模块
require(['myModule'], function (my){
　 my.printName();
});
```

RequireJS定义了一个全局函数`define(id?, dependencies?, factory);`来创建一个模块。
`AMD`模块中所有的依赖都前置, 其模块是异步的, 该自定义的模块内用到的模块均等到异步加载完成之后才调用响应模块, 这样浏览器不会失去响应。require指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

例如: 现需要在一个HTML页面中需要使用jQuery-fileupload插件, 并通过script标签的方式引入JS文件, 传统的方式是**先引入jquery.min.js再引入jquery.fileupload.js**。由于jqery.fileupload.js是基于jQuery的, 必须保证首先引入jQuery, 加载JS时候页面会停止若此时网络较差, 会导致页面失去响应时间较长。

### 总结

**RequireJS主要解决如问题:**

1. 多个JS文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器;
1. JS加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长。

**模块机制用途:**

1. `CommonJS`是同步的, 主要用于服务器
1. `AMD`和`CMD`是异步的, 两者的模块定义和加载机制稍有不同, 主要用于浏览器

### AMD与CMD的区别

1. `AMD`推崇依赖前置，在定义模块的时候就要声明其依赖的模块`, `CMD`推崇就近依赖，只有在用到某个模块的时候再去require
3. 两个都是定义的全局define函数来定义模块, define接收函数function(require, exports, module)保持一致
4. `CMD`是懒加载, 仅在require时才会加载模块; `AMD`是预加载, 在定义模块时就提前加载好所有依赖
5. `CMD`保留了CommonJS风格

## CMD(SeaJS)

**CMD**: Common Module Definition通用模块定义, 由国内发展出来, SeaJS是其典型代表, 即SeaJS是通过浏览器对CMD的具体实现

SeaJS模块例子:

```js
// 定义模块  myModule.js
define(function(require, exports, module) {
  var $ = require('jquery.js');
  var foo = require('foo');
  var out = foo.bar();
  $('div').addClass('active');
  module.exports = out;
});

// 加载模块
seajs.use(['myModule.js'], function(my){

});
```

SeaJS定义了一个全局函数`define(id?, deps?, factory) `来创建一个模块, define接受一个需要三个参数的函数, 分别为:

- **require**: 一个方法, 接受模块标识 作为唯一参数，用来获取其他模块提供的接口：require(id)
- **exports**: 一个对象, 用来向外提供模块接口
- **module**: 一个对象, 上面存储了与当前模块相关联的一些属性和方法

CMD推崇依赖就近原则(也就是**懒加载**), 模块内部的依赖在需要引入的时候再引入, 如上例中的`var $ = require('jquery.js')`, 这一点和通用的`CommonJS`模块风格保持一致。

## UMD

**UMD**: 是一个既能在`seajs（CMD）`环境里引入，又能在`requirejs（AMD）`环境中引入，
当然也能在`Node.js（CommonJS）`中使用，另外还可以在没有模块化的环境中用`script标签`全局引入的'模块规范'

`UMD`模块其实就是在当前JS执行环境中对以上几种模块规范定义的`define`, `module.exports`等进行判断, 同一模块根据不同场所返回不同结果。

UMD模块例子:
```js
;(function (global) {
    function factory () {
        var moduleName = {};
        return moduleName;
    }
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && (define.cmd || define.amd)) {
        define(factory);
    } else {
        global.moduleName = factory();
    }
})(typeof window !== 'undefined' ? window : global);
```

UMD模块在不同环境引入:
```js
// Node.js
var myModule = require('moduleName');
// SeaJs
define(function (require, exports, module) {
    var myModule = require('moduleName');
});
// RequireJs
define(['moduleName'], function (moduleName) {

});
// Browse global
<script src="moduleName.js"></script>
```

## ES6模块(import,export)

ES6在语言标准的层面上, 实现了模块功能, 而且实现得相当简单, 完全可以取代`CommonJS`和`AMD`规范, 是浏览器和服务器通用的模块解决方案。

ES6模块例子:
```js
//模块定义 myModule.js
const name = 'Byron';
function printName(){
    console.log(name);
}
function printFullName(firstName){
    console.log(firstName + name);
}
const myModule = {
    printName: printName,
    printFullName: printFullName
};
export myModule;

//加载模块
import myModule, { printFullName } from './myModule.js';
myModule.printName();
printFullName('Michael');
```

### 注意

1. ES6中的`export`是ES6对于JS模块的一种新的规范, 不同于`CommonJS`规范中的`module.exports`和`exports`;
1. `CommonJS`规范中`exports`可以理解为指向`module.exports`的一个指针, 可以`exports.newModule = {...}`, 但是这样写`exports={..}`是不行的, 这会将`exports`这个指针指向新的`{...}`对象, 不再指向`module.exports`;
1. ES6语法一般都经过`babel`转义为JS, 故可以在ES6中使用`CommonJS`模块规范, 如: `var myModule = require('./myModule.js')`。

## 参考文章

1. [js模块化编程之彻底弄懂CommonJS和AMD/CMD](https://www.cnblogs.com/chenguangliang/p/5856701.html)
1. [写一个适应所有环境的js模块](http://www.cnblogs.com/brandonchen/p/5550470.html)
1. [SeaJS](http://www.zhangxinxu.com/sp/seajs/)
1. [RequireJS](http://requirejs.org/)
1. [阮一峰-ES6模块](http://es6.ruanyifeng.com/#docs/module)