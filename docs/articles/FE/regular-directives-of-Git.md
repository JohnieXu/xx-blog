---
next: ./deep-understanding-of-JS-module
---

# Git常用命令整理

## 配置命令

### 配置用户名和邮箱

```bash
git config --global user.name "JohnieXu" // 配置全局用户名为JohnieXu
git config --global user.email "281910378@qq.com" // 配置全局邮箱为281910378@qq.com
```

### 查看配置

```bash
git config -l // 查看git全局配置信息
or
git config --list
```

## 常用命令

### 初始化项目

```
git init
```

### 克隆项目

`git clone`


```bash
git clone https://github.com/JohnieXu/eleme-web-vue.git
or
git clone git@git.github.com:JohnieXu/eleme-web-vue.git
```

### 查看项目信息

- 综合信息

```bash
git status // 查看当前项目的所有综合信息
```

- commit提交信息

```bash
git log --graph --pretty=oneline --abbrev-commit // 以图形的形式显示commit的提交记录
```

### 推送更新

`git add .` => `git commit` => `git push`


```bash
git add . // 添加所有修改修改过的文件,仅添加**当前目录下**的所有修改过的文件,主要运行git命令的路径
git commit -m 'fix a bug' // 将修改提交到(本地项目的)暂存区, 提交的描述内容为"fix a bug"
git push -u origin master // 推送当前分支下已提交的更新到origin仓库的master分支下,同时设置当前提交的origin和master为默认设置
```

### 管理修改

- 已修改文件未添加到暂存区

```bash
git checkout -- . // 撤销当前所有文件做的修改
```

`-- file`: file为需要撤销修改的文件路径

- 已修改文件并已添加到暂存区

```bash
// 撤销全部文件
git reset HEAD // 撤回暂存区的所有文件到工作区(没有撤销对文件的修改)
git checkout -- . // 撤销所有文件的修改
```

```bash
// 撤销指定文件
git reset HEAD readme.txt // 将暂存区的readme.txt文件撤回工作区
git checkout -- readme.txt // 撤销readme.txt文件的修改
```

- 已提交commit未push到远程仓库

```bash
git reflog // 查看最近的commit列表
git reset --hard commit_id // 退回到commit_id对应的commit版本
```

`commit_id:`需要退回的版本的commit的ID(hash值)

### 分支管理

- 查看分支

```bash
git branch // 查看所有分支, *对应当前分支
git remote -v // 查看关联的远程分支详情
```

- 创建分支

```bash
git branch dev // 创建dev分支
```

- 切换分支

```bash
git checkout dev // 切换到dev分支
or
git checkout -b dev // 创建并切换到dev分支
```

- 合并分支

```bash
git checkout master // 切换到master分支
git merge dev // 将dev分支合并到master分支
or
git merge --no-ff -m "merge with no-ff" dev // 非fast-forward模式合并dev分支到master分支
```

`--no-ff`: 合并方式为禁用`Fast-forward`, 即合并的时候会另外提交一个commit记录

`-m`: 本次合并commit的描述内容

- 推送分支

```bash
git push origin master // 将master分支推送到远程的origin关联的仓库上
or
git push -u origin master // 将master分支推送到远程的origin关联的仓库上, 设置默认推送master至origin
```

`-u`: 第一次推送时候加上`-u`的话, 将第一次的推送源和分支保存为默认设置, 下次`git push`就相当于`git push origin master`


- 删除分支

```bash
git branch -d dev // 删除dev分支(dev已经被合并)
git branch -D dev // 强制删除dev分支(dev分支未被合并)

```

- Bug分支

**应用场景**: 当前正在自己的分支-dev-xu上进行新功能开发, master分支发现Bug需要立即修复。

```bash{1,7}
git stash // 将当前的工作区储存起来, git status查看工作区是干净的
git checkout master // 切换到master分支
git checkout -b bug-101 // 从master分支创建新的对应的bug-101分支
git add . && git commit -m 'fix bug 101' // 修复bug并提交修改
git checkout master && git merge --no-ff -m 'merged bug fix 101' bug-101 // 将bug-101分支的修改合并到主分支
git branch -d bug-101 // 删除bug-101分支
git stash pop // 恢复之前工作区以便继续新功能的开发, 同时删除stash记录(git stash list看不到stash的任何内容) <==> git stash apply && git stash drop
```

- 分支策略

`master分支`: 最稳定的分支，仅用来发布新版本，平时对代码做的修改不能直接网上push

`dev分支`: 是不稳定的, 一般在新版本发布的时候把dev分支合并到master上，在master分支发布新版本

`个人分支`: 每个人都有自己的分支，提交代码的时候往dev分支上合并

![分治策略](~@imgs/8516b453-0a01-40f7-ac76-49c1a01dabca.png)

### 标签管理

- 创建标签

**适应场景**: 对当前最新的提交commit打标签

```bash{2}
git checkout master // 切换到需要打标签的分支
git tag v1.0 // 打一个名为v1.0的标签
git tag // 查看已打标签列表
```

**适应场景**: 对当历史提交的commit打标签

```bash{2}
git log --pretty=oneline --abbrev-commit // 以简洁的形式列出所有commit记录
git tag v0.9 commit_id // 对commit_id对应的这次commit打一个名为v0.9的标签
git tag // 查看标签记录
```

带有说明的标签

```bash
$ git tag -a v0.1 -m "version 0.1 released" commit_id // 创建带有说明的标签
```

- 查看标签

```bash
git show v0.9 // 查看v0.9这一个标签的详情
```

`-a`: 指定标签名

`-m`: 指定说明文字

- 推送标签

```bash
git push origin v1.0 // 推送v1.0这一个标签到origin关联的远程仓库
git push origin --tags // 一次性推送所有标签到origin关联的远程仓库
```

- 删除标签

**适用场景**: 要删除的标签仅创建在本地未推送到远程仓库

```bash
git tag -d v0.9 // 删除v0.9这一个标签(仅本地删除该标签)
```

**适用场景**: 要删除的标签已经推送到远程仓库, 并且也要删除远程仓库上相应的标签

```bash{2}
git tag -d v0.9 // 本地删除v0.9这一个标签
git push origin :refs/tags/v0.9 // 删除origin关联的远程仓库的v0.9这一标签(删除也用push), 这是github删除远程仓库标签, coding等其他的远程仓库未测试
```

## 进阶命令

### 多个远程仓库管理

**适用场景**: 当前本地的git项目是clone自`https://github.com/JohnieXu/eleme-web-vue.git`, 同时这个项目又需要同步关联coding上的另一个远程仓库`https://git.coding.net/JohnieXu/eleme-web-vue.git`, 要求每次`push`代码同步`push`到两个远程仓库。

```bash{3-5}
git remote add origin https://github.com/JohnieXu/eleme-web-vue.git
git remote add coding https://git.coding.net/JohnieXu/eleme-web-vue.git
git remote add all https://github.com/JohnieXu/eleme-web-vue.git // 将all关联到github上的远程仓库
git remote set-url --add --push all https://github.com/JohnieXu/eleme-web-vue.git // 在all上追加push对应的远程仓库地址为github的地址
git remote set-url --add --push all https://git.coding.net/JohnieXu/eleme-web-vue.git // 在all上追加push对应的远程仓库地址为github的地址
git add . && git commit -m 'init' && git push -u all master // all分支同时关联了origin和coding两个远程仓库, 推送all即可同步push代码到两个远程仓库
```

### 暂存修改

**适用场景**: 当前`git`项目有`master`,`dev`两个分支, 无意中在本地`pull`的`master`分支上做了**有用的**代码修改, 临时需要处理`master`分支上的一个`bug`; 同时, 由于之前在`master`分支上的修改正常应该放在`dev`分支上, 需要在处理完`bug`后将`master`分支上的修改放到`dev`分支上。

```bash{5-6}
git stash // 暂存master分支上的修改(效果和git checkout -- .相似, 但是对代码的修改并未删除)
git checkout -b bug // 根据master分支创建新的临时bug分支
git add . && git commit -m 'commit' // 修复bug并commit修改
git checkout master && git merge bug && git branch -d bug // 合并bug分支到master分支, 删除bug分支
git checkout dev // 切换到dev分支, 此分支为之前对master分支的修改正常所在分支
git stash pop // 将之前暂存的修改放到dev分支, 此时处于处于modified状态, 需要git add . && git commit
...
```

**补充说明:**

- `git stash list`: 查看所有的暂存信息
- `git stash apply stash@{0}`: 恢复`stash@{0}`这个暂存, 也可用`git stash apply`即默认恢复第一个暂存, 此命令并未删除`stash`记录, 需用`git stash drop`删除暂存记录
- `git stash pop`: 恢复到第一个暂存并删除这条暂存记录

### 撤回已移除文件

**适用场景**: 在多人协作开发时， 他人误将之前未完善的文件删除了， 同时（在自己提交代码之前）推送到了远程仓库， 而自己想找回被删掉的文件； 或者只想找回自己之前删掉的文件。

```bash{2}
git log --diff-filter=D --summary // 查找删除文件的记录， 获取对应的commitID及要恢复的文件路径filepath
git checkout $commitID~1 filepath // 恢复filepath这个文件， 原理： 撤回filepath这个文件到上次(～1)提交的commit状态
```

### 更新fork的项目

**适用场景**: 在github上fork了一份他人的项目， 后来他人的项目更新了， 自己fork的这一份也想更新。

```bash{3,5}
git remote -v // 查看相当本地项目(fork的项目)分支详情
git remtoe add upstream https://github.com/JohnieXu/eleme-web-vue.git // 创建远程仓库源upstream并关联到原始仓库
git fetch upstream // 拉取原始仓库
git checkout master // 切换到本地项目需要更新的分支
git merge upstream/master // 将原始仓库更新合并到本地需要更新仓库
git push origin master // 推送更新到本地仓库关联的远程仓库(自己github上fork的仓库)
```

