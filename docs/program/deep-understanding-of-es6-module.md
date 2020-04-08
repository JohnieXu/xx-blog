---
title: ES6模块的核心知识点
created: 2018/01/02
updated: 2019/08/21
tags:
  - 前端进阶
---

## ES6模块与前ES6模块概念区别

-  ES6基于文件的模块

    即一个文件一个模块，在浏览器 web 环境中需要分别加载各个单独的文件模块，而非将其放入一个大的单独文件加载，当然现阶段对于ES6的模块都是采用 babel 进行 transpile 然后打包成若干个[UMD模块](http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#umd)。对于考虑是采用单独小文件还是打包后的若干个较大文件，主要是考虑到 HTTP/1.1 高效并发/交替加载多个小文件的性能问题。

<!-- more -->

-  ES6模块的 API 是静态的

    即需要在模块的公开 API 中静态定义所有最高层导出，之后无法再添加
    看下[深入理解 JS 模块](http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#%E5%BC%95%E8%A8%80)中的一个ES6模块的例子

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
    ```

    上例中导出了 myModule，是一个对象。这里说的 API 是静态的指的是对于上面的模块来说导出的只有 myModule，没有其他的了，但是是可以修改/添加/删除导出的 myModule 对象的属性来间接修改模块导出的 API 的。

-  ES6模块是单例

    即ES6模块只有一个单一实例，多个模块中引用同一个的同一个模块，最终都指向对那个唯一的中心实例的引用。

-   模块暴露的属性和方法不是值的传递而是类似指针的绑定

-   导入模块和从网络请求加载模块完全一样

    浏览器/Node.js 提供了各自环境下默认的模块加载器(Module Loader)，`import ... from 'xxx`语句对于模块加载器来说就是**告诉模块加载器去哪个 URL/文件路径下获取对应的模块**

## export 模块导出

### 命名导出

-   模块内部没有全局作用域，以下例子中的 var 定义的作用域仅在本模块，模块内可以访问和使用全局 global/window 等，但不建议这么用。

    ```js
    function foo() {
        //...
    }
    var awesome = 11;
    var bar = [1, 2, 3, 4];
    export { foo, awesome, bar };
    ```

### 默认导出

`export` 导出是对变量的绑定(指针)，`export default` 导出是对值的绑定，`export { a as default }`导出是对变量的绑定(指针)

```js
// 模块1
function foo() {
    // ...
}
export default foo;// 这里默认导出是对foo值的绑定，若后续对foo有更改默认导出值不会相应更改

// 模块2
function foo() {
    // ...
}
export { foo as default};// 这里默认导出是对变量foo的绑定(类似指针的绑定)，若后续对foo有更改相应的默认导出也会更改
```

## import 模块导入

```js
// 模块1
export default function foo() {
    //...
}
export function awesome() {
    //...
}

// 模块2
import foo, { awesome as Awesome }, * as Bar from 'path/to/module';
```

以上的 foo 是默认导入，Awesome 为别名导入，Bar 为命名空间导入(讲所有导出导入到 Bar 的命名空间下),注意**所有导入的绑定都是不可变的/或只读的**，同时**import 的声明是提升的，不同于 require 的动态加载**。

关于**ES6模块动态导入**/**模块循环依赖**以及**ES6模块的原理**可以阅读我写的另一篇文章——[详解ES模块系统](https://www.yuque.com/docs/share/ad354374-4122-4599-973b-aa63943c3b3d)
