export default defineEventHandler((event) => {
	// console.log(event.context.params)
	// console.log(getQuery(event))

	return {
		RouteParams: event.context.params,
		QueryParams: getQuery(event)
	}
})
