## 封装通用组件

### 主要思想

封装组件的思想主要是将前端页面/业务逻辑等按模块方式进行抽离，复杂的页面布局/逻辑等放入独立写的模块内部，使用详情组件只需要传入组件定义的数据/方法/chidlren等就可以完成相应功能开发。

封装组件主要分三类：

1. 普通展示型组件(函数式组件)
2. 纯逻型组件(容器组件)
3. 通用业务组件(以基础组件/第三方组件为基础+一定的业务逻辑)

### 封装普通展示型组件

通过函数式组件实现，比较轻量，不带组件的生命周期，不带内部state，后期也可以通过React Hooks添加内部状态数据的控制

### 封装纯逻型组件

通过组件的生命周期(通常是componentDidMount)来做权限判断；或是类似connect高阶函数(高阶组件)的形式，给传入的组件加上一些附加属性或逻辑操作或props

### 封装通用业务组件

上面两种组件的综合封装，组件本身可独立完成一个通用的业务逻辑

### 一个通用业务组件封装示例

![产品卡片](https://ws1.sinaimg.cn/large/006tNc79gy1g2g59j5w30j30z40fw7m8.jpg)