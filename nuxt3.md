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

> [If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.](https://nuxt.com/docs/getting-started/views#appvue)



三、[`<NuxtPage />`](https://nuxt.com/docs/api/components/nuxt-page)

`<NuxtPage>` is a built-in component that comes with Nuxt. `NuxtPage` is required to display top-level or nested pages located in the `pages/` directory.

`NuxtPage` is a wrapper around `<RourerView>` component from Vue Route

> [Since Nuxt 3 uses `<Suspense>` inside `<NuxtPage>`, it cannot be set as a root element.]([app.vue · Nuxt Directory Structure](https://nuxt.com/docs/guide/directory-structure/app#usage-with-pages))

实际：`<NuxtPage>` 相当于 `<RouterView>` ，在 `app.vue` 中当作路由出口 或者 嵌套路由的出口

在 `app.vue` 中使用 `<NuxtPage>`，则需要在 `pages` 目录下新建对应路由的组件：`index.vue` => '/'；`about.vue` => '/about'