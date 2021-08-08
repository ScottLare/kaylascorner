<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'About | Data Integrator',
		description: 'About page of the RTI International, Inc. Data Integrator',
		url: '/about',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/about'
	};
</script>

<HeadTags {metaData} />

<section class="text-gray-600 body-font items-center bg-center bg-cloudbillingbkgrd">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
		<!--		<p class="text-white">RTI International is a trade name of Research Triangle Institute. </p>  -->

		<!--			<p>RTI and the RTI logos are U.S. registered trademarks of Research Triangle Institute.</p>   -->

		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<!--		<br/><br/>   -->
			<!--			<h1 class="title-font sm:text-4xl text-3xl mb-4 text-white-900 font-extrabold">&nbsp;The Data <br/>Integrator </h1>  -->
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<p class="mb-8 leading-relaxed text-2xl text-white">RTI Cloud Billing System Version 1.0</p>
			<p class=" text-sm text-white font-mono">
				&#xa9; Copyright RTI, International 2021 - All Rights Reserved.
			</p>

			<div class="container px-5 py-24 mx-auto">
				<div class="flex flex-col text-center w-full mb-20">
					<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">About RTI</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-700">
						"RTI International is an independent nonprofit research institute dedicated to improving
						the human condition."
					</p>
					<br />
					<!--					<p class="lg:w-2/3 mx-auto leading-relaxed text-base"	
						>Our vision is to address the world's most critical problems with science-based solutions in pursuit of a better future. </p
					>  -->
					<br />
					<!--					<p class="lg:w-2/3 mx-auto leading-relaxed text-base"	
						>Clients rely on us to answer questions that demand an objective and multidisciplinary approach—one that integrates expertise across the social and laboratory sciences, engineering, and international development. </p
					>    
					<br/>-->
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
						For more information, please visit <br /><a
							class="mb-8 leading-relaxed text-xl text-blue-700"
							href="https://rti.org"
						>
							| RTI International |
						</a>
					</p>

					<!--					<p class="text-teal-800">RTI International is a trade name of Research Triangle Institute. RTI and the RTI logos are U.S. registered trademarks of Research Triangle Institute.</p>  -->
				</div>
			</div>

			<!--			<p class="mb-8 leading-relaxed">Typescript | Husky | Storybook</p>
			<p class="mb-8 leading-relaxed">PWA | SSR | Scalable project structure</p>  -->
		</div>
		<!--		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded "
				alt="hero"
				  src="https://dummyimage.com/720x600"
				width="720"
				height="600"
			/>  
		</div>  -->
	</div>

	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
</section>
