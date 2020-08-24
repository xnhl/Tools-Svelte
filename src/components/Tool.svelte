<script>
	export let data
</script>

<style lang="sass">
.tool
	display: flex
	flex-direction: column
	flex: 1
	margin: 0.5rem
	min-width: 100%
	background: #222
	text-decoration: none
	border-radius: 0.25rem
	transition: all 0.25s ease-in-out
	box-shadow: 0 0 0.5rem 0.125rem rgba(255, 255, 255, 0.05), 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1) inset
	@media (min-width: 45em)
		min-width: 40%
		max-width: 50%
	@media (min-width: 64em)
		min-width: 30%
	@media (min-width: 90em)
		min-width: 23%
	&:hover
		box-shadow: 0 0 0.5rem 0.125rem rgba(255, 255, 255, 0.15), 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25) inset
		.tool-info
			color: rgba(255, 255, 255, 1)
		.tool-divider
			width: 75%
	.tool-image-wrapper
		display: flex
		align-items: center
		justify-content: center
		min-width: 100%
		min-height: 113px
		box-sizing: content-box
		.tool-image
			margin: 1rem 0.5rem 0.5rem 0.5rem
			border-radius: 0.25rem
			width: auto
			max-width: 100%
			height: auto
			@media (max-width: 30rem)
				max-width: 90%
	.tool-title
		padding: 0.5rem
		font-size: 1.1rem
		text-align: center
		display: flex
		align-items: center
		justify-content: center
	.tool-divider
		border: 0
		width: 33%
		height: 1px
		margin: 0 auto
		transition: width 0.25s ease-in-out
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))
	.tool-info
		flex: 1
		color: rgba(255, 255, 255, 0.75)
		padding: 1rem
		display: flex
		align-items: center
		justify-content: center
		transition: color 0.25s ease-in-out
</style>

<a class="tool" href={data.link}>
	<div class="tool-image-wrapper">
		<img class="tool-image" src={`/img/200/${data.image}`} alt={data.title}>
		<!-- <img class="tool-image lazy" src="/img/placeholder.png" data-lazysrc={`/img/200/${data.image}`} alt={data.title}> -->
	</div>
	<p class="tool-title">{data.title}</p>
	<hr class="tool-divider">
	<p class="tool-info">{data.info}</p>
</a>
