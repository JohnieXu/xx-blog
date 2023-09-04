<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>今天在看 <code v-pre>ts-loader</code> 的功能特性时看到其支持 <a href="https://github.com/TypeStrong/ts-loader#yarn-plugnplay" target="_blank" rel="noopener noreferrer">Yarn Plug'n'Play<ExternalLinkIcon/></a>。 于是花了一些时间了解了一下它的工作原理以及解决的问题并整理出了本篇文章。</p>
<h2 id="现状与痛点" tabindex="-1"><a class="header-anchor" href="#现状与痛点" aria-hidden="true">#</a> 现状与痛点</h2>
<p>Yarn 团队开发 PnP 特性最直接的原因就是现有的依赖管理方式效率太低。引用依赖时慢，安装依赖时也慢。</p>
<p>先说说 Node 在处理依赖引用时的逻辑，这个流程会有如下两种情况：</p>
<ul>
<li>如果我们传给 require() 调用的参数是一个核心模块（例如 “fs”、”path”等）或者是一个本地相对路径（例如 <code v-pre>./module-a.js</code> 或 <code v-pre>/my-li/module-b.js</code>），那么 Node 会直接使用对应的文件。</li>
<li>如果不是前面描述的情况，那么 Node 会开始寻找一个名为 node_modules 的目录：
首先 Node 会在当前目录寻找 node_modules，如果没有则到父目录查找，以此类推直到系统根目录。
找到 node_modules 目录之后，再在该目录中寻找名为 moduleName.js 的文件或是名为 moduleName 的子目录。
此处旨在说明问题，对 Node 内部模块解析逻辑做了简化描述</li>
</ul>
<p>可见 Node 在解析依赖时需要进行大量的文件 I/O 操作，效率并不高。</p>
<p>再来看看安装依赖时发生了什么，现阶段 yarn install 操作会执行以下 4 个步骤：</p>
<ol>
<li>将依赖包的版本区间解析为某个具体的版本号</li>
<li>下载对应版本依赖的 tar 包到本地离线镜像</li>
<li>将依赖从离线镜像解压到本地缓存</li>
<li>将依赖从缓存拷贝到当前目录的 node_modules 目录</li>
</ol>
<p>其中第 4 步同样涉及大量的文件 I/O，导致安装依赖时效率不高（尤其是在 CI 环境，每次都需要安装全部依赖）。</p>
<p>Facebook 的工程师受够了这些问题决定寻找一个能彻底解决问题同时还可以与现有生态兼容的解决方案。这便是 Plug’n’Play 特性，简称 PnP。它已在 Facebook 内部测试了一段时间，现在 Yarn 团队决定与社区分享并共同优化该方案。</p>
<h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案" aria-hidden="true">#</a> 实现方案</h2>
<p>PnP 的具体工作原理是，作为把依赖从缓存拷贝到 node_modules 的替代方案，Yarn 会维护一张静态映射表，该表中包含了以下信息：</p>
<p>当前依赖树中包含了哪些依赖包的哪些版本
这些依赖包是如何互相关联的
这些依赖包在文件系统中的具体位置
这个映射表在 Yarn 的 PnP 实现中对应项目目录中的 .pnp.js 文件。</p>
<p>这个 .pnp.js 文件是如何生成，Yarn 又是如何利用它的呢？</p>
<p>在安装依赖时，在第 3 步完成之后，Yarn 并不会拷贝依赖到 node_modules 目录，而是会在 .pnp.js 中记录下该依赖在缓存中的具体位置。这样就避免了大量的 I/O 操作同时项目目录也不会有 node_modules 目录生成。</p>
<p>同时 .pnp.js 还包含了一个特殊的 resolver，Yarn 会利用这个特殊的 resolver 来处理 require() 请求，该 resolver 会根据 .pnp.js 文件中包含的静态映射表直接确定依赖在文件系统中的具体位置，从而避免了现有实现在处理依赖引用时的 I/O 操作。</p>
<h2 id="带来了哪些好处" tabindex="-1"><a class="header-anchor" href="#带来了哪些好处" aria-hidden="true">#</a> 带来了哪些好处</h2>
<p>从 PnP 的实现方案可以看出，同一个系统上不同项目引用的相同依赖的相同版本实际都是指向的缓存中的同一个目录。这带来了几个最直观的好处：</p>
<p>安装依赖的速度得到了空前的提升
CI 环境中多个 CI 实例可以共享同一份缓存
同一个系统中的多个项目不再需要占用多份磁盘空间</p>
<p>如何开始使用 Plug’n’Play 特性？
首先你需要 Yarn 1.12+ 版本。然后根据你的具体场景可以选择：</p>
<p>使用 <code v-pre>create-react-app</code> 创建项目时开启 PnP
<code v-pre>create-react-app</code> 已经集成了对 PnP 的支持。只需在创建项目时添加 <code v-pre>--use-pnp</code> 参数即可。</p>
<p><code v-pre>npx create-react-app testapp --use-pnp </code>
在已有项目中开启 PnP
只需在项目中执行:</p>
<p><code v-pre>yarn --pnp</code>
即可开启 PnP 特性。</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<p>pkg.installConfig 字段
在项目中开启 PnP 特性后，Yarn 会在 package.json 文件中创建一个 <code v-pre>installConfig</code> 字段：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"installConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pnp"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要 installConfig.pnp 的值是一个真值且当前版本的 Yarn 支持，PnP 特性就会被启用。</p>
<p>执行 <code v-pre>npm script</code> 或是运行 .js 文件
由于在开启了 PnP 的项目中不再有 node_modules 目录，所有的依赖引用都必须由 .pnp.js 中的 resolver 处理。因此不论是执行 script 还是用 node 直接执行一个 JS 文件，都必须经由 Yarn 处理。必须通过 <code v-pre>yarn run</code> 或是 <code v-pre>yarn node</code> 执行。</p>
<h2 id="在项目中调试依赖" tabindex="-1"><a class="header-anchor" href="#在项目中调试依赖" aria-hidden="true">#</a> 在项目中调试依赖</h2>
<p>在开发过程中我们有时会直接修改 node_modules 目录下的依赖来调试。但在 PnP 模式下，由于依赖都指向了全局缓存，我们不再可以直接修改这些依赖。</p>
<p>针对这种场景，Yarn 提供了 <code v-pre>yarn unplug packageName</code> 来将某个指定依赖拷贝到项目中的 <code v-pre>.pnp/unplugged</code> 目录下。之后 .pnp.js 中的 resolver 就会自动加载这个 unplug 的版本。</p>
<p>调试完毕后，再执行 <code v-pre>yarn unplug --clear packageName</code> 可移除本地 <code v-pre>.pnp/unplugged </code>中的对应依赖。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>目前我还并没有看到 PnP 这个一功能被广泛应用，大家可以尝试在本地开发环境中启用 PnP 来感受一下它带来的全新体验。遇到问题可以及时反馈到 <a href="https://github.com/yarnpkg/yarn/issues" target="_blank" rel="noopener noreferrer">Yarn 的 issue 列表<ExternalLinkIcon/></a> 中。</p>
</div></template>


