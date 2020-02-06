(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{333:function(t,a,e){t.exports=e.p+"assets/img/7dd6b400-44bb-4d92-9d1f-e040c0a4a16c.d3faa999.png"},359:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"聊一聊实现vue路由组件缓存遇到的-坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊一聊实现vue路由组件缓存遇到的-坑"}},[t._v("#")]),t._v(" 聊一聊实现Vue路由组件缓存遇到的’坑‘")]),t._v(" "),s("p",[s("a",{attrs:{name:"HvPwk"}})]),t._v(" "),s("h1",{attrs:{id:"背景介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),s("p",[t._v("最近在做公司后台管理系统项目时遇到一个比较怪异的bug——采用"),s("code",[t._v("keep-alive+vue-router")]),t._v("实现的路由缓存遇到"),s("strong",[t._v("缓存不生效")]),t._v("的情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(333),alt:"分支策略"}})]),t._v(" "),s("p",[s("a",{attrs:{name:"2VhOm"}})]),t._v(" "),s("h1",{attrs:{id:"项目背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),s("p",[t._v("此项目是基于"),s("a",{attrs:{href:"https://github.com/iview/iview-admin/tree/2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("iview-admin@2.0"),s("OutboundLink")],1),t._v("进行开发的，全局状态管理采用vuex分module实现，路由采用vue-router进行路由配置表的方式实现。")]),t._v(" "),s("p",[t._v("项目属于基于"),s("a",{attrs:{href:"https://www.cnblogs.com/niuli1987/p/9871182.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RBAC"),s("OutboundLink")],1),t._v("的后台管理系统，需要多用户多角色的权限控制，同时路由功能菜单以及展示的字段需按角色划分，因此左侧系统菜单根据接口进行动态设置。")]),t._v(" "),s("p",[t._v("项目中可以进行菜单的图标、跳转路径、是否隐藏等进行配置，路径对应的前端路由则由前端的路由记录进行管理，即菜单管理功能设置的跳转路径是否可用由此路由记录决定。")]),t._v(" "),s("p",[s("a",{attrs:{name:"PpZiO"}})]),t._v(" "),s("h1",{attrs:{id:"解决过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决过程"}},[t._v("#")]),t._v(" 解决过程")]),t._v(" "),s("p",[s("a",{attrs:{name:"nC48B"}})]),t._v(" "),s("h2",{attrs:{id:"核实路由缓存用法问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核实路由缓存用法问题"}},[t._v("#")]),t._v(" 核实路由缓存用法问题")]),t._v(" "),s("p",[t._v("发现这个bug之后梳理了一遍路由组件缓存的实现方案，同时仔细核对了一遍"),s("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-view",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router的官方文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("官方推荐的用法如下：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以排除基本用法的问题，如是继续翻阅"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue的官方文档"),s("OutboundLink")],1),t._v("，keep-alive的缓存匹配原理是根据组件的name作为key来进行缓存，官方的提示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/298369/1580892257851-72ac895b-1ef3-48e4-bc82-a2e17c6cb0b5.png#align=left&display=inline&height=104&name=image.png&originHeight=218&originWidth=1562&size=37857&status=done&style=stroke&width=746",alt:"image.png"}})]),t._v(" "),s("p",[t._v("随即检查代码中的路由记录的name以及对应component的name，发现都有定义好，因此"),s("strong",[t._v("排除基本用法的错误导致。")]),s("br"),t._v("**\n"),s("a",{attrs:{name:"GDxlV"}})]),t._v(" "),s("h2",{attrs:{id:"iview-admin的不完善导致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview-admin的不完善导致"}},[t._v("#")]),t._v(" iview-admin的不完善导致")]),t._v(" "),s("p",[t._v("进行上述问题排查后定位到此问题出在keep-alive组件的include参数处，keep-alive的参数说明如下：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("include")]),t._v(" - 字符串或正则表达式。只有名称匹配的组件会被缓存。")]),t._v(" "),s("li",[s("code",[t._v("exclude")]),t._v(" - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。")]),t._v(" "),s("li",[s("code",[t._v("max")]),t._v(" - 数字。最多可以缓存多少组件实例。")])])]),t._v(" "),s("p",[t._v("iview-admin@2.0中通过路由的meata参数——notCache来控制路由对应的组件是否进行缓存，其源码中有如下注释说明：")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致")])])]),t._v(" "),s("p",[t._v("其文档文档上关于路由meta参数的说明"),s("a",{attrs:{href:"https://github.com/iview/iview-admin/blob/2.0/src/router/routers.js#L13",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("其注释说明说要让组件实现缓存必须要保证页面组件的name和路由配置的name一致，而该项目中路由配置根据由后台设置功能决定，故修改不能缓存的页面的路由配置的namne即可解决问题。")])]),t._v(" "),s("p",[t._v("仅仅是解决了此bug总感觉还不够，不如顺便研究一个iview-admin的源码是如何实现路由缓存的。")]),t._v(" "),s("p",[s("a",{attrs:{name:"bpktj"}})]),t._v(" "),s("h3",{attrs:{id:"iview-admin实现路由组件缓存原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview-admin实现路由组件缓存原理"}},[t._v("#")]),t._v(" iview-admin实现路由组件缓存原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/298369/1580975013520-0bc33b1e-a6c5-46d6-b3f2-a37bd6d71a5f.png#align=left&display=inline&height=512&name=image.png&originHeight=959&originWidth=1397&size=111193&status=done&style=stroke&width=746",alt:"image.png"}})]),t._v(" "),s("p",[t._v("iview-admin中将navTagList、menuList等数据保存在全局的vuex的app模块中，navTagList是当前的当前打开过的标签页数组根据路由变化动态更新；menuList是当前登录用户的菜单数组，默认根据路由记录的meta参数的access字段进行过滤")]),t._v(" "),s("p",[t._v("cacheList是app模块的的getters之一，用户从tagNavList中计算出当前打开的标签页需要用keep-alive缓存的组件name数组，此处采用的是动态修改keep-alive组件的exclude的值来动态更新路由的缓存规则")]),t._v(" "),s("p",[s("a",{attrs:{name:"mKsZi"}})]),t._v(" "),s("h3",{attrs:{id:"iview-admin的一些局限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview-admin的一些局限"}},[t._v("#")]),t._v(" iview-admin的一些局限")]),t._v(" "),s("p",[t._v("iview-admin中的用户权限路由控制思路是：采用路由meata参数的access数组来标签当前路由可访问的用户角色，根据路由记录计算出对应用户的menuList进行渲染。")]),t._v(" "),s("p",[t._v("这个实现方案存在一些不足：")]),t._v(" "),s("ul",[s("li",[t._v("路由采用配置表的方式由前端进行配置，路由需要更新时需要前端更新代码进行打包部署的整套项目发布流程")]),t._v(" "),s("li",[t._v("菜单完全由路由配置即用户角色计算得出，后端不能够灵活的重置页面菜单显示")])]),t._v(" "),s("p",[t._v("基于以上这些考虑对iview-admin默认的权限控制、路由配置进行如下的优化。")]),t._v(" "),s("p",[s("a",{attrs:{name:"1I0lB"}})]),t._v(" "),s("h2",{attrs:{id:"考虑优化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#考虑优化方案"}},[t._v("#")]),t._v(" 考虑优化方案")]),t._v(" "),s("p",[s("a",{attrs:{name:"CvW0E"}})]),t._v(" "),s("h3",{attrs:{id:"路由分类划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由分类划分"}},[t._v("#")]),t._v(" 路由分类划分")]),t._v(" "),s("p",[t._v("项目中的路由组件包括Man.vue进行布局控制，404.vue 500.vue等处理前端路由异常的展示，login.vue error_log.vue等展示用户注册登录日志记录等页面，这些页面路由通常不会经常更新不需要进行动态注册，而像其他的复杂业务逻辑处理页面需要接口进行动态配置。")]),t._v(" "),s("p",[t._v("故将路由进行拆分，基础路由——routers-common直接配置到router中，业务路由——routers进行动态注册")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/298369/1580978386625-07f7de07-0f34-4071-b2e8-10a25dcd4328.png#align=left&display=inline&height=134&name=image.png&originHeight=268&originWidth=724&size=21964&status=done&style=none&width=362",alt:"image.png"}})]),t._v(" "),s("p",[s("a",{attrs:{name:"O2NSJ"}})]),t._v(" "),s("h3",{attrs:{id:"路由动态注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由动态注册"}},[t._v("#")]),t._v(" 路由动态注册")]),t._v(" "),s("p",[t._v("vuex的store中的user模块添加获取用户路由配置的action——getUserRoutes，在用户登录成功后或者或者Main.vue的mounted生命周期中根据用户token调用接口获取用户路由配置")]),t._v(" "),s("p",[t._v("调用"),s("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-addroutes",target:"_blank",rel:"noopener noreferrer"}},[t._v("router.addRoutes"),s("OutboundLink")],1),t._v("方法进行路由的动态注册。")]),t._v(" "),s("p",[s("a",{attrs:{name:"e1x10"}})]),t._v(" "),s("h1",{attrs:{id:"更进一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更进一步"}},[t._v("#")]),t._v(" 更进一步")]),t._v(" "),s("blockquote",[s("p",[t._v("后续考虑更进一步的研究vue-router的view部分的源码，彻底弄懂router-view如何与keep-alive实现关联，后续的更新将尽快更新到此处。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);