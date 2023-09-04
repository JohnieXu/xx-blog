<template><div><h2 id="封装通用组件" tabindex="-1"><a class="header-anchor" href="#封装通用组件" aria-hidden="true">#</a> 封装通用组件</h2>
<h3 id="主要思想" tabindex="-1"><a class="header-anchor" href="#主要思想" aria-hidden="true">#</a> 主要思想</h3>
<p>封装组件的思想主要是将前端页面/业务逻辑等按模块方式进行抽离，复杂的页面布局/逻辑等放入独立写的模块内部，使用详情组件只需要传入组件定义的数据/方法/chidlren等就可以完成相应功能开发。</p>
<p>封装组件主要分三类：</p>
<ol>
<li>普通展示型组件(函数式组件)</li>
<li>纯逻型组件(容器组件)</li>
<li>通用业务组件(以基础组件/第三方组件为基础+一定的业务逻辑)</li>
</ol>
<h3 id="封装普通展示型组件" tabindex="-1"><a class="header-anchor" href="#封装普通展示型组件" aria-hidden="true">#</a> 封装普通展示型组件</h3>
<p>通过函数式组件实现，比较轻量，不带组件的生命周期，不带内部state，后期也可以通过React Hooks添加内部状态数据的控制</p>
<h3 id="封装纯逻型组件" tabindex="-1"><a class="header-anchor" href="#封装纯逻型组件" aria-hidden="true">#</a> 封装纯逻型组件</h3>
<p>通过组件的生命周期(通常是componentDidMount)来做权限判断；或是类似connect高阶函数(高阶组件)的形式，给传入的组件加上一些附加属性或逻辑操作或props</p>
<h3 id="封装通用业务组件" tabindex="-1"><a class="header-anchor" href="#封装通用业务组件" aria-hidden="true">#</a> 封装通用业务组件</h3>
<p>上面两种组件的综合封装，组件本身可独立完成一个通用的业务逻辑</p>
<h3 id="一个通用业务组件封装示例" tabindex="-1"><a class="header-anchor" href="#一个通用业务组件封装示例" aria-hidden="true">#</a> 一个通用业务组件封装示例</h3>
<img src="@imgs/4787d6dc-f780-4742-a971-f42f98d578b2.jpg">
</div></template>


