# JS原型链

## 引言

思考以下几个问题：

1. 原型链是什么概念， JS中为何要引入原型链？
2. 原型链是怎样实现继承的？
3. 构造函数constructor，__proto__，ES6中class、static、super和原型链的关系？
4. 如何利用来解释this的指向问题？
5. 原型链与区块链？

看下面这段代码的打印结果

```js
function Foo() {
    return this;
}
Foo.getName = function () {
    console.log('1');
};
Foo.prototype.getName = function () {
    console.log('2');
};

new Foo.getName();   // -> 1
new Foo().getName(); // -> 2   
```

## 理解原型链的链

`instanceof`可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的`prototype`。

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

### this的指向问题

```js
function foo() {
	console.log(this.a)
}
var a = 2
foo()

var obj = {
	a: 2,
	foo: foo
}
obj.foo()

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a)

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```

TODO: 通过原型链来解释this的指向问题
