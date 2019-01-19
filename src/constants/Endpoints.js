import env from '../../env'
const baseUrl = env.baseUrl

export default {
	constants: {
		RESOURCE_FETCH: { baseUrl: baseUrl, path: 'resources', method: 'GET' },
	},
}
