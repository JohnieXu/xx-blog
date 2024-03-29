---
title: frontend-interview
created: 2019/07/06
updated: 2019/07/06
tag:
  - 未分类
---

## less

> 是一个css预处理语言，和sass类似，支持函数/变量/模块，不同于poastcss（其不是一个预处理语言，通过各种插件来支持less/sass和autoprefixer等）

**变量**

以`@`开头，类似js中的变量，可以用作css值或者属性

```less
// 值
@link-color:    #428bca;
@link-color-hover:  darken(@link-color, 10%);

// css属性
@my-selector: banner;
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

**混合Mixins**

避免重复写一样的css代码，`()`中可以携带参数，支持参数默认值

```less
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
```

编译结果：

```css
.a, #b {
  color: red;
}
.mixin-class {
  color: red;
}
.mixin-id {
  color: red;
}
```

```less
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
.class2 {
  .mixin(#efca44; @padding: 40px);
}
```

编译结果：

```css
.class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
}
.class2 {
  color: #efca44;
  margin: 10px;
  padding: 40px;
}
```

**常用函数**

1.图片转换data-uri
    
    转base64
    data-uri('image/jpeg;base64', '../data/image.jpg');
    编译结果：
    url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');
    
    转xml+svg
    data-uri('image/svg+xml;charset=UTF-8', 'image.svg');
    编译结果：
    url("data:image/svg+xml;charset=UTF-8,%3Csvg%3E%3Ccircle%20r%3D%229%22%2F%3E%3C%2Fsvg%3E");

2.颜色定义函数
    
    rgb rgba hsl等，同css
    
3.颜色操作函数

    颜色变浅 lighten
    lighten(hsl(90, 80%, 50%), 20%)
    编译结果：
    #b3f075 // hsl(90, 80%, 70%)

    颜色变深 darken
    darken(hsl(90, 80%, 50%), 20%)
    编译结果：
    #4d8a0f // hsl(90, 80%, 30%)



## webpack

**webpack是什么**

用来打包js/css/其他静态资源的模块打包器，可以做代码压缩/文件压缩/分模块动态加载

**为什么要用webpack**

webpack能确保各个模块之间依赖关系正常，提供懒加载支持，减少多个script标签导致的网络请求过多问题，通过hash来控制打包文件的版本

**项目中怎么使用webpack**

通过在项目中加入.webpack.config.js的配置文件，配置文件的制定入口和出口文件，moduels制定要用来编译特定文件的loader，用html-webpack-plugin讲抽离的样式文件挂在index.html的script上

**什么是loader，常用loader有哪些**

**什么是webpack插件，常用插件有哪些**

**百度的fis3是什么**

## jQuery

**什么是jQuery**

jQuery是一个javascript库（不能算是框架），对浏览器DOM的操作，事件处理，动画和ajax交互进行了封装，其最大的特色是jQuery返回的是其封装好的对象`支持链式调用`。

**和现代MVVM等框架有何区别**

jQuery是`命令式调用`，需要绑定事件/修改属性/更改文档内容时，需要直接找到对应的DOM，然后做相应操作；而MVVM等框架是`声明式`的，通过声明数据与视图的双向绑定，通过`数据来驱动`视图更新，视图中的操作又可以反过来修改数据以使得相应操作反应在视图中。

## react

**什么是react，有哪些特点**

一个MVVM响应式的框架，基于组件的数据驱动；react本身只是一个UI框架，遵从`UI = fn(data)`，即视图层与数据层的映射。

**react和vue的区别**

- react v16+ / vue 2+都采用的虚拟DOM，都是基于组件，基于数据驱动；

- vue的MVVM基于es6的`Object.defineProperty`方法，通过setter和getter观测属性的更改，对于引用数据类型需要确保数据的引用一致；react的数据是imuutable的，每次更新数据返回的都是新的对象，通过diff算法比较更新。

**组件之间通信**

- 父=>子

    props传参
    
- 子=>父

    父组件将方法当参数传递给子组件，子组件调用该方法，参数为需要传递给父组件的数据，父组件定义的方法中需要接收并处理方法的参数
    
> 注意：父组件传给子组件的props不能直接修改，也没必要将其存在子组件的state上（不同于vue中计算属性的显式地声明组件本身数据与接收参数的依赖关系），可以直接在render方法中使用

- 跨级传递

    可拆分成 父=>子 x N，也可以将数据提升到跨级的多个组件的公共父组件，采用父子组件通信方法即可，具体可采用context来实现状态提升（此方法更好，数据流向更清晰）

> redux出现的主要原因之一就是解决这里跨级组件通信和数据共享的问题的
    

**组件生命周期**

- 创建时

组件初次挂载时执行
    
```
graph TB
Constructor-->getDerivedStateFromProps
getDerivedStateFromProps-->render
render-->componentDidMount
```
    
- 更新时

setState props更新 forceUpdate()会导致组件更新

```
graph TB
getDerivedStateFromProps-->shouldComponentUpdate
shouldComponentUpdate-->render
render-->getSnapShotBeforeUpdate
getSnapShotBeforeUpdate-->componentDidUpdate
```

- 卸载时

组件销毁时执行

```
graph TB
componentWillUnmount
```

**什么是高阶组件HOC**

高阶函数：接收一个函数作为参数，并且其返回值是一个函数

高阶组件和高阶函数类似，接收一个组件（纯函数组件/类组件）作为参数，返回一个新的组件

典型例子：react-redux里的`connect`，react-router里的`withRouter`

**如何封装组件**

- 确定组件的功能：是纯展示型组件还是有状态组件
- 确定组件的数据结构和参数类型
- 实现组件的生命周期钩子和render返回的视图输出

## react-router

用前端的路由匹配对应的组件，路由地址改变，相应的组件会挂载/更新/卸载，然后相应组件的生命周期钩子会执行，动画和网络请求会执行，视图会更新。

**路由模式有哪些**

- BrowserRouter

    基于现代浏览器支持的`history.pushState`方法，适用于新版本浏览器

- HashRouter

    基于浏览器的`hash`来实现，可兼容低版本浏览器

- StaticRouter

    用于在服务器端模拟浏览器环境的下的路由history；由于在服务器环境下不存在真实的浏览器环境，也就没有路由对象，无法直接通过history操作路由，这是在内存中模拟的浏览器环境的路由；主要用于服务端渲染

**如何实现路由的嵌套**


- V4版本

    路由组件`Route`和React本身的组件一样，需要可以通过组件嵌套方式实现任意复杂的路由嵌套，嵌套的路由组件只有在其配置的路径`path`匹配成功才挂载
    
- V4版本之前

    TODO

**Switch组件有什么作用**

Switch是一个容器组件，本身不渲染任何DOM，保证其props.children中的`Route`组件最多只能匹配上一个；结合`Route`不传递path参数，可以实实现自定义`404`等页面

**实现路由跳转的几种方法**


- `Link`组件
    
    ```jsx
    <Link to="/login" />
    ```

- 原生`a`标签

    ```jsx
    <a href="#/login"/>
    ```

- `history`提供的路由操作方法

    ```jsx
    <Button onClick={() => {
        this.props.history.push('/login')
        // this.props.history.replace('/login')
    }}>登陆</Button>
    ```
    
> 自行封装的组件若不是直接挂载在`Route`组件的`component`/`render`属性上时，改组件的`props`可能无`history`属性，可通过组件之间传参来传递`history`属性，也可通过`react-router`提供的`withRouter`方法将`history`对象注入到组件中

**路由之间怎么传参**


- query

    路由跳转时候`path`以?的形式追加需要传递的参数，对应的参数在`query`上，需要用`query-string`库/浏览原生的`URLSearchParams`进行解析

- params

    对应的路由路径用路由参数的写法：`/list/:id`，这样`params.id`可获取到路由中传递的id属性
    
- state

    通过`history`的方法更改路由时传递`state`参数，可以传递大量的数据，对应的接收数据在`state`属性上

**怎么控制路由权限**

history.listen监听路由更改，进行权限判断，然后控制路由的重定向到对应页面；常见权限判断有是否登陆/登陆过期/用户操作权限等

## redux react-redux

**redux是什么**


- 基于Flux架构思想的一个状态管理库，redux像一个`容器+管道`本身只关心数据和数据的流向，不关心对于数据数据的来源（本地数据或网络请求获取数据）等，因此redux可以集成到其他的UI框架中，不限于react（例如：Angular）

> 注意：Vue的数据不是immutable的不适用redux


- 单一数据中心，数据都是immutable的（每次更改得到的都是一个新的state），数据只能通过同步的纯函数reducer更改


- 在react中将整个APP的数据抽离到顶层的容器组件（redux的state）中存储，以此来解决react组件的通信问题，提供数据历史回滚/用插件统一处理数据等功能

**react-redux是什么**

由于redux本身只是管理数据的一个数据中心，不关心视图层面如何更新，react-redux将redux数据管理的思想和react响应式进行绑定，确定redux数据更改可以触发react的响应式机制来更新视图。

**connect函数做什么用的，两个参数有什么作用**

```
connect(mapStateToProps, mapDispatchToProps)(CustomeComponent)
```

- react-redux提供的一个方法，用于将redux中的数据绑定到react的组件上（**该绑定是单向绑定到组件的props上**），给组件注入`dispatch`方法（用于UI层调用以触发action来更新redux中的数据）


- 两个参数分别叫做：mapStateToProps，mapDispatchToProps（名字要记住），两个参数都是传递一个返回对象的函数

    - mapStateToProps
    
        结构类似这样：
        state => { list: state.list }
        
        从整个redux的state中取出部分数据关联到组件上，默认不传该参数会把整个state绑定到组件，影响性能。
 
    - mapDispatchToProps
        结构类似这样：dispatch => { ... }
        
        将react-redux中的dispatch方法包装成新的方法，然后传递到组件的props上，组件中适用的时候不再需要单独调用dispatch，直接用这里的方法即可

## dva

**什么是dva，为什么用dva**

- dva是集成了redux+react-redux+react-router+redux-saga的一个库，dva已经帮你把路由/redux数据/redux异步逻辑处理等难点统一封装好，抽象出了model的概念。

- 解决的问题：

    - 不用再需要直接繁琐的配置state/reducers/actions
    - state的module可以直接使用model，便于进行数据逻辑复用以及模块化
    - subscriptions更方便的解决路由/键盘事件的订阅等问题
    - 已经配置好redux-saga，可以直接通过es7的generator来更方便的处理异步逻辑
    - 提供灵活的插件机制（类似redux的插件，如：dva-logger开发环境下actions调用日志记录，dva-loading可以便捷的处理loading效果）
    
## 项目相关部分

### 元数科技

1. 组织管理/组织成员管理/应用管理/成员组织聊天等应用

**主要技术和实现功能：**

- react+react-router+antd-mobile实现页面逻辑和交互
- 采用antd-mobile移动端UI库的懒加载功能实现了聊天应用的聊天历史记录的懒加载功能
- 通过react-router监听路由用户的组织以及个人身份的判断

2. 党建系统-党员思想汇报应用

**主要技术和实现功能：**

- react+react-router+antd
- 使用react-quill富文本编辑器实现党员思想汇报的编辑功能，其中实现了图片和视频上传到CDN在编辑器中用外链预览的功能
- 根据党建各个应用的风格（左侧菜单栏-中部列表-右侧drawer弹窗），根据路由封装了drawer弹窗公共组件，通过简单的API推送路由即可实现drawer切换

**富文本编辑器**

采用的是[react-quill](https://github.com/zenoamaro/react-quill)，其基本编辑功能通过其基本用法进行配置即可，在党员思想汇报应用当中做到了图片上传到CDN，并非采用该编辑器本身提供的图片转为base64编码存到数据库的方案。

具体实现是通过[react-quill](https://github.com/zenoamaro/react-quill)提供的handlers来监听其图片模块的点击事件以此触发自定义的原生`<input type="file"></input>`表单元素以选择文件并以`multipart/form-data`的形式上传文件到服务器，可查看[demo](https://codesandbox.io/s/y204ykm90x)。另外视频的自定义上传到CDN原理与此相同。

**聊天记录懒加载&loading效果**

在群组/个人聊天界面，默认只加载最近的50条记录，当窗口向上滚动触及顶部的时候继续想服务器请求历史聊天记录数据。在搜索联系人/组织的结果一列表展示的页面处理搜索的loading提示效果，同样也处理了异步懒加载数据。

loading效果具体实现：在开始发送请求时候切换state上的变量的状态为`请求中`


### 科技实嘉

1. IOT后台管理系统

主要技术和实现功能：
- react+dva+echarts
- 首页数据统计分析展示
- 平台用户管理功能
- 设备保养维修功能，结合APP进行保养维修任务推送以及处理

2. IOT移动端混合APP

主要技术和实现功能

- react+dva+Hbuilder，react负责页面呈现，dva管理数据和路由逻辑，Hbuilder提供打包的壳子
- 完成了设备管理，设备保养维修信息插件，用维修保养计划任务，保养维修处理等功能，设备实时采集数据展示

3. 柳州丛谈公众号项目-船舶管理系统

主要技术和实现功能

- react+dva+antd-mobile
- 公众号提供船舶浏览/船舶监管文章情况浏览/船舶登记/查看船舶详情等功能
- 首页船舶明天和轮播图可根据后台系统动态配置
- 长列表采用antd-mobile实现了列表的懒加载，列表搜索栏实现模糊搜索
- 船舶文章后台用react-quill富文本编辑器实现文章编辑，公众号对应的用编辑器提交的数据渲染，配置了自定义主题
- 采用dva-loading实现了应用的全局loading效果


## 一些要点

### 懒加载

#### 为什么要采用懒加载

1. 省流量，用户并未注意到的数据先暂时不加载，等视图切换到时在异步加载
2. 对于图片的懒加载，可以明显提升首屏渲染速度，同时也可明显节省流量
3. 路由懒加载，同样为了省流量和提升首屏渲染速度

#### 实现思路

1. 列表懒加载，采用分页实现。首次只加载第一页太多几条数据，等列表滚动到地步再调用接口获取剩下的部分数据。
2. 图片懒加载，通过浏览器的API判断当图片元素出现在视图当中才将图片路径给到img标点的src，此时图片才开发下载
3. 路由懒加载，使用webpack的代码分割能力，当相应路由匹配上时js为自动在文档中追加一个script标签来下载路由对应组件的代码，然后相应的组件和资源才加载。

### 多主题

#### 达到什么效果

通过一个主题变量即可一键更改应用或者部分组件的主题，例如：APP中的白天模式/夜间模式，网易云音乐的主题皮肤

#### 实现思路

1. 对于类似白天/夜晚模式等主题色/文字/图片的改变，可以通过配置less的变量来实现，需要切换主题时更改相应变量配置即可一键更改
2. 对于布局能有较大改动时，可以通过css的命名空间来实现，例如：

    ```css
    主题1
    .theme1 {
        .button {...}
        .link {...}
    }
    主题2
    .theme2 {
        .button {...}
        .link {...}
    }
    ```

### 聊天应用

#### 消息界面要点

1. 消息根据当前用户身份分组，分别展示不同样式不同位置展示
2. 消息类型为通知/文件/链接/应用通知等分别采用对应样式展示，处理处理其不同点击事件逻辑（打开网页，打开应用，已读/忽略等等）
3. 历史消息的懒加载

#### 联系人页面要点

1. 长列表的懒加载，联系人资料也的异步加载

#### 页面层级处理

1. 分为三级路由：功能菜单=>列表=>聊天/详情页面
2. 三级路由都不做懒加载，为了更好的应用体验
3. 第三级为聊天窗口页/用户详情/群组相应页面，采用默认路由做了类似微信的占位图处理

### React

#### 实现样式作用域为局部

采用css-module，通过`[filename]\_[classname]\_\_[hash]`可直接将的样式问题以类名的形式直接绑定到对应的组件，改绑定的样式只对该组件生效

#### React处理动画

1.路由动画 ReactCSSTransitionGroup。当children发生变化时，通过判定children组件的key。如果key相同，则不发生变化；key不同，则判定其是挂载还是卸载，来添加对应的css类组件通过给children添加配置的class，通过css过渡动画，实现进场和出厂动画。当children发生变化时，通过判定children组件的key。如果key相同，则不发生变化；key不同，则判定其是挂载还是卸载，来添加对应的css类

### Antd组件库

1.布局组件 Layout Header Content Footer Col Column等，可通过高阶组件实现自定义布局

2.表单组件 Form 和常规的Input Select Cascad（级联），Transfer（穿梭框），富文本编辑器结合

3.提示类组件 Message Toast Alert Confirm

4.数据展示类组件 Table Panel Card Table表格组件可以通过render很方便的结合其他组件快速展示列表带有不同操作可筛选排序的列表数据

### 移动端响应式布局

1.完全适配屏幕：可以采用vw或者rem方案，vw是直接以窗口宽度为基本单位开设计页面元素尺寸，rem是通过js查询窗口宽度来设置html的font-size，其他元素都以此值为参照

2.响应式：通过媒体查询，针对不同尺寸屏幕编写对应的样式

### 移动端1px边框处理

1.左/上边框用::before伪元素，右/下边框用::after伪元素，其采用具体对定位，并设置相应的boder为1px，然后根据屏幕的设备像素比DPR，用transfrom: scaleX或scaleY缩放0.3333(DPR=3)或0.5(DPR=2)倍
