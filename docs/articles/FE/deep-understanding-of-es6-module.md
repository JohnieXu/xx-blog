# 深入理解 ES6 模块

## ES6 模块与前 ES6 模块概念区别

-   ES6 基于文件的模块

    即一个文件一个模块，在浏览器 web 环境中需要分别加载各个单独的文件模块，而非将其放入一个大的单独文件加载，当然现阶段对于 ES6 的模块都是采用 babel 进行 transpile 然后打包成若干个 UMD 模块。对于考虑是采用单独小文件还是打包后的若干个较大文件，主要是考虑到 HTTP/1.1 高效并发/交替加载多个小文件的性能问题。

-   ES6 模块的 API 是静态的

    即需要在模块的公开 API 中静态定义所有最高层导出，之后无法再添加
    看下**深入理解 JS 模块**中的例子一个 ES6 模块的例子

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

-   ES6 模块是单例

    即 ES6 模块只有一个单一实例，多个模块中引用同一个的同一个模块，最终都指向对那个唯一的中心实例的引用。

-   模块暴露的属性和方法不是值的传递而是类似指针的绑定

-   导入模块和从网络请求加载模块完全一样
