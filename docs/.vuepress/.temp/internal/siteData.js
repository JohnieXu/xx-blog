export const siteData = JSON.parse("{\"base\":\"/xx-blog/\",\"lang\":\"en-US\",\"title\":\"迪诺笔记\",\"description\":\"哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树\",\"head\":[[\"script\",{\"src\":\"https://hm.baidu.com/hm.js?6d4a99079a9531464d70b917d3d7449d\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.json\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"前端博客,开发经验,前端进阶,源码分析,读书笔记,JohnieXu\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#FAD95C\"}],[\"meta\",{\"name\":\"apple-touch-fullscreen\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/logo.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/logo.png\",\"color\":\"#FAD95C\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/logo.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#000000\"}],[\"meta\",{\"name\":\"google-site-verification\",\"content\":\"VJDAfmKkQi_fst1HyzcNY4ifwP5w7EhLCXjjO8qgXqM\"}],[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"8xYgZOGSrO\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}