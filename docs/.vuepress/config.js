module.exports = {
  repo: 'https://github.com/JohnieXu',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文章',
        items: [
          {
            text: '前端',
            link: '/articles/FE/'
          },
          {
            text: '后端',
            link: '/articles/BE/'
          },
          {
            text: '移动端',
            link: '/articles/APP/'
          },
          {
            text: '跨平台',
            link: '/articles/NativeJs/'
          }
        ]
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/xu-zhi-yong-83/activities'
      },
      {
        text: '简书',
        link: 'https://www.jianshu.com/u/ed68ae2b7d50'
      },
      // {
      //   text: 'GitHub',
      //   link: 'https://github.com/JohnieXu'
      // }
    ],
    sidebar: {
      '/articles/FE/': [
        '',     /* /articles/FE/ */
        'FE-file-upload',  /* /articles/FE/FE-file-upload.html */
        'regular-directives-of-Git',
        'hello-world',   /* /articles/FE/hello-world.html */
        'hello-VuePress'
      ],
      '/articles/BE/': [
        '',
        'FE-file-upload',
        'hello-world',
        'hello-VuePress'
      ],
      '/articles/APP/': [
        '',
        'FE-file-upload',
        'hello-world',
        'hello-VuePress'
      ],
      '/articles/NativeJs/': [
        '',
        'FE-file-upload',
        'hello-world',
        'hello-VuePress'
      ],
      // fallback
      '/articles/': [
        '',        /* /articles/ */
      ]
    },
    sidebarDepth: 2,
    repo: 'JohnieXu/xx-blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'gh-pages',
    editLinks: true,
    editLinkText: '发现错误?'
  }
}
