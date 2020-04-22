var path = require("path");

// #3eaf7c

// FIXME: manifest.json service-worker.js不能放到oss上存储，会导致跨域访问文件失败
// const PUBLISH_PATH = process.env.PUBLISH_PATH || '/xx-blog/'
const OSS_BASE_PATH = "https://lessing.oss-cn-beijing.aliyuncs.com/blog/";
const CODING_BASE_PATH = "/";
let PUBLISH_PATH = "/xx-blog/";

PUBLISH_PATH = CODING_BASE_PATH; // 默认根路径

module.exports = {
  title: "迪诺笔记",
  description: "哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树",
  base: PUBLISH_PATH,
  dest: "dist",
  // theme: "reco",
  theme: "yur",
  themeConfig: {
    type: "blog",
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
            link: "/articles/FE/"
          },
          {
            text: "GO笔记",
            link: "/articles/GO/"
          },
          {
            text: "UI设计",
            link: "/articles/UI/"
          }
        ]
      },
      {
        text: "实战分享",
        icon: "reco-other",
        link: "/articles/PRACTICE/"
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
        "regular-directives-of-Git",
        "FE-file-upload",
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
      "/articles/BE/": ["web-service-deployment"],
      "/articles/APP/": ["hello-world", "hello-VuePress"],
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
      appId: "dVMwFciWpUqAb2YNjKM3VrsG-gzGzoHsz",
      appKey: "wWlELg748e880pUK0rGngtha"
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
    author: "JohnieXu",
    authorAvatar: "avatar.jpeg",
    displayAllHeaders: false,
    sidebarDepth: 2,
    repo: "JohnieXu/xx-blog",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "发现问题？",
    lastUpdated: "更新于"
  },
  themeConfig: {
    lang: 'zh-CN',
    logo: '/logo.png',
    author: 'JohnieXu',
    authorLink: 'https://github.com/JohnieXu/',
    dark: true,
    timeline: true,
    about: true,
    avatar: '/avatar.jpeg',
    // banner: '/home-bg3.jpg',
    discuss: 'valine',
    valine: {
      // https://leancloud.cn/dashboard/app.html?appid=dVMwFciWpUqAb2YNjKM3VrsG-gzGzoHsz#/key
      appId: "dVMwFciWpUqAb2YNjKM3VrsG-gzGzoHsz",
      appKey: "wWlELg748e880pUK0rGngtha",
      placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
      notify: false,
      verify: true,
      avatar: 'mp',
      pageSize: 8,
      recordIP: true,
      lang: 'zh-cn'
    },
    curtain: {
      tip: '页面准备中...',
      textShadow: '#e91e63'
    },
    locales: {
      title: "迪诺笔记",
      description: "哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树",
      backToHome: "回到主页",
      archives: "归档",
      links: "友人帐",
      about: "关于我",
      About: "关于作者",
      Read: "阅读",
    },
    post: {
      cover: [],
      bubbles: {
        color: 'random',
        radius: 15,
        density: 0.3,
        clearOffset: 0.2
      }
    },
    links: [
      {
        name: '博客',
        lists: [
          {
            title: '网易云前端专栏',
            subtitle: '',
            link: 'https://musicfe.dev/',
            logo: 'https://musicfe.dev/icons/icon-192x192.png',
            color: '#dd001b'
          },
          {
            title: '转转前端',
            link: 'http://zzfed.com/',
            subtitle: '大转转 FE',
            logo: 'http://zzfed.com/favicon.ico',
            color: '#ec5348'
          },
          {
            title: '蚊子',
            subtitle: '蚊子、wenzi',
            link: 'https://www.xiabingbao.com/',
            logo: 'https://www.xiabingbao.com/favicon.ico',
            color: '#4D444F'
          },
          {
            title: 'ConardLi的blog',
            subtitle: '',
            link: 'http://www.conardli.top/blog/',
            logo: '',
            color: '#3eaf7c'
          }
        ]
      }
    ],
    buttons: [
      {text: '阅读列表', link: '/program/', type: 'primary'},
      {text: '关于作者', link: '/about.html', type: 'default'}
    ],
    navs: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "文章专栏",
        link: "/program/"
      },
    ],
    ityped: {
      typeSpeed: 150,
      backSpeed: 100,
      startDelay: 300,
      backDelay: 1300,
      loop: true,
      showCursor: true,
      placeholder: false,
      disableBackTyping: false,
      cursorChar: '丨'
    },
    nameplate: {
      title: "JohnieXu", // 内容
      width: '80px', // 宽度
      height: '32px', // 高度
      text: [
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#3498db',
            textShadow: '0 0 1px #3498db',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-1.5s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#f39c12',
            textShadow: '0 0 1px #f39c12',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-3s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#e74c3c',
            textShadow: '0 0 1px #e74c3c',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-4.5s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#9b59b6',
            textShadow: '0 0 1px #9b59b6',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-6s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@imgs": path.resolve(__dirname, "../../static/imgs")
      }
    }
  },
  head: [
    [
      "script",
      { src: "https://hm.baidu.com/hm.js?6d4a99079a9531464d70b917d3d7449d" }
    ],
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "meta",
      {
        name: "keywords",
        content: "前端博客,开发经验,前端进阶,源码分析,读书笔记,JohnieXu"
      }
    ],
    ["meta", { name: "theme-color", content: "#FAD95C" }],
    ["meta", { name: "apple-touch-fullscreen", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/logo.png" }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/logo.png",
        color: "#FAD95C"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/logo.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "VJDAfmKkQi_fst1HyzcNY4ifwP5w7EhLCXjjO8qgXqM"
      }
    ],
    [
      "meta", {
        name: "baidu-site-verification",
        content: "8xYgZOGSrO"
      }
    ]
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "G-1HXVHRSBB0"
      }
    ],
    // [
    //   "@vuepress/pwa",
    //   {
    //     serviceWorker: true,
    //     updatePopup: {
    //       message: "Get到了一波新技能",
    //       buttonText: "更新"
    //     }
    //   }
    // ],
    [
      "sitemap",
      {
        hostname: /^http/.test(PUBLISH_PATH)
          ? "https://blog.lessing.online"
          : "https://blog.lessing.online" + PUBLISH_PATH
      }
    ]
  ]
};
