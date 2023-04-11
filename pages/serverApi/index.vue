<template>
	<div>
        <div>Server Index Page</div>
        <template v-if="pending">
            loading...
        </template>
        <template v-else>
             <p>
            <b>post</b><br />
            <div>title：{{ post.title }}</div>
            <div>body：{{ post.body }}</div>
        </p>
        <p>
            <b>product</b><br />
            <div>title：{{ product.title }}</div>
            <div>description：{{ product.description }}</div>
            <template v-for="img in product.images" :key="img">
                <img :src="img" alt="" height="200" width="500">
            </template>
        </p>
        </template>
    </div>
</template>

<script setup>
    let product
    // 在 server/routes 目录中的接口，请求时 不需要添加前缀 '/api'
	useLazyAsyncData('product',()=>$fetch('/product')).then(res=>{
        product=res.data
    })

    // 在 server/api 目录中的接口，请求时 需要添加前缀 '/api'
	const { data: post,pending } = await useLazyFetch('/api/post')
</script>

<style scoped></style>
