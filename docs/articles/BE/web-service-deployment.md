# 服务部署

## 阿里云服务
1. 操作系统 ubuntu 16.04
2. 安装docker
3. 安装nvm
4. 安装node
5. 执行docker-compose文件，初始化部署环境

## linux常用命令


命令 | 作用
---: | :---
sudo | 提升权限
sudo ln -s 源目录 映射文件名 | 创建软连接
sudo vim | vim编辑器
/关键字 | vim中的查询     
n | vim中的查询下一个
i | vim中的插入
A | vim中的行尾追加
dd | vim中的删除整行
yy | vim中的拷贝整行
p | vim中的粘贴
esc :w | vim中的保存
esc :wq | vim中的保存退出
esc :q! | vim中的退出不保存

# linux包管理
apt

# docker命令
docker exec -it ID|容器名称 bash

# Nginx配置

> 所有访问到`80`端口的地址根据规则代理(`反向代理`)到服务器内部localhost相应的端口

```
server {
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
```
