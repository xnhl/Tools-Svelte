<script>
	export let segment
	import Menu from '../components/Menu.svelte'
	const showMenu = () => {
		let menu = document.getElementById("menu")
		window.getComputedStyle(menu).getPropertyValue("left") == "-700px" ? menu.style.left = "0" : menu.style.left = "-700px"
	}
</script>

<style lang="sass">
#site-wrapper
	#content-wrapper
		display: flex
	#menu-toggle
		position: fixed
		bottom: 0
		right: 0
		z-index: 3
		opacity: 0.5
		margin: 0.5rem
		cursor: pointer
		background: #333
		border-radius: 50%
		@media (min-width: 32rem)
			display: none
		#menu-toggle-icon
			width: 1.5rem
			height: 1.5rem
			filter: invert(1)
			padding: 0.75rem
			box-sizing: content-box
</style>

<div id="site-wrapper" {segment}>
	<div id="content-wrapper">
		<Menu />
		<slot></slot>
	</div>
	<div id="menu-toggle" on:click={showMenu}>
		<img id="menu-toggle-icon" src="/icons/menu.svg" alt="menu">
	</div>
</div>
