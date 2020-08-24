<script context="module">
	export async function preload({ params }) {
		let all_tools = await this.fetch(`tools/${params.slug}.json`)
		let category = await all_tools.json()
		return {category}
	}
</script>

<script>
	import { fade } from 'svelte/transition'
	import Tool from '../../components/Tool.svelte'
	export let category
	let sortalpha = 1
	const sort = () => {
		let list = document.getElementById("category-list")
		let tools =[...list.children]
		let sorted = tools.sort((a, b) => {
			let nameA = a.children[1].textContent.replace(/[^a-z0-9]/gi, "").toLowerCase()
			let nameB = b.children[1].textContent.replace(/[^a-z0-9]/gi, "").toLowerCase()
			return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
		})
		if (sortalpha % 2 === 0) {
			var reversed = sorted.reverse()
			sorted = reversed
		}
		for (let tool of sorted) {
			list.appendChild(tool)
		}
		sortalpha++
		window.scrollTo(0, 0)
	}
</script>

<style lang="sass">
#tools-wrapper
	position: relative
	margin: 0 auto
	flex: 1
	#category-title
		position: sticky
		top: -1px
		z-index: 3
		width: 100%
		padding: 0.75rem
		font-size: 1.1rem
		text-align: center
		background: #444
		display: flex
		align-items: center
		justify-content: space-between
		border-radius: 0.25rem 0.25rem 0 0
		#category-title-text
			flex: 1
		#category-title-sorter-wrapper
			cursor: pointer
			position: absolute
			right: 0.25rem
			top: 0.25rem
			#category-title-sorter
				width: 1.25rem
				height: 1.25rem
				padding: 0.25rem
				filter: invert(1)
				box-sizing: content-box
	#category-navigation
		background: #333
		display: flex
		flex-wrap: wrap
		align-items: stretch
		justify-content: space-between
		.category-nav-wrapper
			display: flex
			align-items: center
			text-decoration: none
			flex: 1
			.category-nav-text
				width: auto
				padding: 0.25rem
			.category-nav-arrow
				width: 1rem
				height: 1rem
				padding: 0.5rem
				filter: invert(1)
				box-sizing: content-box
		#category-previous
			justify-content: flex-start
		#category-next
			justify-content: flex-end
			.category-nav-arrow
				transform: rotate(180deg)
	#category-list
		padding: 0.25rem
		display: flex
		flex-wrap: wrap
		align-items: stretch
		justify-content: center
		background: #333
		border-radius: 0 0 0.25rem 0.25rem
</style>

<svelte:head>
	<title>{`Tools - ${category.title}`}</title>
	<meta name="description" content="1000+ useful websites and tools">
</svelte:head>

<div id="tools-wrapper" transition:fade="{{duration: 250}}">
	<div id="category-title">
		<p id="category-title-text">{category.title}</p>
		<div id="category-title-sorter-wrapper" on:click={sort}>
			<img id="category-title-sorter" src="/icons/sort.svg" alt="sort">
		</div>
	</div>
	<div id="category-navigation">
		<a href='tools/{category.previous.slug}' class="category-nav-wrapper" id="category-previous">
			<img src="/icons/arrow.svg" alt="previous" class="category-nav-arrow">
			<p class="category-nav-text">{category.previous.title}</p>
		</a>
		<a href='tools/{category.next.slug}' class="category-nav-wrapper" id="category-next">
			<p class="category-nav-text">{category.next.title}</p>
			<img src="/icons/arrow.svg" alt="next" class="category-nav-arrow">
		</a>
	</div>
	<ul id="category-list">
		{#each category.list as tool}
			<Tool data={tool}/>
		{/each}
	</ul>
</div>
