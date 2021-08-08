<script lang="ts">
	// Start: Local Imports
	import { goto } from '$app/navigation';

	// Models
	import type { IHeaderNavLink } from '$lib/models/interfaces/iheader-nav-link.interface';
	// End: Local Imports

	import { logged } from '$lib/utils/userLogged';

	// Start: Exported Properties
	/**
	 * @type {string}
	 */
	export let title = '';

	/**
	 * @type {IHeaderNavLink}
	 */
	export let navLinks: IHeaderNavLink[] = [];
	// End: Exported Properties

	let showUserProfile;

	logged.subscribe((val) => {
		showUserProfile = val;
	});

	let opened = false;
	let showUserModal = false;

	/* Handle Outside Click */

	function handleOutsideClick(el, callback) {
		function onClick(event) {
			if (!el.contains(event.target)) {
				callback();
			}
		}
		document.body.addEventListener('click', onClick);

		return {
			update(newCallback) {
				callback = newCallback;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		{#if title}
			<a
				sveltekit:prefetch
				class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				href="/"
			>
				<span class="ml-3 text-xl">{title}</span>
			</a>
		{/if}
		<nav
			class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center"
			class:md:border-l={title}
			class:md:border-gray-400={title}
		>
			{#each navLinks as navLink (navLink.path)}
				<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href={navLink.path}
					>{navLink.label}</a
				>
			{/each}
		</nav>
		{#if showUserProfile === true}
			<!-- User's Profile-->
			<div class="flex justify-end">
				<img
					src="static/RTI_favicon.ico"
					alt="User's Profile Picture"
					class="rounded-full w-10 h-10 "
				/>
				<h2
					class="text-lg ml-4 mt-2 hover:underline hover:text-gray-500 cursor-pointer"
					on:click={() => (opened = !opened)}
				>
					Marcus Lofton
				</h2>
				<!-- Dropdown Content for Profile-->
				<div class="{opened === true ? 'block' : 'hidden'} relative">
					<div class="triangle h-0 w-0 absolute top-10 -left-20" />
					<div
						class="dropdown fixed top-20 right-2 z-20 bg-blue-800 shadow-menuItemDropdown w-96 h-80 text-white rounded-xl"
					>
						<div class="flex justify-center mt-3">
							<img
								src="static/RTI_favicon.ico"
								alt="User's Profile Picture"
								class="rounded-xl w-16 h-16"
							/>
						</div>
						<div class="grid grid-cols-2 mt-5">
							<p class="flex justify-center">Marcus Lofton</p>
							<p class="flex justify-center">mlofton@rti.org</p>
							<p class=" col-span-2 flex justify-center mt-4 font-mono ">
								Software Applications Programmer
							</p>
						</div>
						<hr
							class="clear-both ml-4point5 w-full border-solid h-px overflow-visible box-content border-2 border-white mt-5"
						/>
						<h2
							class="text-lg flex justify-center mt-4 cursor-pointer hover:text-gray-200"
							on:click={() => goto('settings')}
						>
							Settings
						</h2>

						<hr
							class="clear-both ml-4point5 w-full border-solid h-px overflow-visible box-content border-2 border-white mt-5"
						/>
						<h2
							class="text-lg flex justify-center mt-4 cursor-pointer hover:text-gray-200"
							on:click={() => goto('/')}
						>
							Logout
						</h2>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	.triangle {
		border-left: 1rem solid transparent;
		border-right: 1rem solid transparent;
		border-bottom: 2rem solid #1e40af;
	}
</style>
