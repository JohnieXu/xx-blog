import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url)
const imgPath = path.resolve(__dirname, '../../static/imgs')

const IS_VERCEL = process.env.IS_VERCEL === 'true'
const PUBLISH_PATH = IS_VERCEL ? '/' : '/xx-blog/';

export default defineUserConfig({
  title: "迪诺笔记",
  description: "哪里会有人喜欢孤独，不过是不喜欢失望罢了。    ——村上春树",
  base: PUBLISH_PATH,
  dest: "dist",
  alias: {
    '@imgs': imgPath,
  },
  themeConfig: {
    
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
  theme: hopeTheme({
    plugins: {
      blog: true,
    },
    hostname: "johniexu.github.io",
    hotReload: true,
    // navbar: [
    //   { text: '首页', link: '/', icon: 'creative' },
    //   { text: '文章专栏', link: '/article/', icon: 'creative' },
    // ],
    repo: 'JohnieXu/xx-blog',
    repoLabel: 'GitHub',
    repoDisplay: true,
    editLink: true,
    contributors: true,
    breadcrumb: true,
    blog: {
      avatar: '/avatar.jpeg',
      name: 'JohnieXu',
      intro: 'https://github.com/JohnieXu/',
      medias: {
        Email: 'mailto:281910378@qq.com',
        GitHub: 'https://github.com/JohnieXu/'
      }
    },
    encrypt: {
      config: {
        "/summary": ["summary"]
      }
    }
  }),
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "G-1HXVHRSBB0"
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "Get到了一波新技能",
          buttonText: "更新"
        }
      }
    ],
    [
      "sitemap",
      {
        hostname: /^http/.test(PUBLISH_PATH)
          ? "https://blog.lessing.online"
          : "https://blog.lessing.online" + PUBLISH_PATH
      }
    ]
  ]
})
