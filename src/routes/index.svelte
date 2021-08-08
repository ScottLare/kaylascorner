<script lang="ts" context="module">
	export async function load({ fetch }) {
		try {
			await fetch('/sitemap.xml');

			return true;
		} catch (error) {
			console.error(error);
		}
	}
</script>

<script lang="ts">
	import { goto, prefetch, prefetchRoutes } from '$app/navigation';

	// Start: Svelte Imports
	import { onMount } from 'svelte';
	// End: Svelte Imports

	import { logged } from '$lib/utils/userLogged';

	// Start: Local Imports

	// Core services
	import { JSONHttpUtil } from '$lib/core/';

	// Utils
	import { Logger, LoggerUtils } from '$lib/utils/logger';

	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';
	import LoginForm from '$lib/shared/components/login/Login.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';

	// End: Local Imports

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: "Home | Kayla's Corner",
		description:
			"Kayla Nicole Lare's writing space",
		keywords: ['kaylanicole', 'Kayla', 'kaylanicolelare']
	};

	const logger: Logger = LoggerUtils.getInstance('Index');

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>(
			'https://jsonplaceholder.typicode.com/photos?_limit=20'
		);
		logger.debug(data);

		/* Set the user logged variable to false since this is the home page but we will revisit this because it may make sense for a user to go back to the home screen and still see that they are signed in. */

		logged.set(false);
	});

	const handlesignup = () => {
		goto('/signup');
	};

	let page = 'home';
</script>

<HeadTags {metaData} />

<section


	class=" relative body-font items-center bg-center bg-no-repeat bg-cover  bg-kaylanicole1 h-screen" 
>


	<!-- <div class="bg-opacity-50 bg-black h-screen">  -->
		<div>
<!--		<img src="static/RTI-logo-white.svg" class="w-32 h-32 relative -top-7 left-2" />  -->
		<br />
		<div class="grid grid-cols-2 justify-content text-center">
			<div class="grid grid-cols-3 gap-4">
<!--				{#if page === 'home'}
					<div class="mr-8 mt-24">
						<p
							class="title-font sm:text-4xl text-8xl mb-4 text-white-900 font-extrabold text-gray-300 "
						>
							Kayla's Corner
						</p>
						<p class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 italic">
							I believe that a book is a collection of thoughts that can change this world.
						</p>
					</div>
				{/if}  -->
<!--				{#if page === 'about'}
					<div class="ml-16 mt-48">
						<p
							class="ml-36 title-font sm:text-4xl  text-7xl mb-4 text-white-900 font-extrabold text-gray-300 "
						>
							ABOUT
						</p>
						<p class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 italic">
							RTI Cloud Billing System Version 1.0
						</p>
						<p class="title-font  text-xl mb-4 font-medium text-gray-300 italic">
							&#xa9; Copyright RTI, International 2021 - All Rights Reserved.
						</p>
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">About RTI</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
							"RTI International is an independent nonprofit research institute dedicated to improving
							the human condition."
						</p>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white mt-8">
							For more information, please visit <br /><a
								class="mb-8 leading-relaxed text-xl text-gray-200"
								href="https://rti.org"
							>
								| RTI International |
							</a>
						</p>  
					</div>  
				{/if}  
			</div> 
		<div class="mt-32 ml-64">
	
			<button
				class="bg-purple-500 px-10 py-4 rounded-lg hover:opacity-100 {page === 'about'
					? 'active'
					: 'not_active'}"
				on:click={() => (page = 'about')}
			>
				<div class="grid grid-cols-1 {page === 'about' ? 'active-text' : 'not_active_text'}">
					<span>About</span><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 ml-3"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</button>  -->
		</div>
	</div>
	</div>
</section>

<style>

	.not_active {
		@apply bg-opacity-50;
	}

	.not_active:hover {
		@apply bg-opacity-100;
	}

	.not_active_text {
		@apply text-black;
	}
</style>
