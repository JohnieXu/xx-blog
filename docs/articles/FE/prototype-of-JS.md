# JS 原型链

## 引言

思考以下几个问题：

1. 原型链是什么概念， JS 中为何要引入原型链？
2. 原型链是怎样实现继承的？
3. 构造函数 constructor，**proto**，ES6 中 class、static、super 和原型链的关系？
4. 如何利用原型链来解释 this 的指向问题？
5. 原型链与区块链？

看下面这段代码的打印结果

```js
function Foo() {
    return this;
}
Foo.getName = function() {
    console.log("1");
};
Foo.prototype.getName = function() {
    console.log("2");
};

new Foo.getName(); // -> 1   等价于new (Foo.getName()) 调用的是构造函数Foo本身的getName方法
new Foo().getName(); // -> 2   等价于(new Foo()).getName() 调用的是实例上(原型上)的getName方法
```

## 理解原型链的链

### 对象的三种创建方式

-   字面量形式创建

    ```js
    let o1 = {
        a: "aaa"
    };
    let o2 = new Object({
        a: "aaa"
    });
    console.log(o1, o2);
    ```

-   通过构造函数创建

    ```js
    let M = function(a) {
        this.a = a;
    };
    let o3 = new M("aaa");
    console.log(o3);
    ```

-   通过 Ojbect.create 创建

    ```js
    let P = {
        a: "aaa"
    };
    let o4 = Object.create(P);
    console.log(o4);
    ```

### 构造函数/原型/实例对象

上例中的`let M = function(a) {this.a = a;}`M 就是一个构造函数；构造函数拥有`prototype`属性，其指向原型对象，原型对象拥有`constructor`属性只想该构造函数；通过`o3 = new M('aaa');`即创建了 o3 这个实例对象，实例对象的`__proto__`指向构造函数的`prototype`也就是原型对象;

对象拥有`__proto__`属性，指向原型对象，而构造函数也是对象(准确来说是`Function`的实例对象)，故上述构造函数 M 拥有`__proto__`属性，因此这里就产生了一个类似这样的链条

// TODO: 原型链如何产生
o3.**proto** => M.prototype =>
M.**proto** => Function.prototype => Object.prototype

`instanceof`可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的`prototype`。

### instanceof

一个`instanceof`的具体实现方式

```js
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
```

简单来说： 原型链的链大概就是反映在这里`left = left.__proto__`的这种连式结构。

### this 的指向问题

```js
function foo() {
    console.log(this.a);
}
var a = 2;
foo();

var obj = {
    a: 2,
    foo: foo
};
obj.foo();

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo();
c.a = 3;
console.log(c.a);

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```

TODO: 通过原型链来解释 this 的指向问题
