export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/summary\":[\"$2a$10$PszFUs5.MrUjiBVLejOU4eFCsct91s/Yza5Vi7sJUco1gXIio7meu\"]}},\"repo\":\"JohnieXu/xx-blog\",\"repoLabel\":\"GitHub\",\"repoDisplay\":true,\"editLink\":true,\"contributors\":true,\"breadcrumb\":true,\"blog\":{\"avatar\":\"/avatar.jpeg\",\"name\":\"JohnieXu\",\"intro\":\"https://github.com/JohnieXu/\",\"medias\":{\"Email\":\"mailto:281910378@qq.com\",\"GitHub\":\"https://github.com/JohnieXu/\"}},\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"blogLocales\":{\"article\":\"Articles\",\"articleList\":\"Article List\",\"category\":\"Category\",\"tag\":\"Tag\",\"timeline\":\"Timeline\",\"timelineTitle\":\"Yesterday Once More!\",\"all\":\"All\",\"intro\":\"Personal Intro\",\"star\":\"Star\"},\"paginationLocales\":{\"prev\":\"Prev\",\"next\":\"Next\",\"navigate\":\"Jump to\",\"action\":\"Go\",\"errorText\":\"Please enter a number between 1 and $page !\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
