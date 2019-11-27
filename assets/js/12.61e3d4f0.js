(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"服务部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务部署"}},[t._v("#")]),t._v(" 服务部署")]),t._v(" "),a("h2",{attrs:{id:"阿里云服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云服务"}},[t._v("#")]),t._v(" 阿里云服务")]),t._v(" "),a("ol",[a("li",[t._v("操作系统 ubuntu 16.04")]),t._v(" "),a("li",[t._v("安装docker")]),t._v(" "),a("li",[t._v("安装nvm")]),t._v(" "),a("li",[t._v("安装node")]),t._v(" "),a("li",[t._v("执行docker-compose文件，初始化部署环境")])]),t._v(" "),a("h2",{attrs:{id:"linux常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[t._v("#")]),t._v(" linux常用命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("sudo")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提升权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("sudo ln -s 源目录 映射文件名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("创建软连接")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("sudo vim")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim编辑器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("/关键字")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的查询")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("n")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的查询下一个")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("i")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的插入")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的行尾追加")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("dd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的删除整行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("yy")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的拷贝整行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("p")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的粘贴")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("esc :w")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的保存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("esc :wq")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的保存退出")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("esc :q!")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vim中的退出不保存")])])])]),t._v(" "),a("h1",{attrs:{id:"linux包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux包管理"}},[t._v("#")]),t._v(" linux包管理")]),t._v(" "),a("p",[t._v("apt")]),t._v(" "),a("h1",{attrs:{id:"docker命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker命令"}},[t._v("#")]),t._v(" docker命令")]),t._v(" "),a("p",[t._v("docker exec -it ID|容器名称 bash")]),t._v(" "),a("h1",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[t._v("#")]),t._v(" Nginx配置")]),t._v(" "),a("blockquote",[a("p",[t._v("所有访问到"),a("code",[t._v("80")]),t._v("端口的地址根据规则代理("),a("code",[t._v("反向代理")]),t._v(")到服务器内部localhost相应的端口")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server {\n    listen    80;\n    server_name www.baidu.test.com;#你要填写的域名，多个用逗号隔开\n    location / {\n        proxy_pass http://localhost:8083; \n        proxy_set_header Host $host; \n        proxy_set_header X-Real-IP $remote_addr; \n        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for; \n        root  /app/esop_web/esopschool;\n        index index.html;\n        try_files $uri $uri/ /index.html;\n    }\n    location /graphiql {\n\t\tproxy_pass http://localhost:18000;#反向代理到本机18000端口\n\t}\n\tlocation /zentao {\n\t\tproxy_pass http://localhost:8080;#反向代理到本机8080端口\n\t}\n    location /graphql {\n\t\trewrite ^/graphql/(.*) /$1 break;#截取/graphql部分反向代理到本机10000端口\n        proxy_pass http://localhost:10000;\n\t\tproxy_set_header  Host  $host;\n        proxy_set_header  X-Real-IP  $remote_addr;\n        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n }\n")])])])])}],!1,null,null,null);e.default=l.exports}}]);