# 迪诺笔记——JohnieXu's Blog

> 我的个人博客，项目地址：https://blog.lessing.online/ （备用地址：https://www.lessing.online/xx-blog/ 这是github的pages服务）

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/00831rSTly1gcgunux3fyj31gd0u0aek.jpg" width="600" />
</p>

## 开发部署

### install

```bash
npm i || yarn
```

### publish

- publish to github

采用gh-pages推送到github pages

```bash
npm run deploy:build || yarn deploy:build
```

- publish to coding

1. step1

    更新代码， 提交到github、coding的master分支， 然后**打包静态资源**

    ```bash
    git add .
    git commit -m update
    git push coding master
    npm run docs:build
    ```

2. step2

    关联远程的coding项目仓库（可选）

    ```bash
    git remote add coding git@git.coding.net:JohnieXu/xx-blog.git
    git checkout coding-pages || git checkout -b coding-pages coding/coding-pages
    ```

3. step3

    将上面打包的静态资源**拷贝到项目外的文件夹下临时存储**， 切换到coding-pages分支， 然后用step1中build产生dist目录下的所有文件覆盖coding-pages分支下项目根目录下的文件

    > coding-pages分支为coding的静态文件服务，此分支放置打包后的静态资源文件

    然后push更新

    ```bash
    git add .
    git commit -m udpate
    git push coding coding-pages
    ```

## 推荐关注
你可以在这里位置关注到我

<a href="https://juejin.im/user/59eb44426fb9a045000230b8" >
  <img src="https://tva1.sinaimg.cn/large/00831rSTly1gcguelpq3xj3062032t8j.jpg"  width="220px" height="110px" /> 
</a>

<a href="https://segmentfault.com/u/johniexu" class="item" >
  <img src="https://tva1.sinaimg.cn/large/00831rSTly1gcgufm82a6j309q09qjr8.jpg" width="150px" height="150px" />
</a>

<a href="https://mp.weixin.qq.com/s/weo4Kvs8L4aLVM8fWqo5jQ" class="item" >
  <img src="https://tva1.sinaimg.cn/large/00831rSTgy1gcgutpiwiaj30sq0783yo.jpg" width="150px" height="150px" />
</a>


## 版权声明

所有原创文章（除翻译文章外的所有文章）的著作权属于 **JohnieXu**

转载注意事项：

你可以在非商业的前提下免费转载，但同时你必须：

- 明确署名，即至少注明 作者：JohnieXu 字样以及文章的原始链接。

如需商业合作，请直接联系作者。