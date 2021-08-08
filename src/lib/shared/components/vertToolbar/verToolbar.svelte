<script>
	//Local imports
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	//variables for nav links in toolbar

	export let nav_link1 = '/';
	export let nav_link2 = '/';
	export let nav_link3 = '/';
	export let nav_link4 = '/';
	export let nav_link5 = '/';

	let current = '';

	// set the active class for tool

	export let active = '';

	onMount(async () => {
		current = await window.location.pathname;
	});

	//function to route the user to the appropriate page

	function GoToThisLink(link) {
		goto(link);
	}
</script>

<div
	class="vertToolbar relative flex-one-one-65px h-fit bg-dashboard rounded-2px m-vertTool bg-blue-100"
>
	<div
		class="block p-point-7 hover:bg-fff cursor-pointer {current === nav_link1 ? 'bg-fff' : ''}"
		id="nav1"
		on:click={() => GoToThisLink(nav_link1)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 ml-2 text-blue-500"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
			/>
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class="block p-point-7 hover:bg-fff cursor-pointer {current === nav_link2 ? 'bg-fff' : ''}"
		id="nav2"
		on:click={() => GoToThisLink(nav_link2)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 m-2 text-blue-500"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class="block p-point-7 hover:bg-fff cursor-pointer {current === nav_link3 ||
		active === 'nav_link3'
			? 'bg-fff'
			: ''}"
		id="nav3"
		on:click={() => GoToThisLink(nav_link3)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 ml-2 text-blue-500"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class="block p-point-7 hover:bg-fff cursor-pointer {current === nav_link4 ? 'bg-fff' : ''}"
		id="nav4"
		on:click={() => GoToThisLink(nav_link4)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 ml-2 text-blue-500"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class="block p-point-7 hover:bg-fff cursor-pointer {current === nav_link5 ? 'bg-fff' : ''}"
		id="nav5"
		on:click={() => GoToThisLink(nav_link5)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 ml-2 text-blue-500"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</div>
