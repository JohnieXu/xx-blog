(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{187:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[a("p",[t._v("ES6基于文件的模块")]),t._v(" "),a("p",[t._v("即一个文件一个模块，在浏览器 web 环境中需要分别加载各个单独的文件模块，而非将其放入一个大的单独文件加载，当然现阶段对于ES6的模块都是采用 babel 进行 transpile 然后打包成若干个"),a("a",{attrs:{href:"http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#umd",target:"_blank",rel:"noopener noreferrer"}},[t._v("UMD模块"),a("OutboundLink")],1),t._v("。对于考虑是采用单独小文件还是打包后的若干个较大文件，主要是考虑到 HTTP/1.1 高效并发/交替加载多个小文件的性能问题。")])]),t._v(" "),a("li",[a("p",[t._v("ES6模块的 API 是静态的")]),t._v(" "),a("p",[t._v("即需要在模块的公开 API 中静态定义所有最高层导出，之后无法再添加\n看下"),a("a",{attrs:{href:"http://www.lessing.online/xx-blog/articles/FE/deep-understanding-of-JS-module.html#%E5%BC%95%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 JS 模块"),a("OutboundLink")],1),t._v("中的一个ES6模块的例子")]),t._v(" "),t._m(2),a("p",[t._v("上例中导出了 myModule，是一个对象。这里说的 API 是静态的指的是对于上面的模块来说导出的只有 myModule，没有其他的了，但是是可以修改/添加/删除导出的 myModule 对象的属性来间接修改模块导出的 API 的。")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("关于"),a("strong",[t._v("ES6模块动态导入")]),t._v("/"),a("strong",[t._v("模块循环依赖")]),t._v("以及"),a("strong",[t._v("ES6模块的原理")]),t._v("可以阅读我写的另一篇文章——"),a("a",{attrs:{href:"https://www.yuque.com/docs/share/ad354374-4122-4599-973b-aa63943c3b3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解ES模块系统"),a("OutboundLink")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"es6模块的核心知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6模块的核心知识点"}},[this._v("#")]),this._v(" ES6模块的核心知识点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es6模块与前es6模块概念区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6模块与前es6模块概念区别"}},[this._v("#")]),this._v(" ES6模块与前ES6模块概念区别")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模块定义 myModule.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Byron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printFullName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("firstName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myModule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    printName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" printName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    printFullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" printFullName\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" myModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("ES6模块是单例")]),this._v(" "),s("p",[this._v("即ES6模块只有一个单一实例，多个模块中引用同一个的同一个模块，最终都指向对那个唯一的中心实例的引用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("模块暴露的属性和方法不是值的传递而是类似指针的绑定")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("导入模块和从网络请求加载模块完全一样")]),this._v(" "),s("p",[this._v("浏览器/Node.js 提供了各自环境下默认的模块加载器(Module Loader)，"),s("code",[this._v("import ... from 'xxx")]),this._v("语句对于模块加载器来说就是"),s("strong",[this._v("告诉模块加载器去哪个 URL/文件路径下获取对应的模块")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"export-模块导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-模块导出"}},[this._v("#")]),this._v(" export 模块导出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"命名导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名导出"}},[this._v("#")]),this._v(" 命名导出")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("模块内部没有全局作用域，以下例子中的 var 定义的作用域仅在本模块，模块内可以访问和使用全局 global/window 等，但不建议这么用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" awesome "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" awesome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"默认导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认导出"}},[this._v("#")]),this._v(" 默认导出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("export")]),this._v(" 导出是对变量的绑定(指针)，"),s("code",[this._v("export default")]),this._v(" 导出是对值的绑定，"),s("code",[this._v("export { a as default }")]),this._v("导出是对变量的绑定(指针)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里默认导出是对foo值的绑定，若后续对foo有更改默认导出值不会相应更改")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里默认导出是对变量foo的绑定(类似指针的绑定)，若后续对foo有更改相应的默认导出也会更改")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"import-模块导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-模块导入"}},[this._v("#")]),this._v(" import 模块导入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awesome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" awesome "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Awesome "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以上的 foo 是默认导入，Awesome 为别名导入，Bar 为命名空间导入(讲所有导出导入到 Bar 的命名空间下),注意"),s("strong",[this._v("所有导入的绑定都是不可变的/或只读的")]),this._v("，同时"),s("strong",[this._v("import 的声明是提升的，不同于 require 的动态加载")]),this._v("。")])}],!1,null,null,null);s.default=e.exports}}]);