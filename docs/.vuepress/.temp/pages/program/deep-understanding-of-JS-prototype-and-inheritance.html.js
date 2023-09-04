export const data = JSON.parse("{\"key\":\"v-466f2678\",\"path\":\"/program/deep-understanding-of-JS-prototype-and-inheritance.html\",\"title\":\"深入理解JS原型与继承\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"深入理解JS原型与继承\",\"created\":\"2020/05/03\",\"updated\":\"2020/05/03\",\"category\":[\"文章专栏\",\"硬核前端\"],\"tag\":[\"前端核心\",\"前端进阶\"],\"description\":\"前言 最近在整体地复习一遍现代前端必备的核心知识点，将会整理成一个前端分析总结文章系列。这篇是其中的第三篇，主要是总结下JS中原型与继承等核心知识点。（另外，此系列文章也可以在语雀专栏——硬核前端系列查看）。 本文首发自迪诺笔记，转载请注明出处😁\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://johniexu.github.io/xx-blog/program/deep-understanding-of-JS-prototype-and-inheritance.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"迪诺笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"深入理解JS原型与继承\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 最近在整体地复习一遍现代前端必备的核心知识点，将会整理成一个前端分析总结文章系列。这篇是其中的第三篇，主要是总结下JS中原型与继承等核心知识点。（另外，此系列文章也可以在语雀专栏——硬核前端系列查看）。 本文首发自迪诺笔记，转载请注明出处😁\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端核心\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端进阶\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"深入理解JS原型与继承\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"一、原型机制\",\"slug\":\"一、原型机制\",\"link\":\"#一、原型机制\",\"children\":[{\"level\":3,\"title\":\"核心总结\",\"slug\":\"核心总结\",\"link\":\"#核心总结\",\"children\":[]},{\"level\":3,\"title\":\"实例分析\",\"slug\":\"实例分析\",\"link\":\"#实例分析\",\"children\":[]}]},{\"level\":2,\"title\":\"二、new的本质\",\"slug\":\"二、new的本质\",\"link\":\"#二、new的本质\",\"children\":[{\"level\":3,\"title\":\"实例分析\",\"slug\":\"实例分析-1\",\"link\":\"#实例分析-1\",\"children\":[]}]},{\"level\":2,\"title\":\"三、this 的指向问题\",\"slug\":\"三、this-的指向问题\",\"link\":\"#三、this-的指向问题\",\"children\":[{\"level\":3,\"title\":\"函数嵌套的情况\",\"slug\":\"函数嵌套的情况\",\"link\":\"#函数嵌套的情况\",\"children\":[]},{\"level\":3,\"title\":\"call、apply、bind\",\"slug\":\"call、apply、bind\",\"link\":\"#call、apply、bind\",\"children\":[]},{\"level\":3,\"title\":\"使用多次 bind 绑定 this\",\"slug\":\"使用多次-bind-绑定-this\",\"link\":\"#使用多次-bind-绑定-this\",\"children\":[]}]},{\"level\":2,\"title\":\"四、类型判断\",\"slug\":\"四、类型判断\",\"link\":\"#四、类型判断\",\"children\":[{\"level\":3,\"title\":\"instanceof\",\"slug\":\"instanceof\",\"link\":\"#instanceof\",\"children\":[]},{\"level\":3,\"title\":\"Object.prototype.toString.call()\",\"slug\":\"object-prototype-tostring-call\",\"link\":\"#object-prototype-tostring-call\",\"children\":[]}]},{\"level\":2,\"title\":\"五、常用继承方案\",\"slug\":\"五、常用继承方案\",\"link\":\"#五、常用继承方案\",\"children\":[{\"level\":3,\"title\":\"原型链继承\",\"slug\":\"原型链继承\",\"link\":\"#原型链继承\",\"children\":[]},{\"level\":3,\"title\":\"call、apply 实现继承\",\"slug\":\"call、apply-实现继承\",\"link\":\"#call、apply-实现继承\",\"children\":[]},{\"level\":3,\"title\":\"组合继承\",\"slug\":\"组合继承\",\"link\":\"#组合继承\",\"children\":[]},{\"level\":3,\"title\":\"class 实现继承\",\"slug\":\"class-实现继承\",\"link\":\"#class-实现继承\",\"children\":[]},{\"level\":3,\"title\":\"TS 中 class 实现继承\",\"slug\":\"ts-中-class-实现继承\",\"link\":\"#ts-中-class-实现继承\",\"children\":[]}]},{\"level\":2,\"title\":\"写在最后\",\"slug\":\"写在最后\",\"link\":\"#写在最后\",\"children\":[]},{\"level\":2,\"title\":\"参考文章\",\"slug\":\"参考文章\",\"link\":\"#参考文章\",\"children\":[]}],\"readingTime\":{\"minutes\":10.52,\"words\":3157},\"filePathRelative\":\"program/deep-understanding-of-JS-prototype-and-inheritance.md\",\"excerpt\":\"<h2> 前言</h2>\\n<p>最近在整体地复习一遍现代前端必备的核心知识点，将会整理成一个前端分析总结文章系列。这篇是其中的第三篇，主要是总结下JS中原型与继承等核心知识点。（另外，此系列文章也可以在语雀专栏——<a href=\\\"https://www.yuque.com/johniexu/frontend\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">硬核前端系列</a>查看）。</p>\\n<blockquote>\\n<p>本文首发自<a href=\\\"https://johniexu.github.io/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">迪诺笔记</a>，转载请注明出处😁</p>\\n</blockquote>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
