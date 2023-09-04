export const data = JSON.parse("{\"key\":\"v-782a4b38\",\"path\":\"/program/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html\",\"title\":\"全面分析总结BFC原理及实践\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"全面分析总结BFC原理及实践\",\"created\":\"2020/03/02\",\"updated\":\"2020/03/02\",\"category\":[\"文章专栏\",\"硬核前端\"],\"tag\":[\"前端核心\",\"前端进阶\"],\"description\":\"前言 经常在面试中被问到“如何清除浮动？”、“为什么 overflow: hidden&nbsp;可以清除浮动？”等等比较基础的问题。虽然这些题目案在各种写面试题的文章中都有提供答案，但这种教科书式的问答肯定不是我们的目的，与其记住答案不如彻底掌握其核心原理——块级格式化上下文（BFC）。 这篇文章主要就是彻底分析清楚BFC原理、总结BFC经典场景中的用法，最后在实践中总结BFC在H5、小程序开发中的应用。 本文首发自JohnieXu's Blog，转载请注明出处😁 一、BFC作用 清除浮动：BFC会包含创建它的元素内部的所有内容（包含浮动元素） 外边距折叠：解决同一BFC容器中的相邻元素间的外边距折叠问题 左图右文布局：利用浮动元产生BFC以及BFC之间不会互相覆盖实现左图右文布局\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://johniexu.github.io/xx-blog/program/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"迪诺笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"全面分析总结BFC原理及实践\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 经常在面试中被问到“如何清除浮动？”、“为什么 overflow: hidden&nbsp;可以清除浮动？”等等比较基础的问题。虽然这些题目案在各种写面试题的文章中都有提供答案，但这种教科书式的问答肯定不是我们的目的，与其记住答案不如彻底掌握其核心原理——块级格式化上下文（BFC）。 这篇文章主要就是彻底分析清楚BFC原理、总结BFC经典场景中的用法，最后在实践中总结BFC在H5、小程序开发中的应用。 本文首发自JohnieXu's Blog，转载请注明出处😁 一、BFC作用 清除浮动：BFC会包含创建它的元素内部的所有内容（包含浮动元素） 外边距折叠：解决同一BFC容器中的相邻元素间的外边距折叠问题 左图右文布局：利用浮动元产生BFC以及BFC之间不会互相覆盖实现左图右文布局\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端核心\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端进阶\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"全面分析总结BFC原理及实践\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"一、BFC作用\",\"slug\":\"一、bfc作用\",\"link\":\"#一、bfc作用\",\"children\":[]},{\"level\":2,\"title\":\"二、如何产生BFC\",\"slug\":\"二、如何产生bfc\",\"link\":\"#二、如何产生bfc\",\"children\":[]},{\"level\":2,\"title\":\"三、BFC原理\",\"slug\":\"三、bfc原理\",\"link\":\"#三、bfc原理\",\"children\":[{\"level\":3,\"title\":\"三种文档定位方式\",\"slug\":\"三种文档定位方式\",\"link\":\"#三种文档定位方式\",\"children\":[]},{\"level\":3,\"title\":\"BFC产生作用的原因\",\"slug\":\"bfc产生作用的原因\",\"link\":\"#bfc产生作用的原因\",\"children\":[]},{\"level\":3,\"title\":\"BFC的注意事项\",\"slug\":\"bfc的注意事项\",\"link\":\"#bfc的注意事项\",\"children\":[]}]},{\"level\":2,\"title\":\"四、BFC常见用法\",\"slug\":\"四、bfc常见用法\",\"link\":\"#四、bfc常见用法\",\"children\":[{\"level\":3,\"title\":\"🌰清除浮动防止高度塌陷\",\"slug\":\"🌰清除浮动防止高度塌陷\",\"link\":\"#🌰清除浮动防止高度塌陷\",\"children\":[]},{\"level\":3,\"title\":\"🌰处理外边距折叠的问题\",\"slug\":\"🌰处理外边距折叠的问题\",\"link\":\"#🌰处理外边距折叠的问题\",\"children\":[]}]},{\"level\":2,\"title\":\"五、扩展一下\",\"slug\":\"五、扩展一下\",\"link\":\"#五、扩展一下\",\"children\":[{\"level\":3,\"title\":\"IFC\",\"slug\":\"ifc\",\"link\":\"#ifc\",\"children\":[]},{\"level\":3,\"title\":\"GFC\",\"slug\":\"gfc\",\"link\":\"#gfc\",\"children\":[]},{\"level\":3,\"title\":\"FFC\",\"slug\":\"ffc\",\"link\":\"#ffc\",\"children\":[]}]},{\"level\":2,\"title\":\"六、常见问题分析\",\"slug\":\"六、常见问题分析\",\"link\":\"#六、常见问题分析\",\"children\":[{\"level\":3,\"title\":\"为什么overflow: hidden可以去起到清除浮动的效果？\",\"slug\":\"为什么overflow-hidden可以去起到清除浮动的效果\",\"link\":\"#为什么overflow-hidden可以去起到清除浮动的效果\",\"children\":[]},{\"level\":3,\"title\":\"如何实现两列自实行布局？\",\"slug\":\"如何实现两列自实行布局\",\"link\":\"#如何实现两列自实行布局\",\"children\":[]},{\"level\":3,\"title\":\"内联元素中使用块级元素会产生什么效果？\",\"slug\":\"内联元素中使用块级元素会产生什么效果\",\"link\":\"#内联元素中使用块级元素会产生什么效果\",\"children\":[]},{\"level\":3,\"title\":\"内联元素中使用插入浮动元素会产生什么效果？\",\"slug\":\"内联元素中使用插入浮动元素会产生什么效果\",\"link\":\"#内联元素中使用插入浮动元素会产生什么效果\",\"children\":[]}]},{\"level\":2,\"title\":\"参考文章\",\"slug\":\"参考文章\",\"link\":\"#参考文章\",\"children\":[]},{\"level\":2,\"title\":\"写在最后\",\"slug\":\"写在最后\",\"link\":\"#写在最后\",\"children\":[]}],\"readingTime\":{\"minutes\":8.34,\"words\":2502},\"filePathRelative\":\"program/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.md\",\"excerpt\":\"<h2> 前言</h2>\\n<p>经常在面试中被问到“如何清除浮动？”、“为什么 <code>overflow: hidden</code>&nbsp;可以清除浮动？”等等比较基础的问题。虽然这些题目案在各种写面试题的文章中都有提供答案，但这种教科书式的问答肯定不是我们的目的，与其记住答案不如彻底掌握其核心原理——<strong>块级格式化上下文（BFC）</strong>。</p>\\n<p>这篇文章主要就是彻底分析清楚BFC原理、总结BFC经典场景中的用法，最后在实践中总结BFC在H5、小程序开发中的应用。</p>\\n<blockquote>\\n<p>本文首发自<a href=\\\"https://johniexu.github.io/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">JohnieXu's Blog</a>，转载请注明出处😁</p>\\n</blockquote>\\n<h2> 一、BFC作用</h2>\\n<ul>\\n<li><strong>清除浮动</strong>：BFC会包含创建它的元素内部的所有内容（包含浮动元素）</li>\\n<li><strong>外边距折叠</strong>：解决同一BFC容器中的相邻元素间的外边距折叠问题</li>\\n<li><strong>左图右文布局</strong>：利用浮动元产生BFC以及BFC之间不会互相覆盖实现左图右文布局</li>\\n</ul>\\n\",\"autoDesc\":true}")

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