import categories from './_tools.js'
const lookup = new Map()
for (let category of categories) {
	lookup.set(category.slug, JSON.stringify(category))
}
export function get(req, res, next) {
	const { slug } = req.params
	if (lookup.has(slug)) {
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(lookup.get(slug))
	} else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end(JSON.stringify({message: `Not found`}))
	}
}
