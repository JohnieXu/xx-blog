<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在网页端、移动端H5、小程序等各个终端环境的前端开发中随处可见事件的运用，可见事件机制的是前端这一块的重中之重。经过我研读了大量博客文章以及开源框架源码后，这次算是对DOM事件机制有了更新更全面的的认识。</p>
<p>下文主要通过一个例子带你<strong>分析DOM事件的传递、事件处理</strong>，然后在此基础上再<strong>深入总结对事件监听的优化方案</strong>，最终总结下DOM事件机制<strong>在开源框架中的实战应用</strong>。</p>
<blockquote>
<p>本文首发自<a href="https://johniexu.github.io/" target="_blank" rel="noopener noreferrer">JohnieXu's Blog<ExternalLinkIcon/></a>，转载请注明出处😁</p>
</blockquote>
<!-- more -->
<h2 id="一、从实例看事件传递" tabindex="-1"><a class="header-anchor" href="#一、从实例看事件传递" aria-hidden="true">#</a> 一、从实例看事件传递</h2>
<p>以下面这个普通的html文件为例</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleClickHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleBodyClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>handleClick1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click1'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">handleBodyClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">handleClickHtml</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'html clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'document clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子中给<code v-pre>document、html、body、div、button</code>都添加了点击事件，其执行结果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca5zepk57j30n006u74g.jpg" alt="执行结果"></p>
<h3 id="事件传递" tabindex="-1"><a class="header-anchor" href="#事件传递" aria-hidden="true">#</a> 事件传递</h3>
<p><strong>事件产生后，从window对象自上而下向目标节点传递，抵达目标节点后会沿着相反方向传递</strong></p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca5xm2gchj30ml0gljs9.jpg" alt="DOM事件传递"></p>
<h4 id="事件传递路径如何确定" tabindex="-1"><a class="header-anchor" href="#事件传递路径如何确定" aria-hidden="true">#</a> 事件传递路径如何确定？</h4>
<p>由鼠标、键盘、触摸屏、窗口缩放、图片加载、节点焦点变化等触发事件，每个触发的事件都有一个target——事件目标，根据target往html根节点遍历就可以确定节点嵌套层级关系，从而确定此事件的传递路径。</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>事件传递路径由浏览器、webview来确定</p>
</div>
<h4 id="事件传递为何要来回走两遍" tabindex="-1"><a class="header-anchor" href="#事件传递为何要来回走两遍" aria-hidden="true">#</a> 事件传递为何要来回走两遍？</h4>
<p>一个事件来回走两遍是便于事件响应时机的控制（下文的事件冒泡与事件捕获的应用中有体现），同时也存在事件冒泡的浏览器历史原因（与IE、Netscape有关，不赘述）。</p>
<h3 id="事件响应" tabindex="-1"><a class="header-anchor" href="#事件响应" aria-hidden="true">#</a> 事件响应</h3>
<p>事件在从自上而下的传递过程中会<strong>判断当前node节点是否绑定对应事件的监听器</strong>，若有则执行响应监听器的事件处理程序（也就是绑定的事件要执行的逻辑），这里的执行就是所谓的事件响应。</p>
<p>事件的响应过于与事件的类型是捕获事件、冒泡事件有关，同时是否组件冒泡还会影响该事件的后续传递过程，具体执行流程总结成如下图所示：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca5xmeg7tj30mn0glgn2.jpg" alt="事件响应逻辑"></p>
<h3 id="事件捕获与冒泡" tabindex="-1"><a class="header-anchor" href="#事件捕获与冒泡" aria-hidden="true">#</a> 事件捕获与冒泡</h3>
<p>根据事件传递中的两种传递路径分别分为：<strong>由上至下——事件捕获阶段，由下至上——事件冒泡阶段</strong>，指的是一个事件由window（上图并未标出window）到target之间的传递的过程。</p>
<p>可以通过阻止事件冒泡让事件不再继续完成由下至上的过程，这会让target的父节点绑定冒泡阶段的事件监听器不响应事件。</p>
<p>可以通过指定事件在捕获阶段执行。</p>
<h4 id="🌰冒泡的应用" tabindex="-1"><a class="header-anchor" href="#🌰冒泡的应用" aria-hidden="true">#</a> 🌰冒泡的应用</h4>
<p>看下面这个例子，可以通过<code v-pre>stopPropagation</code>来阻止事件继续往上冒泡，<code v-pre>window、document、html</code>上添加的点击事件均不会生效</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 省略了部分代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> button1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'button1'</span><span class="token punctuation">)</span>
  div1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  button1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关键代码：阻止了click事件继续往上冒泡</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    
  <span class="token comment">// 以下是监听html、document的点击事件</span>
  <span class="token keyword">function</span> <span class="token function">handleClickHtml</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'html clicked'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'document clicked'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击button的打印结果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca61b2enzj30n603wglj.jpg" alt="执行结果"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>addEventListener需要用attachEvent进行兼容性处理，第三个参数默认值为false表示在事件冒泡阶段响应事件</p>
</div>
<h4 id="🌰捕获的应用" tabindex="-1"><a class="header-anchor" href="#🌰捕获的应用" aria-hidden="true">#</a> 🌰捕获的应用</h4>
<p>还是上面这个例子，只更改div1部分的事件监听，的第三个参数为true来开启事件捕获</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 省略了部分代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> button1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'button1'</span><span class="token punctuation">)</span>
  div1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true：表示div1在事件的捕获阶段响应事件</span>
  button1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止事件冒泡</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 以下是监听html、document的点击事件</span>
  <span class="token keyword">function</span> <span class="token function">handleClickHtml</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'html clicked'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'document clicked'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击button的打印结果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca626mdjej30n404eglo.jpg" alt="执行结果"></p>
<p>依次执行了div1和button1绑定的点击事件，注意这里两者的<strong>执行顺序</strong>很关键。事件在捕获阶段遇到div1节点时执行打印，然后在button处（处于目标阶段）执行打印，然后事件被阻止冒泡不再往上传递。</p>
<h2 id="二、事件性能优化" tabindex="-1"><a class="header-anchor" href="#二、事件性能优化" aria-hidden="true">#</a> 二、事件性能优化</h2>
<h3 id="大批量事件监听性能问题" tabindex="-1"><a class="header-anchor" href="#大批量事件监听性能问题" aria-hidden="true">#</a> 大批量事件监听性能问题</h3>
<p>考虑以下场景：</p>
<p>有个一个长消息列表实时接受新的消息，滚动到底部时加载更多消息，点击消息可进入回话窗口页面，消息左滑消息此条消息</p>
<p>问题：</p>
<p><strong>如何给此消息列表添加左滑事件？</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>抽象来看这个问题就是如何高效的给大批量（甚至是无限量）节点添加事件，这里暂时不考虑vue、react等框架</p>
</div>
<h4 id="性能问题原因" tabindex="-1"><a class="header-anchor" href="#性能问题原因" aria-hidden="true">#</a> 性能问题原因</h4>
<p>每注册一个事件监听监听都需要使用一定内存，同时在dom节点多了之后事件经过的捕获、冒泡阶段要处理事件传递也就慢了</p>
<h3 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h3>
<p>父节点嵌套的子节点的触发的事件会通过事件冒泡到达父节点，事件处理程序不直接绑定到子节点，统一由公共父节点进行事件监听。</p>
<p><strong>e.target表示触发事件的元素，通过e.target可以判断具体响应那个元素的事件</strong>
<strong>e.currentTarget表示事件绑定的元素，在事件委托情况下指向同一个元素</strong></p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca63h6wufj30mn0hagm5.jpg" alt="事件委托"></p>
<h4 id="采用事件委托改造本文例子" tabindex="-1"><a class="header-anchor" href="#采用事件委托改造本文例子" aria-hidden="true">#</a> 采用事件委托改造本文例子</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 省略了部分代码 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// e.target：触发事件的元素</span>
    <span class="token comment">// e.currentTarget：事件监听器绑定的元素</span>
    <span class="token comment">// console.log(e.target, e.currentTarget)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">'button1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'button1 clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">'div1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'div1 clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'HTML'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'html clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'BODY'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cosnole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body clicked'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次点击<code v-pre>html、div1、button1</code>会依次打印结果：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca63yca8pj30n2054t8q.jpg" alt="执行结果"></p>
<h3 id="虚拟滚动" tabindex="-1"><a class="header-anchor" href="#虚拟滚动" aria-hidden="true">#</a> 虚拟滚动</h3>
<p>上面事件委托可以解决大批量节点事件监听的性能问题，但是DOM节点量过大导致界面滚动不流畅的问题没解决。</p>
<p><strong>虚拟滚动是指在列表滚动事件中动态计算出当前窗口中能够显示的列表节点，其前后窗口不显示的节点各用一个div进行占位处理，并调整占位div的样式确模拟的列表样式与原始列表无异处。</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>虚拟滚动已经是一个完美解决长列表渲染性能的方案，针对react、vue均有对应库实现，此处不再赘述</p>
</div>
<h3 id="react事件代理" tabindex="-1"><a class="header-anchor" href="#react事件代理" aria-hidden="true">#</a> React事件代理</h3>
<p>事件委托也叫事件代理，在react中的合成事件则是完全采用了事件代理</p>
<p>基于react16的<code v-pre>ant-design-pro</code>项目的事件绑定截图如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gca64qg4t8j30rw0di0ti.jpg" alt="React事件代理"></p>
<p>直接通过onClick绑定的事件通过react处理最终会统一绑定到document上，正是使用的事件委托。</p>
<h2 id="三、实战中的应用" tabindex="-1"><a class="header-anchor" href="#三、实战中的应用" aria-hidden="true">#</a> 三、实战中的应用</h2>
<h3 id="小程序中阻止事件冒泡阻止弹窗滚动穿透" tabindex="-1"><a class="header-anchor" href="#小程序中阻止事件冒泡阻止弹窗滚动穿透" aria-hidden="true">#</a> 小程序中阻止事件冒泡阻止弹窗滚动穿透</h3>
<p>最新版微信小程序中绑定事件有两种类型：<code v-pre>bind:methodName、catch:methodName、mut-bind:methodName、mut-catch:methodName</code>，其中区别最大的是前两者。</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>methodName表示移动端事件名，例如：tap、touchmove等</p>
</div>
<p><code v-pre>bind:methodName</code><strong>采用冒泡绑定事件，</strong><code v-pre>catch:methodName</code>**采用冒泡绑定事件并阻止冒泡</p>
<h4 id="vant-weapp中防止滚动穿透" tabindex="-1"><a class="header-anchor" href="#vant-weapp中防止滚动穿透" aria-hidden="true">#</a> vant-weapp中防止滚动穿透</h4>
<p>实现思路：<strong>弹框采用一层遮罩层overlay遮盖，遮罩层宽高设为窗口宽高同大小，采用<code v-pre>catch:touchmove</code>绑定该层的touchmove事件为空函数防止其冒泡</strong>。</p>
<p>给overlay组件外层绑定touchmove为空函数并阻止冒泡：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// overlay/index.wxml</span>
<span class="token operator">&lt;</span>van<span class="token operator">-</span>transition
  show<span class="token operator">=</span><span class="token string">"{{ show }}"</span>
  custom<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"van-overlay"</span>
  custom<span class="token operator">-</span>style<span class="token operator">=</span><span class="token string">"z-index: {{ zIndex }}; {{ customStyle }}"</span>
  duration<span class="token operator">=</span><span class="token string">"{{ duration }}"</span>
  <span class="token literal-property property">bind</span><span class="token operator">:</span>tap<span class="token operator">=</span><span class="token string">"onClick"</span>
  <span class="token keyword">catch</span><span class="token operator">:</span>touchmove<span class="token operator">=</span><span class="token string">"noop"</span>
  <span class="token comment">/*
   * 通过catch:touchmove来阻止冒泡至overlay层的事件继续往上冒泡，
   * 实现内层嵌套的内容可以响应touchmove事件而外层（页面）滚动事件不响应），
   * 以此来解决滚动事件穿透
  */</span>
<span class="token operator">></span>
  <span class="token operator">&lt;</span>slot<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>van<span class="token operator">-</span>transition<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>overlay组件外层fixed定位固定宽高防止滚动：</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// overlay/index.less</span>
<span class="token selector">.van-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.theme</span><span class="token punctuation">(</span>background<span class="token operator">-</span>color<span class="token punctuation">,</span> <span class="token string">'@overlay-background-color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动端h5框架中事件冒泡阻止弹窗滚动穿透" tabindex="-1"><a class="header-anchor" href="#移动端h5框架中事件冒泡阻止弹窗滚动穿透" aria-hidden="true">#</a> 移动端H5框架中事件冒泡阻止弹窗滚动穿透</h3>
<h4 id="vant中防止滚动穿透" tabindex="-1"><a class="header-anchor" href="#vant中防止滚动穿透" aria-hidden="true">#</a> vant中防止滚动穿透</h4>
<p>实现思路：与vant-weapp小程序框架中相似，<strong>弹框采用一层遮罩层overlay遮盖，遮罩层宽高设为窗口宽高同大小，采用<code v-pre>@touchmove</code>绑定该层的touchmove事件，在事件中用event.stopPropagation阻止事件冒泡</strong>。</p>
<p>给overlay组件外层绑定touchmove事件阻止冒泡：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>transition name<span class="token operator">=</span><span class="token string">"van-fade"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div
      vShow<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>show<span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span>
      <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">bem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>className<span class="token punctuation">]</span><span class="token punctuation">}</span>
      onTouchmove<span class="token operator">=</span><span class="token punctuation">{</span>preventTouchMove<span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">inherit</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function">preventTouchMove</span><span class="token punctuation">(</span>e<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function-variable function">void</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>overlay组件外层fixed定位固定宽高防止滚动：</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.van-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.theme</span><span class="token punctuation">(</span>background<span class="token operator">-</span>color<span class="token punctuation">,</span> <span class="token string">'@overlay-background-color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" target="_blank" rel="noopener noreferrer">MDN-事件参考<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/howgod/article/details/97615209" target="_blank" rel="noopener noreferrer">浪里行舟-DOM事件机制<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/huangpin815/article/details/69787924" target="_blank" rel="noopener noreferrer">CSDN-事件冒泡（IE事件流），事件捕获和DOM事件流<ExternalLinkIcon/></a></li>
</ul>
<h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h2>
<blockquote>
<p>既然看到这里不妨点个赞鼓励下作者呗 😃</p>
<p>作者博客：<a href="https://johniexu.github.io/" target="_blank" rel="noopener noreferrer">https://johniexu.github.io/<ExternalLinkIcon/></a></p>
<p>作者github：<a href="https://github.com/johniexu" target="_blank" rel="noopener noreferrer">https://github.com/johniexu<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


