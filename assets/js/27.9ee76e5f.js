(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{752:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"es6模块与前es6模块概念区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6模块与前es6模块概念区别"}},[t._v("#")]),t._v(" ES6模块与前ES6模块概念区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ES6基于文件的模块")]),t._v(" "),s("p",[t._v("即一个文件一个模块，在浏览器 web 环境中需要分别加载各个单独的文件模块，而非将其放入一个大的单独文件加载，当然现阶段对于ES6的模块都是采用 babel 进行 transpile 然后打包成若干个"),s("a",{attrs:{href:"http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#umd",target:"_blank",rel:"noopener noreferrer"}},[t._v("UMD模块"),s("OutboundLink")],1),t._v("。对于考虑是采用单独小文件还是打包后的若干个较大文件，主要是考虑到 HTTP/1.1 高效并发/交替加载多个小文件的性能问题。")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ES6模块的 API 是静态的")]),t._v(" "),s("p",[t._v("即需要在模块的公开 API 中静态定义所有最高层导出，之后无法再添加\n看下"),s("a",{attrs:{href:"http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#%E5%BC%95%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 JS 模块"),s("OutboundLink")],1),t._v("中的一个ES6模块的例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模块定义 myModule.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Byron'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printFullName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("firstName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("printName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" printName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("printFullName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" printFullName\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" myModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上例中导出了 myModule，是一个对象。这里说的 API 是静态的指的是对于上面的模块来说导出的只有 myModule，没有其他的了，但是是可以修改/添加/删除导出的 myModule 对象的属性来间接修改模块导出的 API 的。")])]),t._v(" "),s("li",[s("p",[t._v("ES6模块是单例")]),t._v(" "),s("p",[t._v("即ES6模块只有一个单一实例，多个模块中引用同一个的同一个模块，最终都指向对那个唯一的中心实例的引用。")])]),t._v(" "),s("li",[s("p",[t._v("模块暴露的属性和方法不是值的传递而是类似指针的绑定")])]),t._v(" "),s("li",[s("p",[t._v("导入模块和从网络请求加载模块完全一样")]),t._v(" "),s("p",[t._v("浏览器/Node.js 提供了各自环境下默认的模块加载器(Module Loader)，"),s("code",[t._v("import ... from 'xxx")]),t._v("语句对于模块加载器来说就是"),s("strong",[t._v("告诉模块加载器去哪个 URL/文件路径下获取对应的模块")])])])]),t._v(" "),s("h2",{attrs:{id:"export-模块导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-模块导出"}},[t._v("#")]),t._v(" export 模块导出")]),t._v(" "),s("h3",{attrs:{id:"命名导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名导出"}},[t._v("#")]),t._v(" 命名导出")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("模块内部没有全局作用域，以下例子中的 var 定义的作用域仅在本模块，模块内可以访问和使用全局 global/window 等，但不建议这么用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" awesome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" awesome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"默认导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认导出"}},[t._v("#")]),t._v(" 默认导出")]),t._v(" "),s("p",[s("code",[t._v("export")]),t._v(" 导出是对变量的绑定(指针)，"),s("code",[t._v("export default")]),t._v(" 导出是对值的绑定，"),s("code",[t._v("export { a as default }")]),t._v("导出是对变量的绑定(指针)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里默认导出是对foo值的绑定，若后续对foo有更改默认导出值不会相应更改")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里默认导出是对变量foo的绑定(类似指针的绑定)，若后续对foo有更改相应的默认导出也会更改")]),t._v("\n")])])]),s("h2",{attrs:{id:"import-模块导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-模块导入"}},[t._v("#")]),t._v(" import 模块导入")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awesome")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" awesome "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Awesome "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Bar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上的 foo 是默认导入，Awesome 为别名导入，Bar 为命名空间导入(讲所有导出导入到 Bar 的命名空间下),注意"),s("strong",[t._v("所有导入的绑定都是不可变的/或只读的")]),t._v("，同时"),s("strong",[t._v("import 的声明是提升的，不同于 require 的动态加载")]),t._v("。")]),t._v(" "),s("p",[t._v("关于"),s("strong",[t._v("ES6模块动态导入")]),t._v("/"),s("strong",[t._v("模块循环依赖")]),t._v("以及"),s("strong",[t._v("ES6模块的原理")]),t._v("可以阅读我写的另一篇文章——"),s("a",{attrs:{href:"https://www.yuque.com/docs/share/ad354374-4122-4599-973b-aa63943c3b3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解ES模块系统"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);