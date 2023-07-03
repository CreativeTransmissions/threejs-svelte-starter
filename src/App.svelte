<script>
	import { onMount } from 'svelte';
	import { createScene } from "./scene";

	let el;
	let src = '';
	let ethAddress = '';
	let previewMediaUrl = '';
	const urlParams = new URLSearchParams(window.location.search);
	ethAddress = urlParams.get('ethAddress');
	
	onMount((el) => {
		createScene(el, ethAddress );
	});

</script>
<div bind:this={el} id="canvas"></div>	

  

