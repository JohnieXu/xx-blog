---
title: Yarn 的 Plug'n'Play 特性
created: 2020/05/03
updated: 2020/05/03
categories:
  - 工具笔记
  - 前端工具
tags:
  - yarn
  - 前端工具
---

## 前言

今天在看 `ts-loader` 的功能特性时看到其支持 [Yarn Plug'n'Play](https://github.com/TypeStrong/ts-loader#yarn-plugnplay)。 于是花了一些时间了解了一下它的工作原理以及解决的问题并整理除了本篇文章。

## 现状与痛点

Yarn 团队开发 PnP 特性最直接的原因就是现有的依赖管理方式效率太低。引用依赖时慢，安装依赖时也慢。

先说说 Node 在处理依赖引用时的逻辑，这个流程会有如下两种情况：

- 如果我们传给 require() 调用的参数是一个核心模块（例如 “fs”、”path”等）或者是一个本地相对路径（例如 `./module-a.js` 或 `/my-li/module-b.js`），那么 Node 会直接使用对应的文件。
- 如果不是前面描述的情况，那么 Node 会开始寻找一个名为 node_modules 的目录：
首先 Node 会在当前目录寻找 node_modules，如果没有则到父目录查找，以此类推直到系统根目录。
找到 node_modules 目录之后，再在该目录中寻找名为 moduleName.js 的文件或是名为 moduleName 的子目录。
此处旨在说明问题，对 Node 内部模块解析逻辑做了简化描述

可见 Node 在解析依赖时需要进行大量的文件 I/O 操作，效率并不高。

再来看看安装依赖时发生了什么，现阶段 yarn install 操作会执行以下 4 个步骤：

1. 将依赖包的版本区间解析为某个具体的版本号
2. 下载对应版本依赖的 tar 包到本地离线镜像
3. 将依赖从离线镜像解压到本地缓存
4. 将依赖从缓存拷贝到当前目录的 node_modules 目录

其中第 4 步同样涉及大量的文件 I/O，导致安装依赖时效率不高（尤其是在 CI 环境，每次都需要安装全部依赖）。

Facebook 的工程师受够了这些问题决定寻找一个能彻底解决问题同时还可以与现有生态兼容的解决方案。这便是 Plug’n’Play 特性，简称 PnP。它已在 Facebook 内部测试了一段时间，现在 Yarn 团队决定与社区分享并共同优化该方案。

## 实现方案

PnP 的具体工作原理是，作为把依赖从缓存拷贝到 node_modules 的替代方案，Yarn 会维护一张静态映射表，该表中包含了以下信息：

当前依赖树中包含了哪些依赖包的哪些版本
这些依赖包是如何互相关联的
这些依赖包在文件系统中的具体位置
这个映射表在 Yarn 的 PnP 实现中对应项目目录中的 .pnp.js 文件。

这个 .pnp.js 文件是如何生成，Yarn 又是如何利用它的呢？

在安装依赖时，在第 3 步完成之后，Yarn 并不会拷贝依赖到 node_modules 目录，而是会在 .pnp.js 中记录下该依赖在缓存中的具体位置。这样就避免了大量的 I/O 操作同时项目目录也不会有 node_modules 目录生成。

同时 .pnp.js 还包含了一个特殊的 resolver，Yarn 会利用这个特殊的 resolver 来处理 require() 请求，该 resolver 会根据 .pnp.js 文件中包含的静态映射表直接确定依赖在文件系统中的具体位置，从而避免了现有实现在处理依赖引用时的 I/O 操作。

## 带来了哪些好处

从 PnP 的实现方案可以看出，同一个系统上不同项目引用的相同依赖的相同版本实际都是指向的缓存中的同一个目录。这带来了几个最直观的好处：

安装依赖的速度得到了空前的提升
CI 环境中多个 CI 实例可以共享同一份缓存
同一个系统中的多个项目不再需要占用多份磁盘空间

如何开始使用 Plug’n’Play 特性？
首先你需要 Yarn 1.12+ 版本。然后根据你的具体场景可以选择：

使用 `create-react-app` 创建项目时开启 PnP
`create-react-app` 已经集成了对 PnP 的支持。只需在创建项目时添加 `--use-pnp` 参数即可。

`npx create-react-app testapp --use-pnp `
在已有项目中开启 PnP
只需在项目中执行:

`yarn --pnp`
即可开启 PnP 特性。

## 注意事项

pkg.installConfig 字段
在项目中开启 PnP 特性后，Yarn 会在 package.json 文件中创建一个 `installConfig` 字段：

```json
{
  "installConfig": {
    "pnp": true
  }
}
```

只要 installConfig.pnp 的值是一个真值且当前版本的 Yarn 支持，PnP 特性就会被启用。

执行 `npm script` 或是运行 .js 文件
由于在开启了 PnP 的项目中不再有 node_modules 目录，所有的依赖引用都必须由 .pnp.js 中的 resolver 处理。因此不论是执行 script 还是用 node 直接执行一个 JS 文件，都必须经由 Yarn 处理。必须通过 `yarn run` 或是 `yarn node` 执行。

## 在项目中调试依赖

在开发过程中我们有时会直接修改 node_modules 目录下的依赖来调试。但在 PnP 模式下，由于依赖都指向了全局缓存，我们不再可以直接修改这些依赖。

针对这种场景，Yarn 提供了 `yarn unplug packageName` 来将某个指定依赖拷贝到项目中的 `.pnp/unplugged` 目录下。之后 .pnp.js 中的 resolver 就会自动加载这个 unplug 的版本。

调试完毕后，再执行 `yarn unplug --clear packageName` 可移除本地 `.pnp/unplugged `中的对应依赖。

## 总结

目前我还并没有看到 PnP 这个一功能被广泛应用，大家可以尝试在本地开发环境中启用 PnP 来感受一下它带来的全新体验。遇到问题可以及时反馈到 [Yarn 的 issue 列表](https://github.com/yarnpkg/yarn/issues) 中。
