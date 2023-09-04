<template><div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍" aria-hidden="true">#</a> 背景介绍</h2>
<p>最近在做公司后台管理系统项目时遇到一个比较怪异的bug——采用<code v-pre>keep-alive+vue-router</code>实现的路由缓存遇到<strong>缓存不生效</strong>的情况。</p>
<!-- more -->
<img src="@imgs/7dd6b400-44bb-4d92-9d1f-e040c0a4a16c.png">
<p><a name="2VhOm"></a></p>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<p>此项目是基于<a href="https://github.com/iview/iview-admin/tree/2.0" target="_blank" rel="noopener noreferrer">iview-admin@2.0<ExternalLinkIcon/></a>进行开发的，全局状态管理采用vuex分module实现，路由采用vue-router进行路由配置表的方式实现。</p>
<p>项目属于基于<a href="https://www.cnblogs.com/niuli1987/p/9871182.html" target="_blank" rel="noopener noreferrer">RBAC<ExternalLinkIcon/></a>的后台管理系统，需要多用户多角色的权限控制，同时路由功能菜单以及展示的字段需按角色划分，因此左侧系统菜单根据接口进行动态设置。</p>
<p>项目中可以进行菜单的图标、跳转路径、是否隐藏等进行配置，路径对应的前端路由则由前端的路由记录进行管理，即菜单管理功能设置的跳转路径是否可用由此路由记录决定。</p>
<p><a name="PpZiO"></a></p>
<h2 id="解决过程" tabindex="-1"><a class="header-anchor" href="#解决过程" aria-hidden="true">#</a> 解决过程</h2>
<p><a name="nC48B"></a></p>
<h3 id="核实路由缓存用法问题" tabindex="-1"><a class="header-anchor" href="#核实路由缓存用法问题" aria-hidden="true">#</a> 核实路由缓存用法问题</h3>
<p>发现这个bug之后梳理了一遍路由组件缓存的实现方案，同时仔细核对了一遍<a href="https://router.vuejs.org/zh/api/#router-view" target="_blank" rel="noopener noreferrer">vue-router的官方文档<ExternalLinkIcon/></a></p>
<p>官方推荐的用法如下：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以排除基本用法的问题，如是继续翻阅<a href="https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive" target="_blank" rel="noopener noreferrer">vue的官方文档<ExternalLinkIcon/></a>，keep-alive的缓存匹配原理是根据组件的name作为key来进行缓存，官方的提示</p>
<img src="@imgs/7f402f00-11d4-4cef-8543-79929256dd6d.png">
<p>随即检查代码中的路由记录的name以及对应component的name，发现都有定义好，因此<strong>排除基本用法的错误导致。</strong></p>
<h2 id="iview-admin的不完善导致" tabindex="-1"><a class="header-anchor" href="#iview-admin的不完善导致" aria-hidden="true">#</a> iview-admin的不完善导致</h2>
<p>进行上述问题排查后定位到此问题出在keep-alive组件的include参数处，keep-alive的参数说明如下：</p>
<blockquote>
<ul>
<li><code v-pre>include</code> - 字符串或正则表达式。只有名称匹配的组件会被缓存。</li>
<li><code v-pre>exclude</code> - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。</li>
<li><code v-pre>max</code> - 数字。最多可以缓存多少组件实例。</li>
</ul>
</blockquote>
<p>iview-admin@2.0中通过路由的meata参数——notCache来控制路由对应的组件是否进行缓存，其源码中有如下注释说明：</p>
<blockquote>
<p><em>设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致</em></p>
</blockquote>
<p>其文档文档上关于路由meta参数的说明<a href="https://github.com/iview/iview-admin/blob/2.0/src/router/routers.js#L13" target="_blank" rel="noopener noreferrer">在这里<ExternalLinkIcon/></a>。</p>
<p><strong>其注释说明说要让组件实现缓存必须要保证页面组件的name和路由配置的name一致，而该项目中路由配置根据由后台设置功能决定，故修改不能缓存的页面的路由配置的namne即可解决问题。</strong></p>
<p>仅仅是解决了此bug总感觉还不够，不如顺便研究一个iview-admin的源码是如何实现路由缓存的。</p>
<p><a name="bpktj"></a></p>
<h4 id="iview-admin实现路由组件缓存原理" tabindex="-1"><a class="header-anchor" href="#iview-admin实现路由组件缓存原理" aria-hidden="true">#</a> iview-admin实现路由组件缓存原理</h4>
<img src="@imgs/04e33871-b8b0-41f7-8ffa-7f45bfded077.png">
<p>iview-admin中将navTagList、menuList等数据保存在全局的vuex的app模块中，navTagList是当前的当前打开过的标签页数组根据路由变化动态更新；menuList是当前登录用户的菜单数组，默认根据路由记录的meta参数的access字段进行过滤</p>
<p>cacheList是app模块的的getters之一，用户从tagNavList中计算出当前打开的标签页需要用keep-alive缓存的组件name数组，此处采用的是动态修改keep-alive组件的exclude的值来动态更新路由的缓存规则</p>
<p><a name="mKsZi"></a></p>
<h3 id="iview-admin的一些局限" tabindex="-1"><a class="header-anchor" href="#iview-admin的一些局限" aria-hidden="true">#</a> iview-admin的一些局限</h3>
<p>iview-admin中的用户权限路由控制思路是：采用路由meata参数的access数组来标签当前路由可访问的用户角色，根据路由记录计算出对应用户的menuList进行渲染。</p>
<p>这个实现方案存在一些不足：</p>
<ul>
<li>路由采用配置表的方式由前端进行配置，路由需要更新时需要前端更新代码进行打包部署的整套项目发布流程</li>
<li>菜单完全由路由配置即用户角色计算得出，后端不能够灵活的重置页面菜单显示</li>
</ul>
<p>基于以上这些考虑对iview-admin默认的权限控制、路由配置进行如下的优化。</p>
<p><a name="1I0lB"></a></p>
<h3 id="考虑优化方案" tabindex="-1"><a class="header-anchor" href="#考虑优化方案" aria-hidden="true">#</a> 考虑优化方案</h3>
<p><a name="CvW0E"></a></p>
<h4 id="路由分类划分" tabindex="-1"><a class="header-anchor" href="#路由分类划分" aria-hidden="true">#</a> 路由分类划分</h4>
<p>项目中的路由组件包括Man.vue进行布局控制，404.vue 500.vue等处理前端路由异常的展示，login.vue error_log.vue等展示用户注册登录日志记录等页面，这些页面路由通常不会经常更新不需要进行动态注册，而像其他的复杂业务逻辑处理页面需要接口进行动态配置。</p>
<p>故将路由进行拆分，基础路由——routers-common直接配置到router中，业务路由——routers进行动态注册</p>
<p><img src="https://cdn.nlark.com/yuque/0/2020/png/298369/1580978386625-07f7de07-0f34-4071-b2e8-10a25dcd4328.png#align=left&amp;display=inline&amp;height=134&amp;name=image.png&amp;originHeight=268&amp;originWidth=724&amp;size=21964&amp;status=done&amp;style=none&amp;width=362" alt="image.png"></p>
<p><a name="O2NSJ"></a></p>
<h4 id="路由动态注册" tabindex="-1"><a class="header-anchor" href="#路由动态注册" aria-hidden="true">#</a> 路由动态注册</h4>
<p>vuex的store中的user模块添加获取用户路由配置的action——getUserRoutes，在用户登录成功后或者或者Main.vue的mounted生命周期中根据用户token调用接口获取用户路由配置</p>
<p>调用<a href="https://router.vuejs.org/zh/api/#router-addroutes" target="_blank" rel="noopener noreferrer">router.addRoutes<ExternalLinkIcon/></a>方法进行路由的动态注册。</p>
<p><a name="e1x10"></a></p>
<h2 id="更进一步" tabindex="-1"><a class="header-anchor" href="#更进一步" aria-hidden="true">#</a> 更进一步</h2>
<blockquote>
<p>后续考虑更进一步的研究vue-router的view部分的源码，彻底弄懂router-view如何与keep-alive实现关联，后续的更新将尽快更新到此处。</p>
</blockquote>
</div></template>


