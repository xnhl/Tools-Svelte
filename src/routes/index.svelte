<style lang="sass">
#home-wrapper
	flex: 1
	padding: 0.5rem
	display: flex
	flex-wrap: wrap
	align-items: center
	justify-content: center
	animation: fadeIn 0.25s ease-in-out
	#home-text-wrapper
		flex: 1
		margin: 0 auto
		max-width: 40rem
		background: rgba(white, 0.05)
		border-radius: 0.5rem
		border: 0.25rem solid rgba(white, 0.1)
		.home-text-item
			margin: 0.5rem
			padding: 0.5rem
			font-size: 2rem
			line-height: 2rem
			text-align: center
			transition: all 0.25s ease-in-out
			@media (min-width: 50rem)
				font-size: 3rem
				line-height: 4rem
</style>

<svelte:head>
	<title>Tools</title>
	<meta name="description" content="1000+ useful websites and tools">
</svelte:head>

<div id="home-wrapper">
	<div id="home-text-wrapper">
		<p class="home-text-item">1000+ useful websites & tools in 30 categories such as Science, News, and Productivity</p>
		<p class="home-text-item">A speed boost for your efficiency.</p>
	</div>
</div>
