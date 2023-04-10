// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "My Title",
			script: [
				// <script src="https://myawesome-lib.js"></script>
				{ src: "https://awesome-lib.js" }
			]
		}
	},
	runtimeConfig: {
		apiKey: "xxx-xxx",
		public: {
			theme: "dark"
		}
	}
})
