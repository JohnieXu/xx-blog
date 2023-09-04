<template><div><h2 id="target-配置" tabindex="-1"><a class="header-anchor" href="#target-配置" aria-hidden="true">#</a> target 配置</h2>
<p>指定编译后 js 代码所采用的规范，如：用 es5、es6 等</p>
<h2 id="lib-配置" tabindex="-1"><a class="header-anchor" href="#lib-配置" aria-hidden="true">#</a> lib 配置</h2>
<p>指定当前代码中可以用到的 es6+ 等规范中的新语法特性，当业务代码中使用了 lib 中未指定的语法特性时将报编译错误，像 Symbol 等特性对浏览器平台的兼容性处理需要引入 core-js 等第三方库来 polyfill。</p>
<h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compileOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span><span class="token string">"es2017"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，业务代码中使用  DOM 接口、es2017 所包含的新特性时，ts 将编译通过；相反的如果，若使用了 es2018 之后的新特性，ts 将编译报错。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// TODO: 例子代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


