<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>经常在面试中被问到“如何清除浮动？”、“为什么 <code v-pre>overflow: hidden</code> 可以清除浮动？”等等比较基础的问题。虽然这些题目案在各种写面试题的文章中都有提供答案，但这种教科书式的问答肯定不是我们的目的，与其记住答案不如彻底掌握其核心原理——<strong>块级格式化上下文（BFC）</strong>。</p>
<p>这篇文章主要就是彻底分析清楚BFC原理、总结BFC经典场景中的用法，最后在实践中总结BFC在H5、小程序开发中的应用。</p>
<blockquote>
<p>本文首发自<a href="https://johniexu.github.io/" target="_blank" rel="noopener noreferrer">JohnieXu's Blog<ExternalLinkIcon/></a>，转载请注明出处😁</p>
</blockquote>
<h2 id="一、bfc作用" tabindex="-1"><a class="header-anchor" href="#一、bfc作用" aria-hidden="true">#</a> 一、BFC作用</h2>
<ul>
<li><strong>清除浮动</strong>：BFC会包含创建它的元素内部的所有内容（包含浮动元素）</li>
<li><strong>外边距折叠</strong>：解决同一BFC容器中的相邻元素间的外边距折叠问题</li>
<li><strong>左图右文布局</strong>：利用浮动元产生BFC以及BFC之间不会互相覆盖实现左图右文布局</li>
</ul>
<!-- more -->
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>以上BFC的作用可以心里默想一遍如何实现，下文将会有实例说明</p>
</div>
<h2 id="二、如何产生bfc" tabindex="-1"><a class="header-anchor" href="#二、如何产生bfc" aria-hidden="true">#</a> 二、如何产生BFC</h2>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">如何产生</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">html根元素</td>
<td style="text-align:center">html元素本身就是一个BFC元素</td>
<td style="text-align:center">记住就好，body元素不是BFC</td>
</tr>
<tr>
<td style="text-align:center">浮动元素</td>
<td style="text-align:center">元素的float属性不是none</td>
<td style="text-align:center">常用</td>
</tr>
<tr>
<td style="text-align:center">绝对定位元素</td>
<td style="text-align:center">position属性为absolute或fixed</td>
<td style="text-align:center">常用</td>
</tr>
<tr>
<td style="text-align:center">行内块元素</td>
<td style="text-align:center">display属性为inline-block</td>
<td style="text-align:center">常用</td>
</tr>
<tr>
<td style="text-align:center">表格元素</td>
<td style="text-align:center">表格元素默认display属性即是BFC</td>
<td style="text-align:center">表格单元格、表格标题也是</td>
</tr>
<tr>
<td style="text-align:center">弹性元素</td>
<td style="text-align:center">display属性为flex或inline-flex元素的直接子元素</td>
<td style="text-align:center">非常重要（flex布局常用）</td>
</tr>
<tr>
<td style="text-align:center">网格元素</td>
<td style="text-align:center">display属性为grid或inline-grid元素的直接子元素</td>
<td style="text-align:center">新特性用得少</td>
</tr>
<tr>
<td style="text-align:center">多列容器</td>
<td style="text-align:center">元素的column-count或column-width不为auto，包括 column-count为1</td>
<td style="text-align:center">新特性用得少</td>
</tr>
<tr>
<td style="text-align:center">overflow属性</td>
<td style="text-align:center">overflow属性值不为visible的元素</td>
<td style="text-align:center">常用oveflfow：visible</td>
</tr>
<tr>
<td style="text-align:center">display属性</td>
<td style="text-align:center">display属性值为flow-root的元素，flow-root: 一个新的display属性的值，它可以创建无副作用的BFC</td>
<td style="text-align:center">用得少</td>
</tr>
<tr>
<td style="text-align:center">contain属性</td>
<td style="text-align:center">contain属性值为layout、content、paint的元素</td>
<td style="text-align:center">用得少</td>
</tr>
</tbody>
</table>
<p>总结成一句话：<strong>凡脱离文档流都可以产生BFC</strong></p>
<h2 id="三、bfc原理" tabindex="-1"><a class="header-anchor" href="#三、bfc原理" aria-hidden="true">#</a> 三、BFC原理</h2>
<h3 id="三种文档定位方式" tabindex="-1"><a class="header-anchor" href="#三种文档定位方式" aria-hidden="true">#</a> 三种文档定位方式</h3>
<p>在讲BFC的原理之前先看看html文档的三种定位方式</p>
<h4 id="普通流" tabindex="-1"><a class="header-anchor" href="#普通流" aria-hidden="true">#</a> 普通流</h4>
<blockquote>
<p>在普通流中，元素按照其在HTML中的先后位置自上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也就是说普通流中元素的位置由该元素在HTML文档中的位置决定。</p>
</blockquote>
<h4 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h4>
<blockquote>
<p>在浮动定位中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。</p>
</blockquote>
<h4 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h4>
<blockquote>
<p>在绝对定位中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。</p>
</blockquote>
<h3 id="bfc产生作用的原因" tabindex="-1"><a class="header-anchor" href="#bfc产生作用的原因" aria-hidden="true">#</a> BFC产生作用的原因</h3>
<p><strong>其实BFC是上面三种布局方式中的普通流，BFC会产生一个独立的容器，该容器内部的元素不会在布局上影响到外部的元素，在外部的普通流看来它和其他普通流元素无差别，文档最终会按照上面说的普通流计算布局。</strong></p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjerebmcj30s70jbjsa.jpg" alt=""></p>
<h3 id="bfc的注意事项" tabindex="-1"><a class="header-anchor" href="#bfc的注意事项" aria-hidden="true">#</a> BFC的注意事项</h3>
<blockquote>
<p>块格式化上下文对浮动定位与清除浮动都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。</p>
<p>浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。</p>
<p>外边距折叠也只会发生在属于同一BFC的块级元素之间。</p>
</blockquote>
<h2 id="四、bfc常见用法" tabindex="-1"><a class="header-anchor" href="#四、bfc常见用法" aria-hidden="true">#</a> 四、BFC常见用法</h2>
<p>为了更好的理解BFC，我们先看看下面这些常见的用法。</p>
<h3 id="🌰清除浮动防止高度塌陷" tabindex="-1"><a class="header-anchor" href="#🌰清除浮动防止高度塌陷" aria-hidden="true">#</a> 🌰清除浮动防止高度塌陷</h3>
<p>按照上面三种定位方式中说的，浮动元素会脱离普通文档流，导致外部元素的高度计算不包括浮动元素本身高度，形成高度塌陷。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjf6gqisj30s70jbq2y.jpg" alt="image.png"></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">// 脱离了文档流形成了一个BFC</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 4px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用上述产生BFC元素的方法之一使外层元素产生BFC，可以防止元素高度塌陷。</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">// 外层容器产生BFC</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjfn88zyj30s70jbwel.jpg" alt="image.png"></p>
<h3 id="🌰处理外边距折叠的问题" tabindex="-1"><a class="header-anchor" href="#🌰处理外边距折叠的问题" aria-hidden="true">#</a> 🌰处理外边距折叠的问题</h3>
<p>在普通文档流中，元素（非BFC元素）的外边距margin会自动折叠，产生如下现象。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjg2llwij30s70jbmxb.jpg" alt="image.png"></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box box1 m20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box box2 m20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.m20</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是html的特性不算bug，但是我们更希望margin不产生折叠效果，通过利用BFC元素之间的外边距不会折叠的特性来实现。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box box1 m20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box box2 m20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.m20</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">// 使得两个box成为BFC元素</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 4px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使两个box形成BFC或者分别用两个BFC包裹box，然后形成的两个BFC之间的外边距不会折叠，修复后效果如下图。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjgfwd9lj30s70jbwen.jpg" alt="image.png"></p>
<h2 id="五、扩展一下" tabindex="-1"><a class="header-anchor" href="#五、扩展一下" aria-hidden="true">#</a> 五、扩展一下</h2>
<p>存在块级格式化上下文BFC，则对应存在内联格式化上下文IFC、网格格式化上下文GFC、自适应格式化上下文FFC，这些都可以统称为格式化上下文。</p>
<h3 id="ifc" tabindex="-1"><a class="header-anchor" href="#ifc" aria-hidden="true">#</a> IFC</h3>
<p>内联格式化上下文，IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来，不受到竖直方向的 padding、margin 影响。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjgv7m78j30ms0gbq37.jpg" alt="image.png"></p>
<p>当在内联元素中插入块级元素会产生什么效果呢？在内联元素中插入位置前后的内联元素各自形成一个IFC，然后按钮文档流形式进行布局，效果如下图。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjh6gad6j30s70jbdg5.jpg" alt="image.png"></p>
<h3 id="gfc" tabindex="-1"><a class="header-anchor" href="#gfc" aria-hidden="true">#</a> GFC</h3>
<p>网格布局格式化上下文（<code v-pre>display: grid</code>）</p>
<h3 id="ffc" tabindex="-1"><a class="header-anchor" href="#ffc" aria-hidden="true">#</a> FFC</h3>
<p>自适应格式化上下文（<code v-pre>display: flex</code>）</p>
<h2 id="六、常见问题分析" tabindex="-1"><a class="header-anchor" href="#六、常见问题分析" aria-hidden="true">#</a> 六、常见问题分析</h2>
<h3 id="为什么overflow-hidden可以去起到清除浮动的效果" tabindex="-1"><a class="header-anchor" href="#为什么overflow-hidden可以去起到清除浮动的效果" aria-hidden="true">#</a> 为什么overflow: hidden可以去起到清除浮动的效果？</h3>
<blockquote>
<p>overflow: hidden使得外层元素产生了一个BFC，BFC的高度计算包含其内部的浮动元素，从而达到清除浮动效果</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 5px solid #6EBD91<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #F4D491<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime fuga assumenda excepturi, exercitationem rerum quae voluptates sunt perspiciatis cupiditate sed itaque officia, placeat minus iure quod expedita earum nam.Eum aliquam totam iure mollitia deserunt, minus repellendus. Harum ullam tenetur, impedit aliquam nobis ut dignissimos eligendi, expedita illum iste esse odio ab quos explicabo, odit architecto. Tempora, hic facilis?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjhktx6nj31fw076gn8.jpg" alt="image.png"></p>
<p><strong>分析过程</strong>
外层<code v-pre>overflow: hidden</code>的元素产生了一个BFC，本身<code v-pre>float: left</code>的元素也产生了一个BFC，外层BFC进行尺寸计算时包含内层BFC尺寸。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjhzce41j30s20b83zx.jpg" alt="image.png"></p>
<h3 id="如何实现两列自实行布局" tabindex="-1"><a class="header-anchor" href="#如何实现两列自实行布局" aria-hidden="true">#</a> 如何实现两列自实行布局？</h3>
<blockquote>
<p>不考虑使用UI框架中的布局组件情况下，直接使用float: left + 固定左侧宽度 + 右边列margin-left</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://tva1.sinaimg.cn/large/00831rSTly1gcel7v9ji4j3041041wec.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi numquam nihil excepturi sint reiciendis iusto maiores nostrum fugiat harum?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, perspiciatis magnam consectetur corrupti suscipit a ratione sunt commodi beatae ad!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果如下图：</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjieiybuj312e09kq3r.jpg" alt="image.png"></p>
<p><strong>分析过程</strong>
**
左侧部分使用float: left会产生一个BFC元素，这个BFC与右侧块级元素div一起进行普通流定位；<strong>由于是两个按照普通流定位这个两个元素之前不会产生覆盖</strong>，即使不固定左侧元素宽度和右侧块级元素给margin-left也可以实现效果（这里给宽度是为了控制左侧固定尺寸）。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjiuoztej31rc0hc0v6.jpg" alt="image.png"></p>
<h3 id="内联元素中使用块级元素会产生什么效果" tabindex="-1"><a class="header-anchor" href="#内联元素中使用块级元素会产生什么效果" aria-hidden="true">#</a> 内联元素中使用块级元素会产生什么效果？</h3>
<blockquote>
<p>内联元素中插入块级元素会在插入的块级元素前后各产生一个匿名块与插入的块按照普通流进行定位</p>
</blockquote>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjj7cuddj31r00880u0.jpg" alt="image.png"></p>
<h3 id="内联元素中使用插入浮动元素会产生什么效果" tabindex="-1"><a class="header-anchor" href="#内联元素中使用插入浮动元素会产生什么效果" aria-hidden="true">#</a> 内联元素中使用插入浮动元素会产生什么效果？</h3>
<blockquote>
<p>内联元素使用了display: inline-block会产生一个IFC，其内部的浮动会内部进行浮动定位，然后整个IFC看成一个块级元素与外部进行定位</p>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #6EBD91<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  Lorem ipsum dolor sit amet.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> chocolate<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Lorem, ipsum.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> #F4D491<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat labore, ipsa quo possimus mollitia, officiis quia provident inventore placeat nulla, rem velit ratione ducimus. Facilis eos repudiandae debitis quam voluptatem.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  Lorem ipsum dolor sit amet consectetur.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcfjdpqgqlj31ra0b840p.jpg" alt="image.png"></p>
<p>以上效果可以<a href="http://jsrun.pro/4vfKp" target="_blank" rel="noopener noreferrer">在线预览<ExternalLinkIcon/></a></p>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noopener noreferrer">MDN-格式化上下文<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/59" target="_blank" rel="noopener noreferrer">gihtub-介绍下BFC及其应用<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/25321647" target="_blank" rel="noopener noreferrer">知乎专栏-10分钟理解BFC原理<ExternalLinkIcon/></a></li>
</ul>
<h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h2>
<blockquote>
<p>既然看到这里了不妨点个赞鼓励下作者呗 😃</p>
<p>作者博客：<a href="https://johniexu.github.io/" target="_blank" rel="noopener noreferrer">https://johniexu.github.io/<ExternalLinkIcon/></a></p>
<p>作者github：<a href="https://github.com/johniexu" target="_blank" rel="noopener noreferrer">https://github.com/johniexu<ExternalLinkIcon/></a></p>
</blockquote>
<p><a href="https://www.yuque.com/attachments/yuque/0/2020/zip/298369/1583127001252-9bd5c5bf-29fe-4827-a709-307ea307be50.zip?_lake_card=%7B%22uid%22%3A%221583126996091-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fzip%2F298369%2F1583127001252-9bd5c5bf-29fe-4827-a709-307ea307be50.zip%22%2C%22name%22%3A%22BFC%E5%8E%9F%E7%90%86.graffle.zip%22%2C%22size%22%3A163496%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22FtXIT%22%2C%22card%22%3A%22file%22%7D" target="_blank" rel="noopener noreferrer">BFC原理.graffle.zip<ExternalLinkIcon/></a></p>
</div></template>


