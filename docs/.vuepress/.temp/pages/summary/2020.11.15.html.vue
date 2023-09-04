<template><div><h2 id="完成的工作" tabindex="-1"><a class="header-anchor" href="#完成的工作" aria-hidden="true">#</a> 完成的工作</h2>
<h3 id="客户端项目-bug-修复" tabindex="-1"><a class="header-anchor" href="#客户端项目-bug-修复" aria-hidden="true">#</a> 客户端项目 bug 修复</h3>
<p>一、大连银行确认订单页面添加用户协议、上传须知查看功能</p>
<ul>
<li>
<p>出现原因：接到银行需求，原理的用户协议、上传须知查看功能由银行页面调整到天喻定制卡页面展示，属于<strong>新增需求</strong>。</p>
</li>
<li>
<p>具体实现：确认订单页面添加一个 dialog 弹窗，根据用户点击不同分别展示两个不同的文本内容</p>
</li>
<li>
<p><strong>考虑优化：将确认用户协议、上传须知查看弹窗封装成组件，放置 xtjk-ui 组件库内；支持预定义好的几套布局，同时组件主题色支持自定义。</strong></p>
</li>
</ul>
<p>二、大连银行客户端订单状态以及描述修改</p>
<ul>
<li>出现原因：接到银行需求，需要再次核对订单状态以及描述文字，属于需求不确定是否变更，产品只给出了最新的订单状态以及对应描述文字。</li>
<li>具体实现：重新核对一遍订单状态，重新测试联调相关状态流程以及文字描述。</li>
<li><strong>出现问题：产品给出的订单状态不完整，同时未告知有哪些状态变更，产品提的意思是这里给出的点需要核对一遍，而对于开发而言不清楚具体如何修改，只能整体过一遍。也反映出作为前端开发，对定制卡订单这一块的业务逻辑不够了解，在需求评审阶段没法一步确认哪些点需求要修改。</strong></li>
</ul>
<p>三、苏州工行卡面确认页面添加上传须知确认页面</p>
<ul>
<li>出现原因：接到银行需求，需要在天喻定制卡页面添加卡面上传须知，属于<strong>新增需求</strong>。</li>
<li>具体实现：卡片确认页面添加一个 dialog 弹窗，点击文字链接弹出弹出展示上传须知。</li>
<li>考虑优化：此上传须知弹窗提示参照之前的 ionic 项目仿写的功能，无相关 UI 设计图，相关功能定义不够清晰，后面测试又提出 bug 说要添加弹窗的关闭按钮。<strong>同样，这类上传须知类功能属于可抽象封装成组件的需求，尽量一次封装多处复用</strong>。</li>
</ul>
<h3 id="图片处理模块-bug-修复" tabindex="-1"><a class="header-anchor" href="#图片处理模块-bug-修复" aria-hidden="true">#</a> 图片处理模块 bug 修复</h3>
<p>一、图片编辑页面底部进度百分比文字自动隐藏实现</p>
<ul>
<li>出现原因：图片处理模块为最近才从另一同事手中接过来维护的项目，某一天听该同事说这里的文字提示在改成之前做的那种自动隐藏的效果。</li>
<li>具体实现：进度条拖动手势由 alloy-finger 库实现，直接在其 touching 事件将文字显示，在 touchend 事件延迟将文字隐藏；更进一步，将文字银行与显示控制提取未组件数据，并向外层暴露控制的方法，方便外部组件直接控制文字隐藏与显示。</li>
<li>思考反思
<ul>
<li>开发流程上，在没有正式接收到相关功能的开发需求时不要开发实现，应当先与项目经理确认；可以先考虑相关功能的实现难度、改动点、预计开发时间，汇报至项目经理等待开发排期；</li>
<li>开发完成功能后，应当更进一步考虑换一种实现思路，或者多思考有没有更多的实现方法，对比分析各种实现方法的优劣。</li>
</ul>
</li>
</ul>
<p>二、图片处理服务本地存储数据未做应用隔离导致应用数据混乱</p>
<ul>
<li>出现原因：测试组在进行苏州工行、大连银行项目测试，在进行微信浮窗切换时发现，在两个项目各自打开的图片处理网页之间切换时，苏州工行的图片处理下一步页面跳转到了大连银行页面。</li>
<li>问题分析：
<ul>
<li>同测试一起浮现了 bug</li>
<li>并验证了分别将两个银行的图片处理页面放置浮窗中，进行浮窗切换后上述问题比现</li>
<li>独自模拟了该场景：在微信环境验证了统一域名下的两个不同页面 localStorage 存储作用域相同，基本确认了出现问题的原因是：localStorage 作用域的问题</li>
</ul>
</li>
<li>具体实现：图片处理模块为前端微服务架构，一套服务接入了多个银行的项目，图片处理的应用数据未根据接入的项目 id 进行作用域格式，因此在应用数据存储时考虑以项目 id 作为隔离即可。</li>
<li>遇到问题：
<ul>
<li>现有数据存储实现完全未考虑作用隔离，改动范围比较大</li>
<li>要考虑完善的话需要借助路由在每个页面记住当前应用 id，于是由涉及到 react 组件生命周期与路由参数获取的问题</li>
</ul>
</li>
</ul>
<h3 id="客户端打包资源优化" tabindex="-1"><a class="header-anchor" href="#客户端打包资源优化" aria-hidden="true">#</a> 客户端打包资源优化</h3>
<p>一、苏州工行客户端资源打包优化、代码压缩</p>
<ul>
<li>
<p>出现背景：生产环境全站添加了 CDN，前端资源应该尽量小，要求完成一次办卡业务消耗的流量在 1MB 以内</p>
</li>
<li>
<p>实现功能：前端静态资源缩减到了 400KB，代码使用了 uglifyjs 进行混淆</p>
</li>
<li>
<p>存留问题：卡面确认页面有一个卡面的图片预览功能，这里图片大小有 1.3MB，消耗了76% 的流量（总流量 1.7MB），需要服务端配合实现小图预览功能。</p>
</li>
</ul>
<p>二、大连银行客户端资源打包优化</p>
<ul>
<li>出现背景：同上</li>
<li>实现功能：去掉无用代码 videojs、mockjs、vConsole 等，缩减代码 140KB；图片采用 tinypng 压缩，缩减大小 200KB</li>
<li>存留问题：代码需要采用 uglifyjs 进行混淆</li>
</ul>
<h3 id="星途聚客项目发版事项" tabindex="-1"><a class="header-anchor" href="#星途聚客项目发版事项" aria-hidden="true">#</a> 星途聚客项目发版事项</h3>
<ul>
<li>
<p>服务端镜像构建部署</p>
</li>
<li>
<p>服务端管理系统构建部署</p>
</li>
<li>
<p>测试点击 jenkins 脚本构建客户端应用</p>
</li>
<li>
<p>开发核对构建资源</p>
<p><strong>商户号 merNo、秘钥 appKey、微信商户号 appid、接口路径 baseURL、应用基础路径 indexDoc</strong></p>
</li>
<li>
<p>客户端资源部署</p>
</li>
<li>
<p>开发核对部署资源
<strong>线上资源的版本号、商户号 merNo、秘钥 appKey、微信商户号 appid、接口路径 baseURL、应用基础路径 indexDoc</strong></p>
</li>
<li>
<p>测试进行线上检查
bug 验证、支付下单和退款等关键逻辑验证</p>
</li>
<li>
<p>发版代码打 tag
前端项目 tag、服务端项目 tag</p>
</li>
<li>
<p>基线表维护</p>
</li>
</ul>
<h2 id="学习的新知识" tabindex="-1"><a class="header-anchor" href="#学习的新知识" aria-hidden="true">#</a> 学习的新知识</h2>
<p>python 打包成桌面应用</p>
<ul>
<li>
<p>脚本执行</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>python <span class="token operator">-</span>m main<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>机器码执行</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> py_compile
py_compile<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">'/path/to/foo.py'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>双击可执行文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pyInstaller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</div></template>


