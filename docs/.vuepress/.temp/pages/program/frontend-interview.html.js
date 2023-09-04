export const data = JSON.parse("{\"key\":\"v-445c2c6f\",\"path\":\"/program/frontend-interview.html\",\"title\":\"frontend-interview\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"frontend-interview\",\"created\":\"2019/07/06\",\"updated\":\"2019/07/06\",\"tag\":[\"未分类\"],\"description\":\"less 是一个css预处理语言，和sass类似，支持函数/变量/模块，不同于poastcss（其不是一个预处理语言，通过各种插件来支持less/sass和autoprefixer等） 变量 以@开头，类似js中的变量，可以用作css值或者属性 // 值 @link-color: #428bca; @link-color-hover: darken(@link-color, 10%); // css属性 @my-selector: banner; .@{my-selector} { font-weight: bold; line-height: 40px; margin: 0 auto; }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://johniexu.github.io/xx-blog/program/frontend-interview.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"迪诺笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"frontend-interview\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"less 是一个css预处理语言，和sass类似，支持函数/变量/模块，不同于poastcss（其不是一个预处理语言，通过各种插件来支持less/sass和autoprefixer等） 变量 以@开头，类似js中的变量，可以用作css值或者属性 // 值 @link-color: #428bca; @link-color-hover: darken(@link-color, 10%); // css属性 @my-selector: banner; .@{my-selector} { font-weight: bold; line-height: 40px; margin: 0 auto; }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"未分类\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"frontend-interview\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"less\",\"slug\":\"less\",\"link\":\"#less\",\"children\":[]},{\"level\":2,\"title\":\"webpack\",\"slug\":\"webpack\",\"link\":\"#webpack\",\"children\":[]},{\"level\":2,\"title\":\"jQuery\",\"slug\":\"jquery\",\"link\":\"#jquery\",\"children\":[]},{\"level\":2,\"title\":\"react\",\"slug\":\"react\",\"link\":\"#react\",\"children\":[]},{\"level\":2,\"title\":\"react-router\",\"slug\":\"react-router\",\"link\":\"#react-router\",\"children\":[]},{\"level\":2,\"title\":\"redux react-redux\",\"slug\":\"redux-react-redux\",\"link\":\"#redux-react-redux\",\"children\":[]},{\"level\":2,\"title\":\"dva\",\"slug\":\"dva\",\"link\":\"#dva\",\"children\":[]},{\"level\":2,\"title\":\"项目相关部分\",\"slug\":\"项目相关部分\",\"link\":\"#项目相关部分\",\"children\":[{\"level\":3,\"title\":\"元数科技\",\"slug\":\"元数科技\",\"link\":\"#元数科技\",\"children\":[]},{\"level\":3,\"title\":\"科技实嘉\",\"slug\":\"科技实嘉\",\"link\":\"#科技实嘉\",\"children\":[]}]},{\"level\":2,\"title\":\"一些要点\",\"slug\":\"一些要点\",\"link\":\"#一些要点\",\"children\":[{\"level\":3,\"title\":\"懒加载\",\"slug\":\"懒加载\",\"link\":\"#懒加载\",\"children\":[]},{\"level\":3,\"title\":\"多主题\",\"slug\":\"多主题\",\"link\":\"#多主题\",\"children\":[]},{\"level\":3,\"title\":\"聊天应用\",\"slug\":\"聊天应用\",\"link\":\"#聊天应用\",\"children\":[]},{\"level\":3,\"title\":\"React\",\"slug\":\"react-1\",\"link\":\"#react-1\",\"children\":[]},{\"level\":3,\"title\":\"Antd组件库\",\"slug\":\"antd组件库\",\"link\":\"#antd组件库\",\"children\":[]},{\"level\":3,\"title\":\"移动端响应式布局\",\"slug\":\"移动端响应式布局\",\"link\":\"#移动端响应式布局\",\"children\":[]},{\"level\":3,\"title\":\"移动端1px边框处理\",\"slug\":\"移动端1px边框处理\",\"link\":\"#移动端1px边框处理\",\"children\":[]}]}],\"readingTime\":{\"minutes\":15.75,\"words\":4724},\"filePathRelative\":\"program/frontend-interview.md\",\"excerpt\":\"<h2> less</h2>\\n<blockquote>\\n<p>是一个css预处理语言，和sass类似，支持函数/变量/模块，不同于poastcss（其不是一个预处理语言，通过各种插件来支持less/sass和autoprefixer等）</p>\\n</blockquote>\\n<p><strong>变量</strong></p>\\n<p>以<code>@</code>开头，类似js中的变量，可以用作css值或者属性</p>\\n<div class=\\\"language-less line-numbers-mode\\\" data-ext=\\\"less\\\"><pre class=\\\"language-less\\\"><code><span class=\\\"token comment\\\">// 值</span>\\n<span class=\\\"token variable\\\">@link-color<span class=\\\"token punctuation\\\">:</span></span>    #428bca<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token variable\\\">@link-color-hover<span class=\\\"token punctuation\\\">:</span></span>  <span class=\\\"token function\\\">darken</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">@link-color</span><span class=\\\"token punctuation\\\">,</span> 10%<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// css属性</span>\\n<span class=\\\"token variable\\\">@my-selector<span class=\\\"token punctuation\\\">:</span></span> banner<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token selector\\\">.@{my-selector}</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">font-weight</span><span class=\\\"token punctuation\\\">:</span> bold<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token property\\\">line-height</span><span class=\\\"token punctuation\\\">:</span> 40px<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token property\\\">margin</span><span class=\\\"token punctuation\\\">:</span> 0 auto<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
