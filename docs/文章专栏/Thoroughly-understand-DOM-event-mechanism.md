---
title: 这次一定彻底弄懂DOM事件机制
created: 2020-02-26
updated: 2020-02-26
category:
  - 文章专栏
  - 硬核前端
tag:
  - 前端核心
  - 前端进阶
---

## 前言
在网页端、移动端H5、小程序等各个终端环境的前端开发中随处可见事件的运用，可见事件机制的是前端这一块的重中之重。经过我研读了大量博客文章以及开源框架源码后，这次算是对DOM事件机制有了更新更全面的的认识。

下文主要通过一个例子带你**分析DOM事件的传递、事件处理**，然后在此基础上再**深入总结对事件监听的优化方案**，最终总结下DOM事件机制**在开源框架中的实战应用**。

> 本文首发自[JohnieXu's Blog](https://johniexu.github.io/)，转载请注明出处😁

<!-- more -->

## 一、从实例看事件传递
以下面这个普通的html文件为例

```html
<!DOCTYPE html>
<html lang="en" onclick="handleClickHtml()">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body onclick="handleBodyClick()">
  <div id="div1" onclick="handleClick2()">
    <button id="button1" onclick="handleClick1()">handleClick1</button>
  </div>
  <script>
    function handleClick1(e) {
      console.log('click1')
    }
    function handleClick2(e) {
      console.log('click2')
    }
    function handleBodyClick(e) {
      console.log('body clicked')
    }
    function handleClickHtml(e) {
      console.log('html clicked')
    }
    document.addEventListener('click', e => {
      console.log('document clicked')
    })
  </script>
</body>
</html>
```

例子中给`document、html、body、div、button`都添加了点击事件，其执行结果如下：

![执行结果](https://tva1.sinaimg.cn/large/0082zybply1gca5zepk57j30n006u74g.jpg)

### 事件传递
**事件产生后，从window对象自上而下向目标节点传递，抵达目标节点后会沿着相反方向传递**

![DOM事件传递](https://tva1.sinaimg.cn/large/0082zybply1gca5xm2gchj30ml0gljs9.jpg)

#### 事件传递路径如何确定？
由鼠标、键盘、触摸屏、窗口缩放、图片加载、节点焦点变化等触发事件，每个触发的事件都有一个target——事件目标，根据target往html根节点遍历就可以确定节点嵌套层级关系，从而确定此事件的传递路径。

:::tip
事件传递路径由浏览器、webview来确定
:::

#### 事件传递为何要来回走两遍？
一个事件来回走两遍是便于事件响应时机的控制（下文的事件冒泡与事件捕获的应用中有体现），同时也存在事件冒泡的浏览器历史原因（与IE、Netscape有关，不赘述）。

### 事件响应
事件在从自上而下的传递过程中会**判断当前node节点是否绑定对应事件的监听器**，若有则执行响应监听器的事件处理程序（也就是绑定的事件要执行的逻辑），这里的执行就是所谓的事件响应。

事件的响应过于与事件的类型是捕获事件、冒泡事件有关，同时是否组件冒泡还会影响该事件的后续传递过程，具体执行流程总结成如下图所示：

![事件响应逻辑](https://tva1.sinaimg.cn/large/0082zybply1gca5xmeg7tj30mn0glgn2.jpg)

### 事件捕获与冒泡
根据事件传递中的两种传递路径分别分为：**由上至下——事件捕获阶段，由下至上——事件冒泡阶段**，指的是一个事件由window（上图并未标出window）到target之间的传递的过程。

可以通过阻止事件冒泡让事件不再继续完成由下至上的过程，这会让target的父节点绑定冒泡阶段的事件监听器不响应事件。

可以通过指定事件在捕获阶段执行。

#### 🌰冒泡的应用
看下面这个例子，可以通过`stopPropagation`来阻止事件继续往上冒泡，`window、document、html`上添加的点击事件均不会生效

```html
<!-- 省略了部分代码 -->
<div id="div1">
  <button id="button1">button</button>
</div>
<script>
  var div1 = document.getElementById('div1')
  var button1 = document.getElementById('button1')
  div1.addEventListener('click', (e) => {
    console.log(e.currentTarget)
  }, false)
  button1.addEventListener('click', (e) => {
    console.log(e.currentTarget)
    e.stopPropagation() // 关键代码：阻止了click事件继续往上冒泡
  }, false)
    
  // 以下是监听html、document的点击事件
  function handleClickHtml(e) {
    console.log('html clicked')
  }
  document.addEventListener('click', e => {
    console.log('document clicked')
  })
</script>
```

点击button的打印结果如下：

![执行结果](https://tva1.sinaimg.cn/large/0082zybply1gca61b2enzj30n603wglj.jpg)

:::tip
addEventListener需要用attachEvent进行兼容性处理，第三个参数默认值为false表示在事件冒泡阶段响应事件
:::


#### 🌰捕获的应用
还是上面这个例子，只更改div1部分的事件监听，的第三个参数为true来开启事件捕获

```html
<!-- 省略了部分代码 -->
<div id="div1">
  <button id="button1">button</button>
</div>
<script>
  var div1 = document.getElementById('div1')
  var button1 = document.getElementById('button1')
  div1.addEventListener('click', (e) => {
    console.log(e.currentTarget)
  }, true) // true：表示div1在事件的捕获阶段响应事件
  button1.addEventListener('click', (e) => {
    console.log(e.currentTarget)
    e.stopPropagation() // 阻止事件冒泡
  }, false)
  
  // 以下是监听html、document的点击事件
  function handleClickHtml(e) {
    console.log('html clicked')
  }
  document.addEventListener('click', e => {
    console.log('document clicked')
  })
</script>
```

点击button的打印结果如下：

![执行结果](https://tva1.sinaimg.cn/large/0082zybply1gca626mdjej30n404eglo.jpg)

依次执行了div1和button1绑定的点击事件，注意这里两者的**执行顺序**很关键。事件在捕获阶段遇到div1节点时执行打印，然后在button处（处于目标阶段）执行打印，然后事件被阻止冒泡不再往上传递。

## 二、事件性能优化
### 大批量事件监听性能问题
考虑以下场景：

有个一个长消息列表实时接受新的消息，滚动到底部时加载更多消息，点击消息可进入回话窗口页面，消息左滑消息此条消息

问题：

**如何给此消息列表添加左滑事件？**

:::tip
抽象来看这个问题就是如何高效的给大批量（甚至是无限量）节点添加事件，这里暂时不考虑vue、react等框架
:::


#### 性能问题原因
每注册一个事件监听监听都需要使用一定内存，同时在dom节点多了之后事件经过的捕获、冒泡阶段要处理事件传递也就慢了

### 事件委托
父节点嵌套的子节点的触发的事件会通过事件冒泡到达父节点，事件处理程序不直接绑定到子节点，统一由公共父节点进行事件监听。

**e.target表示触发事件的元素，通过e.target可以判断具体响应那个元素的事件**
**e.currentTarget表示事件绑定的元素，在事件委托情况下指向同一个元素**

![事件委托](https://tva1.sinaimg.cn/large/0082zybply1gca63h6wufj30mn0hagm5.jpg)

#### 采用事件委托改造本文例子
```html
<!-- 省略了部分代码 -->
<div id="div1">
  <button id="button1">button</button>
</div>
<script>
  document.addEventListener('click', e => {
    // e.target：触发事件的元素
    // e.currentTarget：事件监听器绑定的元素
    // console.log(e.target, e.currentTarget)
    if (e.target.id === 'button1') {
      return console.log('button1 clicked')
    }
    if (e.target.id === 'div1') {
      return console.log('div1 clicked')
    }
    if (e.target.tagName === 'HTML') {
      return console.log('html clicked')
    }
    if (e.target.tagName === 'BODY') {
      return cosnole.log('body clicked')
    }
  })
</script>
```

依次点击`html、div1、button1`会依次打印结果：

![执行结果](https://tva1.sinaimg.cn/large/0082zybply1gca63yca8pj30n2054t8q.jpg)

### 虚拟滚动
上面事件委托可以解决大批量节点事件监听的性能问题，但是DOM节点量过大导致界面滚动不流畅的问题没解决。

**虚拟滚动是指在列表滚动事件中动态计算出当前窗口中能够显示的列表节点，其前后窗口不显示的节点各用一个div进行占位处理，并调整占位div的样式确模拟的列表样式与原始列表无异处。**

:::tip
虚拟滚动已经是一个完美解决长列表渲染性能的方案，针对react、vue均有对应库实现，此处不再赘述
:::

### React事件代理
事件委托也叫事件代理，在react中的合成事件则是完全采用了事件代理

基于react16的`ant-design-pro`项目的事件绑定截图如下：

![React事件代理](https://tva1.sinaimg.cn/large/0082zybply1gca64qg4t8j30rw0di0ti.jpg)

直接通过onClick绑定的事件通过react处理最终会统一绑定到document上，正是使用的事件委托。


## 三、实战中的应用
### 小程序中阻止事件冒泡阻止弹窗滚动穿透
最新版微信小程序中绑定事件有两种类型：`bind:methodName、catch:methodName、mut-bind:methodName、mut-catch:methodName`，其中区别最大的是前两者。

:::tip
methodName表示移动端事件名，例如：tap、touchmove等
:::

`bind:methodName`**采用冒泡绑定事件，**`catch:methodName`**采用冒泡绑定事件并阻止冒泡

#### vant-weapp中防止滚动穿透
实现思路：**弹框采用一层遮罩层overlay遮盖，遮罩层宽高设为窗口宽高同大小，采用`catch:touchmove`绑定该层的touchmove事件为空函数防止其冒泡**。

给overlay组件外层绑定touchmove为空函数并阻止冒泡：

```javascript
// overlay/index.wxml
<van-transition
  show="{{ show }}"
  custom-class="van-overlay"
  custom-style="z-index: {{ zIndex }}; {{ customStyle }}"
  duration="{{ duration }}"
  bind:tap="onClick"
  catch:touchmove="noop"
  /*
   * 通过catch:touchmove来阻止冒泡至overlay层的事件继续往上冒泡，
   * 实现内层嵌套的内容可以响应touchmove事件而外层（页面）滚动事件不响应），
   * 以此来解决滚动事件穿透
  */
>
  <slot></slot>
</van-transition>
```

overlay组件外层fixed定位固定宽高防止滚动：

```less
// overlay/index.less
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .theme(background-color, '@overlay-background-color');
}
```

### 移动端H5框架中事件冒泡阻止弹窗滚动穿透
#### vant中防止滚动穿透
实现思路：与vant-weapp小程序框架中相似，**弹框采用一层遮罩层overlay遮盖，遮罩层宽高设为窗口宽高同大小，采用`@touchmove`绑定该层的touchmove事件，在事件中用event.stopPropagation阻止事件冒泡**。

给overlay组件外层绑定touchmove事件阻止冒泡：

```typescript
return (
  <transition name="van-fade">
    <div
      vShow={props.show}
      style={style}
      class={[bem(), props.className]}
      onTouchmove={preventTouchMove}
      {...inherit(ctx, true)}
    />
  </transition>
);

const preventTouchMove(e: Event): void = () => {
  event.stopPropagation();
}
```

overlay组件外层fixed定位固定宽高防止滚动：

```less
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .theme(background-color, '@overlay-background-color');
}
```

## 参考文章

- [MDN-事件参考](https://developer.mozilla.org/zh-CN/docs/Web/Events)
- [浪里行舟-DOM事件机制](https://blog.csdn.net/howgod/article/details/97615209)
- [CSDN-事件冒泡（IE事件流），事件捕获和DOM事件流](https://blog.csdn.net/huangpin815/article/details/69787924)

## 写在最后
> 既然看到这里不妨点个赞鼓励下作者呗 :)
> 
> 作者博客：[https://johniexu.github.io/](https://johniexu.github.io/)
> 
> 作者github：[https://github.com/johniexu](https://github.com/johniexu)
