import categories from './_tools.js';
const contents = JSON.stringify(categories.map(category => {
	return {
		title: category.title,
		slug: category.slug
	}
}))
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(contents)
}
