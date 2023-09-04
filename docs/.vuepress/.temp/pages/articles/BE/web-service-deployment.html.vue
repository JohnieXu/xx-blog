<template><div><h1 id="服务部署" tabindex="-1"><a class="header-anchor" href="#服务部署" aria-hidden="true">#</a> 服务部署</h1>
<h2 id="阿里云服务" tabindex="-1"><a class="header-anchor" href="#阿里云服务" aria-hidden="true">#</a> 阿里云服务</h2>
<ol>
<li>操作系统 ubuntu 16.04</li>
<li>安装docker</li>
<li>安装nvm</li>
<li>安装node</li>
<li>执行docker-compose文件，初始化部署环境</li>
</ol>
<h2 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> linux常用命令</h2>
<table>
<thead>
<tr>
<th style="text-align:right">命令</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">sudo</td>
<td style="text-align:left">提升权限</td>
</tr>
<tr>
<td style="text-align:right">sudo ln -s 源目录 映射文件名</td>
<td style="text-align:left">创建软连接</td>
</tr>
<tr>
<td style="text-align:right">sudo vim</td>
<td style="text-align:left">vim编辑器</td>
</tr>
<tr>
<td style="text-align:right">/关键字</td>
<td style="text-align:left">vim中的查询</td>
</tr>
<tr>
<td style="text-align:right">n</td>
<td style="text-align:left">vim中的查询下一个</td>
</tr>
<tr>
<td style="text-align:right">i</td>
<td style="text-align:left">vim中的插入</td>
</tr>
<tr>
<td style="text-align:right">A</td>
<td style="text-align:left">vim中的行尾追加</td>
</tr>
<tr>
<td style="text-align:right">dd</td>
<td style="text-align:left">vim中的删除整行</td>
</tr>
<tr>
<td style="text-align:right">yy</td>
<td style="text-align:left">vim中的拷贝整行</td>
</tr>
<tr>
<td style="text-align:right">p</td>
<td style="text-align:left">vim中的粘贴</td>
</tr>
<tr>
<td style="text-align:right">esc :w</td>
<td style="text-align:left">vim中的保存</td>
</tr>
<tr>
<td style="text-align:right">esc :wq</td>
<td style="text-align:left">vim中的保存退出</td>
</tr>
<tr>
<td style="text-align:right">esc :q!</td>
<td style="text-align:left">vim中的退出不保存</td>
</tr>
</tbody>
</table>
<h1 id="linux包管理" tabindex="-1"><a class="header-anchor" href="#linux包管理" aria-hidden="true">#</a> linux包管理</h1>
<p>apt</p>
<h1 id="docker命令" tabindex="-1"><a class="header-anchor" href="#docker命令" aria-hidden="true">#</a> docker命令</h1>
<p>docker exec -it ID|容器名称 bash</p>
<h1 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> Nginx配置</h1>
<blockquote>
<p>所有访问到<code v-pre>80</code>端口的地址根据规则代理(<code v-pre>反向代理</code>)到服务器内部localhost相应的端口</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {
    listen    80;
    server_name www.baidu.test.com;#你要填写的域名，多个用逗号隔开
    location / {
        proxy_pass http://localhost:8083; 
        proxy_set_header Host $host; 
        proxy_set_header X-Real-IP $remote_addr; 
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for; 
        root  /app/esop_web/esopschool;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    location /graphiql {
		proxy_pass http://localhost:18000;#反向代理到本机18000端口
	}
	location /zentao {
		proxy_pass http://localhost:8080;#反向代理到本机8080端口
	}
    location /graphql {
		rewrite ^/graphql/(.*) /$1 break;#截取/graphql部分反向代理到本机10000端口
        proxy_pass http://localhost:10000;
		proxy_set_header  Host  $host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


