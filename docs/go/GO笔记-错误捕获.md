---
title: 【GO学习笔记】错误捕获
date: 2020-3-13
sidebar: auto
categories:
  - GO
tags:
  - 学习笔记
---

## 常规用法

:::tip
采用panic抛出错误使得进程即将结束，defer注册在panic发生时要指定的逻辑，内置recover函数来捕获错误栈顶的错误；recover捕获过的错误后续的逻辑将在defer逻辑执行完成之后恢复执行。
:::

<!-- more -->

用法示例

```go
func main() {
  defer func() {
    fmt.Println("an panic happened")
		if err := recover(); err != nil {
			fmt.Printf("panic error %s catched", err)
		}
  }()
  panicFunc()
}

func panicFunc() {
  panic("error occurred")
}
```

打印结果

```shell
an panic happened
panic error error occurred catched
Process finished with exit code 0
```

:::warning 分析
1. 通过`defer`一个函数，在这个函数内部使用`recover`取出`panic`抛出的错误，并处理了错误
2. 由于使用了`recover`捕获了错误，从而进程未因异常而退出
3. 如果此处不使用`recover`，则会执行完`defer`中的逻辑然后进行退出
:::

## 封装try...catch

```go
func main() {
  Try(func() {
    panicFunc()
  }, func(e interface{}) {
		fmt.Printf("%s catched in try...catch", e)
	})
}

func panicFunc() {
  panic("error occurred")
}

func Try(fn func(), handler func(e interface{})) {
	defer func() {
		if err := recover(); err != nil {
			handler(err)
		}
	}()
	fn()
}
```

打印结果

```shell
error occurred catched in try...catch
Process finished with exit code 0
```

:::warning 分析
1. 按照`Node.js`中的错误回调风格封装的`Try`方法接受一个待执行的函数和一个错误处理回调函数作参数
2. `Try`中使用`defer`、`recover`捕获错误并将错误传递到外部错误回调函数中
:::
