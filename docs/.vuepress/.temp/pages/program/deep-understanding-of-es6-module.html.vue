<template><div><h2 id="es6模块与前es6模块概念区别" tabindex="-1"><a class="header-anchor" href="#es6模块与前es6模块概念区别" aria-hidden="true">#</a> ES6模块与前ES6模块概念区别</h2>
<ul>
<li>
<p>ES6基于文件的模块</p>
<p>即一个文件一个模块，在浏览器 web 环境中需要分别加载各个单独的文件模块，而非将其放入一个大的单独文件加载，当然现阶段对于ES6的模块都是采用 babel 进行 transpile 然后打包成若干个<a href="http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#umd" target="_blank" rel="noopener noreferrer">UMD模块<ExternalLinkIcon/></a>。对于考虑是采用单独小文件还是打包后的若干个较大文件，主要是考虑到 HTTP/1.1 高效并发/交替加载多个小文件的性能问题。</p>
</li>
</ul>
<!-- more -->
<ul>
<li>
<p>ES6模块的 API 是静态的</p>
<p>即需要在模块的公开 API 中静态定义所有最高层导出，之后无法再添加
看下<a href="http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#%E5%BC%95%E8%A8%80" target="_blank" rel="noopener noreferrer">深入理解 JS 模块<ExternalLinkIcon/></a>中的一个ES6模块的例子</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//模块定义 myModule.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'Byron'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">printFullName</span><span class="token punctuation">(</span><span class="token parameter">firstName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstName <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> myModule <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">printName</span><span class="token operator">:</span> printName<span class="token punctuation">,</span>
    <span class="token literal-property property">printFullName</span><span class="token operator">:</span> printFullName
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> myModule<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中导出了 myModule，是一个对象。这里说的 API 是静态的指的是对于上面的模块来说导出的只有 myModule，没有其他的了，但是是可以修改/添加/删除导出的 myModule 对象的属性来间接修改模块导出的 API 的。</p>
</li>
<li>
<p>ES6模块是单例</p>
<p>即ES6模块只有一个单一实例，多个模块中引用同一个的同一个模块，最终都指向对那个唯一的中心实例的引用。</p>
</li>
<li>
<p>模块暴露的属性和方法不是值的传递而是类似指针的绑定</p>
</li>
<li>
<p>导入模块和从网络请求加载模块完全一样</p>
<p>浏览器/Node.js 提供了各自环境下默认的模块加载器(Module Loader)，<code v-pre>import ... from 'xxx</code>语句对于模块加载器来说就是<strong>告诉模块加载器去哪个 URL/文件路径下获取对应的模块</strong></p>
</li>
</ul>
<h2 id="export-模块导出" tabindex="-1"><a class="header-anchor" href="#export-模块导出" aria-hidden="true">#</a> export 模块导出</h2>
<h3 id="命名导出" tabindex="-1"><a class="header-anchor" href="#命名导出" aria-hidden="true">#</a> 命名导出</h3>
<ul>
<li>
<p>模块内部没有全局作用域，以下例子中的 var 定义的作用域仅在本模块，模块内可以访问和使用全局 global/window 等，但不建议这么用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> awesome <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> awesome<span class="token punctuation">,</span> bar <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="默认导出" tabindex="-1"><a class="header-anchor" href="#默认导出" aria-hidden="true">#</a> 默认导出</h3>
<p><code v-pre>export</code> 导出是对变量的绑定(指针)，<code v-pre>export default</code> 导出是对值的绑定，<code v-pre>export { a as default }</code>导出是对变量的绑定(指针)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块1</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> foo<span class="token punctuation">;</span><span class="token comment">// 这里默认导出是对foo值的绑定，若后续对foo有更改默认导出值不会相应更改</span>

<span class="token comment">// 模块2</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token keyword">as</span> <span class="token keyword">default</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">// 这里默认导出是对变量foo的绑定(类似指针的绑定)，若后续对foo有更改相应的默认导出也会更改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import-模块导入" tabindex="-1"><a class="header-anchor" href="#import-模块导入" aria-hidden="true">#</a> import 模块导入</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块1</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">awesome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模块2</span>
<span class="token keyword">import</span> foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> awesome <span class="token keyword">as</span> Awesome <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">*</span> <span class="token keyword">as</span> Bar <span class="token keyword">from</span> <span class="token string">'path/to/module'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的 foo 是默认导入，Awesome 为别名导入，Bar 为命名空间导入(讲所有导出导入到 Bar 的命名空间下),注意<strong>所有导入的绑定都是不可变的/或只读的</strong>，同时<strong>import 的声明是提升的，不同于 require 的动态加载</strong>。</p>
<p>关于<strong>ES6模块动态导入</strong>/<strong>模块循环依赖</strong>以及<strong>ES6模块的原理</strong>可以阅读我写的另一篇文章——<a href="https://www.yuque.com/docs/share/ad354374-4122-4599-973b-aa63943c3b3d" target="_blank" rel="noopener noreferrer">详解ES模块系统<ExternalLinkIcon/></a></p>
</div></template>


