## Nuxt3

一、创建项目

```sh
$ pnpm dlx nuxi init <project-name>
```

报错：模板拉取问题

二、目录结构

```
pbulic：静态资源目录（webpack不会处理）
	-- favicon.ico：图标
.gitignore：忽略配置文件
.npmrc：pnpm配置
app.vue：The app.vue file is the main component in your Nuxt3 applications
nuxt.config.ts：nuxt配置文件
pnpm-lock.yaml：pnpm锁包配置
tsconfig.json：ts配置文件
```

> If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.