<template>
	<div>
		<h3>Parent Page Layout</h3>
		<NuxtLink to="/parent/child">Specific Child</NuxtLink>
		<NuxtLink to="/parent/child1">Dynamic Child</NuxtLink>
		<NuxtLink to="/parent?a=111">Query Params</NuxtLink>
		<div class="children">
			<NuxtPage />
		</div>
		<hr />
		<div>
			<h4>嵌套路由</h4>
			<p>
				1. 在 <b>pages/</b> 创建 <b>parent.vue</b>，且 <b>parent.vue</b> 需要有
				<b>&lt;NuxtPage /&gt;</b> 作为路由出口
			</p>
			<p>
				2. 在 <b>pages/</b> 创建
				<b>parent.vue</b> 的同名目录，该目录下的组件即为在
				<b>&lt;NuxtPage /&gt;</b> 渲染的子组件
			</p>
			<p>
				3. 可创建
				<b>index.vue</b> 作为路由出口默认渲染的子组件，或者使用动态路由
				<b>[childId].vue</b>
			</p>
			<p>
				4. 若动态路由的字段和具体子组件的文件名一样，例如：
				<b>child.vue</b>(具体组件) 与 <b>[child].vue</b>(动态路由组件)，那么
				'/parent/child' 对应的组件是 <b>[child].vue</b>(动态路由组件)；<br />
				只有当具体子组件的名称和动态路由字段不一样，且
				<b>URL精确匹配</b> 具体子路由组件时，才是渲染具体子组件
			</p>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	a {
		margin: 0 10px;
	}
	.children {
		padding: 20px;
	}
</style>
