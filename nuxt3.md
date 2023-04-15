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

> [Since Nuxt 3 uses `<Suspense>` inside `<NuxtPage>`, it cannot be set as a root element.](https://nuxt.com/docs/guide/directory-structure/app#usage-with-pages)

实际：`<NuxtPage>` 相当于 `<RouterView>` ，在 `app.vue` 中当作路由出口 或者 嵌套路由的出口

在 `app.vue` 中使用 `<NuxtPage>`，则需要在 `pages` 目录下新建对应路由的组件：`index.vue` => '/'；`about.vue` => '/about'



四、[Pages Directory](https://nuxt.com/docs/guide/directory-structure/pages)

> In Nuxt3, `pages/` directory is **optional**, meaning that `vue-router` won;t be included if you **only use** `app.vue`, reducing your application's bundle size.



[Page Metadata](https://nuxt.com/docs/guide/directory-structure/pages#page-metadata)

[Custom routing](https://nuxt.com/docs/guide/going-further/custom-routing#router-options)



五、[Components Directory](https://nuxt.com/docs/guide/directory-structure/components)

> 全局组件目录

1.[Dynamic Components](https://nuxt.com/docs/guide/directory-structure/components#dynamic-components)

```vue
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>

<script setup>
const MyButton = resolveComponent('MyButton')
</script>
```

2.[Dynamic Imports](https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports)：add the `Lazy` prefix to the component's name

```vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

3.[`<ClientOnly>` Component](https://nuxt.com/docs/guide/directory-structure/components#clientonly-component)

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly>
      <!-- this component will only be rendered on client-side -->
      <Comments />
    </ClientOnly>
  </div>
</template>
```

4.[.client Components](https://nuxt.com/docs/guide/directory-structure/components#client-components)

```
> | components/
> --| Comments.client.vue
```

```vue
<template>
  <div>
    <!-- this component will only be rendered on client side -->
    <Comments />
  </div>
</template>
```

> 1）This feature only works with Nuxt auto-imports and `#components` imports. Explicitly importing these components from their real paths does not convert them into client-only components
>
> 2）`.client` components are rendered only after being mounted. To access the rendered template using `onMounted()`, add `await nextTick()` in the callback of the `onMounted()` hook

5.[.server Components](https://nuxt.com/docs/guide/directory-structure/components#server-components)

> 1）Server Side Rendering  !=  Server Components
>
> 2）Server Components' function is to disable the transmission of JavaScript to the browser
>
> 3）Suitable：don't need to be interactive、don't update much

```ts
// nuxt.config.ts 开启实验属性
export default defineNuxtConfig({
  experimental: {
    componentIslands: true
  }
})
```

```
> | components/
> --| HighlightedMarkdown.server.vue
```

```vue
<template>
  <div>
    <!--
      this will automatically be rendered on the server, meaning your markdown parsing + highlighting
      libraries are not included in your client bundle.
     -->
    <HighlightedMarkdown markdown="# Headline" />
  </div>
</template>
```

6.[`<DevOnly>` Component](https://nuxt.com/docs/guide/directory-structure/components#devonly-component)

```vue
<template>
  <div>
    <Sidebar />
    <DevOnly>
      <!-- this component will only be rendered during development -->
      <LazyDebugBar />
    </DevOnly>
  </div>
</template>
```



六、[Layouts Directory](https://nuxt.com/docs/guide/directory-structure/layouts)

> 1）layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a `<slot />`.
>
> 2）If you only have a single layout in your application, we **recommend** using app.vue with the `<NuxtPage>` instead.
>
> 3）Layouts are placed in the `layouts/` directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding `<NuxtLayout>` to your `app.vue`—— **layout 和 app.vue 一起使用**



七、导航（跳转）

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)

[navigateTo](https://nuxt.com/docs/api/utils/navigate-to)



八、[SEO and Meta](https://nuxt.com/docs/getting-started/seo-meta)

- [Meta](https://nuxt.com/docs/getting-started/seo-meta#defaults)

- [Page Metadata](https://nuxt.com/docs/guide/directory-structure/pages/#page-metadata) -- [definePageMeta](https://nuxt.com/docs/api/utils/define-page-meta)

> 1）[Meta Type(SEO)](https://nuxt.com/docs/api/composables/use-head#type)：title、titleTemplate、link、meta、style、script...（字段是固定的，**不能自定义**）
>
> 2）[definePageMeta Type](https://nuxt.com/docs/api/utils/define-page-meta#type)：validate、redirect、alias、key、keepalive、layout、key-value（除了一些固定字段外，**可以自定义**）



1. Meta

```
// 默认已设置
1）charset：utf-8
2）viewport: width=device-width, initial-scale=1
```

- `nuxt.config.ts`：[`app.head`](https://nuxt.com/docs/api/configuration/nuxt-config#head)（不能使用响应式数据）
- [`useHead`](https://nuxt.com/docs/api/composables/use-head)：可使用响应式数据（[参考](https://nuxt.com/docs/getting-started/seo-meta#usehead)）
- [Components](https://nuxt.com/docs/getting-started/seo-meta#components)



2. PageMeta

> `definePageMeta` is a compiler macro that you can use to set metadata for your **page components** located in the `pages/` directory .
>
> This way you can set **custom metadata** for each static or dynamic route of your Nuxt application.

针对当前页面(路由)，可设置一些自定义属性值，根据该值来进行一些操作



九、[Assets](https://nuxt.com/docs/getting-started/assets)

```
public目录：以 '/' 形式访问，不会被打包工具处理
assets目录：以 '~/assets/' 形式访问，会被打包工具处理
```



十、[Configuration](https://nuxt.com/docs/getting-started/configuration)

> The `nuxt.config.ts` file is located at the root of a Nuxt project and can override or extend the application's behavior.
>
> The [`runtimeconfig`](https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig) API exposes values like environment variables to the rest of your application. By default, these keys are **only available server-side**. The keys within **`runtimeConfig.public`** are **also available client-side**.
>
> Those values defined in `nuxt.config` can be **overridden** using environment variables.



十一、[Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)

> `useFetch`, `useLazyFetch`, `useAsyncData` and `useLazyAsyncData` only work during `setup` or `Lifecycle Hooks`

- [useFetch](https://nuxt.com/docs/api/composables/use-fetch)：This composable provides a convenient wrapper around `useAsyncData` and `$fetch`—— shortcut of useAsyncData + $fetch.
- [useLazyFetch](https://nuxt.com/docs/api/composables/use-lazy-fetch)：`useLazyFetch` provides a wrapper around `useFetch` that triggers navigation before the handler is resolved by setting the `lazy` option to `true`.
- [useAsyncData](https://nuxt.com/docs/api/composables/use-async-data)：use `useAsyncData` to get access to data that resolves asynchronously.
- [useLazyAsyncData](https://nuxt.com/docs/api/composables/use-lazy-async-data)：`useLazyAsyncData` provides a wrapper around `useAsyncData` that triggers navigation before the handler is resolved by setting the `lazy` option to `true`.

> By default, `useFetch` and `useAsyncData` **blocks navigation** until its async handler is resolved.
>
> But `useLazyFetch` and `useLazyAsyncData` would not. However, this means you need to handle the situation where the data is `null` (or whatever value you have provided in a custom `default` factory function)



- [$fetch](https://nuxt.com/docs/api/utils/dollarfetch)：Nuxt uses [ofetch](https://github.com/unjs/ofetch) to expose globally the `$fetch` helper for making HTTP requests within your Vue app or API routes.

> 1）During server-side rendering, calling `$fetch` to fetch your internal [API routes](https://nuxt.com/docs/guide/directory-structure/server) will directly call the relevant function (emulating the request), **saving an additional API call**.
>
> 2）However, using `$fetch` in components without wrapping it with `useAsyncData` causes fetching the data twice: **initially on the server**, **then again on the client-side during hydration**, because `$fetch` does not transfer state from the server to the client. Thus, the fetch will be executed on both sides because the client has to get the data again.



- [refreshNuxtData](https://nuxt.com/docs/api/utils/refresh-nuxt-data)
- [clearNuxtData](https://nuxt.com/docs/api/utils/clear-nuxt-data)



十二、[Server Directory](https://nuxt.com/docs/guide/directory-structure/server)

> Nuxt automatically scans files inside the `~/server/api`, `~/server/routes`, and `~/server/middleware` directories to register API and server handlers with HMR support.
>
> Each file should export a default function defined with `defineEventHandler()`.
>
> The handler can directly return JSON data, a `Promise` or use `event.node.res.end()` to send response.



[Server Utils--h3@1.6.4](https://www.jsdocs.io/package/h3#package-index)



十三、[State Management](https://nuxt.com/docs/getting-started/state-management)

> Nuxt provides the `useState` composable to create a reactive and SSR-friendly shared state across components.
>
> [`useState`](https://nuxt.com/docs/api/composables/use-state) is an SSR-friendly [`ref`](https://vuejs.org/api/reactivity-core.html#ref) replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.



- [Using third-party libraries](https://nuxt.com/docs/getting-started/state-management#using-third-party-libraries)



十四、[Composables Directory](https://nuxt.com/docs/guide/directory-structure/composables)

> Nuxt 3 uses the `composables/` directory to **automatically import** your Vue composables into your application using [**auto-imports**](https://nuxt.com/docs/guide/concepts/auto-imports)!
>
> Under the hood, Nuxt auto generates the file **`.nuxt/imports.d.ts`** to declare the types.
>
> [Nuxt only scans files at the top level of the `composables/` director](https://nuxt.com/docs/guide/directory-structure/composables#how-files-are-scanned)



十五、[Transitions](https://nuxt.com/docs/getting-started/transitions)

> Nuxt leverages Vue's [`<Transition>`](https://vuejs.org/guide/built-ins/transition.html#the-transition-component) component to apply transitions between pages and layouts



十六、[Error handling](https://nuxt.com/docs/getting-started/error-handling)



十七、[Layers](https://nuxt.com/docs/getting-started/layers)

> You can extend a layer by adding the [extends](https://nuxt.com/docs/api/configuration/nuxt-config#extends) property to the `nuxt.config.ts` file



十八、[Rendering Modes](https://nuxt.com/docs/guide/concepts/rendering)

> 1）[Frontend Rendering Development](https://zhuanlan.zhihu.com/p/406527954)
>
> 2）Nuxt supports both **client-side** and **universal** rendering



1. **Traditional Server-Side Rendering**：JSP、PHP

2. **[Client-Side Rendering](https://nuxt.com/docs/guide/concepts/rendering#client-side-only-rendering)**：a traditional Vue.js APP

```
Suitable：SaaS, back-office applications, online games
```

3. **[Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering)**：Nuxt APP(client-side + server-side)

```
Suitable：blogs, marketing websites, portfolios, e-commerce sites, and marketplaces
```

By default, Nuxt uses **universal rendering** to provide better user experience and performance, and to optimize search engine indexing, but you can switch rendering modes in [one line of configuration](https://nuxt.com/docs/api/configuration/nuxt-config#ssr)

4. **[New Rendering Patterns in Nuxt 3](https://nuxt.com/docs/guide/concepts/rendering#new-rendering-patterns-in-nuxt-3)**：
- [Hybrid Rendering](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) along with [Route Rules](https://nuxt.com/docs/guide/concepts/rendering#route-rules)
- [Edge Side  Rendering](https://nuxt.com/docs/guide/concepts/rendering#rendering-on-cdn-edge-workers)

```ts
export default defineNuxtConfig({
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    // Static page generated on-demand once
    '/articles/**': { static: true },
    // Set custom headers matching paths
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    '/admin/**': { ssr: false },
    // Add cors headers
    '/api/v1/**': { cors: true },
    // Add redirect headers
    '/old-page': { redirect: '/new-page' },
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
  }
})
```

> 1）[Stale-while-revalidate](https://zhuanlan.zhihu.com/p/108725722)
>
> 2）[SSR, SWR & Hybrid with Nuxt 3 - DEV Community](https://dev.to/guillaumeduhan/ssr-swr-hybrid-with-nuxt-3-18b7)

