---
title: Ract和Dva的一些核心概念
---

## React

### 环境搭建

1. Node.js
2. 创建项目
    ```bash
    npx create-react-app react-demo
    cd react-demo
    npm start
    ```

### JSX语法
> jsx是js + XML，本质还是js，可通过js动态创建HTML标签和react组件

```jsx
// jsx写法
const title = 'Hello World'
<h1 className="title" onClick={() => {
    console.log(title)
}}>{title}</title>
```
```html
// html写法
<h1 class="title" onclick="console.log(title)">Hello World</h1>
```

### 组件

用函数定义组件
```jsx
const ComponentA = () => {
    return (
        <div>ComponentA</div>
    )
}
```

用class定义组件
```jsx
class ComponentB extends React.Component {
    render() {
        return (
            <div>ComponentB</div>
        )
    }
}
```

#### 组件规范

```jsx
// 引入外组件/资源
import { Button } from 'antd'
import styles from '../style.less'

// 定义并导出组件
export default class List extends React.Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.state = {
            title: 'Hello World'
        }
    }
    // 实现render方法
    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}
```

### state

在一个组件内部定义的数据，可通过模板语法关联到jsx上，作用域是本组件

```jsx
class ComponentC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'ComponentC'
        }
    }
    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}
```

### props

jsx中使用组件的时候通过属性传递给组件的数据，挂载在本组件的this.props上，直接在本组件的render的jsx中使用即可

```jsx
class ComponentD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'ComponentD'
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.props.title}</div>
            </div>
        )
    }
}

class ComponentE extends React.Component {
    render() {
        return (
            <div>
                <div>ComponentE</div>
                <ComponentD title="props from ComponentE"></ComponentD>
            </div>
        )
    }
}
```

### 生命周期

1. componentDidMount

    组件挂载时候执行，常用于调用api接口获取数据
    ```jsx
    class ComponentF extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
        }
        async componentDidMount() {
            let data = await this.fetchData() // 调用接口获取数据
            this.setState({
                data
            })
        }
    }
    ```
2. componentWillUnmount

    组件卸载时执行，常用于清除componentDidMount时候创建的定时器
3. componentDidUpdate

    组件在更新时候执行，组件初次挂载不执行，可用于比较两次更新组件props的userID是否相同来决定是否重新调用接口

    ```jsx
    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            let data = this.fetchData(this.props.userID)// 根据userID获取用户信息
            this.setState({
                data
            })
        }
    }
    ```

### ContextAPI

[demo](https://codesandbox.io/s/q8l190v45j?fontsize=14)

## Dva

### 搭建dva项目

```bash
npm install dva-cli -g
dva new dva-demo
cd dva-demo
npm start
```

### 数据(状态)管理

#### model

包含数据state 异步方法effects 同步方法reducers 监听数据源subscriptions

1. state：redux中的state，是组件/页面上数据(props)的来源

2. effects：调用service中的api接口操作服务器数据，然后根据接口返回值调用对应的reducers来更新state，实现页面数据的响应式更新

3. reducers：同步更新state的数据方法

#### 使用model

定义好model之后需要讲model中的state和effects等关联至页面组件，页面组件可通过派发相应的action来调用model中的业务逻辑

1. 将model关联到页面

    使用`connect`包装页面组件，被包装的组件的props讲携带相应model的state，dispatch也将被挂载在组件的props上

    ```javascript
    import { connect } from 'dva'
    mapStateToProps = ({ list }) => ({ list }) // 定义meodel的state到组件props的映射
    connect：connect(mapStateToProps)(Component)
    ```
2. 使用model中的数据

    ```jsx
    render() {
        const { list } = this.props
        return <List data={list} />
    }
    ```
3. 派发action调用接口/更新state

    通过dispatch函数来派发一个ation，action其实就是一个对象，结构为：`{ type: 'namespace/name', payload: payload }`；action的type是model的namepsace+名称；payload是action需要携带的参数（可选）

    ```jsx
    render() {
        const { dispatch } = this.props
        return (
            <div>
                <Button type="primary" onClick={() => {
                    dispatch({
                        type: 'list/delete',
                        payload: {
                            id: '123456'
                        }
                    })
                }}>删除</Button>
            </div>
        )
    }
    ```

### 路由管理

#### 注册路由

```jsx
import { Router, Route } from 'dva/router';
app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
    <Route path="/list" component={List} />
  </Router>
);
```

#### 页面内部路由跳转

页面

```jsx
render() {
    const { dispatch } = this.props
    return (
        <div>
            <Button type="primary" onClick={() => {
                dispatch({
                    type: 'app/goPage',
                    payload: {
                        pathname: '/detail',
                        search: {
                            id: '123456'
                        }
                    }
                })
            }}>查看详情</Button>
            <Button type="primary" onClick={() => {
                dispatch({
                    type: 'app/goPage',
                    payload: {
                        pathname: '/edit',
                        search: {
                            id: '123456'
                        },
                        type: 'replace'
                    }
                })
            }}>编辑</Button>
        </div>
    )
}
```

model

```javascript
import { routerRedux } from "dva/router"

effects: {
    *goPage({ payload }, { put, select }) {
        // 路由跳转，包含普通push, 重定向replace，返回goBack, 由type控制

        const { pathname, search, type = "push" } = payload

        if (type === "back") {
            window.history.back();
        } else {
            yield put(
                routerRedux[type]({
                    pathname,
                    search:
                    typeof search === "object" &&
                    encodeURI(queryString.stringify(search))
                })
            )
        }
    }
}
```

### 订阅(监听)

路由地址改变将会派发相应的action，以下为实现全局路由切换时进行登陆状态的判断

```javascript
subscription: {
    setupHistory({ history, dispatch }) {
      history.listen(location => {
        // 检测登录状态
        dispatch({ type: "isLogin", payload: { location } })
      })
    }
},
effects: {
    *isLogin({ payload }, { call, put }) {
        // 根据localStorage的token判断是否登陆
        // 若未登陆或登陆过期可派发action路由导航至登录页面
    }
}
```