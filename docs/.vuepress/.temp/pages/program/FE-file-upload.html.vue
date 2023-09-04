<template><div><h2 id="_0-图片上传思路" tabindex="-1"><a class="header-anchor" href="#_0-图片上传思路" aria-hidden="true">#</a> 0.图片上传思路</h2>
<blockquote>
<ol>
<li>监听一个input(type=‘file’)的onchange事件，这样获取到文件file；</li>
<li>将file转成dataUrl;</li>
<li>然后根据dataUrl利用canvas绘制图片压缩，然后再转成新的dataUrl；</li>
<li>再把dataUrl转成Blob；</li>
<li>把Blob append进FormData中；</li>
<li>xhr实现上传。</li>
</ol>
</blockquote>
<h2 id="_1-基于h5的file-api和input实现" tabindex="-1"><a class="header-anchor" href="#_1-基于h5的file-api和input实现" aria-hidden="true">#</a> 1.基于H5的File API和input实现</h2>
<p>H5的File API实现代码如下:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uploadAndSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">"demoForm"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>form<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 获取file文件对象 </span>
    <span class="token keyword">var</span> file <span class="token operator">=</span> form<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// try sending </span>
    <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onloadstart</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个事件在读取开始时触发 </span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onloadstart"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"bytesTotal"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个事件在读取进行中定时触发 </span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onprogress"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"bytesRead"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> p<span class="token punctuation">.</span>loaded<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个事件在读取成功结束后触发 </span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"load complete"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onloadend</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个事件在读取结束后，无论成功或者失败都会触发 </span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>reader<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"bytesRead"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
        <span class="token comment">// 构造 XMLHttpRequest 对象，发送文件 Binary 数据 </span>
        <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span> <span class="token comment">/* method */</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token comment">/* target url */</span> <span class="token string">"upload.jsp?fileName="</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>name <span class="token comment">/*, async, default to true */</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置MimeType为application/octet-stream, 即采用binary二进制传递文件</span>
        xhr<span class="token punctuation">.</span><span class="token function">overrideMimeType</span><span class="token punctuation">(</span><span class="token string">"application/octet-stream"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xhr<span class="token punctuation">.</span><span class="token function">sendAsBinary</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"upload complete"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"response: "</span> <span class="token operator">+</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsBinaryString</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Please choose a file."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-formdata" tabindex="-1"><a class="header-anchor" href="#_2-formdata" aria-hidden="true">#</a> 2.FormData</h2>
<blockquote>
<p>通过FormData对象可以组装一组用 XMLHttpRequest发送请求的键/值对。它可以更灵活方便的发送表单数据，因为可以独立于表单使用。如果你把表单的编码类型设置为multipart/form-data ，则通过FormData传输的数据格式和表单通过submit() 方法传输的数据格式相同。</p>
</blockquote>
<h2 id="_3-base64" tabindex="-1"><a class="header-anchor" href="#_3-base64" aria-hidden="true">#</a> 3.base64</h2>
<blockquote>
<p>Base64是一种基于64个可打印字符来表示二进制数据的表示方法。 由于2的6次方等于64，所以每6个位元为一个单元，对应某个可打印字符。 三个字节有24个位元，对应于4个Base64单元，即3个字节可表示4个可打印字符
就是用一段字符串来描述一个二进制数据，所以很多时候也可以使用base64方式上传</p>
</blockquote>
<h2 id="_4-blob对象-file对象基于此" tabindex="-1"><a class="header-anchor" href="#_4-blob对象-file对象基于此" aria-hidden="true">#</a> 4.Blob对象(File对象基于此)</h2>
<blockquote>
<p>一个 Blob对象表示一个不可变的, 原始数据的类似文件对象。Blob表示的数据不一定是一个JavaScript原生格式。 File 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。
简单说Blob就是一个二进制对象，是原生支持的</p>
</blockquote>
<h2 id="_5-webuploader插件" tabindex="-1"><a class="header-anchor" href="#_5-webuploader插件" aria-hidden="true">#</a> 5.webuploader插件</h2>
<p><a href="https://github.com/fex-team/webuploader" target="_blank" rel="noopener noreferrer">Github: https://github.com/fex-team/webuploader<ExternalLinkIcon/></a></p>
<h2 id="_6-兼容性" tabindex="-1"><a class="header-anchor" href="#_6-兼容性" aria-hidden="true">#</a> 6.兼容性</h2>
<blockquote>
<ol>
<li>部分安卓微信浏览器无法触发<code v-pre>onchange</code>事件（第一步就特么遇到问题）
这其实安卓微信的一个遗留问题。 <a href="https://www.zhihu.com/question/21452742" target="_blank" rel="noopener noreferrer">查看讨论<ExternalLinkIcon/></a> 解决办法也很简单：<code v-pre>input</code>标签 <code v-pre>&lt;input type=“file&quot; name=&quot;image&quot; accept=&quot;image/gif, image/jpeg, image/png”&gt;</code>要写成<code v-pre>&lt;input type=&quot;file&quot; name=&quot;image&quot; accept=“image/*”&gt;</code>就没问题了。</li>
<li>部分安卓微信不支持<code v-pre>Blob</code>对象</li>
<li>部分<code v-pre>Blob</code>对象<code v-pre>append</code>进<code v-pre>FormData</code>中出现问题</li>
<li>iOS 8不支持<code v-pre>new File Constructor</code>，但是支持<code v-pre>input</code>里的<code v-pre>file</code>对象。</li>
<li>iOS 上经过压缩后的图片可以上传成功 但是size是0 无法打开。</li>
<li>部分手机出现图片上传转换问题，<a href="https://github.com/xiangpaopao/blog/issues/7" target="_blank" rel="noopener noreferrer">请移步<ExternalLinkIcon/></a>。</li>
<li>安卓手机不支持多选，原因在于multiple属性根本就不支持。</li>
<li>多张图片转base64时候卡顿，因为调用了cpu进行了计算。</li>
<li>上传图片可以使用base64上传或者formData上传</li>
</ol>
</blockquote>
<h2 id="_7-修改后方案" tabindex="-1"><a class="header-anchor" href="#_7-修改后方案" aria-hidden="true">#</a> 7.修改后方案</h2>
<img src="@imgs/d73b8d36-4e55-4028-b0e5-b5023d4465a9.png">
<h2 id="_8-最终完善上传代码" tabindex="-1"><a class="header-anchor" href="#_8-最终完善上传代码" aria-hidden="true">#</a> 8.最终完善上传代码</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>// html文件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“image/*”</span> <span class="token special-attr"><span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value javascript language-javascript">handleInputChange</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// js文件</span>
<span class="token comment">// 全局对象，不同function使用传递数据</span>
<span class="token keyword">const</span> imgFile <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleInputChange</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取当前选中的文件</span>
    <span class="token keyword">const</span> file <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> imgMasSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 10MB</span>

    <span class="token comment">// 检查文件类型</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jpeg'</span><span class="token punctuation">,</span> <span class="token string">'png'</span><span class="token punctuation">,</span> <span class="token string">'gif'</span><span class="token punctuation">,</span> <span class="token string">'jpg'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 自定义报错方式</span>
        <span class="token comment">// Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 文件大小限制</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>size <span class="token operator">></span> imgMasSize <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 文件大小自定义限制</span>
        <span class="token comment">// Toast.error("文件大小不能超过10MB！", 2000, undefined, false);</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断是否是ios</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\(i[^;]+;( U;)? CPU.+Mac OS X</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// iOS</span>
        <span class="token function">transformFileToFormData</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 图片压缩之旅</span>
    <span class="token function">transformFileToDataUrl</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将File append进 FormData</span>
<span class="token keyword">function</span> <span class="token function">transformFileToFormData</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 自定义formData中的内容</span>
    <span class="token comment">// type</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// size</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'size'</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>size <span class="token operator">||</span> <span class="token string">"image/jpeg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// name</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// lastModifiedDate</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'lastModifiedDate'</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>lastModifiedDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// append 文件</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'file'</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 上传图片</span>
    <span class="token function">uploadImg</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 将file转成dataUrl</span>
<span class="token keyword">function</span> <span class="token function">transformFileToDataUrl</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> imgCompassMaxSize <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 超过 200k 就压缩</span>

    <span class="token comment">// 存储文件相关信息</span>
    imgFile<span class="token punctuation">.</span>type <span class="token operator">=</span> file<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">;</span> <span class="token comment">// 部分安卓出现获取不到type的情况</span>
    imgFile<span class="token punctuation">.</span>size <span class="token operator">=</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
    imgFile<span class="token punctuation">.</span>name <span class="token operator">=</span> file<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    imgFile<span class="token punctuation">.</span>lastModifiedDate <span class="token operator">=</span> file<span class="token punctuation">.</span>lastModifiedDate<span class="token punctuation">;</span>

    <span class="token comment">// 封装好的函数</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// file转dataUrl是个异步函数，要将代码写在回调里</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> imgCompassMaxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">compress</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> processData<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 图片不压缩</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">compress</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> processData<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// 图片压缩</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用canvas绘制图片并压缩</span>
<span class="token keyword">function</span> <span class="token function">compress</span> <span class="token punctuation">(</span><span class="token parameter">dataURL<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> shouldCompress <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    img<span class="token punctuation">.</span>src <span class="token operator">=</span> dataURL<span class="token punctuation">;</span>

    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

        ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> compressedDataUrl<span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>shouldCompress<span class="token punctuation">)</span><span class="token punctuation">{</span>
            compressedDataUrl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            compressedDataUrl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">callback</span><span class="token punctuation">(</span>compressedDataUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">processData</span> <span class="token punctuation">(</span><span class="token parameter">dataURL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里使用二进制方式处理dataUrl</span>
    <span class="token keyword">const</span> binaryString <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>dataUrl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>binaryString<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> intArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> imgFile <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imgFile<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> binaryString<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        intArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> binaryString<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>intArray<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> blob<span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> imgFile<span class="token punctuation">.</span>type <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>BlobBuilder <span class="token operator">=</span> window<span class="token punctuation">.</span>BlobBuilder <span class="token operator">||</span>
            window<span class="token punctuation">.</span>WebKitBlobBuilder <span class="token operator">||</span>
            window<span class="token punctuation">.</span>MozBlobBuilder <span class="token operator">||</span>
            window<span class="token punctuation">.</span>MSBlobBuilder<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'TypeError'</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>BlobBuilder<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlobBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            blob <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getBlob</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Toast.error("版本过低，不支持上传图片", 2000, undefined, false);</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'版本过低，不支持上传图片'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// blob 转file</span>
    <span class="token keyword">const</span> fileOfBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>blob<span class="token punctuation">]</span><span class="token punctuation">,</span> imgFile<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// type</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span> imgFile<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// size</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'size'</span><span class="token punctuation">,</span> fileOfBlob<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// name</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> imgFile<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// lastModifiedDate</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'lastModifiedDate'</span><span class="token punctuation">,</span> imgFile<span class="token punctuation">.</span>lastModifiedDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// append 文件</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'file'</span><span class="token punctuation">,</span> fileOfBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">uploadImg</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 上传图片</span>
<span class="token function">uploadImg</span> <span class="token punctuation">(</span><span class="token parameter">formData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 进度监听</span>
    xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'progress'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>loaded <span class="token operator">/</span> e<span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 加载监听</span>
    <span class="token comment">// xhr.addEventListener('load', ()=>{console.log("加载中");}, false);</span>
    <span class="token comment">// 错误监听</span>
    xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>Toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"上传失败！"</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 上传成功</span>
                

            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 上传失败</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/uploadUrl'</span> <span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-多图并发上传" tabindex="-1"><a class="header-anchor" href="#_9-多图并发上传" aria-hidden="true">#</a> 9.多图并发上传</h2>
<p>多张图片上传方式有三种：</p>
<blockquote>
<ol>
<li>图片队列一张一张上传</li>
<li>图片队列并发全部上传</li>
<li>图片队列并发上传X个，其中一个返回了结果直接触发下一个上传，保证最多有X个请求。</li>
</ol>
</blockquote>
<p>一张一张上传好解决，但是问题是上传事件太长，体验不佳；多张图片全部上传事件变短了，但是并发量太大，很可能出现问题；最后这个并发上传X个，体验最佳。</p>
<h3 id="_9-1并发上传实现" tabindex="-1"><a class="header-anchor" href="#_9-1并发上传实现" aria-hidden="true">#</a> 9.1并发上传实现</h3>
<p>最后我们确定X = 3或者4。比如说上传9张图片，第一次上传个3个，其中一个请求回来了，立即去上传第四个，下一个回来上传第5个，以此类推。
这里我使用es6的generator函数来实现的，定义一个函数，返回需要上传的数组：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">*</span><span class="token function">uploadGenerator</span> <span class="token punctuation">(</span><span class="token parameter">uploadQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 多张图片并发上传控制规则
         * 上传1-max数量的图片
         * 设置一个最大上传数量
         * 保证最大只有这个数量的上传请求
         *
         */</span>

        <span class="token comment">// 最多只有三个请求在上传</span>
        <span class="token keyword">const</span> maxUploadSize <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">.</span>length <span class="token operator">></span> maxUploadSize<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> uploadQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 第一次return maxUploadSize数量的图片</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> maxUploadSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> maxUploadSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">yield</span> result<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">yield</span> <span class="token punctuation">[</span>uploadQueue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">yield</span> uploadQueue<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过该函数获取每次要上传的数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uploadGen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">uploadGenerator</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 第一次要上传的数量</span>
        <span class="token keyword">const</span> firstUpload <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>uploadGen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 真正开始上传流程</span>
        firstUpload<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 图片上传分成5步
             * 图片转dataUrl
             * 压缩
             * 处理数据格式
             * 准备数据上传
             * 上传
             *
             * 前两步是回调的形式 后面是同步的形式
             */</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformFileToDataUrl</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compress<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>processData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2改进单张图片上传" tabindex="-1"><a class="header-anchor" href="#_9-2改进单张图片上传" aria-hidden="true">#</a> 9.2改进单张图片上传</h3>
<p>图片上传分成5步，</p>
<blockquote>
<ol>
<li>图片转dataUrl</li>
<li>压缩</li>
<li>处理数据格式</li>
<li>准备数据上传</li>
<li>上传</li>
</ol>
</blockquote>
<p>这里面前两个是回调的形式，最后一个是异步形式。无法写成正常函数一个调用一个；而且各个function之间需要共享一些数据，之前把这个数据挂载到this.imgFile上了，但是这次是并发，一个对象没法满足需求了，改成数组也有很多问题。</p>
<p>所以这次方案是：第一步创建一个要上传的对象，每次都通过参数交给下一个方法，直到最后一个方法上传。并且通过回调的方式，将各个步骤串联起来</p>
<p>完整代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">'classnames'</span>
<span class="token keyword">import</span> Touchable <span class="token keyword">from</span> <span class="token string">'rc-touchable'</span>
<span class="token keyword">import</span> Figure <span class="token keyword">from</span> <span class="token string">'./Figure'</span>
<span class="token keyword">import</span> Toast <span class="token keyword">from</span> <span class="token string">'../../../Feedback/Toast/components/Toast'</span>
<span class="token keyword">import</span> <span class="token string">'../style/index.scss'</span>

<span class="token comment">// 统计img总数 防止重复</span>
<span class="token keyword">let</span> imgNumber <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 生成唯一的id</span>
<span class="token keyword">const</span> <span class="token function-variable function">getUuid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"img-"</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"-"</span> <span class="token operator">+</span> imgNumber<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Uploader</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">imgArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 图片已上传 显示的数组</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>compress <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compress</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>processData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断是否有初始化的数据传入</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">imgArray</span><span class="token operator">:</span> data<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleDelete</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">previousState</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            previousState<span class="token punctuation">.</span>imgArray <span class="token operator">=</span> previousState<span class="token punctuation">.</span>imgArray<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> previousState<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleProgress</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 监听上传进度 操作DOM 显示进度</span>
        <span class="token keyword">const</span> number <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>loaded <span class="token operator">/</span> e<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"%"</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#text-'</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> progress <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#progress-'</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        text<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> number<span class="token punctuation">;</span>
        progress<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleUploadEnd</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 准备一条标准数据</span>
        <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span>uuid<span class="token punctuation">,</span> <span class="token literal-property property">imgKey</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> data<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">dataUrl</span><span class="token operator">:</span> data<span class="token punctuation">.</span>dataUrl<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> status<span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 更改状态</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">previousState</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            previousState<span class="token punctuation">.</span>imgArray <span class="token operator">=</span> previousState<span class="token punctuation">.</span>imgArray<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> data<span class="token punctuation">.</span>uuid<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    item <span class="token operator">=</span> obj<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> item<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> previousState<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 上传下一个</span>
        <span class="token keyword">const</span> nextUpload <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>uploadGen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>nextUpload<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">{</span>
            nextUpload<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                _this<span class="token punctuation">.</span><span class="token function">transformFileToDataUrl</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> _this<span class="token punctuation">.</span>compress<span class="token punctuation">,</span> _this<span class="token punctuation">.</span>processData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleInputChange</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>typeArray<span class="token punctuation">,</span> max<span class="token punctuation">,</span> maxSize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>imgArray<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
        <span class="token keyword">const</span> uploadedImgArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 真正在页面显示的图片数组</span>
        <span class="token keyword">const</span> uploadQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 图片上传队列 这个队列是在图片选中到上传之间使用的 上传完成则清除</span>

        <span class="token comment">// event.target.files是个类数组对象 需要转成数组方便处理</span>
        <span class="token keyword">const</span> selectedFiles <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 检查文件个数 页面显示的图片个数不能超过限制</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>imgArray<span class="token punctuation">.</span>length <span class="token operator">+</span> selectedFiles<span class="token punctuation">.</span>length <span class="token operator">></span> max<span class="token punctuation">)</span><span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'文件数量超出最大值'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> imgPass <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">typeError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">sizeError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 循环遍历检查图片 类型、尺寸检查</span>
        selectedFiles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token comment">// 图片类型检查</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>typeArray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                imgPass<span class="token punctuation">.</span>typeError <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 图片尺寸检查</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>size <span class="token operator">></span> maxSize <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                imgPass<span class="token punctuation">.</span>sizeError <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 为图片加上位移id</span>
            <span class="token keyword">const</span> uuid <span class="token operator">=</span> <span class="token function">getUuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 上传队列加入该数据</span>
            uploadQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">uuid</span><span class="token operator">:</span> uuid<span class="token punctuation">,</span> <span class="token literal-property property">file</span><span class="token operator">:</span> item<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 页面显示加入数据</span>
            uploadedImgArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 显示在页面的数据的标准格式</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> uuid<span class="token punctuation">,</span> <span class="token comment">// 图片唯一id</span>
                <span class="token literal-property property">dataUrl</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 图片的base64编码</span>
                <span class="token literal-property property">imgKey</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 图片的key 后端上传保存使用</span>
                <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 图片真实路径 后端返回的</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token comment">// 图片的名字</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// status表示这张图片的状态 1：上传中，2上传成功，3：上传失败</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有错误跳出</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>imgPass<span class="token punctuation">.</span>typeError<span class="token punctuation">)</span><span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不支持文件类型'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>imgPass<span class="token punctuation">.</span>sizeError<span class="token punctuation">)</span><span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'文件大小超过限制'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 没错误准备上传</span>
        <span class="token comment">// 页面先显示一共上传图片个数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">imgArray</span><span class="token operator">:</span> imgArray<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>uploadedImgArray<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 通过该函数获取每次要上传的数组</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uploadGen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">uploadGenerator</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 第一次要上传的数量</span>
        <span class="token keyword">const</span> firstUpload <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>uploadGen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 真正开始上传流程</span>
        firstUpload<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 图片上传分成5步
             * 图片转dataUrl
             * 压缩
             * 处理数据格式
             * 准备数据上传
             * 上传
             *
             * 前两步是回调的形式 后面是同步的形式
             */</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transformFileToDataUrl</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compress<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>processData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">*</span><span class="token function">uploadGenerator</span> <span class="token punctuation">(</span><span class="token parameter">uploadQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 多张图片并发上传控制规则
         * 上传1-max数量的图片
         * 设置一个最大上传数量
         * 保证最大只有这个数量的上传请求
         *
         */</span>

        <span class="token comment">// 最多只有三个请求在上传</span>
        <span class="token keyword">const</span> maxUploadSize <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">.</span>length <span class="token operator">></span> maxUploadSize<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> uploadQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 第一次return maxUploadSize数量的图片</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> maxUploadSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>uploadQueue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> maxUploadSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">yield</span> result<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">yield</span> <span class="token punctuation">[</span>uploadQueue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">yield</span> uploadQueue<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">transformFileToDataUrl</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> compressCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 图片上传流程的第一步
         * <span class="token keyword">@param</span> <span class="token parameter">data</span> file文件 该数据会一直向下传递
         * <span class="token keyword">@param</span> <span class="token parameter">callback</span> 下一步回调
         * <span class="token keyword">@param</span> <span class="token parameter">compressCallback</span> 回调的回调
         */</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>compress<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
        <span class="token keyword">const</span> imgCompassMaxSize <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 超过 200k 就压缩</span>

        <span class="token comment">// 封装好的函数</span>
        <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ⚠️ 这是个回调过程 不是同步的</span>
        reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
            data<span class="token punctuation">.</span>dataUrl <span class="token operator">=</span> result<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>compress <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">></span> imgCompassMaxSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
                data<span class="token punctuation">.</span>compress <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

                <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> compressCallback<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 图片压缩</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                data<span class="token punctuation">.</span>compress <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

                <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> compressCallback<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 图片不压缩</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">compress</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 压缩图片
         * <span class="token keyword">@param</span> <span class="token parameter">data</span> file文件 数据会一直向下传递
         * <span class="token keyword">@param</span> <span class="token parameter">callback</span> 下一步回调
         */</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>compressionRatio<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
        <span class="token keyword">const</span> imgFile <span class="token operator">=</span> data<span class="token punctuation">.</span>file<span class="token punctuation">;</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        img<span class="token punctuation">.</span>src <span class="token operator">=</span> data<span class="token punctuation">.</span>dataUrl<span class="token punctuation">;</span>

        img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
            canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

            ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">let</span> compressedDataUrl<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>compress<span class="token punctuation">)</span><span class="token punctuation">{</span>
                compressedDataUrl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span>compressionRatio <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                compressedDataUrl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            data<span class="token punctuation">.</span>compressedDataUrl <span class="token operator">=</span> compressedDataUrl<span class="token punctuation">;</span>

            <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">processData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为了兼容性 处理数据</span>
        <span class="token keyword">const</span> dataURL <span class="token operator">=</span> data<span class="token punctuation">.</span>compressedDataUrl<span class="token punctuation">;</span>
        <span class="token keyword">const</span> imgFile <span class="token operator">=</span> data<span class="token punctuation">.</span>file<span class="token punctuation">;</span>
        <span class="token keyword">const</span> binaryString <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>dataURL<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>binaryString<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> intArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> binaryString<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            intArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> binaryString<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> fileData <span class="token operator">=</span> <span class="token punctuation">[</span>intArray<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> blob<span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>fileData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> imgFile<span class="token punctuation">.</span>type <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>BlobBuilder <span class="token operator">=</span> window<span class="token punctuation">.</span>BlobBuilder <span class="token operator">||</span>
                window<span class="token punctuation">.</span>WebKitBlobBuilder <span class="token operator">||</span>
                window<span class="token punctuation">.</span>MozBlobBuilder <span class="token operator">||</span>
                window<span class="token punctuation">.</span>MSBlobBuilder<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'TypeError'</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>BlobBuilder<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">const</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlobBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                blob <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getBlob</span><span class="token punctuation">(</span>imgFile<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'版本过低，不支持上传图片'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        data<span class="token punctuation">.</span>blob <span class="token operator">=</span> blob<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processFormData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">processFormData</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 准备上传数据</span>
        <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> imgFile <span class="token operator">=</span> data<span class="token punctuation">.</span>file<span class="token punctuation">;</span>
        <span class="token keyword">const</span> blob <span class="token operator">=</span> data<span class="token punctuation">.</span>blob<span class="token punctuation">;</span>

        <span class="token comment">// type</span>
        formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span> blob<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// size</span>
        formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'size'</span><span class="token punctuation">,</span> blob<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// append 文件</span>
        formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'file'</span><span class="token punctuation">,</span> blob<span class="token punctuation">,</span> imgFile<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">uploadImg</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">uploadImg</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> formData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 开始发送请求上传</span>
        <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>uploadUrl<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>

        <span class="token comment">// 进度监听</span>
        xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'progress'</span><span class="token punctuation">,</span> _this<span class="token punctuation">.</span><span class="token function">handleProgress</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>_this<span class="token punctuation">,</span> data<span class="token punctuation">.</span>uuid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">201</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 上传成功</span>
                    _this<span class="token punctuation">.</span><span class="token function">handleUploadEnd</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 上传失败</span>
                    _this<span class="token punctuation">.</span><span class="token function">handleUploadEnd</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> uploadUrl <span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getImagesListDOM</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理显示图片的DOM</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>max<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
        <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> uploadingArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> imgArray <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>imgArray<span class="token punctuation">;</span>

        imgArray<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>Figure key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">}</span> onDelete<span class="token operator">=</span><span class="token punctuation">{</span>_this<span class="token punctuation">.</span><span class="token function">handleDelete</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 正在上传的图片</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                uploadingArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 图片数量达到最大值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">>=</span> max <span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">;</span>

        <span class="token keyword">let</span> <span class="token function-variable function">onPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>_this<span class="token punctuation">.</span>refs<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//  或者有正在上传的图片的时候 不可再上传图片</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>uploadingArray<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            onPress <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 简单的显示文案逻辑判断</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">'上传图片'</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>uploadingArray<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            text <span class="token operator">=</span> <span class="token punctuation">(</span>imgArray<span class="token punctuation">.</span>length <span class="token operator">-</span> uploadingArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'/'</span> <span class="token operator">+</span> imgArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Touchable
                key<span class="token operator">=</span><span class="token string">"add"</span>
                activeClassName<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'zby-upload-img-active'</span><span class="token punctuation">}</span>
                onPress<span class="token operator">=</span><span class="token punctuation">{</span>onPress<span class="token punctuation">}</span>
            <span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"zby-upload-img"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>span key<span class="token operator">=</span><span class="token string">"icon"</span> className<span class="token operator">=</span><span class="token string">"fa fa-camera"</span> <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Touchable<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> imagesList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getImagesListDOM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"zby-uploader-box"</span><span class="token operator">></span>
                <span class="token punctuation">{</span>imagesList<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token string">"input"</span> type<span class="token operator">=</span><span class="token string">"file"</span> className<span class="token operator">=</span><span class="token string">"file-input"</span> name<span class="token operator">=</span><span class="token string">"image"</span> accept<span class="token operator">=</span><span class="token string">"image/*"</span> multiple<span class="token operator">=</span><span class="token string">"multiple"</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInputChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Uploader<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uploadUrl</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span> <span class="token comment">// 图上传路径</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span> <span class="token comment">// 是否进行图片压缩</span>
    <span class="token literal-property property">compressionRatio</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span> <span class="token comment">// 图片压缩比例 单位：%</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token comment">// 初始化数据 其中的每个元素必须是标准化数据格式</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span> <span class="token comment">// 最大上传图片数</span>
    <span class="token literal-property property">maxSize</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span> <span class="token comment">// 图片最大体积 单位：KB</span>
    <span class="token literal-property property">typeArray</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token comment">// 支持图片类型数组</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Uploader<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compressionRatio</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 5MB</span>
    <span class="token literal-property property">typeArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'jpeg'</span><span class="token punctuation">,</span> <span class="token string">'jpg'</span><span class="token punctuation">,</span> <span class="token string">'png'</span><span class="token punctuation">,</span> <span class="token string">'gif'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Uploader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码<a href="https://github.com/Aus0049/react-component/blob/master/src/components/DataEntry/Uploader/components/Uploader.js" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a></p>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
<ol>
<li><a href="https://www.cnblogs.com/wlink/articles/7792375.html" target="_blank" rel="noopener noreferrer">桌面端采用node.js的fs,mime库上传文件 <ExternalLinkIcon/></a></li>
</ol>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ol>
<li><a href="http://www.cnblogs.com/xiaoqian1993/p/5775135.html" target="_blank" rel="noopener noreferrer">使用 JavaScript File API 实现文件上传<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000010034177" target="_blank" rel="noopener noreferrer">移动端H5实现图片上传的几种方案<ExternalLinkIcon/></a>  🔼</li>
</ol>
</div></template>


