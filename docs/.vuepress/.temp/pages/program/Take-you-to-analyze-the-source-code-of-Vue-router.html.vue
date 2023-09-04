<template><div><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>在<a href="https://www.yuque.com/johniexu/frontend/dhgooo" target="_blank" rel="noopener noreferrer">前一篇文章<ExternalLinkIcon/></a>中遇到的vue路由组件缓存问题已经解决并对项目进行了适当的优化改进，但是并未开探寻究vue-router的源码，这篇就继续上次的话题，深入分析vue-router源码中对导航守卫、动态参数匹配、过渡效果和异步组件等的实现。</p>
<blockquote>
<p>本文分析的源码为vue-router@3.1.3，vue@2.6.11</p>
</blockquote>
<!-- more -->
<h1 id="万丈高楼平地起" tabindex="-1"><a class="header-anchor" href="#万丈高楼平地起" aria-hidden="true">#</a> 万丈高楼平地起</h1>
<p>参考官网的<a href="https://router.vuejs.org/zh/guide/#javascript" target="_blank" rel="noopener noreferrer">起步中<ExternalLinkIcon/></a>的使用实例，vue-router的基本思路是根据路由记录生成VueRouter实例并传入Vue的app实例的router属性上，同时使用router-view来挂载路由匹配的路由组件到页面某一位置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>foo&lt;/div>'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> Bar <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>bar&lt;/div>'</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/foo'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Foo <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Bar <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes <span class="token comment">// (缩写) 相当于 routes: routes</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程" aria-hidden="true">#</a> 使用流程</h2>
<img src="@imgs/852cd383-a782-414c-9933-149d19db4198.png">
<blockquote>
<p>这里vue-router的设计哲学与react-routerV4不太一样，前者是以路由配置来统一配置路由，后者是路由即组件的概念（不需要统一的路由配置，不过自行封装成路由配置）</p>
</blockquote>
<h2 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性" aria-hidden="true">#</a> 核心特性</h2>
<img src="@imgs/9516091f-4193-41fc-b668-a8bd5e511ffe.png">
<p>以上这些是vue-router提供的核心功能，完整的用法说明可以参考<a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>，下面将逐步分析vue-router源码中是如何实现以上这些核心功能的。</p>
<h1 id="阅读源码的前置条件" tabindex="-1"><a class="header-anchor" href="#阅读源码的前置条件" aria-hidden="true">#</a> 阅读源码的前置条件</h1>
<h2 id="源码目录结构" tabindex="-1"><a class="header-anchor" href="#源码目录结构" aria-hidden="true">#</a> 源码目录结构</h2>
<img src="@imgs/ac0c7e0f-57c4-4553-aaaf-f1fbe751faa0.png">
<p>源码结构算是秉承着vue系列的一目了然的特性，主要分为组件link和view、维护路由的history、vue插件的注册方法install.js、模块导出文件index.js</p>
<h2 id="基础概念——路由实例router" tabindex="-1"><a class="header-anchor" href="#基础概念——路由实例router" aria-hidden="true">#</a> 基础概念——路由实例router</h2>
<p>路由实例router是在使用vue-router的时候通过传入路由记录等配置而生成的实例对象，重点在于其VueRouter类的实现。</p>
<img src="@imgs/3208bfb8-d96d-4e3f-bdd0-aa6d2687235d.png">
<h3 id="init方法的实现" tabindex="-1"><a class="header-anchor" href="#init方法的实现" aria-hidden="true">#</a> init方法的实现</h3>
<p>这里的init方法与install.js中注册的全局mixin关联最大，是vue组件在create时执行的初始化路由方法，需要重点分析一下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">init</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> any <span class="token comment">/* Vue component instance */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">'hook:destroyed'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">===</span> app<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> app

  <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history

  <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token keyword">instanceof</span> <span class="token class-name">HTML5History</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token keyword">instanceof</span> <span class="token class-name">HashHistory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setupHashListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      history<span class="token punctuation">.</span><span class="token function">setupListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>
      history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      setupHashListener<span class="token punctuation">,</span>
      setupHashListener
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      app<span class="token punctuation">.</span>_route <span class="token operator">=</span> route
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/index.js#L83" target="_blank" rel="noopener noreferrer">L83<ExternalLinkIcon/></a></p>
<p>这里的app是vue组件的实例，通过 <code v-pre>app.$once('hook:destroyed', () =&gt; {}</code> 声明式地注册组件destroyed生命周期钩子，保证对应组件销毁时组件app实例从<code v-pre>router.apps</code>上移除。</p>
<p><strong>保证路由初仅始化一次</strong>：由于init是被全局注册的mixin调用，此处通过this.app是否存在的判断逻辑保证路由初始化仅仅在根组件 <code v-pre>&lt;App /&gt;</code> 上初始化一次，<code v-pre>this.app</code>最后保存的根据组件实例。</p>
<p><strong>触发路由变化&amp;开始路由监听</strong>：使用 <code v-pre>history.transitionTo</code> 分路由模式触发路由变化，使用 <code v-pre>history.listen</code> 监听路由变化来更新根组件实例 <code v-pre>app._route</code> 是当前跳转的路由。</p>
<h2 id="基础概念——路由匹配器matcher" tabindex="-1"><a class="header-anchor" href="#基础概念——路由匹配器matcher" aria-hidden="true">#</a> 基础概念——路由匹配器matcher</h2>
<p>路由匹配器macther是由create-matcher生成一个对象，其将传入VueRouter类的路由记录进行内部转换，对外提供根据location匹配路由方法——match、注册路由方法——addRoutes。</p>
<ul>
<li><a href="https://github.com/vuejs/vue-router/blob/dev/src/create-matcher.js#L26" target="_blank" rel="noopener noreferrer">match<ExternalLinkIcon/></a>方法：根据内部的路由映射匹配location对应的路由对象route</li>
<li><a href="https://github.com/vuejs/vue-router/blob/dev/src/create-matcher.js#L22" target="_blank" rel="noopener noreferrer">addRoutes<ExternalLinkIcon/></a>方法：将路由记录添加到matcher实例的路由映射中</li>
</ul>
<h3 id="生成matcher" tabindex="-1"><a class="header-anchor" href="#生成matcher" aria-hidden="true">#</a> 生成matcher</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> RouterOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>matcher <span class="token operator">=</span> <span class="token function">createMatcher</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>routes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/index.js#L42" target="_blank" rel="noopener noreferrer">L42<ExternalLinkIcon/></a></p>
<p><code v-pre>options.routes</code>为进行 <code v-pre>new VueRoute</code> 操作是传入的路由记录</p>
<h3 id="creatematcher内部" tabindex="-1"><a class="header-anchor" href="#creatematcher内部" aria-hidden="true">#</a> createMatcher内部</h3>
<p>createMatcher来自于<code v-pre>import { createMatcher } from './create-matcher'</code>, 内部进行路由地址到路由对象的转换、路由记录的映射、路由参数处理等操作</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/create-matcher.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createMatcher</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteConfig<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">router</span><span class="token operator">:</span> VueRouter</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Matcher <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">function</span> <span class="token function">addRoutes</span> <span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">createRouteMap</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">match</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">raw</span><span class="token operator">:</span> RawLocation<span class="token punctuation">,</span>
    currentRoute<span class="token operator">?</span><span class="token operator">:</span> Route<span class="token punctuation">,</span>
    redirectedFrom<span class="token operator">?</span><span class="token operator">:</span> Location</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Route <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">_createRoute</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> <span class="token operator">?</span>RouteRecord<span class="token punctuation">,</span>
    <span class="token literal-property property">location</span><span class="token operator">:</span> Location<span class="token punctuation">,</span>
    redirectedFrom<span class="token operator">?</span><span class="token operator">:</span> Location</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Route <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    match<span class="token punctuation">,</span>
    addRoutes
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/create-matcher.js#L16" target="_blank" rel="noopener noreferrer">L16<ExternalLinkIcon/></a></p>
<p>createRoute：将外部传入的路由记录转换成统一的route对象，传入<strong>组件实例的$route</strong>就是此处返回的
alias：处理路由别名
nameMap：处理命名路由
<strong>路由参数解析</strong>：解析路由location.params、query参数、hash等，<strong>动态路由匹配正是来自此处</strong></p>
<h1 id="动态路由匹配-嵌套路由" tabindex="-1"><a class="header-anchor" href="#动态路由匹配-嵌套路由" aria-hidden="true">#</a> 动态路由匹配&amp;嵌套路由</h1>
<h2 id="动态路由匹配" tabindex="-1"><a class="header-anchor" href="#动态路由匹配" aria-hidden="true">#</a> 动态路由匹配</h2>
<p>动态路由匹配指的是可以在路径中设置多段参数，参数将会被设置到 <code v-pre>$route.params</code> 上，例如：</p>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>模式</strong></th>
<th style="text-align:center"><strong>匹配路径</strong></th>
<th style="text-align:center"><strong>$route.params</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">/user/:username</td>
<td style="text-align:center">/user/evan</td>
<td style="text-align:center">{ username: 'evan' }</td>
</tr>
<tr>
<td style="text-align:center">/user/:username/post/:post_id</td>
<td style="text-align:center">/user/evan/post/123</td>
<td style="text-align:center">{ username: 'evan', post_id: '123' }</td>
</tr>
</tbody>
</table>
<p>参考：<a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D" target="_blank" rel="noopener noreferrer">官网例子<ExternalLinkIcon/></a></p>
<h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h2>
<p>嵌套路由指的是路由可以像组件一样具有嵌套关系，一条路由记录下可以通过 <code v-pre>children</code> 属性嵌套由多个子路由记录组成的数组，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 当 /user/:id/profile 匹配成功，</span>
          <span class="token comment">// UserProfile 会被渲染在 User 的 &lt;router-view> 中</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'profile'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 当 /user/:id/posts 匹配成功</span>
          <span class="token comment">// UserPosts 会被渲染在 User 的 &lt;router-view> 中</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'posts'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="https://router.vuejs.org/zh/guide/essentials/nested-routes.html" target="_blank" rel="noopener noreferrer">官网例子<ExternalLinkIcon/></a></p>
<p>在项目中只要使用vue-router，几乎不可避免要使用到动态路由匹配和嵌套路由，可见两个功能在vue-router是何等重要，在研究其源码时这两个功能肯定是要研究的，下面将探究上述功能在vue-router是如何实现的。</p>
<h2 id="主要实现思路" tabindex="-1"><a class="header-anchor" href="#主要实现思路" aria-hidden="true">#</a> 主要实现思路</h2>
<p>要实现动态路由匹配主要是要实现路由记录的path属性与实际的路由路径的参数进行匹配，而要实现嵌套路由则需要根据嵌套规则对路由记录解析，这两个都在create-route-map进行实现，实现的思路如下：</p>
<img src="@imgs/00a39db2-760f-43d5-bc9f-a472c4450710.png">
<p>create-route-map中的核心代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRouteMap</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteConfig<span class="token operator">></span><span class="token punctuation">,</span>
  oldPathList<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">,</span>
  oldPathMap<span class="token operator">?</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
  oldNameMap<span class="token operator">?</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pathList</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">pathMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">nameMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span>
<span class="token punctuation">}</span> <span class="token punctuation">{</span>
 	<span class="token operator">...</span>
 	routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">,</span> route<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">...</span>
  <span class="token doc-comment comment">/**
   * TODO:
   * 处理路由的优先级循序：将路由记录中的通配符*表示的路由按循序移动到路由记录末尾
   * 采用的哪种排序算法？
   */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> pathList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pathList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'*'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pathList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pathList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      l<span class="token operator">--</span>
      i<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
  <span class="token doc-comment comment">/**
   * TODO:
   * 路由记录，将路由所有的路由记录映射到pathMap、nameMap中，pathMap：按路径映射，nameMap：按名称映射，pathList所有路由path组成的数组
   * 处理嵌套路由：递归调用此方法，parent表示父级路由
   * 处理路由别名：把路径别名看成是指向同一个组件的路由记录，由此方法处理一遍这个别名组成的路由
   * 处理路由名称：若存在路由名称，则将该路由映射到nameMap中存储
   */</span>
  <span class="token keyword">function</span> <span class="token function">addRouteRecord</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">pathList</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token literal-property property">nameMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token literal-property property">route</span><span class="token operator">:</span> RouteConfig<span class="token punctuation">,</span>
    parent<span class="token operator">?</span><span class="token operator">:</span> RouteRecord<span class="token punctuation">,</span>
    matchAs<span class="token operator">?</span><span class="token operator">:</span> string</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    pathList<span class="token punctuation">,</span>
    pathMap<span class="token punctuation">,</span>
    nameMap
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/create-route-map.js#L7" target="_blank" rel="noopener noreferrer">L7<ExternalLinkIcon/></a></p>
<p><code v-pre>createRouteMap</code>方法主要是遍历路由配置routes，调用 <code v-pre>addRouteRecord</code> 方法来处理路由，处理完路由后得到 <code v-pre>pathList</code> <code v-pre>pathMap</code> <code v-pre>nameMap</code> ，并将其组成对象并返回。</p>
<h3 id="动态路由匹配的实现" tabindex="-1"><a class="header-anchor" href="#动态路由匹配的实现" aria-hidden="true">#</a> 动态路由匹配的实现</h3>
<p>在 <code v-pre>addRouteRecord</code> 方法处理路由的实现中由将 <code v-pre>route.path</code> 使用path-to-regexp转换成正则表达式， <code v-pre>record</code> 是处理完成后保存在 <code v-pre>pahtMap</code> <code v-pre>nameMap</code> 映射中的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">record</span><span class="token operator">:</span> RouteRecord <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
  <span class="token literal-property property">regex</span><span class="token operator">:</span> <span class="token function">compileRouteRegex</span><span class="token punctuation">(</span>normalizedPath<span class="token punctuation">,</span> pathToRegexpOptions<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * TODO:
 * 调用path-to-regexp生成路由匹配用的正则
 */</span>
<span class="token keyword">function</span> <span class="token function">compileRouteRegex</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">pathToRegexpOptions</span><span class="token operator">:</span> PathToRegexpOptions</span>
<span class="token punctuation">)</span><span class="token operator">:</span> RouteRegExp <span class="token punctuation">{</span>
  <span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token function">Regexp</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pathToRegexpOptions<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> any <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    regex<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token operator">!</span>keys<span class="token punctuation">[</span>key<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Duplicate param keys in route with path: "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span>
      keys<span class="token punctuation">[</span>key<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> regex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/create-route-map.js#L178" target="_blank" rel="noopener noreferrer">L178<ExternalLinkIcon/></a></p>
<p>然后在create-matcher提供的match方法中根据 <code v-pre>route.name</code> 、 <code v-pre>route.path</code> 进行路由匹配，<strong>匹配的时候回调用上述得到的正则表达式进行路由匹配及参数解析</strong>，从而得到路径或者路由名称匹配的路由以及动态参数。</p>
<h3 id="嵌套路由的实现" tabindex="-1"><a class="header-anchor" href="#嵌套路由的实现" aria-hidden="true">#</a> 嵌套路由的实现</h3>
<p><code v-pre>addRouteRecord</code> 方法实现嵌套路由部分的源码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRouteMap</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteConfig<span class="token operator">></span><span class="token punctuation">,</span>
  oldPathList<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">,</span>
  oldPathMap<span class="token operator">?</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
  oldNameMap<span class="token operator">?</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pathList</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">pathMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">nameMap</span><span class="token operator">:</span> Dictionary<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span>
<span class="token punctuation">}</span> <span class="token punctuation">{</span>
 	<span class="token operator">...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    route<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> childMatchAs <span class="token operator">=</span> matchAs
        <span class="token operator">?</span> <span class="token function">cleanPath</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>matchAs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>child<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">undefined</span>
      <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">,</span> child<span class="token punctuation">,</span> record<span class="token punctuation">,</span> childMatchAs<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="">L102</a></p>
<p>路由记录的children表示当前路由下嵌套的路由记录，当其存在时递归处理路由；处理子路由时会拼接完整的路由path放入 <code v-pre>pathMap</code> <code v-pre>nameMap</code> 。</p>
<p>故不论是否嵌套路由与否，最后都是进行评级的路由映射，统一路由match方法进行路由匹配。</p>
<h1 id="导航守卫机制" tabindex="-1"><a class="header-anchor" href="#导航守卫机制" aria-hidden="true">#</a> 导航守卫机制</h1>
<p>导航守卫给给路由使用者传入自定义的控制路由跳转逻辑的钩子方法，通过 <code v-pre>next</code> 方法串行执行下一个路由的匹配逻辑，根据定义导航守卫的位置不同可以将其分为三类：<strong>全局导航守卫、路由独享守卫、组件内部导航守卫</strong>。</p>
<img src="@imgs/83b03bac-1783-42ca-aba7-35ec8952d325.png">
<h2 id="导航守卫的注册" tabindex="-1"><a class="header-anchor" href="#导航守卫的注册" aria-hidden="true">#</a> 导航守卫的注册</h2>
<p>用注册导航守卫方法或导航守卫配置会被注册到执行队列中，在路由跳转时根据根据路由配置映射计算出组件实例的更新、替换、重用等情况，然后在对应组件上遍历执行导航守卫队列。</p>
<h3 id="注册全局导航守卫" tabindex="-1"><a class="header-anchor" href="#注册全局导航守卫" aria-hidden="true">#</a> 注册全局导航守卫</h3>
<p>全局导航守卫分为：全局前置导航守卫、全局解析守卫、全局后置守卫，分别通过 <code v-pre>router.beforeEach</code> <code v-pre>router.beforeResolve</code> <code v-pre>router.afterEach</code> 进行注册。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token function">beforeEach</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beforeHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">beforeResolve</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resolveHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">afterEach</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>afterHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/index.js#L133" target="_blank" rel="noopener noreferrer">L133<ExternalLinkIcon/></a></p>
<p>注册全局导航守卫是调用 <code v-pre>registerHook</code> 方法向钩子函数队列中推入钩子函数，同时返回删除钩子函数的方法。</p>
<blockquote>
<p>这是常见队列入栈出栈用法，vue源码中很常见的一种用法</p>
</blockquote>
<p>registerHook方法源码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">function</span> <span class="token function">registerHook</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">list</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token literal-property property">fn</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> i <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册路由独享守卫" tabindex="-1"><a class="header-anchor" href="#注册路由独享守卫" aria-hidden="true">#</a> 注册路由独享守卫</h3>
<p>路由独享守卫是以路由配置的形式进行注册，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/foo'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span>
      <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册组件内部守卫" tabindex="-1"><a class="header-anchor" href="#注册组件内部守卫" aria-hidden="true">#</a> 注册组件内部守卫</h3>
<p>组件内部守卫是通过配置组件的导航守卫属性进行注册，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
    <span class="token comment">// 不！能！获取组件实例 `this`</span>
    <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
    <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
    <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 导航离开该组件的对应路由时调用</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航守卫的解析流程" tabindex="-1"><a class="header-anchor" href="#导航守卫的解析流程" aria-hidden="true">#</a> 导航守卫的解析流程</h2>
<p>将上面在全局注册、路由配置注册、组件内部注册的导航守卫解析出来，按照<strong>导航钩子解析顺序</strong>推进队列中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">?</span>NavigationGuard<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
  <span class="token comment">// in-component leave guards</span>
  <span class="token function">extractLeaveGuards</span><span class="token punctuation">(</span>deactivated<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 失效组件的beforeRouterLeave</span>
  <span class="token comment">// global before hooks</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>beforeHooks<span class="token punctuation">,</span>					<span class="token comment">// 全局的前置钩子beforeEach</span>
  <span class="token comment">// in-component update hooks</span>
  <span class="token function">extractUpdateHooks</span><span class="token punctuation">(</span>updated<span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">// 重用的组件beforeRouteUpdate</span>
  <span class="token comment">// in-config enter guards</span>
  activated<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">m</span> <span class="token operator">=></span> m<span class="token punctuation">.</span>beforeEnter<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// 路由配置的beforeRouteEnter</span>
  <span class="token comment">// async components</span>
  <span class="token function">resolveAsyncComponents</span><span class="token punctuation">(</span>activated<span class="token punctuation">)</span> <span class="token comment">// 路由配置中异步组件的加载解析</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/history/base.js#L133" target="_blank" rel="noopener noreferrer">L133<ExternalLinkIcon/></a></p>
<p><strong>导航钩子的解析流程</strong>
<img src="@imgs/3cf41362-5479-4926-afa5-eb867f07fddc.png"></p>
<p><strong>导航钩子解析对应的源码</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 执行前置守卫</span>
<span class="token function">runQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> iterator<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> postEnterCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">===</span> route
  <span class="token keyword">const</span> enterGuards <span class="token operator">=</span> <span class="token function">extractEnterGuards</span><span class="token punctuation">(</span>activated<span class="token punctuation">,</span> postEnterCbs<span class="token punctuation">,</span> isValid<span class="token punctuation">)</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> enterGuards<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>resolveHooks<span class="token punctuation">)</span>
  <span class="token comment">// 执行解析守卫</span>
  <span class="token function">runQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> iterator<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">!==</span> route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token function">onComplete</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行后置守卫</span>
        postEnterCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/history/base.js#L179" target="_blank" rel="noopener noreferrer">L179<ExternalLinkIcon/></a></p>
<h1 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h1>
<p>路由懒加载是以路由为基础单位对页面代码进行分包，在匹配到对应路由时候在异步下载对应路由组件的代码，以vue-cli新建的项目可以直接使用<a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noopener noreferrer">webpack 的 code-splitting 功能<ExternalLinkIcon/></a>，一个结合<a href="https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6" target="_blank" rel="noopener noreferrer">vue异步组件<ExternalLinkIcon/></a>+ES新语法的路由懒加载的例子如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>vue <span class="token function">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/foot'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./my-async-component'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步组件的加载需要关注其加载状态，在vue-router中的异步组件的加载状态只有loading、error等，而在vue-router是重新实现的组件懒加载实现了更细致的组件加载状态控制、路由解析控制。</p>
<p>vue-router的异步组件解析在<a href="#5Pm5h">导航守卫队列的解析流程</a>里面，其中重点的解析异步组件的方法源码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// util/resolve-components.js</span>
<span class="token doc-comment comment">/**
 * TODO:
 * 异步路由解析：重写异步组件的resolve、reject方法，添加了组件加载状态控制、路由解析控制；对异步组件的传统写法及promise写进行兼容
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolveAsyncComponents</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">matched</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecord<span class="token operator">></span></span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> hasAsync <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> error <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token function">flatMapComponents</span><span class="token punctuation">(</span>matched<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">def<span class="token punctuation">,</span> _<span class="token punctuation">,</span> match<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> def <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">&amp;&amp;</span> def<span class="token punctuation">.</span>cid <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hasAsync <span class="token operator">=</span> <span class="token boolean">true</span>
        pending<span class="token operator">++</span>
        <span class="token comment">// 重写vue异步组件的resolve和reject方法</span>
        <span class="token keyword">const</span> resolve <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">resolvedDef</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isESModule</span><span class="token punctuation">(</span>resolvedDef<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            resolvedDef <span class="token operator">=</span> resolvedDef<span class="token punctuation">.</span>default
          <span class="token punctuation">}</span>
          <span class="token comment">// save resolved on async factory in case it's used elsewhere</span>
          def<span class="token punctuation">.</span>resolved <span class="token operator">=</span> <span class="token keyword">typeof</span> resolvedDef <span class="token operator">===</span> <span class="token string">'function'</span>
            <span class="token operator">?</span> resolvedDef
            <span class="token operator">:</span> _Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>resolvedDef<span class="token punctuation">)</span>
          match<span class="token punctuation">.</span>components<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> resolvedDef
          pending<span class="token operator">--</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> reject <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed to resolve async component </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>reason<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
          process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            error <span class="token operator">=</span> <span class="token function">isError</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span>
              <span class="token operator">?</span> reason
              <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
            <span class="token function">next</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> res
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          res <span class="token operator">=</span> <span class="token function">def</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 兼容异步组件的promise写法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// new syntax in Vue 2.3</span>
            <span class="token keyword">const</span> comp <span class="token operator">=</span> res<span class="token punctuation">.</span>component
            <span class="token keyword">if</span> <span class="token punctuation">(</span>comp <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> comp<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              comp<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/util/resolve-components.js#L6" target="_blank" rel="noopener noreferrer">L6<ExternalLinkIcon/></a></p>
<p>重写了vue异步组件加载的resolve和reject方法来实现对路由解析是否进入下一个匹配的控制，加入了路由匹配的组件解析失败的异常处理，同时还对异步组件的promise写法也进行了兼容。</p>
<h1 id="router-view组件" tabindex="-1"><a class="header-anchor" href="#router-view组件" aria-hidden="true">#</a> router-view组件</h1>
<p>router-view是vue-router提供的两个核心组件之一，它是一个函数式组件不存在自己的组件实例，只负责调用父组件上存储的 <code v-pre>keepAlive</code> <code v-pre>$route.match</code> 等相关的属性/方法来控制路由对应的组件的渲染情况。</p>
<p>router-view组件可以嵌套来配合实现嵌套路由，其自身所在的页面位置最终是其匹配上的路由组件所挂载的位置。</p>
<p>其源码render部分的核心源码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> <span class="token punctuation">{</span> props<span class="token punctuation">,</span> children<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 标识当前组件是router-view</span>
  data<span class="token punctuation">.</span>routerView <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> h <span class="token operator">=</span> parent<span class="token punctuation">.</span>$createElement
  <span class="token keyword">const</span> name <span class="token operator">=</span> props<span class="token punctuation">.</span>name
  <span class="token keyword">const</span> route <span class="token operator">=</span> parent<span class="token punctuation">.</span>$route
  <span class="token keyword">const</span> cache <span class="token operator">=</span> parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">||</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> inactive <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// 由router-view组件向上遍历直到跟组件，遇到其他的router-view组件则路由深度+1</span>
  <span class="token comment">// vnodeData.keepAlivepj</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_routerRoot <span class="token operator">!==</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vnodeData <span class="token operator">=</span> parent<span class="token punctuation">.</span>$vnode <span class="token operator">?</span> parent<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>data <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeData<span class="token punctuation">.</span>routerView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      depth<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeData<span class="token punctuation">.</span>keepAlive <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_directInactive <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      inactive <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent
  <span class="token punctuation">}</span>
  data<span class="token punctuation">.</span>routerViewDepth <span class="token operator">=</span> depth

	<span class="token comment">// 启用缓存时</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cachedData <span class="token operator">=</span> cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
    <span class="token keyword">const</span> cachedComponent <span class="token operator">=</span> cachedData <span class="token operator">&amp;&amp;</span> cachedData<span class="token punctuation">.</span>component
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedData<span class="token punctuation">.</span>configProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fillPropsinData</span><span class="token punctuation">(</span>cachedComponent<span class="token punctuation">,</span> data<span class="token punctuation">,</span> cachedData<span class="token punctuation">.</span>route<span class="token punctuation">,</span> cachedData<span class="token punctuation">.</span>configProps<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>cachedComponent<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> matched <span class="token operator">=</span> route<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>depth<span class="token punctuation">]</span>
  <span class="token keyword">const</span> component <span class="token operator">=</span> matched <span class="token operator">&amp;&amp;</span> matched<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matched <span class="token operator">||</span> <span class="token operator">!</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> component <span class="token punctuation">}</span>

  <span class="token comment">// 往父组件注册registerRouteInstance方法</span>
  data<span class="token punctuation">.</span><span class="token function-variable function">registerRouteInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// val could be undefined for unregistration</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">!==</span> vm<span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span><span class="token operator">!</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">===</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
	<span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/components/view.js#L13" target="_blank" rel="noopener noreferrer">L13<ExternalLinkIcon/></a></p>
<h2 id="路由缓存的判断" tabindex="-1"><a class="header-anchor" href="#路由缓存的判断" aria-hidden="true">#</a> 路由缓存的判断</h2>
<p>parent表示router-view组件的直接父级组件实例，从当router-view往外层组件遍历，遇到router-view则说明存在嵌套路由，路由深度+1，同时若满足条件则表示路由启用了缓存；</p>
<p>即如下结构会使用路由缓存</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存的路由组件实例存在父级组件实例上，若启用了路由缓存则用父级缓存的已匹配的路由组件进行渲染，无则用 <code v-pre>$route.match</code> 来匹配 <code v-pre>matcher</code> 中匹配上的路由进行渲染。</p>
<p>**<code v-pre>parent._inactive</code>**由vue核心模块的<code v-pre>observer/scheduler</code>调度器更新
<code v-pre>**parent._directInactive**</code>由vue核心模块的<code v-pre>instance/lifecycle</code>更新，两者都是用于标识当前组件是否处于active状态，具体区别可参考这个issue<a href="https://github.com/vuejs/vue-router/issues/1212" target="_blank" rel="noopener noreferrer">#1212<ExternalLinkIcon/></a>。</p>
<h1 id="router-link组件" tabindex="-1"><a class="header-anchor" href="#router-link组件" aria-hidden="true">#</a> router-link组件</h1>
<p>router-link是vue-router提供的两个核心组件之一，它是一个普通组件，内部取消了<code v-pre>a标签</code>的默认跳转行为，并控制了组件与<code v-pre>control</code>、<code v-pre>meta</code>等按键同时存在的兼容性问题，提供了当前激活路由匹配时的样式类；</p>
<p>通过 <code v-pre>to</code> 来决定点击事件跳转的目标路由，通过 <code v-pre>append</code> <code v-pre>replace</code>等属性改变默认路由跳转的行为。</p>
<h2 id="通过slot分发内容" tabindex="-1"><a class="header-anchor" href="#通过slot分发内容" aria-hidden="true">#</a> 通过slot分发内容</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> scopedSlot <span class="token operator">=</span>
  <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span>$hasNormal <span class="token operator">&amp;&amp;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span>default <span class="token operator">&amp;&amp;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    href<span class="token punctuation">,</span>
    route<span class="token punctuation">,</span>
    <span class="token literal-property property">navigate</span><span class="token operator">:</span> handler<span class="token punctuation">,</span>
    <span class="token literal-property property">isActive</span><span class="token operator">:</span> classes<span class="token punctuation">[</span>activeClass<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isExactActive</span><span class="token operator">:</span> classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> scopedSlot<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span>scopedSlot<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">RouterLink with to="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>to
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> scopedSlot<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scopedSlot<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L91" target="_blank" rel="noopener noreferrer">L91<ExternalLinkIcon/></a></p>
<h2 id="统一处理点击事件兼容性" tabindex="-1"><a class="header-anchor" href="#统一处理点击事件兼容性" aria-hidden="true">#</a> 统一处理点击事件兼容性</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">guardEvent</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// don't redirect with control keys</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>metaKey <span class="token operator">||</span> e<span class="token punctuation">.</span>altKey <span class="token operator">||</span> e<span class="token punctuation">.</span>ctrlKey <span class="token operator">||</span> e<span class="token punctuation">.</span>shiftKey<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don't redirect when preventDefault called</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don't redirect on right click</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>button <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>button <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don't redirect if `target="_blank"`</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>getAttribute<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'target'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\b_blank\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// this may be a Weex event which doesn't have this method</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L158" target="_blank" rel="noopener noreferrer">L158<ExternalLinkIcon/></a></p>
<h2 id="查找渲染的a标签" tabindex="-1"><a class="header-anchor" href="#查找渲染的a标签" aria-hidden="true">#</a> 查找渲染的a标签</h2>
<p>递归查找children中的a标签作为组件默认插槽的默认替换内容</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findAnchor</span> <span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> child
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> child
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>child <span class="token operator">=</span> <span class="token function">findAnchor</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> child
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码：<a href="https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L177" target="_blank" rel="noopener noreferrer">L177<ExternalLinkIcon/></a></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<p>经过以上的种种分析，vue-router中的核心特性的实现基本已经分析完成。由于目前作者水平有限，部分源码的分析还不够彻底，比如：router-view源码中涉及到与vue核心相关部分，甚至有地方存在疏漏或者错误，还请各位读者指正。</p>
<blockquote>
<p>这篇文章写到这里几乎花了我一个多星期的时间，文章长度已经完全超过了起初的预估，如果你能坚持看到这里至少说明你应该已经很厉害了，应该给自己点个赞。</p>
<p>若此文对你有一点点帮助请点个赞鼓励下作者，毕竟原创不易:)</p>
<p>首发自语雀：<a href="https://www.yuque.com/johniexu/frontend/su0uf8" target="_blank" rel="noopener noreferrer">https://www.yuque.com/johniexu/frontend/su0uf8<ExternalLinkIcon/></a></p>
<p>作者博客地址：<a href="https://johniexu.github.io/" target="_blank" rel="noopener noreferrer">https://johniexu.github.io/<ExternalLinkIcon/></a></p>
<p>作者github：<a href="https://github.com/johniexu" target="_blank" rel="noopener noreferrer">https://github.com/johniexu<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


