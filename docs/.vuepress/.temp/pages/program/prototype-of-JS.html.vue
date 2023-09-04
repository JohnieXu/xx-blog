<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>思考以下几个问题：</p>
<ol>
<li>原型链是什么概念， JS 中为何要引入原型链？</li>
<li>原型链是怎样实现继承的？</li>
<li>构造函数 constructor，<strong>proto</strong>，ES6 中 class、static、super 和原型链的关系？</li>
<li>如何利用原型链来解释 this 的指向问题？</li>
<li>原型链与区块链？</li>
</ol>
<p>看下面这段代码的打印结果</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Foo<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Foo<span class="token punctuation">.</span>getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> 1   等价于new (Foo.getName()) 调用的是构造函数Foo本身的getName方法</span>
<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> 2   等价于(new Foo()).getName() 调用的是实例上(原型上)的getName方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="理解原型链的链" tabindex="-1"><a class="header-anchor" href="#理解原型链的链" aria-hidden="true">#</a> 理解原型链的链</h2>
<h3 id="对象的三种创建方式" tabindex="-1"><a class="header-anchor" href="#对象的三种创建方式" aria-hidden="true">#</a> 对象的三种创建方式</h3>
<ul>
<li>
<p>字面量形式创建</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"aaa"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"aaa"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过构造函数创建</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">M</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> o3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">M</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过 Ojbect.create 创建</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token constant">P</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"aaa"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> o4 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token constant">P</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="构造函数-原型-实例对象" tabindex="-1"><a class="header-anchor" href="#构造函数-原型-实例对象" aria-hidden="true">#</a> 构造函数/原型/实例对象</h3>
<p>上例中的<code v-pre>let M = function(a) {this.a = a;}</code>M 就是一个构造函数；构造函数拥有<code v-pre>prototype</code>属性，其指向原型对象，原型对象拥有<code v-pre>constructor</code>属性指向该构造函数；通过<code v-pre>o3 = new M('aaa');</code>即创建了 o3 这个实例对象，实例对象的<code v-pre>__proto__</code>指向构造函数的<code v-pre>prototype</code>也就是原型对象;</p>
<p>对象拥有<code v-pre>__proto__</code>属性，指向原型对象，而构造函数也是对象(准确来说是<code v-pre>Function</code>的实例对象)，故上述构造函数 M 拥有<code v-pre>__proto__</code>属性，因此这里就产生了一个类似这样的链条</p>
<div class="hint-container warning">
<p class="hint-container-title">待补充</p>
<p>原型链如何产生</p>
<p>o3.<strong>proto</strong> =&gt; M.prototype =&gt;
M.<strong>proto</strong> =&gt; Function.prototype =&gt; Object.prototype</p>
</div>
<p><code v-pre>instanceof</code>可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的<code v-pre>prototype</code>。</p>
<h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3>
<p>一个<code v-pre>instanceof</code>的具体实现方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token keyword">instanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获得类型的原型</span>
    <span class="token keyword">let</span> prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype
    <span class="token comment">// 获得对象的原型</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
    <span class="token comment">// 判断对象的类型是否等于类型的原型</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    		<span class="token keyword">return</span> <span class="token boolean">false</span>
    	<span class="token keyword">if</span> <span class="token punctuation">(</span>prototype <span class="token operator">===</span> left<span class="token punctuation">)</span>
    		<span class="token keyword">return</span> <span class="token boolean">true</span>
    	left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说： 原型链的链大概就是反映在这里<code v-pre>left = left.__proto__</code>的这种连式结构。</p>
<h3 id="this-的指向问题" tabindex="-1"><a class="header-anchor" href="#this-的指向问题" aria-hidden="true">#</a> this 的指向问题</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况</span>

<span class="token comment">// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">待补充</p>
<p>通过原型链来解释 this 的指向问题</p>
</div>
</div></template>


