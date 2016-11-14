# [按需加载JS]

    常规使用requireJS时,
    requirejs遍历所有依赖关系并一次性的下载关联的模块文件.
    会造成初次加载页面时,请求过多,响应时间过长的现象.

    本Sample就是为了解决这样的问题而做成的.
    详见src/tabs.js


    ### 本工程入口文件:/entry/index.html

    ### 初使页面时加载以下文件
    ├── nav.js
    ├── tabs.js
    ├── home.js
    ├── nav.hbs
    ├── tabs.hbs
    ├── home.hbs

    ### 点击profiles标签时,加载以下文件
    ├── profiles.js
    ├── profiles.hbs

## 模块加载 Requirejs

## 模板引擎 Handlebars

## 插件 Require-handlebars-plugin

## UI框架 Bootstrap
