<template><div><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2>
<p><code v-pre>JavaScript</code>的模块机制其实是借鉴的其他程序设计语言的, 如Java中package的概念, <code v-pre>import java.util.ArrayList;</code>; package就是逻辑上相关的代码组织到同一个包内，包内是一个相对独立的作用域，不用担心命名冲突等等, 当需要在外部使用的时候直接import相应的package即可。</p>
<p>由于<code v-pre>JavaScript</code>在设计之初的定位原因, 并没有提供类似模块的功能, 随后便出现了各种<strong>模拟</strong>类似功能的规范。到今天(2018-5-28)ES6已经十分普及, ES6的模块机制已经大规模使用, 我们完全可以使用ES6提供的模块化规范(机制)。</p>
<h2 id="类模块化" tabindex="-1"><a class="header-anchor" href="#类模块化" aria-hidden="true">#</a> 类模块化</h2>
<p><strong>类模块化</strong>: 这是我自己理解的一个模块化概念, 指的是像<strong>函数封装</strong>, <strong>对象</strong>, <strong>立即执行函数包装</strong>这样的类似模块化的规范。</p>
<h3 id="函数封装" tabindex="-1"><a class="header-anchor" href="#函数封装" aria-hidden="true">#</a> 函数封装</h3>
<p>函数就是对实现特定逻辑的一组语句的打包, JS的作用域也是基于函数的, 所以函数可以很自然的作为模块化, 这也是最开始实现模块化的一种方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用模块也即是调用函数, 这种函数定义的方式是直接采用<code v-pre>script</code>来加载执行的(不经过模块打包器处理), 故函数是挂载在全局<code v-pre>window</code>对象上, 因此<strong>存在污染全局变量的缺点和变量冲突等缺点</strong>。</p>
<h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">var1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">var2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token function-variable function">func1</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">func2</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的函数封装在一个对象中, 引用模块即引用相应文件中对象上的属性, 如: <code v-pre>myModule.func1()</code>, 通过对象名(模块名)避免了全局变量污染, 但是存在安全问题, 如: 外部可以随意修改模块内部的属性和方法等。</p>
<h3 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> 立即执行函数</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> var1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> var2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">func1</span><span class="token operator">:</span> func1<span class="token punctuation">,</span>
        <span class="token literal-property property">func2</span><span class="token operator">:</span> func2
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面对象的基础之上, 用立即执行函数进行封装, 可以解决全局变量污染, 防止模块内部属性和方法被外部修改, 这是当前主流模块规范的基础。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这里的随意修改指的是：可以通过<code v-pre>myModule.func1 = 'abc'</code>等赋值方式来修改掉模块的属性、变量等指向</p>
</div>
<h2 id="commonjs-nodejs" tabindex="-1"><a class="header-anchor" href="#commonjs-nodejs" aria-hidden="true">#</a> CommonJS(NodeJS)</h2>
<p><strong>CommonJS</strong>: 通用模块规范, 主要由NodeJS具体实现; 根据CommonJS规范, 一个单独的文件就是一个模块。每一个模块都是一个单独的作用域, 也就是说, <strong>在该模块内部定义的变量无法被其他模块读取</strong>, 除非定义为global(浏览器中为window)对象的属性。</p>
<p>CommonJS模块例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块定义 myModule.js</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'myName'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">printFullName</span><span class="token punctuation">(</span><span class="token parameter">firstName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstName <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">printName</span><span class="token operator">:</span> printName<span class="token punctuation">,</span>
    <span class="token literal-property property">printFullName</span><span class="token operator">:</span> printFullName
<span class="token punctuation">}</span>
<span class="token comment">// 加载模块</span>
<span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./myModule.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myModule<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commonjs模块存在的问题" tabindex="-1"><a class="header-anchor" href="#commonjs模块存在的问题" aria-hidden="true">#</a> CommonJS模块存在的问题</h3>
<p>require引入模块是同步的, 由于在浏览器环境下, JS都是通过script标签引入, 而这是天生异步的, 因此<code v-pre>CommonJS</code>在浏览器环境下无法正常加载(无法处理依赖问题)。NodeJS广泛采用CommonJS的原因主要是NodeJS的require模块都是在本地, 完全不用担心异步过程(即使在服务器上也是如此)。因此, 针对浏览器端异步require模块出现了<code v-pre>AMD</code>和<code v-pre>CMD</code>规范。</p>
<h2 id="amd-requirejs" tabindex="-1"><a class="header-anchor" href="#amd-requirejs" aria-hidden="true">#</a> AMD(RequireJS)</h2>
<p><strong>AMD</strong>: Asynchronous Module Definition(异步模块定义), 在浏览器端模块化开发的规范, 不是JavaScript原生支持, RequireJS是AMD规范的具体实现(严格上说是<strong>RequireJS的推广中产生的AMD规范</strong>)。</p>
<p>RequireJS模块例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义模块 myModule.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'myModule'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'dependency'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'myName'</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">printName</span><span class="token operator">:</span> printName
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 加载模块</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myModule'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">my</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
　 my<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RequireJS定义了一个全局函数<code v-pre>define(id?, dependencies?, factory);</code>来创建一个模块。
<code v-pre>AMD</code>模块中所有的依赖都前置, 其模块是异步的, 该自定义的模块内用到的模块均等到异步加载完成之后才调用响应模块, 这样浏览器不会失去响应。require指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。</p>
<p>例如: 现需要在一个HTML页面中需要使用jQuery-fileupload插件, 并通过script标签的方式引入JS文件, 传统的方式是<strong>先引入jquery.min.js再引入jquery.fileupload.js</strong>。由于jqery.fileupload.js是基于jQuery的, 必须保证首先引入jQuery, 加载JS时候页面会停止若此时网络较差, 会导致页面失去响应时间较长。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p><strong>RequireJS主要解决如问题:</strong></p>
<ol>
<li>多个JS文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器;</li>
<li>JS加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长。</li>
</ol>
<p><strong>模块机制用途:</strong></p>
<ol>
<li><code v-pre>CommonJS</code>是同步的, 主要用于服务器</li>
<li><code v-pre>AMD</code>和<code v-pre>CMD</code>是异步的, 两者的模块定义和加载机制稍有不同, 主要用于浏览器</li>
</ol>
<h3 id="amd与cmd的区别" tabindex="-1"><a class="header-anchor" href="#amd与cmd的区别" aria-hidden="true">#</a> AMD与CMD的区别</h3>
<ol>
<li><code v-pre>AMD</code>推崇依赖前置，在定义模块的时候就要声明其依赖的模块<code v-pre>, </code>CMD`推崇就近依赖，只有在用到某个模块的时候再去require</li>
<li>两个都是定义的全局define函数来定义模块, define接收函数function(require, exports, module)保持一致</li>
<li><code v-pre>CMD</code>是懒加载, 仅在require时才会加载模块; <code v-pre>AMD</code>是预加载, 在定义模块时就提前加载好所有依赖</li>
<li><code v-pre>CMD</code>保留了CommonJS风格</li>
</ol>
<h2 id="cmd-seajs" tabindex="-1"><a class="header-anchor" href="#cmd-seajs" aria-hidden="true">#</a> CMD(SeaJS)</h2>
<p><strong>CMD</strong>: Common Module Definition通用模块定义, 由国内发展出来, SeaJS是其典型代表, 即SeaJS是通过浏览器对CMD的具体实现</p>
<p>SeaJS模块例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义模块  myModule.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jquery.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> out <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> out<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 加载模块</span>
seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myModule.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">my</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SeaJS定义了一个全局函数<code v-pre>define(id?, deps?, factory) </code>来创建一个模块, define接受一个需要三个参数的函数, 分别为:</p>
<ul>
<li><strong>require</strong>: 一个方法, 接受模块标识 作为唯一参数，用来获取其他模块提供的接口：require(id)</li>
<li><strong>exports</strong>: 一个对象, 用来向外提供模块接口</li>
<li><strong>module</strong>: 一个对象, 上面存储了与当前模块相关联的一些属性和方法</li>
</ul>
<p>CMD推崇依赖就近原则(也就是<strong>懒加载</strong>), 模块内部的依赖在需要引入的时候再引入, 如上例中的<code v-pre>var $ = require('jquery.js')</code>, 这一点和通用的<code v-pre>CommonJS</code>模块风格保持一致。</p>
<h2 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h2>
<p><strong>UMD</strong>: 是一个既能在<code v-pre>seajs（CMD）</code>环境里引入，又能在<code v-pre>requirejs（AMD）</code>环境中引入，
当然也能在<code v-pre>Node.js（CommonJS）</code>中使用，另外还可以在没有模块化的环境中用<code v-pre>script标签</code>全局引入的'模块规范'</p>
<p><code v-pre>UMD</code>模块其实就是在当前JS执行环境中对以上几种模块规范定义的<code v-pre>define</code>, <code v-pre>module.exports</code>等进行判断, 同一模块根据不同场所返回不同结果。</p>
<p>UMD模块例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">factory</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体业务方模块的定义</span>
        <span class="token keyword">var</span> moduleName <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> moduleName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">!==</span> <span class="token string">'undefined'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>define<span class="token punctuation">.</span>cmd <span class="token operator">||</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">define</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        global<span class="token punctuation">.</span>moduleName <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span> <span class="token operator">?</span> window <span class="token operator">:</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UMD模块在不同环境引入:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// RequireJs</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'moduleName'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'otherModule'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">moduleName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// SeaJs</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'moduleName'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Node.js</span>
<span class="token keyword">var</span> myModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'moduleName'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Browser global</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"moduleName.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6模块-import-export" tabindex="-1"><a class="header-anchor" href="#es6模块-import-export" aria-hidden="true">#</a> ES6模块(import,export)</h2>
<p>ES6在语言标准的层面上, 实现了模块功能, 而且实现得相当简单, 完全可以取代<code v-pre>CommonJS</code>和<code v-pre>AMD</code>规范, 是浏览器和服务器通用的模块解决方案。</p>
<p>ES6模块例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块定义 myModule.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'myName'</span><span class="token punctuation">;</span>
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

<span class="token comment">// 加载模块</span>
<span class="token keyword">import</span> myModule<span class="token punctuation">,</span> <span class="token punctuation">{</span> printFullName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./myModule.js'</span><span class="token punctuation">;</span>
myModule<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printFullName</span><span class="token punctuation">(</span><span class="token string">'myFullName'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<ol>
<li>ES6中的<code v-pre>export</code>是ES6对于JS模块的一种新的规范, 不同于<code v-pre>CommonJS</code>规范中的<code v-pre>module.exports</code>和<code v-pre>exports</code>;</li>
<li><code v-pre>CommonJS</code>规范中<code v-pre>exports</code>可以理解为指向<code v-pre>module.exports</code>的一个指针, 可以<code v-pre>exports.newModule = {...}</code>, 但是这样写<code v-pre>exports={..}</code>是不行的, 这会将<code v-pre>exports</code>这个指针指向新的<code v-pre>{...}</code>对象, 不再指向<code v-pre>module.exports</code>;</li>
<li>ES6语法一般都经过<code v-pre>babel</code>转义为JS, 故可以在ES6中使用<code v-pre>CommonJS</code>模块规范, 如: <code v-pre>var myModule = require('./myModule.js')</code>。</li>
</ol>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ol>
<li><a href="https://www.cnblogs.com/chenguangliang/p/5856701.html" target="_blank" rel="noopener noreferrer">js模块化编程之彻底弄懂CommonJS和AMD/CMD<ExternalLinkIcon/></a></li>
<li><a href="http://www.cnblogs.com/brandonchen/p/5550470.html" target="_blank" rel="noopener noreferrer">写一个适应所有环境的js模块<ExternalLinkIcon/></a></li>
<li><a href="http://www.zhangxinxu.com/sp/seajs/" target="_blank" rel="noopener noreferrer">SeaJS<ExternalLinkIcon/></a></li>
<li><a href="http://requirejs.org/" target="_blank" rel="noopener noreferrer">RequireJS<ExternalLinkIcon/></a></li>
<li><a href="http://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noopener noreferrer">阮一峰-ES6模块<ExternalLinkIcon/></a></li>
</ol>
</div></template>


