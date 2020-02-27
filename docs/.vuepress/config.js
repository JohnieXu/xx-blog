var path = require("path");
module.exports = {
    title: "JohnieXu's Blog",
    description: "哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树",
    base: "/xx-blog/",
    base: "/",
    dest: "dist",
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "文章专栏",
                icon: "reco-blog",
                items: [
                    {
                        text: "硬核前端",
                        link: "/articles/FE/regular-directives-of-Git"
                    },
                    // {
                    //     text: "后端",
                    //     link: "/articles/BE/web-service-deployment.html"
                    // },
                    // {
                    //     text: "跨平台",
                    //     link: "/articles/APP/hello-world.html"
                    // }
                ]
            },
            {
                text: "语雀",
                link: "https://www.yuque.com/johniexu"
            },
            {
                text: "掘金",
                link: "https://juejin.im/user/59eb44426fb9a045000230b8"
            }
        ],
        sidebar: {
            "/articles/FE/": [
                // '',     /* /articles/FE/ */
                "regular-directives-of-Git" /* /articles/FE/regular-directives-of-Git.html */,
                "FE-file-upload" /* /articles/FE/FE-file-upload.html */,
                "deep-understanding-of-JS-module",
                "prototype-of-JS",
                "deep-understanding-of-es6-module",
                "key-concepts-of-react-and-dva",
                "video.js-in-react",
                "react-quill-in-react",
                "react-component-encapsulation",
                "frontend-interview",
                "Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache",
                "Take-you-to-analyze-the-source-code-of-Vue-router",
                "Thoroughly-understand-DOM-event-mechanism"
            ],
            "/articles/BE/": [
                // '',
                "web-service-deployment"
            ],
            "/articles/APP/": [
                // '',
                "hello-world",
                "hello-VuePress"
            ],
            "/articles/NativeJs/": [
                // '',
                "hello-world",
                "hello-VuePress"
            ],
            // fallback
            "/articles/": ["" /* /articles/ */]
        },
        valineConfig: {
          // https://leancloud.cn/dashboard/app.html?appid=dVMwFciWpUqAb2YNjKM3VrsG-gzGzoHsz#/key
          appId: 'dVMwFciWpUqAb2YNjKM3VrsG-gzGzoHsz',// your appId
          appKey: 'wWlELg748e880pUK0rGngtha', // your appKey
        },
        blogConfig: {
          // category: {
          //   location: 2,     // 在导航栏菜单中所占的位置，默认2
          //   text: 'Category' // 默认文案 “分类”
          // },
          // tag: {
          //   location: 3,     // 在导航栏菜单中所占的位置，默认3
          //   text: 'Tag'      // 默认文案 “标签”
          // }
        },
        author: 'JohnieXu',
        authorAvatar: 'avatar.jpeg',
        displayAllHeaders: false,
        sidebarDepth: 2,
        repo: "JohnieXu/xx-blog",
        repoLabel: "GitHub",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "编辑此文章",
        lastUpdated: "更新于"
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@imgs": path.resolve(__dirname, "../../static/imgs")
            }
        }
    },
    head: [
      ['script', { src: 'https://hm.baidu.com/hm.js?6d4a99079a9531464d70b917d3d7449d' }],
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
      ['@vuepress/google-analytics', {
        ga: 'gagagaga'
      }],
      ['@vuepress/pwa', {
        serviceWorker: true,
        // updatePopup: {
        //   message: '发现新内容可用',
        //   buttonText: '刷新'
        // },
        updatePopup: true
      }],
    ]
};
