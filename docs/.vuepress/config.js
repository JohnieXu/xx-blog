var path = require("path");
module.exports = {
    title: "JohnieXu's Blog",
    description: "Believe in yourself and just do it! Go......",
    base: "/xx-blog/",
    dest: "dist",
    themeConfig: {
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "文章",
                items: [
                    {
                        text: "前端",
                        link: "/articles/FE/FE-file-upload.html"
                    },
                    {
                        text: "后端",
                        link: "/articles/BE/web-service-deployment.html"
                    },
                    {
                        text: "移动端",
                        link: "/articles/APP/hello-world.html"
                    },
                    {
                        text: "跨平台",
                        link: "/articles/NativeJs/hello-world.html"
                    }
                ]
            },
            {
                text: "知乎",
                link: "https://www.zhihu.com/people/xu-zhi-yong-83/activities"
            },
            {
                text: "简书",
                link: "https://www.jianshu.com/u/ed68ae2b7d50"
            }
            // {
            //   text: 'GitHub',
            //   link: 'https://github.com/JohnieXu'
            // }
        ],
        sidebar: {
            "/articles/FE/": [
                // '',     /* /articles/FE/ */
                "FE-file-upload" /* /articles/FE/FE-file-upload.html */,
                "regular-directives-of-Git" /* /articles/FE/regular-directives-of-Git.html */,
                "deep-understanding-of-JS-module",
                "prototype-of-JS",
                "deep-understanding-of-es6-module",
                "key-concepts-of-react-and-dva",
                "video.js-in-react",
                "react-quill-in-react",
                "react-component-encapsulation"
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
    }
};
