---
title: Git常用命令整理
created: 2017/03/01
updated: 2021/12/02
category:
  - 文章专栏
  - 硬核前端
tag:
  - git
  - 前端工具
---

## 一、配置命令

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

<!-- more -->

### 配置公钥

```bash
ssh-keygen -t rsa -C "281910378@qq.com" // 采用rsa加密算法生成git公钥，前提是用户名和邮箱已经设置好且此处邮箱与前面配置邮箱保持一致
```

## 二、常用命令

### 初始化项目

```
git init
```

### 克隆项目


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

### 检查更新

在多人协作开发中，可以通过以下方式在不`commit`、`stash`当前更改的情况下查看远程仓库是否有更新

```bash
git remote update // 拉取远程仓库更新，此操作不影响当前修改
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
git reset --hard commit_id // 退回到commit_id对应的commit版本(不建议添加--hard参数)
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
git checkout dev-xu // 切回之前自己在开发的分支
git stash pop // 恢复之前工作区以便继续新功能的开发, 同时删除stash记录(git stash list看不到stash的任何内容) <==> git stash apply && git stash drop
```

- 分支策略

`master分支`: 最稳定的分支，仅用来发布新版本，平时对代码做的修改不能直接往上push

`dev分支`: 是不稳定的, 一般在新版本发布的时候把dev分支合并到master上，在master分支发布新版本

`个人分支`: 每个人都有自己的分支，提交代码的时候往dev分支上合并

<img src="@imgs/8516b453-0a01-40f7-ac76-49c1a01dabca.png">

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

## 三、进阶命令

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
git checkout <commitID>~1 filepath // 恢复filepath这个文件， 原理： 撤回filepath这个文件到上次(～1)提交的commit状态
```
### 撤回commit记录

**适用场景**:
1. 本地仓库里面进行了大量代码更新，并且已经commit过了，或者commit过很多次，然后推送到了远程仓库，后来发现这其中有些commit存在较大问题，希望退回远程仓库提交记录；
2. 在一个本地仓库里面错误的关联了另一个远程仓库，在推送代码到远程仓库时候没有确认远程仓库地址是否正确，导致错误的将错误的代码推送到了远程仓库，希望回退远程仓库提交记录。

```bash
git log --graph // 查看commit记录，找到希望保留的最近一次推送记录的commitId
git reset <commitID> --hard // 将本地仓库切换到刚刚找到的commitID，此时本地仓库已经退回至之前的commit记录
git push origin <branchName> -f // 将本地仓库强制推送到远程仓库，本地已经回退的提交记录将覆盖远程仓库
```

**补充说明:**

- `commitID`：希望退回到的提交记录ID
- `branchName`：需要推送的分支名

::: tip 找回误删的commit
如果错误的将某个commit记录撤回了，可以通过`git reflog`查看最近所有的commit操作记录，通过记录的commitId使用上面第二步进行恢复被误删的commit
:::

### 更新fork的项目

**适用场景**: 在github上fork了一份他人的项目， 后来他人的项目更新了， 自己fork的这一份也想更新。

```bash{3,5}
git remote -v // 查看当本地项目(fork的项目)分支详情
git remote add upstream https://github.com/JohnieXu/eleme-web-vue.git // 创建远程仓库源upstream并关联到原始仓库
git fetch upstream // 拉取原始仓库
git checkout master // 切换到本地项目需要更新的分支
git rebase upstream/master // 将原始仓库更新合并到本地需要更新仓库
git push origin master // 推送更新到本地仓库关联的远程仓库(自己github上fork的仓库)
```

### 子模块管理

> Submodules rely on nesting repos: you have repos within… repos. The module has its own repo, somewhere inside the working directory of its container repo.

> 子模块是一个独立的git仓库，拥有独立的commit记录，拉取主项目不会自动更新子模块

**适用场景**: 一个主项目中依赖了其他子项目，分别由不同人员协作开发

```bash{3}
git submodule add https://github.com/JohnieXu/cars-component.git // 添加子模块
git submodule update --init --recursive
 // 更新一个含有submodule的远程仓库，同时拉取其submodule --recursive为可选
git clone --recursive https://github.com/JohnieXu/cars-component.git // 克隆一个含有submodule的远程仓库，同时拉取其submodule
```

移除子模块
```bash
git submodule deinit path/to/module // 移除子模块关联
git rm path/to/module // 移除子模块文件夹
git commit -am update // commit
```

### 合并其他分支的文件

**适用场景**: 在一个项目的多个分支中同时有个多个feature等分支，想把某一个分支的部分文件的修改合并到另一个分支上

```bash
git checkout --patch [branch_name] [target_file_path] // 接下来根据提示确认要合并的修改
```

**补充说明:**

- `branch_name`：需要合并的文件所在分支
- `target_file_path`：需要合并的文件的地址

### 切换到远程特定分支

**适用场景**: 
1. 在进行项目克隆时使用常规的`git clone ....`命令克隆的完整的项目，是包含所有的分支和标签的，但是用`git branch`查看只会看到master分支；
2. 另一种情况是在克隆项目为了减小克隆文件大小，采用`git clone --depth=1 ...`只克隆`master`分支上最近一次`commit`，这时候项目只有`master`分支；

这时候希望切换到远程仓库其他的分支，而直接`git checkout branch_name`是不生效的（本地没有对应分支）

情况一：（直接 `git clone`）

```bash
git checkout -b 3.x-stable origin/3.x-stable // 拉取远程的3.x-stable分支并关联到本地3.x-stable分支
```

实际操作结果如下：

<img src="@imgs/9f575ce8-4ec3-4986-8111-3878f798f8b1.jpg">

情况二：（`git clone --depth=1`）

```bash
#git branch -va // 查看全部本地和远程分支，发现远程也没有3.x-stalbe分支
git remote set-branches origin "3.x-stable"
git fetch --depth=1 origin 3.x-stable // 拉取上一步自行关联的3.x-stable分支，这是 origin 生成 3.x-stable 分支
git checkout -b 3.x-stable origin/3.x-stable // 本地创建3.x-stable分支，并关联到 origin 上的 3.x-stable 分支
```

实际操作结果如下：

<img src="@imgs/8b28328b-6d05-488c-82dd-b5a5fa49a42b.jpg">

<img src="@imgs/2de6df20-a65d-4563-a8c0-5ed8173ee083.jpg">

> 拉取ant-design3.x-stable分支

### 更新克隆不完整的仓库

**使用场景**

在[上一步](#切换到远程特定分支)中克隆远程仓库时使用了`--depth=1`等命令，导致本地仓库不是完整的git仓库，后续希望看到完整的commit提交记录

```bash
git fetch --unshallow // 使用--unshallow属性来合并到完整的git仓库
```

实际操作结果如下：

<img src="@imgs/5aa61a5b-0044-439b-8a6a-b15b51c63366.jpg">

> 使用`git fetch --unshallow`拉取完整的vue-router项目，后续的以及之前的commit记录都可以看到

### 创建git离线包bundle

**使用场景**

可以将本地仓库打包成一个 bundle发送给没有远程仓库权限或远程仓库暂时无法使用的的协作者。

详见：[Git 工具 - 打包](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E6%89%93%E5%8C%85)

#### 创建离线包

```bash
git bundle create develop.bundle HEAD develop // 将 develop 分支记录打包为 develop.bundle 压缩包
```

需要包含 HEAD 指向，下面根据这个 HEAD 指向来直接克隆生成项目。

#### 使用离线包克隆项目

```bash
git bundle clone path/to/develop.bundle demos // 从 develop.bundle 中克隆生成 demos 项目
```

此时 demos 项目的 origin 将关联到 develop.bundle 文件所在地址

<img src="@imgs/d2b99797-4d59-4e23-ba90-38c1a42d3ade.png">

```bash
git bundle create develop.bundle -20 develop // 将 develop 分支最近的 20 条 commit 记录打包
```

此时把这个新生成的文件发送给他人并覆盖掉其用于创建 demos 项目的 develop.bundle 文件，然后可以使用`git fetch origin develop` `git pull origin develop`命令来更新项目

#### 使用离线包更新仓库

```bash
git fetch origin develop // 从 origin 关联的 develop.bundle 中更新 git 仓库
git pull origin develop // 将 git 仓库中的 develop 分支记录更新到工作空间
```

```bash
git bundle verify path/to/develop.bundle // 检查收到的离线包是否有效及是否可以合并到当前项目
```

> [git bundle 命令文档地址](https://git-scm.com/docs/git-bundle)

### 按时间范围筛选commit记录

按时间范围过滤提交日志，并且显示提交信息和变更的文件名

```bash
git log --since="2023-4-23 00:00:00" --until="2023-4-23 23:59:59" --pretty=format:"%h - %an, %ar : %s" --name-status --author="徐志勇"
```
<img src="@imgs/4bda467d-5ed7-4666-8b0e-20a55803ccaf.png">

### 清理忽略但本地存在文件、目录

> 清理 `.gitignore` 标记忽略，但本地存在的文件、目录

**使用场景**

一般前端项目执行构建命令，例如： `npm run build` 会输出 `dist` 等目录，这个目录一般会被 `.gitignore` 标记为忽略，通过下面命令可以快速删除 `dist` 等目录。

```bash
git clean -X -f [path]
```

- `-X`: 用于指定仅删除忽略文件中列出的文件和目录
- `-f`: 用于强制执行删除操作
- `[path]`: 可选的路径参数，传递时只会清理这个路径下的文件和目录

### 清理之前错误提交的文件

**使用场景**

之前提交时候将 `dist` `lib` 等编译输出的文件、目录提交到了 git 中，后来修改 `.gitignore` 文件将其标记为忽略，这时候需要将 `dist` `lib` 等文件、目录删除并提交。下面命令可以快捷的执行：**删除**、**添加暂存区**

```bash
git rm -r --cached /path/to/ignored_folder/
```

- `-r`: 表示递归地删除文件夹及其内容
- `--cached`: 表示只从 Git 缓存中删除文件，而不会从文件系统中删除它们
- `/path/to/ignored_folder/`: 要删除的文件夹的路径

执行 `git rm -r --cached tsdoc-demo/lib/`

<img src="@imgs/8fc2ade7-10b2-4557-9cd2-ff842ff30d84.jpg">

执行之后的状态：

<img src="@imgs/d40d9aec-847f-4fb3-9618-b3394f4cbd07.jpg">

::: warning
相当于执行：**删除**、**添加暂存区**，后续需要你自己 commit **提交**
:::

### 基于tag创建新分支

**使用场景**

在业务上需要基于之前某次发版的tag代码来修复bug或添加新需求，修改的代码需要放到新的分支上提交并发布。

```bash
# 基于tag创建新分支
git checkout -b [new_branch_name] [tag_name]

# 推送新创建的分支
git push -u origin [new_branch_name]
```

- `-b`: 表示创建新分支
- `new_branch_name`:d 新分支的名字
- `tag_name`: tag的名字
- `-u`: 表示将`[new_branch_name]`分支关联到远程仓库，否则直接`git push`会报错：`fatal: The current branch xxx has no upstream branch.`

## 四、实际使用流程

### 基本配置

下面几种场景的**操作前提**都需要先完成基本配置：

- 配置用户名和邮箱

  [配置用户名和邮箱](#配置用户名和邮箱)

  ```bash
  git config --global user.name "JohnieXu" // 配置全局用户名为JohnieXu
  git config --global user.email "281910378@qq.com" // 配置全局邮箱为281910378@qq.com
  ```

- 配置公钥(建议)

  [生成公钥文件](#配置公钥)，然后在git服务器中保存本地生成的公钥文件内容，公钥文件一般位于:

  macos: `~/.ssh/id_rsa.pub`
  windows: `用户目录/.ssh/id_rsa.pub`

### 场景一：从远程克隆项目

这是最常见的使用场景，用于从公司现有项目/github开源项目/本地git仓库克隆项目继续进行开发，涉及如何`分支管理` `提交更新` `如何解决代码冲突`等

- **从远程克隆项目**

默认拉取整个git项目将是处于master分支，然后在本地进行分支等操作

```bash
git clone git clone https://github.com/JohnieXu/eleme-web-vue.git // 默认拉取master分支
```

- **切换分支**

一般多人协作开发的项目都有多个分支，发时候切换到对应的开发分支

切换到开发分支(假设是dev分支)

```bash
git checkout dev // 假设当前开发分支在dev分支上
```

- **创建本地个人分支**

主要根据开发分支创建自己的个人分支，后面对代码的修改都在这个分支上完成，这个分支不用提交到远程仓库；开发完成功能后需要合并更新到开发分支。

```bash
git checkout -b chenxing // 从当前分支（dev）创建新的分支：chenxing，同时会切换到chenxing这一分支
```

此时处于`chenxing`这一分支，目前项目内容与`dev`分支一模一样，然后可以进入项目开发了。

- **向git提交记录**

```bash
git add . // 把当前目录下所有修改的文件添加进暂存区
git commit -m "这里是写一些描述信息" // 提交commit记录
```

完成这一步操作后，对项目的修改就被添加进git的chenxing分支了，使用`git status`命令会看到分支内容是干净的。

假如这时候预期安排开发的功能都完成了，或者他人需要看到你最近更新的功能，就需要进行下一步操作了，不然则继续接着开发。

- **合并更新到开发分支**

```bash
git checkout dev // 切换到dev分支
git merge chenxing // 将自己分支的更新合并到dev分支
git branch -d chenxing // 删除自己的分支
```

- **拉取远程仓库更新**

```bash
git pull origin dev // 将远程仓库dev分支更新拉取到本地并尝试快速合并本地更新
```

如果命令行提示快速合并成功，则可以直接推送代码到远程仓库，如果提示有代码冲突则进入下面解决冲突的步骤。

拉取远程更新时候遇到冲突会有类似下面这样的提示：

<img src="@imgs/5d72eaa2-15e1-41bd-b3d1-9ab54341d1f8.png">

运行命令`git status`，会看到类似下面展示的冲突文件提示：

<img src="@imgs/7fa5ccf5-1baf-492d-927e-eeeaf0de642f.png">

- **解决冲突**

最简单快速的解决冲突方法就是采用[vscode编辑器](https://code.visualstudio.com/)配合[gitlen插件](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)快速定位和修复冲突文件，然后再次提交commit修复冲突。

在vscode编辑器中，文件带有`C`(conflict首字母)标识的文件为存在冲突的文件

<img src="@imgs/e482005b-506e-4b2a-ba92-05fcfaf29c91.png">

点开冲突文件，通过`gitlen`可以看到冲突情况如下：

<img src="@imgs/1521f01a-6f01-4d7e-83df-29c9682bcc57.png">

文件中存在三种特殊的标识：

1. `<<<<<<<`
2. `=======`
3. `>>>>>>>`

对应的说明在下图的标注中，冲突指的是对应的`<<<<<<< HEAD`和`=======`之间的内容与`=======`和`>>>>>>> 46e233a7b4b601b896c13a6e2c577d12c87f3c17`之间的内容不一致，需要删除你不需要的部分，最后**确保代码中不再有上面的任何一个特殊标记**。


<img src="@imgs/39633bfe-48f6-4b37-96b2-af9d834259e8.png">

:::tip 注意
代码冲突解决完毕 === 不存在任何的`<<<<<<<` `=======` `>>>>>>>`标识
:::

- **推送更到到远程仓库**

手动修复完冲突后，需要添加文件然后提交commit，然后可以在vscode的文件管理器中看到文件没有`C`标识，然后将更新推送到远程仓库

```bash
git add . // 添加本次修复冲突更改的文件
git commit -m "fix conflict" // 提交更新
git push origin dev // 推送更新到远程仓库的dev分支
```


### 场景二：仅本地使用

- **初始化git**

```bash
git init
```

- **添加修改文件&提交**

```bash
git add . // 添加修改的文件
git commit -m "本次更新的一些描述信息" // 提交更新到本地git仓库
```

- **修复最后一次的commit信息**

```bash
git commit --amend // 然后在vim编辑界面编辑commit信息即可
```

- **删除git仓库信息**

当需要完全删除git版本/提交记录等时候使用；仅仅删除git仓库记录的内容，文件不会删除；可以再次初始化git重新添加git管理

```bash
rm -rf .git // 删除git仓库
```

- **打包bundle**

将某个分支下的一个commitId或HEAD指向的内容压缩成bundle包，可以快速与他人共享特定部分的代码，在没有git服务器的时候也可以通过这种方式来推送更新内容给他人。

```bash
git bundle create name.bundle HEAD dev // 将dev分支HEAD指向处的内容（包含之前的commit记录，不包含其他分支）打包成name.bundle文件，存在当前目录下
```

- **通过bundle文件克隆项目**

这种方式克隆克隆的项目只有bundle中的部分分支和部分commit记录

```bash
git clone path/to/name.bundle test // 从name.bundle文件中克隆处项目存在./test文件夹下
```

### 场景三：本地使用然后同步至远程

本地存在一个git项目，需要推送到git服务器中与他人共享

```bash
git remote add origin https://github.com/JohnieXu/eleme-web-vue.git // 将远程仓库关联到本地git仓库的origin上，远程仓库必须为空项目
git push origin master // 推送本地master分支到远程仓库origin的master上
git push origin dev // 推送本地dev分支到远程仓库origin的dev上
git push origin master --tags // 当存在tags时可以顺便推送tags到远程仓库
```

后面的操作与[场景一](#场景一：从远程克隆项目)的用法一致不再赘述

## 五、Git不是万能的

:::tip
这里主要说的是对Git设计思想方面的思考（就是一些废话，可略过）
:::

### 如何理解分支

我想Git的核心就是`master`分支， `master`分支就像是生命的成长历程，当你在面对重大抉择的时候就该考虑创建不同分支进行不同尝试，其他分支可以看做一个**试错**或者一个新的**生活方式**，最后都会回到生命的本质`master`分支。

分支另一个意义在于在不同的阶段做不同的尝试，甚至你可以将某个分支暂存很多年，即使如此，Git也不会遗忘它。某一天你突然想到某件种事情、某种尝试等，`master`也会欣然接受（可能会有临时的拒绝）。

### 如何理解commit

如果说分支是一个生命历程的一部分，那`commit`就是每天的日程记录、重要事件记录等，有了`commit`多年之后仍然能够回忆起当时这么做的原因等。

### 如何理解tag

随着`master`分支的不断更新，总会在某个时间点恰好满足了当时的开发需求，于是此时就可以打个`tag`标签，可类比于自己特定情况下达成的一个小目标。

Git本身就是一套管理规则，纵使你提交了无数个`commit`， 打了无数个`tag`，它也不会帮你成为“海贼王”找到`one piece`。就像各种技术的设计思想一样，Git本身也是源自于生活，也最终会回到生活。生活一样也没有万能的东西，且行且珍惜～
