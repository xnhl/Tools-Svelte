<script>
	import { fade } from 'svelte/transition'
	let categories = [
		{
			title: "General Learning",
			slug: "learning"
		},
		{
			title: "Free Courses",
			slug: "courses"
		},
		{
			title: "How To...",
			slug: "howto"
		},
		{
			title: "Books",
			slug: "books"
		},
		{
			title: "Science",
			slug: "science"
		},
		{
			title: "Maths & Calculators",
			slug: "maths"
		},
		{
			title: "Debate & Compare",
			slug: "debate"
		},
		{
			title: "Wikipedia",
			slug: "wiki"
		},
		{
			title: "News",
			slug: "news"
		},
		{
			title: "Language",
			slug: "language"
		},
		{
			title: "Time",
			slug: "time"
		},
		{
			title: "Productivity",
			slug: "productivity"
		},
		{
			title: "Ambient Noise & Music",
			slug: "ambient"
		},
		{
			title: "Notepads",
			slug: "notepads"
		},
		{
			title: "Templates",
			slug: "templates"
		},
		{
			title: "Composition",
			slug: "composition"
		},
		{
			title: "Communication",
			slug: "communication"
		},
		{
			title: "Visualization",
			slug: "visualization"
		},
		{
			title: "Mind Maps",
			slug: "mindmap"
		},
		{
			title: "Pastebins",
			slug: "pastebins"
		},
		{
			title: "File Sharing",
			slug: "filesharing"
		},
		{
			title: "Browsers",
			slug: "browsers"
		},
		{
			title: "Security",
			slug: "security"
		},
		{
			title: "Data Storage",
			slug: "storage"
		},
		{
			title: "Internet",
			slug: "internet"
		},
		{
			title: "Firefox Add-ons",
			slug: "firefox"
		},
		{
			title: "Google Chrome Extensions",
			slug: "chrome"
		},
		{
			title: "Maps & Travel",
			slug: "maps"
		},
		{
			title: "Health & Fitness",
			slug: "health"
		},
		{
			title: "Unsorted",
			slug: "unsorted"
		}
	]
	const hideMenu = () => {
		let menu = document.getElementById("menu")
		menu.style.left = "-700px"
	}
</script>

<style lang="sass">
#menu
	top: 0
	z-index: 5
	display: block
	width: auto
	height: 100vh
	position: sticky
	overflow-y: scroll
	transition: all 0.1s ease-in-out
	background: rgba(black, 0.75)
	@media (max-width: 32rem)
		display: block
		position: fixed
		top: 0
		width: 100%
		left: -50rem
		#menu-categories
			.menu-category
				text-align: center
	#menu-categories
		margin: 0.5rem
		background: #111
		display: flex
		flex-direction: column
		@media (max-width: 32rem)
			margin: 0.25rem
		.menu-category
			text-decoration: none
			padding: 0.5rem
			margin: 0.25rem
			background: #222
			border-radius: 0.25rem
			transition: all 0.25s ease-in-out
			@media (max-width: 32rem)
				padding: 0.25rem
				margin: 0.25rem
			&:hover
				background: lighten(#333, 3)
</style>

<div id="menu" transition:fade="{{duration: 250}}">
	<div id="menu-categories" on:click={hideMenu}>
		{#each categories as category}
			<a class="menu-category" href={`/tools/${category.slug}`} data-category={category.slug}>{category.title}</a>
		{/each}
	</div>
</div>
