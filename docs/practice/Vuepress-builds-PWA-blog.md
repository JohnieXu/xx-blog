---
title: VuePress搭建支持PWA的博客
date: 2020-3-7
sidebar: auto
---

## 配置PWA要点

```json
{
  "name": "迪诺笔记",
  "short_name": "JohnieXu's Blog",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "哪里会有人喜欢孤独，不过是不喜欢失望罢了。 ——村上春树",
  "icons": [{
    "src": "logo_48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "logo_72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "logo_96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "logo_144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "logo_168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "logo_192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  }]
}
```

:::warning
name: 应用启动时候显示的标题

short_name: 添加到桌面上的名称
:::

