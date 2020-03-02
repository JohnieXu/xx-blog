---
title: 全面分析总结BFC原理及实践
date: 2020-3-2
categories:
  - 文章专栏
  - 硬核前端
tags:
  - 前端核心
  - 前端进阶
---

# 全面分析总结BFC原理及实践

> 本文首发自[JohnieXu's Blog](https://blog.lessing.online/)，转载请注明出处😁

## 前言
经常在面试中被问到“如何清除浮动？”、“为什么 `overflow: hidden` 可以清除浮动？”等等比较基础的问题。虽然这些题目案在各种写面试题的文章中都有提供答案，但这种教科书式的问答肯定不是我们的目的，与其记住答案不如彻底掌握其核心原理——**块级格式化上下文（BFC）**。

这篇文章主要就是彻底分析清楚BFC原理、总结BFC经典场景中的用法，最后在实践中总结BFC在H5、小程序开发中的应用。

## 一、BFC作用

- **清除浮动**：BFC会包含创建它的元素内部的所有内容（包含浮动元素）
- **外边距折叠**：解决同一BFC容器中的相邻元素间的外边距折叠问题
- **左图右文布局**：利用浮动元产生BFC以及BFC之间不会互相覆盖实现左图右文布局

<!-- more -->

:::tip
以上BFC的作用可以心里默想一遍如何实现，下文将会有实例说明
:::

## 二、如何产生BFC

| 名称 | 如何产生 | 备注 |
| :---: | :---: | :---: |
| html根元素 | html元素本身就是一个BFC元素 | 记住就好，body元素不是BFC |
| 浮动元素 | 元素的float属性不是none | 常用 |
| 绝对定位元素 | position属性为absolute或fixed | 常用 |
| 行内块元素 | display属性为inline-block | 常用 |
| 表格元素 | 表格元素默认display属性即是BFC | 表格单元格、表格标题也是 |
| 弹性元素 | display属性为flex或inline-flex元素的直接子元素 | 非常重要（flex布局常用） |
| 网格元素 | display属性为grid或inline-grid元素的直接子元素 | 新特性用得少 |
| 多列容器 | 元素的column-count或column-width不为auto，包括 column-count为1 | 新特性用得少 |
| overflow属性 | overflow属性值不为visible的元素 | 常用oveflfow：visible |
| display属性 | display属性值为flow-root的元素，flow-root: 一个新的display属性的值，它可以创建无副作用的BFC | 用得少 |
| contain属性 | contain属性值为layout、content、paint的元素 | 用得少 |


总结成一句话：**凡脱离文档流都可以产生BFC**

## 三、BFC原理
### 三种文档定位方式
在讲BFC的原理之前先看看html文档的三种定位方式

#### 普通流
> 在普通流中，元素按照其在HTML中的先后位置自上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也就是说普通流中元素的位置由该元素在HTML文档中的位置决定。


#### 浮动
> 在浮动定位中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。



#### 绝对定位
> 在绝对定位中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。



### BFC产生作用的原因
**其实BFC是上面三种布局方式中的普通流，BFC会产生一个独立的容器，该容器内部的元素不会在布局上影响到外部的元素，在外部的普通流看来它和其他普通流元素无差别，文档最终会按照上面说的普通流计算布局。**

![](https://tva1.sinaimg.cn/large/00831rSTly1gcfjerebmcj30s70jbjsa.jpg)

### BFC的注意事项
> 块格式化上下文对浮动定位与清除浮动都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。
> 
> 浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。
> 
> 外边距折叠也只会发生在属于同一BFC的块级元素之间。


## 四、BFC常见用法
为了更好的理解BFC，我们先看看下面这些常见的用法。

### 🌰清除浮动防止高度塌陷
按照上面三种定位方式中说的，浮动元素会脱离普通文档流，导致外部元素的高度计算不包括浮动元素本身高度，形成高度塌陷。

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjf6gqisj30s70jbq2y.jpg)

```html
<div class="container">
  <div class="box box1"></div>
</div>
```

```less
.box {
  width: 20px;
  height: 50px;
  float: left; // 脱离了文档流形成了一个BFC
	border: 4px solid green;
}
```

采用上述产生BFC元素的方法之一使外层元素产生BFC，可以防止元素高度塌陷。


```less
.container {
	overflow: hidden; // 外层容器产生BFC
}
```

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjfn88zyj30s70jbwel.jpg)


### 🌰处理外边距折叠的问题
在普通文档流中，元素（非BFC元素）的外边距margin会自动折叠，产生如下现象。

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjg2llwij30s70jbmxb.jpg)


```html
<div class="container">
  <div class="box box1 m20"></div>
  <div class="box box2 m20"></div>
</div>
```

```less
.m20 {
  margin: 20px;
}
.box {
	border: 1px solid green;
}
```

这个是html的特性不算bug，但是我们更希望margin不产生折叠效果，通过利用BFC元素之间的外边距不会折叠的特性来实现。

```html
<div class="container">
  <div class="box box1 m20"></div>
  <div class="box box2 m20"></div>
</div>
```

```less
.m20 {
  margin: 20px;
}
.box {
  overflow: hidden; // 使得两个box成为BFC元素
	border: 4px solid green;
}

```

使两个box形成BFC或者分别用两个BFC包裹box，然后形成的两个BFC之间的外边距不会折叠，修复后效果如下图。

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjgfwd9lj30s70jbwen.jpg)

## 五、扩展一下
存在块级格式化上下文BFC，则对应存在内联格式化上下文IFC、网格格式化上下文GFC、自适应格式化上下文FFC，这些都可以统称为格式化上下文。

### IFC
内联格式化上下文，IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来，不受到竖直方向的 padding、margin 影响。


![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjgv7m78j30ms0gbq37.jpg)


当在内联元素中插入块级元素会产生什么效果呢？在内联元素中插入位置前后的内联元素各自形成一个IFC，然后按钮文档流形式进行布局，效果如下图。


![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjh6gad6j30s70jbdg5.jpg)


### GFC
网格布局格式化上下文（`display: grid`）

### FFC
自适应格式化上下文（`display: flex`）

## 六、常见问题分析
### 为什么overflow: hidden可以去起到清除浮动的效果？
> overflow: hidden使得外层元素产生了一个BFC，BFC的高度计算包含其内部的浮动元素，从而达到清除浮动效果


```html
<div style="border: 5px solid #6EBD91; overflow: hidden;">
  <div style="float: left; border: 5px solid #F4D491;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime fuga assumenda excepturi, exercitationem rerum quae voluptates sunt perspiciatis cupiditate sed itaque officia, placeat minus iure quod expedita earum nam.Eum aliquam totam iure mollitia deserunt, minus repellendus. Harum ullam tenetur, impedit aliquam nobis ut dignissimos eligendi, expedita illum iste esse odio ab quos explicabo, odit architecto. Tempora, hic facilis?</div>
</div>
```

效果如下：

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjhktx6nj31fw076gn8.jpg)

**分析过程**
外层`overflow: hidden`的元素产生了一个BFC，本身`float: left`的元素也产生了一个BFC，外层BFC进行尺寸计算时包含内层BFC尺寸。

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjhzce41j30s20b83zx.jpg)


### 如何实现两列自实行布局？
> 不考虑使用UI框架中的布局组件情况下，直接使用float: left + 固定左侧宽度 + 右边列margin-left


```html
<div>
  <img style="float: left; width: 140px;" src="https://tva1.sinaimg.cn/large/00831rSTly1gcel7v9ji4j3041041wec.jpg" alt="">
  <div style="margin-left: 150px;">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi numquam nihil excepturi sint reiciendis iusto maiores nostrum fugiat harum?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, perspiciatis magnam consectetur corrupti suscipit a ratione sunt commodi beatae ad!</p>
  </div>
</div>
```

实现效果如下图：

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjieiybuj312e09kq3r.jpg)


**分析过程**
**
左侧部分使用float: left会产生一个BFC元素，这个BFC与右侧块级元素div一起进行普通流定位；**由于是两个按照普通流定位这个两个元素之前不会产生覆盖**，即使不固定左侧元素宽度和右侧块级元素给margin-left也可以实现效果（这里给宽度是为了控制左侧固定尺寸）。


![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjiuoztej31rc0hc0v6.jpg)


### 内联元素中使用块级元素会产生什么效果？
> 内联元素中插入块级元素会在插入的块级元素前后各产生一个匿名块与插入的块按照普通流进行定位


![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjj7cuddj31r00880u0.jpg)

### 内联元素中使用插入浮动元素会产生什么效果？
> 内联元素使用了display: inline-block会产生一个IFC，其内部的浮动会内部进行浮动定位，然后整个IFC看成一个块级元素与外部进行定位


```html
<span style="display: inline-block; background-color: #6EBD91;">
  Lorem ipsum dolor sit amet.
  <span style="float: left; background-color: chocolate;">Lorem, ipsum.</span>
  <div style="background-color: #F4D491;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore, ipsa quo possimus mollitia, officiis quia provident inventore placeat nulla, rem velit ratione ducimus. Facilis eos repudiandae debitis quam voluptatem.</div>
  Lorem ipsum dolor sit amet consectetur.
</span>
```

效果如下：

![image.png](https://tva1.sinaimg.cn/large/00831rSTly1gcfjdpqgqlj31ra0b840p.jpg)

以上效果可以[在线预览](http://jsrun.pro/4vfKp)

## 参考文章

- [MDN-格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- [gihtub-介绍下BFC及其应用](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/59)
- [知乎专栏-10分钟理解BFC原理](https://zhuanlan.zhihu.com/p/25321647)

## 写在最后
> 既然看到这里了不妨点个赞鼓励下作者呗 :)
> 
> 作者博客：[https://blog.lessing.online/](https://blog.lessing.online/)
> 
> 作者github：[https://github.com/johniexu](https://github.com/johniexu)


[BFC原理.graffle.zip](https://www.yuque.com/attachments/yuque/0/2020/zip/298369/1583127001252-9bd5c5bf-29fe-4827-a709-307ea307be50.zip?_lake_card=%7B%22uid%22%3A%221583126996091-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fzip%2F298369%2F1583127001252-9bd5c5bf-29fe-4827-a709-307ea307be50.zip%22%2C%22name%22%3A%22BFC%E5%8E%9F%E7%90%86.graffle.zip%22%2C%22size%22%3A163496%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22FtXIT%22%2C%22card%22%3A%22file%22%7D)
