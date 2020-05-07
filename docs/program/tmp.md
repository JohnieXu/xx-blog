---
title: 对于 typescript 中 target 与 lib 配置项的理解
---

## target 配置

指定编译后 js 代码所采用的规范，如：用 es5、es6 等

## lib 配置

指定当前代码中可以用到的 es6+ 等规范中的新语法特性，当业务代码中使用了 lib 中未指定的语法特性时将报编译错误，像 Symbol 等特性对浏览器平台的兼容性处理需要引入 core-js 等第三方库来 polyfill。

### 例子

```json
{
  "compileOptions": {
    "target": "es5",
    "lib": ["dom","es2017"]
  }
}
```

此时，业务代码中使用  DOM 接口、es2017 所包含的新特性时，ts 将编译通过；相反的如果，若使用了 es2018 之后的新特性，ts 将编译报错。

```ts
// TODO: 例子代码
```
