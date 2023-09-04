<template><div><h2 id="配置pwa要点" tabindex="-1"><a class="header-anchor" href="#配置pwa要点" aria-hidden="true">#</a> 配置PWA要点</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"迪诺笔记"</span><span class="token punctuation">,</span>
  <span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"JohnieXu's Blog"</span><span class="token punctuation">,</span>
  <span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
  <span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"哪里会有人喜欢孤独，不过是不喜欢失望罢了。 ——村上春树"</span><span class="token punctuation">,</span>
  <span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_48.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"48x48"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_72.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"72x72"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_96.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"96x96"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_144.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"144x144"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_168.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"168x168"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"logo_192.png"</span><span class="token punctuation">,</span>
    <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"related_applications"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"play"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://play.google.com/store/apps/details?id=cheeaun.hackerweb"</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>name: 应用启动时候显示的标题</p>
<p>short_name: 添加到桌面上的名称</p>
</div>
</div></template>


