<template><div><h2 id="全文目录速览" tabindex="-1"><a class="header-anchor" href="#全文目录速览" aria-hidden="true">#</a> 全文目录速览</h2>
<nav class="table-of-contents"><ul><li><router-link to="#全文目录速览">全文目录速览</router-link></li><li><router-link to="#一、配置命令">一、配置命令</router-link><ul><li><router-link to="#配置用户名和邮箱">配置用户名和邮箱</router-link></li><li><router-link to="#查看配置">查看配置</router-link></li><li><router-link to="#配置公钥">配置公钥</router-link></li></ul></li><li><router-link to="#二、常用命令">二、常用命令</router-link><ul><li><router-link to="#初始化项目">初始化项目</router-link></li><li><router-link to="#克隆项目">克隆项目</router-link></li><li><router-link to="#查看项目信息">查看项目信息</router-link></li><li><router-link to="#推送更新">推送更新</router-link></li><li><router-link to="#检查更新">检查更新</router-link></li><li><router-link to="#管理修改">管理修改</router-link></li><li><router-link to="#分支管理">分支管理</router-link></li><li><router-link to="#标签管理">标签管理</router-link></li></ul></li><li><router-link to="#三、进阶命令">三、进阶命令</router-link><ul><li><router-link to="#多个远程仓库管理">多个远程仓库管理</router-link></li><li><router-link to="#暂存修改">暂存修改</router-link></li><li><router-link to="#撤回已移除文件">撤回已移除文件</router-link></li><li><router-link to="#撤回commit记录">撤回commit记录</router-link></li><li><router-link to="#更新fork的项目">更新fork的项目</router-link></li><li><router-link to="#子模块管理">子模块管理</router-link></li><li><router-link to="#合并其他分支的文件">合并其他分支的文件</router-link></li><li><router-link to="#切换到远程特定分支">切换到远程特定分支</router-link></li><li><router-link to="#更新克隆不完整的仓库">更新克隆不完整的仓库</router-link></li><li><router-link to="#创建git离线包bundle">创建git离线包bundle</router-link></li><li><router-link to="#按时间范围筛选commit记录">按时间范围筛选commit记录</router-link></li><li><router-link to="#清理忽略但本地存在文件、目录">清理忽略但本地存在文件、目录</router-link></li><li><router-link to="#清理之前错误提交的文件">清理之前错误提交的文件</router-link></li></ul></li><li><router-link to="#四、实际使用流程">四、实际使用流程</router-link><ul><li><router-link to="#基本配置">基本配置</router-link></li><li><router-link to="#场景一-从远程克隆项目">场景一：从远程克隆项目</router-link></li><li><router-link to="#场景二-仅本地使用">场景二：仅本地使用</router-link></li><li><router-link to="#场景三-本地使用然后同步至远程">场景三：本地使用然后同步至远程</router-link></li></ul></li><li><router-link to="#五、git不是万能的">五、Git不是万能的</router-link><ul><li><router-link to="#如何理解分支">如何理解分支</router-link></li><li><router-link to="#如何理解commit">如何理解commit</router-link></li><li><router-link to="#如何理解tag">如何理解tag</router-link></li></ul></li><li><router-link to="#全文目录速览-1">全文目录速览</router-link></li></ul></nav>
<hr>
<h2 id="一、配置命令" tabindex="-1"><a class="header-anchor" href="#一、配置命令" aria-hidden="true">#</a> 一、配置命令</h2>
<h3 id="配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置用户名和邮箱" aria-hidden="true">#</a> 配置用户名和邮箱</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"JohnieXu"</span> // 配置全局用户名为JohnieXu
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"281910378@qq.com"</span> // 配置全局邮箱为281910378@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置" aria-hidden="true">#</a> 查看配置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">-l</span> // 查看git全局配置信息
or
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- more -->
<h3 id="配置公钥" tabindex="-1"><a class="header-anchor" href="#配置公钥" aria-hidden="true">#</a> 配置公钥</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"281910378@qq.com"</span> // 采用rsa加密算法生成git公钥，前提是用户名和邮箱已经设置好且此处邮箱与前面配置邮箱保持一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、常用命令" tabindex="-1"><a class="header-anchor" href="#二、常用命令" aria-hidden="true">#</a> 二、常用命令</h2>
<h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="克隆项目" tabindex="-1"><a class="header-anchor" href="#克隆项目" aria-hidden="true">#</a> 克隆项目</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/JohnieXu/eleme-web-vue.git
or
<span class="token function">git</span> clone git@git.github.com:JohnieXu/eleme-web-vue.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看项目信息" tabindex="-1"><a class="header-anchor" href="#查看项目信息" aria-hidden="true">#</a> 查看项目信息</h3>
<ul>
<li>综合信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status // 查看当前项目的所有综合信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>commit提交信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit // 以图形的形式显示commit的提交记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送更新" tabindex="-1"><a class="header-anchor" href="#推送更新" aria-hidden="true">#</a> 推送更新</h3>
<p><code v-pre>git add .</code> =&gt; <code v-pre>git commit</code> =&gt; <code v-pre>git push</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> // 添加所有修改修改过的文件,仅添加**当前目录下**的所有修改过的文件,主要运行git命令的路径
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'fix a bug'</span> // 将修改提交到<span class="token punctuation">(</span>本地项目的<span class="token punctuation">)</span>暂存区, 提交的描述内容为<span class="token string">"fix a bug"</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master // 推送当前分支下已提交的更新到origin仓库的master分支下,同时设置当前提交的origin和master为默认设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查更新" tabindex="-1"><a class="header-anchor" href="#检查更新" aria-hidden="true">#</a> 检查更新</h3>
<p>在多人协作开发中，可以通过以下方式在不<code v-pre>commit</code>、<code v-pre>stash</code>当前更改的情况下查看远程仓库是否有更新</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote update // 拉取远程仓库更新，此操作不影响当前修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="管理修改" tabindex="-1"><a class="header-anchor" href="#管理修改" aria-hidden="true">#</a> 管理修改</h3>
<ul>
<li>已修改文件未添加到暂存区</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -- <span class="token builtin class-name">.</span> // 撤销当前所有文件做的修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-- file</code>: file为需要撤销修改的文件路径</p>
<ul>
<li>已修改文件并已添加到暂存区</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 撤销全部文件
<span class="token function">git</span> reset HEAD // 撤回暂存区的所有文件到工作区<span class="token punctuation">(</span>没有撤销对文件的修改<span class="token punctuation">)</span>
<span class="token function">git</span> checkout -- <span class="token builtin class-name">.</span> // 撤销所有文件的修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 撤销指定文件
<span class="token function">git</span> reset HEAD readme.txt // 将暂存区的readme.txt文件撤回工作区
<span class="token function">git</span> checkout -- readme.txt // 撤销readme.txt文件的修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>已提交commit未push到远程仓库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog // 查看最近的commit列表
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commit_id // 退回到commit_id对应的commit版本<span class="token punctuation">(</span>不建议添加--hard参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>commit_id:</code>需要退回的版本的commit的ID(hash值)</p>
<h3 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h3>
<ul>
<li>查看分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch // 查看所有分支, *对应当前分支
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> // 查看关联的远程分支详情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch dev // 创建dev分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>切换分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout dev // 切换到dev分支
or
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev // 创建并切换到dev分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>合并分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master // 切换到master分支
<span class="token function">git</span> merge dev // 将dev分支合并到master分支
or
<span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">"merge with no-ff"</span> dev // 非fast-forward模式合并dev分支到master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>--no-ff</code>: 合并方式为禁用<code v-pre>Fast-forward</code>, 即合并的时候会另外提交一个commit记录</p>
<p><code v-pre>-m</code>: 本次合并commit的描述内容</p>
<ul>
<li>推送分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin master // 将master分支推送到远程的origin关联的仓库上
or
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master // 将master分支推送到远程的origin关联的仓库上, 设置默认推送master至origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>-u</code>: 第一次推送时候加上<code v-pre>-u</code>的话, 将第一次的推送源和分支保存为默认设置, 下次<code v-pre>git push</code>就相当于<code v-pre>git push origin master</code></p>
<ul>
<li>删除分支</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev // 删除dev分支<span class="token punctuation">(</span>dev已经被合并<span class="token punctuation">)</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> dev // 强制删除dev分支<span class="token punctuation">(</span>dev分支未被合并<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Bug分支</li>
</ul>
<p><strong>应用场景</strong>: 当前正在自己的分支-dev-xu上进行新功能开发, master分支发现Bug需要立即修复。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash // 将当前的工作区储存起来, <span class="token function">git</span> status查看工作区是干净的
<span class="token function">git</span> checkout master // 切换到master分支
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> bug-101 // 从master分支创建新的对应的bug-101分支
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'fix bug 101'</span> // 修复bug并提交修改
<span class="token function">git</span> checkout master <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">'merged bug fix 101'</span> bug-101 // 将bug-101分支的修改合并到主分支
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> bug-101 // 删除bug-101分支
<span class="token function">git</span> checkout dev-xu // 切回之前自己在开发的分支
<span class="token function">git</span> stash pop // 恢复之前工作区以便继续新功能的开发, 同时删除stash记录<span class="token punctuation">(</span>git stash list看不到stash的任何内容<span class="token punctuation">)</span> <span class="token operator">&lt;=</span><span class="token operator">=</span><span class="token operator">></span> <span class="token function">git</span> stash apply <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> stash drop
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>分支策略</li>
</ul>
<p><code v-pre>master分支</code>: 最稳定的分支，仅用来发布新版本，平时对代码做的修改不能直接往上push</p>
<p><code v-pre>dev分支</code>: 是不稳定的, 一般在新版本发布的时候把dev分支合并到master上，在master分支发布新版本</p>
<p><code v-pre>个人分支</code>: 每个人都有自己的分支，提交代码的时候往dev分支上合并</p>
<img src="@imgs/8516b453-0a01-40f7-ac76-49c1a01dabca.png">
<h3 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理" aria-hidden="true">#</a> 标签管理</h3>
<ul>
<li>创建标签</li>
</ul>
<p><strong>适应场景</strong>: 对当前最新的提交commit打标签</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master // 切换到需要打标签的分支
<span class="token function">git</span> tag v1.0 // 打一个名为v1.0的标签
<span class="token function">git</span> tag // 查看已打标签列表
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>适应场景</strong>: 对当历史提交的commit打标签</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit // 以简洁的形式列出所有commit记录
<span class="token function">git</span> tag v0.9 commit_id // 对commit_id对应的这次commit打一个名为v0.9的标签
<span class="token function">git</span> tag // 查看标签记录
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带有说明的标签</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> v0.1 <span class="token parameter variable">-m</span> <span class="token string">"version 0.1 released"</span> commit_id // 创建带有说明的标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看标签</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> show v0.9 // 查看v0.9这一个标签的详情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-a</code>: 指定标签名</p>
<p><code v-pre>-m</code>: 指定说明文字</p>
<ul>
<li>推送标签</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin v1.0 // 推送v1.0这一个标签到origin关联的远程仓库
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span> // 一次性推送所有标签到origin关联的远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>删除标签</li>
</ul>
<p><strong>适用场景</strong>: 要删除的标签仅创建在本地未推送到远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.9 // 删除v0.9这一个标签<span class="token punctuation">(</span>仅本地删除该标签<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>适用场景</strong>: 要删除的标签已经推送到远程仓库, 并且也要删除远程仓库上相应的标签</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.9 // 本地删除v0.9这一个标签
<span class="token function">git</span> push origin :refs/tags/v0.9 // 删除origin关联的远程仓库的v0.9这一标签<span class="token punctuation">(</span>删除也用push<span class="token punctuation">)</span>, 这是github删除远程仓库标签, coding等其他的远程仓库未测试
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、进阶命令" tabindex="-1"><a class="header-anchor" href="#三、进阶命令" aria-hidden="true">#</a> 三、进阶命令</h2>
<h3 id="多个远程仓库管理" tabindex="-1"><a class="header-anchor" href="#多个远程仓库管理" aria-hidden="true">#</a> 多个远程仓库管理</h3>
<p><strong>适用场景</strong>: 当前本地的git项目是clone自<code v-pre>https://github.com/JohnieXu/eleme-web-vue.git</code>, 同时这个项目又需要同步关联coding上的另一个远程仓库<code v-pre>https://git.coding.net/JohnieXu/eleme-web-vue.git</code>, 要求每次<code v-pre>push</code>代码同步<code v-pre>push</code>到两个远程仓库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/JohnieXu/eleme-web-vue.git
<span class="token function">git</span> remote <span class="token function">add</span> coding https://git.coding.net/JohnieXu/eleme-web-vue.git
<span class="token function">git</span> remote <span class="token function">add</span> all https://github.com/JohnieXu/eleme-web-vue.git // 将all关联到github上的远程仓库
<span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> <span class="token parameter variable">--push</span> all https://github.com/JohnieXu/eleme-web-vue.git // 在all上追加push对应的远程仓库地址为github的地址
<span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> <span class="token parameter variable">--push</span> all https://git.coding.net/JohnieXu/eleme-web-vue.git // 在all上追加push对应的远程仓库地址为github的地址
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'init'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> push <span class="token parameter variable">-u</span> all master // all分支同时关联了origin和coding两个远程仓库, 推送all即可同步push代码到两个远程仓库
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂存修改" tabindex="-1"><a class="header-anchor" href="#暂存修改" aria-hidden="true">#</a> 暂存修改</h3>
<p><strong>适用场景</strong>: 当前<code v-pre>git</code>项目有<code v-pre>master</code>,<code v-pre>dev</code>两个分支, 无意中在本地<code v-pre>pull</code>的<code v-pre>master</code>分支上做了<strong>有用的</strong>代码修改, 临时需要处理<code v-pre>master</code>分支上的一个<code v-pre>bug</code>; 同时, 由于之前在<code v-pre>master</code>分支上的修改正常应该放在<code v-pre>dev</code>分支上, 需要在处理完<code v-pre>bug</code>后将<code v-pre>master</code>分支上的修改放到<code v-pre>dev</code>分支上。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash // 暂存master分支上的修改<span class="token punctuation">(</span>效果和git checkout -- .相似, 但是对代码的修改并未删除<span class="token punctuation">)</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> bug // 根据master分支创建新的临时bug分支
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'commit'</span> // 修复bug并commit修改
<span class="token function">git</span> checkout master <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> merge bug <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> branch <span class="token parameter variable">-d</span> bug // 合并bug分支到master分支, 删除bug分支
<span class="token function">git</span> checkout dev // 切换到dev分支, 此分支为之前对master分支的修改正常所在分支
<span class="token function">git</span> stash pop // 将之前暂存的修改放到dev分支, 此时处于处于modified状态, 需要git <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit
<span class="token punctuation">..</span>.
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充说明:</strong></p>
<ul>
<li><code v-pre>git stash list</code>: 查看所有的暂存信息</li>
<li><code v-pre>git stash apply stash@{0}</code>: 恢复<code v-pre>stash@{0}</code>这个暂存, 也可用<code v-pre>git stash apply</code>即默认恢复第一个暂存, 此命令并未删除<code v-pre>stash</code>记录, 需用<code v-pre>git stash drop</code>删除暂存记录</li>
<li><code v-pre>git stash pop</code>: 恢复到第一个暂存并删除这条暂存记录</li>
</ul>
<h3 id="撤回已移除文件" tabindex="-1"><a class="header-anchor" href="#撤回已移除文件" aria-hidden="true">#</a> 撤回已移除文件</h3>
<p><strong>适用场景</strong>: 在多人协作开发时， 他人误将之前未完善的文件删除了， 同时（在自己提交代码之前）推送到了远程仓库， 而自己想找回被删掉的文件； 或者只想找回自己之前删掉的文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log --diff-filter<span class="token operator">=</span>D <span class="token parameter variable">--summary</span> // 查找删除文件的记录， 获取对应的commitID及要恢复的文件路径filepath
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commitID<span class="token operator">></span>~1 filepath // 恢复filepath这个文件， 原理： 撤回filepath这个文件到上次<span class="token punctuation">(</span>～1<span class="token punctuation">)</span>提交的commit状态
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤回commit记录" tabindex="-1"><a class="header-anchor" href="#撤回commit记录" aria-hidden="true">#</a> 撤回commit记录</h3>
<p><strong>适用场景</strong>:</p>
<ol>
<li>本地仓库里面进行了大量代码更新，并且已经commit过了，或者commit过很多次，然后推送到了远程仓库，后来发现这其中有些commit存在较大问题，希望退回远程仓库提交记录；</li>
<li>在一个本地仓库里面错误的关联了另一个远程仓库，在推送代码到远程仓库时候没有确认远程仓库地址是否正确，导致错误的将错误的代码推送到了远程仓库，希望回退远程仓库提交记录。</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> // 查看commit记录，找到希望保留的最近一次推送记录的commitId
<span class="token function">git</span> reset <span class="token operator">&lt;</span>commitID<span class="token operator">></span> <span class="token parameter variable">--hard</span> // 将本地仓库切换到刚刚找到的commitID，此时本地仓库已经退回至之前的commit记录
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>branchName<span class="token operator">></span> <span class="token parameter variable">-f</span> // 将本地仓库强制推送到远程仓库，本地已经回退的提交记录将覆盖远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充说明:</strong></p>
<ul>
<li><code v-pre>commitID</code>：希望退回到的提交记录ID</li>
<li><code v-pre>branchName</code>：需要推送的分支名</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">找回误删的commit</p>
<p>如果错误的将某个commit记录撤回了，可以通过<code v-pre>git reflog</code>查看最近所有的commit操作记录，通过记录的commitId使用上面第二步进行恢复被误删的commit</p>
</div>
<h3 id="更新fork的项目" tabindex="-1"><a class="header-anchor" href="#更新fork的项目" aria-hidden="true">#</a> 更新fork的项目</h3>
<p><strong>适用场景</strong>: 在github上fork了一份他人的项目， 后来他人的项目更新了， 自己fork的这一份也想更新。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span> // 查看当本地项目<span class="token punctuation">(</span>fork的项目<span class="token punctuation">)</span>分支详情
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/JohnieXu/eleme-web-vue.git // 创建远程仓库源upstream并关联到原始仓库
<span class="token function">git</span> fetch upstream // 拉取原始仓库
<span class="token function">git</span> checkout master // 切换到本地项目需要更新的分支
<span class="token function">git</span> rebase upstream/master // 将原始仓库更新合并到本地需要更新仓库
<span class="token function">git</span> push origin master // 推送更新到本地仓库关联的远程仓库<span class="token punctuation">(</span>自己github上fork的仓库<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子模块管理" tabindex="-1"><a class="header-anchor" href="#子模块管理" aria-hidden="true">#</a> 子模块管理</h3>
<blockquote>
<p>Submodules rely on nesting repos: you have repos within… repos. The module has its own repo, somewhere inside the working directory of its container repo.</p>
</blockquote>
<blockquote>
<p>子模块是一个独立的git仓库，拥有独立的commit记录，拉取主项目不会自动更新子模块</p>
</blockquote>
<p><strong>适用场景</strong>: 一个主项目中依赖了其他子项目，分别由不同人员协作开发</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/JohnieXu/cars-component.git // 添加子模块
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>
 // 更新一个含有submodule的远程仓库，同时拉取其submodule --recursive为可选
<span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> https://github.com/JohnieXu/cars-component.git // 克隆一个含有submodule的远程仓库，同时拉取其submodule
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除子模块</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> submodule deinit path/to/module // 移除子模块关联
<span class="token function">git</span> <span class="token function">rm</span> path/to/module // 移除子模块文件夹
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> update // commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并其他分支的文件" tabindex="-1"><a class="header-anchor" href="#合并其他分支的文件" aria-hidden="true">#</a> 合并其他分支的文件</h3>
<p><strong>适用场景</strong>: 在一个项目的多个分支中同时有个多个feature等分支，想把某一个分支的部分文件的修改合并到另一个分支上</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">--patch</span> <span class="token punctuation">[</span>branch_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>target_file_path<span class="token punctuation">]</span> // 接下来根据提示确认要合并的修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>补充说明:</strong></p>
<ul>
<li><code v-pre>branch_name</code>：需要合并的文件所在分支</li>
<li><code v-pre>target_file_path</code>：需要合并的文件的地址</li>
</ul>
<h3 id="切换到远程特定分支" tabindex="-1"><a class="header-anchor" href="#切换到远程特定分支" aria-hidden="true">#</a> 切换到远程特定分支</h3>
<p><strong>适用场景</strong>:</p>
<ol>
<li>在进行项目克隆时使用常规的<code v-pre>git clone ....</code>命令克隆的完整的项目，是包含所有的分支和标签的，但是用<code v-pre>git branch</code>查看只会看到master分支；</li>
<li>另一种情况是在克隆项目为了减小克隆文件大小，采用<code v-pre>git clone --depth=1 ...</code>只克隆<code v-pre>master</code>分支上最近一次<code v-pre>commit</code>，这时候项目只有<code v-pre>master</code>分支；</li>
</ol>
<p>这时候希望切换到远程仓库其他的分支，而直接<code v-pre>git checkout branch_name</code>是不生效的（本地没有对应分支）</p>
<p>情况一：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token number">3</span>.x-table origin/2.x-stable // 拉取远程的3.x-stable分支并关联到本地3.x-stable分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>情况二：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-va</span> // 查看全部本地和远程分支，发现远程也没有3.x-stalbe分支
<span class="token function">git</span> remote set-branches origin <span class="token string">"3.x-stable"</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> origin <span class="token number">3</span>.x-stable // 拉取上一步自行关联的3.x-stable分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际操作结果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTgy1gcchgd9brrj30va06etb3.jpg" alt="拉取ant-design3.x-stable分支"></p>
<blockquote>
<p>拉取ant-design3.x-stable分支</p>
</blockquote>
<h3 id="更新克隆不完整的仓库" tabindex="-1"><a class="header-anchor" href="#更新克隆不完整的仓库" aria-hidden="true">#</a> 更新克隆不完整的仓库</h3>
<p><strong>使用场景</strong></p>
<p>在<a href="#%E5%88%87%E6%8D%A2%E5%88%B0%E8%BF%9C%E7%A8%8B%E7%89%B9%E5%AE%9A%E5%88%86%E6%94%AF">上一步</a>中克隆远程仓库时使用了<code v-pre>--depth=1</code>等命令，导致本地仓库不是完整的git仓库，后续希望看到完整的commit提交记录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token parameter variable">--unshallow</span> // 使用--unshallow属性来合并到完整的git仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际操作结果如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTgy1gdn9ga0aetj317r0u040w.jpg" alt="使用git fetch --unshallow拉取完整的vue-router项目"></p>
<blockquote>
<p>使用<code v-pre>git fetch --unshallow</code>拉取完整的vue-router项目，后续的以及之前的commit记录都可以看到</p>
</blockquote>
<h3 id="创建git离线包bundle" tabindex="-1"><a class="header-anchor" href="#创建git离线包bundle" aria-hidden="true">#</a> 创建git离线包bundle</h3>
<p><strong>使用场景</strong></p>
<p>可以将本地仓库打包成一个 bundle发送给没有远程仓库权限或远程仓库暂时无法使用的的协作者。</p>
<p>详见：<a href="https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E6%89%93%E5%8C%85" target="_blank" rel="noopener noreferrer">Git 工具 - 打包<ExternalLinkIcon/></a></p>
<h4 id="创建离线包" tabindex="-1"><a class="header-anchor" href="#创建离线包" aria-hidden="true">#</a> 创建离线包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> bundle create develop.bundle HEAD develop // 将 develop 分支记录打包为 develop.bundle 压缩包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要包含 HEAD 指向，下面根据这个 HEAD 指向来直接克隆生成项目。</p>
<h4 id="使用离线包克隆项目" tabindex="-1"><a class="header-anchor" href="#使用离线包克隆项目" aria-hidden="true">#</a> 使用离线包克隆项目</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> bundle clone path/to/develop.bundle demos // 从 develop.bundle 中克隆生成 demos 项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时 demos 项目的 origin 将关联到 develop.bundle 文件所在地址</p>
<img src="@imgs/d2b99797-4d59-4e23-ba90-38c1a42d3ade.png">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> bundle create develop.bundle <span class="token parameter variable">-20</span> develop // 将 develop 分支最近的 <span class="token number">20</span> 条 commit 记录打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时把这个新生成的文件发送给他人并覆盖掉其用于创建 demos 项目的 develop.bundle 文件，然后可以使用<code v-pre>git fetch origin develop</code> <code v-pre>git pull origin develop</code>命令来更新项目</p>
<h4 id="使用离线包更新仓库" tabindex="-1"><a class="header-anchor" href="#使用离线包更新仓库" aria-hidden="true">#</a> 使用离线包更新仓库</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch origin develop // 从 origin 关联的 develop.bundle 中更新 <span class="token function">git</span> 仓库
<span class="token function">git</span> pull origin develop // 将 <span class="token function">git</span> 仓库中的 develop 分支记录更新到工作空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> bundle verify path/to/develop.bundle // 检查收到的离线包是否有效及是否可以合并到当前项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><a href="https://git-scm.com/docs/git-bundle" target="_blank" rel="noopener noreferrer">git bundle 命令文档地址<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="按时间范围筛选commit记录" tabindex="-1"><a class="header-anchor" href="#按时间范围筛选commit记录" aria-hidden="true">#</a> 按时间范围筛选commit记录</h3>
<p>按时间范围过滤提交日志，并且显示提交信息和变更的文件名</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">"2023-4-23 00:00:00"</span> <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token string">"2023-4-23 23:59:59"</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">"%h - %an, %ar : %s"</span> --name-status <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">"徐志勇"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2023/png/298369/1682240459783-598a804f-dad5-4353-af7b-7f843bbc244b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_QEpvaG5pZVh1%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="按时间范围筛选commit记录"></p>
<h3 id="清理忽略但本地存在文件、目录" tabindex="-1"><a class="header-anchor" href="#清理忽略但本地存在文件、目录" aria-hidden="true">#</a> 清理忽略但本地存在文件、目录</h3>
<blockquote>
<p>清理 <code v-pre>.gitignore</code> 标记忽略，但本地存在的文件、目录</p>
</blockquote>
<p><strong>使用场景</strong></p>
<p>一般前端项目执行构建命令，例如： <code v-pre>npm run build</code> 会输出 <code v-pre>dist</code> 等目录，这个目录一般会被 <code v-pre>.gitignore</code> 标记为忽略，通过下面命令可以快速删除 <code v-pre>dist</code> 等目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clean <span class="token parameter variable">-X</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-X</code>: 用于指定仅删除忽略文件中列出的文件和目录</li>
<li><code v-pre>-f</code>: 用于强制执行删除操作</li>
<li><code v-pre>[path]</code>: 可选的路径参数，传递时只会清理这个路径下的文件和目录</li>
</ul>
<h3 id="清理之前错误提交的文件" tabindex="-1"><a class="header-anchor" href="#清理之前错误提交的文件" aria-hidden="true">#</a> 清理之前错误提交的文件</h3>
<p><strong>使用场景</strong></p>
<p>之前提交时候将 <code v-pre>dist</code> <code v-pre>lib</code> 等编译输出的文件、目录提交到了 git 中，后来修改 <code v-pre>.gitignore</code> 文件将其标记为忽略，这时候需要将 <code v-pre>dist</code> <code v-pre>lib</code> 等文件、目录删除并提交。下面命令可以快捷的执行：<strong>删除</strong>、<strong>添加暂存区</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> /path/to/ignored_folder/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-r</code>: 表示递归地删除文件夹及其内容</li>
<li><code v-pre>--cached</code>: 表示只从 Git 缓存中删除文件，而不会从文件系统中删除它们</li>
<li><code v-pre>/path/to/ignored_folder/</code>: 要删除的文件夹的路径</li>
</ul>
<p>执行 <code v-pre>git rm -r --cached tsdoc-demo/lib/</code></p>
<img src="@imgs/8fc2ade7-10b2-4557-9cd2-ff842ff30d84.jpg">
<p>执行之后的状态：</p>
<img src="@imgs/d40d9aec-847f-4fb3-9618-b3394f4cbd07.jpg">
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>相当于执行：<strong>删除</strong>、<strong>添加暂存区</strong>，后续需要你自己 commit <strong>提交</strong></p>
</div>
<h2 id="四、实际使用流程" tabindex="-1"><a class="header-anchor" href="#四、实际使用流程" aria-hidden="true">#</a> 四、实际使用流程</h2>
<h3 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h3>
<p>下面几种场景的<strong>操作前提</strong>都需要先完成基本配置：</p>
<ul>
<li>
<p>配置用户名和邮箱</p>
<p><a href="#%E9%85%8D%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1">配置用户名和邮箱</a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"JohnieXu"</span> // 配置全局用户名为JohnieXu
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"281910378@qq.com"</span> // 配置全局邮箱为281910378@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置公钥(建议)</p>
<p><a href="#%E9%85%8D%E7%BD%AE%E5%85%AC%E9%92%A5">生成公钥文件</a>，然后在git服务器中保存本地生成的公钥文件内容，公钥文件一般位于:</p>
<p>macos: <code v-pre>~/.ssh/id_rsa.pub</code>
windows: <code v-pre>用户目录/.ssh/id_rsa.pub</code></p>
</li>
</ul>
<h3 id="场景一-从远程克隆项目" tabindex="-1"><a class="header-anchor" href="#场景一-从远程克隆项目" aria-hidden="true">#</a> 场景一：从远程克隆项目</h3>
<p>这是最常见的使用场景，用于从公司现有项目/github开源项目/本地git仓库克隆项目继续进行开发，涉及如何<code v-pre>分支管理</code> <code v-pre>提交更新</code> <code v-pre>如何解决代码冲突</code>等</p>
<ul>
<li><strong>从远程克隆项目</strong></li>
</ul>
<p>默认拉取整个git项目将是处于master分支，然后在本地进行分支等操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token function">git</span> clone https://github.com/JohnieXu/eleme-web-vue.git // 默认拉取master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>切换分支</strong></li>
</ul>
<p>一般多人协作开发的项目都有多个分支，发时候切换到对应的开发分支</p>
<p>切换到开发分支(假设是dev分支)</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout dev // 假设当前开发分支在dev分支上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>创建本地个人分支</strong></li>
</ul>
<p>主要根据开发分支创建自己的个人分支，后面对代码的修改都在这个分支上完成，这个分支不用提交到远程仓库；开发完成功能后需要合并更新到开发分支。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> chenxing // 从当前分支（dev）创建新的分支：chenxing，同时会切换到chenxing这一分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时处于<code v-pre>chenxing</code>这一分支，目前项目内容与<code v-pre>dev</code>分支一模一样，然后可以进入项目开发了。</p>
<ul>
<li><strong>向git提交记录</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> // 把当前目录下所有修改的文件添加进暂存区
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"这里是写一些描述信息"</span> // 提交commit记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完成这一步操作后，对项目的修改就被添加进git的chenxing分支了，使用<code v-pre>git status</code>命令会看到分支内容是干净的。</p>
<p>假如这时候预期安排开发的功能都完成了，或者他人需要看到你最近更新的功能，就需要进行下一步操作了，不然则继续接着开发。</p>
<ul>
<li><strong>合并更新到开发分支</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout dev // 切换到dev分支
<span class="token function">git</span> merge chenxing // 将自己分支的更新合并到dev分支
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> chenxing // 删除自己的分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>拉取远程仓库更新</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> pull origin dev // 将远程仓库dev分支更新拉取到本地并尝试快速合并本地更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果命令行提示快速合并成功，则可以直接推送代码到远程仓库，如果提示有代码冲突则进入下面解决冲突的步骤。</p>
<p>拉取远程更新时候遇到冲突会有类似下面这样的提示：</p>
<img src="@imgs/5d72eaa2-15e1-41bd-b3d1-9ab54341d1f8.png">
<p>运行命令<code v-pre>git status</code>，会看到类似下面展示的冲突文件提示：</p>
<img src="@imgs/7fa5ccf5-1baf-492d-927e-eeeaf0de642f.png">
<ul>
<li><strong>解决冲突</strong></li>
</ul>
<p>最简单快速的解决冲突方法就是采用<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode编辑器<ExternalLinkIcon/></a>配合<a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noopener noreferrer">gitlen插件<ExternalLinkIcon/></a>快速定位和修复冲突文件，然后再次提交commit修复冲突。</p>
<p>在vscode编辑器中，文件带有<code v-pre>C</code>(conflict首字母)标识的文件为存在冲突的文件</p>
<img src="@imgs/e482005b-506e-4b2a-ba92-05fcfaf29c91.png">
<p>点开冲突文件，通过<code v-pre>gitlen</code>可以看到冲突情况如下：</p>
<img src="@imgs/1521f01a-6f01-4d7e-83df-29c9682bcc57.png">
<p>文件中存在三种特殊的标识：</p>
<ol>
<li><code v-pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code></li>
<li><code v-pre>=======</code></li>
<li><code v-pre>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code></li>
</ol>
<p>对应的说明在下图的标注中，冲突指的是对应的<code v-pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>和<code v-pre>=======</code>之间的内容与<code v-pre>=======</code>和<code v-pre>&gt;&gt;&gt;&gt;&gt;&gt;&gt; 46e233a7b4b601b896c13a6e2c577d12c87f3c17</code>之间的内容不一致，需要删除你不需要的部分，最后<strong>确保代码中不再有上面的任何一个特殊标记</strong>。</p>
<img src="@imgs/39633bfe-48f6-4b37-96b2-af9d834259e8.png">
<div class="hint-container tip">
<p class="hint-container-title">注意</p>
<p>代码冲突解决完毕 === 不存在任何的<code v-pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> <code v-pre>=======</code> <code v-pre>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>标识</p>
</div>
<ul>
<li><strong>推送更到到远程仓库</strong></li>
</ul>
<p>手动修复完冲突后，需要添加文件然后提交commit，然后可以在vscode的文件管理器中看到文件没有<code v-pre>C</code>标识，然后将更新推送到远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> // 添加本次修复冲突更改的文件
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"fix conflict"</span> // 提交更新
<span class="token function">git</span> push origin dev // 推送更新到远程仓库的dev分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="场景二-仅本地使用" tabindex="-1"><a class="header-anchor" href="#场景二-仅本地使用" aria-hidden="true">#</a> 场景二：仅本地使用</h3>
<ul>
<li><strong>初始化git</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>添加修改文件&amp;提交</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> // 添加修改的文件
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"本次更新的一些描述信息"</span> // 提交更新到本地git仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>修复最后一次的commit信息</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> // 然后在vim编辑界面编辑commit信息即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>删除git仓库信息</strong></li>
</ul>
<p>当需要完全删除git版本/提交记录等时候使用；仅仅删除git仓库记录的内容，文件不会删除；可以再次初始化git重新添加git管理</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git // 删除git仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>打包bundle</strong></li>
</ul>
<p>将某个分支下的一个commitId或HEAD指向的内容压缩成bundle包，可以快速与他人共享特定部分的代码，在没有git服务器的时候也可以通过这种方式来推送更新内容给他人。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> bundle create name.bundle HEAD dev // 将dev分支HEAD指向处的内容（包含之前的commit记录，不包含其他分支）打包成name.bundle文件，存在当前目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>通过bundle文件克隆项目</strong></li>
</ul>
<p>这种方式克隆克隆的项目只有bundle中的部分分支和部分commit记录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone path/to/name.bundle <span class="token builtin class-name">test</span> // 从name.bundle文件中克隆处项目存在./test文件夹下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="场景三-本地使用然后同步至远程" tabindex="-1"><a class="header-anchor" href="#场景三-本地使用然后同步至远程" aria-hidden="true">#</a> 场景三：本地使用然后同步至远程</h3>
<p>本地存在一个git项目，需要推送到git服务器中与他人共享</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/JohnieXu/eleme-web-vue.git // 将远程仓库关联到本地git仓库的origin上，远程仓库必须为空项目
<span class="token function">git</span> push origin master // 推送本地master分支到远程仓库origin的master上
<span class="token function">git</span> push origin dev // 推送本地dev分支到远程仓库origin的dev上
<span class="token function">git</span> push origin master <span class="token parameter variable">--tags</span> // 当存在tags时可以顺便推送tags到远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面的操作与<a href="#%E5%9C%BA%E6%99%AF%E4%B8%80%EF%BC%9A%E4%BB%8E%E8%BF%9C%E7%A8%8B%E5%85%8B%E9%9A%86%E9%A1%B9%E7%9B%AE">场景一</a>的用法一致不再赘述</p>
<h2 id="五、git不是万能的" tabindex="-1"><a class="header-anchor" href="#五、git不是万能的" aria-hidden="true">#</a> 五、Git不是万能的</h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>这里主要说的是对Git设计思想方面的思考（就是一些废话，可略过）</p>
</div>
<h3 id="如何理解分支" tabindex="-1"><a class="header-anchor" href="#如何理解分支" aria-hidden="true">#</a> 如何理解分支</h3>
<p>我想Git的核心就是<code v-pre>master</code>分支， <code v-pre>master</code>分支就像是生命的成长历程，当你在面对重大抉择的时候就该考虑创建不同分支进行不同尝试，其他分支可以看做一个<strong>试错</strong>或者一个新的<strong>生活方式</strong>，最后都会回到生命的本质<code v-pre>master</code>分支。</p>
<p>分支另一个意义在于在不同的阶段做不同的尝试，甚至你可以将某个分支暂存很多年，即使如此，Git也不会遗忘它。某一天你突然想到某件种事情、某种尝试等，<code v-pre>master</code>也会欣然接受（可能会有临时的拒绝）。</p>
<h3 id="如何理解commit" tabindex="-1"><a class="header-anchor" href="#如何理解commit" aria-hidden="true">#</a> 如何理解commit</h3>
<p>如果说分支是一个生命历程的一部分，那<code v-pre>commit</code>就是每天的日程记录、重要事件记录等，有了<code v-pre>commit</code>多年之后仍然能够回忆起当时这么做的原因等。</p>
<h3 id="如何理解tag" tabindex="-1"><a class="header-anchor" href="#如何理解tag" aria-hidden="true">#</a> 如何理解tag</h3>
<p>随着<code v-pre>master</code>分支的不断更新，总会在某个时间点恰好满足了当时的开发需求，于是此时就可以打个<code v-pre>tag</code>标签，可类比于自己特定情况下达成的一个小目标。</p>
<p>Git本身就是一套管理规则，纵使你提交了无数个<code v-pre>commit</code>， 打了无数个<code v-pre>tag</code>，它也不会帮你成为“海贼王”找到<code v-pre>one piece</code>。就像各种技术的设计思想一样，Git本身也是源自于生活，也最终会回到生活。生活一样也没有万能的东西，且行且珍惜～</p>
<h2 id="全文目录速览-1" tabindex="-1"><a class="header-anchor" href="#全文目录速览-1" aria-hidden="true">#</a> 全文目录速览</h2>
<nav class="table-of-contents"><ul><li><router-link to="#全文目录速览">全文目录速览</router-link></li><li><router-link to="#一、配置命令">一、配置命令</router-link><ul><li><router-link to="#配置用户名和邮箱">配置用户名和邮箱</router-link></li><li><router-link to="#查看配置">查看配置</router-link></li><li><router-link to="#配置公钥">配置公钥</router-link></li></ul></li><li><router-link to="#二、常用命令">二、常用命令</router-link><ul><li><router-link to="#初始化项目">初始化项目</router-link></li><li><router-link to="#克隆项目">克隆项目</router-link></li><li><router-link to="#查看项目信息">查看项目信息</router-link></li><li><router-link to="#推送更新">推送更新</router-link></li><li><router-link to="#检查更新">检查更新</router-link></li><li><router-link to="#管理修改">管理修改</router-link></li><li><router-link to="#分支管理">分支管理</router-link></li><li><router-link to="#标签管理">标签管理</router-link></li></ul></li><li><router-link to="#三、进阶命令">三、进阶命令</router-link><ul><li><router-link to="#多个远程仓库管理">多个远程仓库管理</router-link></li><li><router-link to="#暂存修改">暂存修改</router-link></li><li><router-link to="#撤回已移除文件">撤回已移除文件</router-link></li><li><router-link to="#撤回commit记录">撤回commit记录</router-link></li><li><router-link to="#更新fork的项目">更新fork的项目</router-link></li><li><router-link to="#子模块管理">子模块管理</router-link></li><li><router-link to="#合并其他分支的文件">合并其他分支的文件</router-link></li><li><router-link to="#切换到远程特定分支">切换到远程特定分支</router-link></li><li><router-link to="#更新克隆不完整的仓库">更新克隆不完整的仓库</router-link></li><li><router-link to="#创建git离线包bundle">创建git离线包bundle</router-link></li><li><router-link to="#按时间范围筛选commit记录">按时间范围筛选commit记录</router-link></li><li><router-link to="#清理忽略但本地存在文件、目录">清理忽略但本地存在文件、目录</router-link></li><li><router-link to="#清理之前错误提交的文件">清理之前错误提交的文件</router-link></li></ul></li><li><router-link to="#四、实际使用流程">四、实际使用流程</router-link><ul><li><router-link to="#基本配置">基本配置</router-link></li><li><router-link to="#场景一-从远程克隆项目">场景一：从远程克隆项目</router-link></li><li><router-link to="#场景二-仅本地使用">场景二：仅本地使用</router-link></li><li><router-link to="#场景三-本地使用然后同步至远程">场景三：本地使用然后同步至远程</router-link></li></ul></li><li><router-link to="#五、git不是万能的">五、Git不是万能的</router-link><ul><li><router-link to="#如何理解分支">如何理解分支</router-link></li><li><router-link to="#如何理解commit">如何理解commit</router-link></li><li><router-link to="#如何理解tag">如何理解tag</router-link></li></ul></li><li><router-link to="#全文目录速览-1">全文目录速览</router-link></li></ul></nav>
<hr>
</div></template>


