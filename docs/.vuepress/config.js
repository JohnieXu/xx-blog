var path = require("path");

// #3eaf7c

// FIXME: manifest.json service-worker.js不能放到oss上存储，会导致跨域访问文件失败
// const PUBLISH_PATH = process.env.PUBLISH_PATH || '/xx-blog/'
const OSS_BASE_PATH = 'https://lessing.oss-cn-beijing.aliyuncs.com/blog/'
const CODING_BASE_PATH = '/'
let PUBLISH_PATH = '/xx-blog/'

PUBLISH_PATH = CODING_BASE_PATH // 默认根路径

module.exports = {
    title: "迪诺笔记",
    description: "哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树",
    base: PUBLISH_PATH,
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
                        // link: "/articles/FE/regular-directives-of-Git"
                        link: "/articles/FE/"
                    },
                    {
                        text: "UI设计",
                        link: "/articles/UI/miniprogram-design-pattern"
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
                "Thoroughly-understand-DOM-event-mechanism",
                "A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice"
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
            "/articles/": false
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
      ['meta', { name: 'keywords', content: '前端博客,开发经验,前端进阶,源码分析,读书笔记,JohnieXu' }],
      ['meta', { name: 'theme-color', content: '#FAD95C' }],
      ['meta', { name: 'apple-touch-fullscreen', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#FAD95C' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ['meta', { name: 'google-site-verification', content: 'VJDAfmKkQi_fst1HyzcNY4ifwP5w7EhLCXjjO8qgXqM' }]
    ],
    plugins: [
      ['@vuepress/google-analytics', {
        ga: 'G-1HXVHRSBB0'
      }],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: 'Get到了一波新技能',
          buttonText: '更新'
        },
        updatePopup: true
      }],
      ['sitemap', {
        hostname: /^http/.test(PUBLISH_PATH) ? 'https://blog.lessing.online' : 'https://blog.lessing.online' + PUBLISH_PATH
      }]
    ]
};
