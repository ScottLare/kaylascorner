<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	import { goto } from '$app/navigation';
	import { DATA } from '$lib/utils/index';
	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';
	import Dropdownlist from '$lib/shared/components/dropdownlist/Dropdownlist.svelte';
	import VerToolbar from '$lib/shared/components/vertToolbar/verToolbar.svelte';

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
	const goToDashboard = () => {
		goto('/dashboard');
	};

	let data = DATA;
</script>

<HeadTags {metaData} />
<body class="m-0 overflow-hidden">
	<!-- DASHBOARD -->
	<div id="dashboard">
		<!-- Dropdown List component -->
		<Dropdownlist
			bg_color="bg-blue-400"
			name_1="RTI Group"
			name_4="Notifications"
			text_color1="text-blue-600"
			name_inner_1={data[0].name}
		>
			<span slot="name1_dropdown"
				><div class="text-center font-mono">
					<ul class="pl-0 pt-3 list-none">
						{#each data as source}
							<li class="pt-point-6 px-4 font-mono text-blue-800 hover:text-blue-400">
								{source.name}
							</li>
						{/each}
						<li />
					</ul>
				</div></span
			>
			<span slot="name4_dropdown">
				<div
					class="flex items-center hover:text-gray-300 text-gray-800"
					on:click={() => goto('/admin?alerts')}
				>
					<p class=" float-left m-4 text-xl no-underline font-normal cursor-pointer">
						System Alerts
						<span class="clear ml-20 text-xl no-underline font-normal cursor-pointer ">3</span>
					</p>
				</div>
				<hr
					class="clear-both ml-4point5 w-3/5 border-none h-px bg-messagesHr overflow-visible box-content border-2 border-black"
				/>
				<ul class="clear-both list-none pl-0 pt-5 pb-5">
					<li class="py-point-6 px-4"><em class="italic font-normal">No messages</em></li>
				</ul>
			</span>
		</Dropdownlist>
		<!-- end utility -->
		<div class="row main overflow-y-auto w-full clear-both">
			<div
				class="bg-iframeback bg-no-repeat bg-scroll bg-clip-border bg-cover flex-1 flex bg-dashboard"
			>
				<!-- Vertical Toolbar -->
				<VerToolbar nav_link1="/billing" nav_link2="/import" nav_link3="/admin" nav_link4="/help" />

				<!-- default subscription dashboard -->
				<div
					id="default"
					class="h-screen overflow-hidden block mr-2 bg-teal-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-teal-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Message
					</h1>
					<div class="bg-teal-600 w-full p-6" />
					<div class="flex">
						<div class="left w-2/5 h-screen bg-teal-400">
							<div class="flex m-3 bg-white rounded-lg">
								<div>
									<img
										class="w-14 h-14 rounded-full"
										src="static/RTI_favicon.ico"
										alt="User Image"
									/>
								</div>
								<div class="flex-grow p-3">
									<div class="flex text-sm justify-between">
										<div>Bot</div>
										<div class="text-gray-400">10:00 AM</div>
									</div>
									<div class="text-xs text-gray-400">You: Thank you so much! I will &#128526;</div>
								</div>
							</div>
							<div class="flex m-3 bg-white rounded-lg">
								<div>
									<img
										class="w-14 h-14 rounded-full"
										src="static/RTI_favicon.ico"
										alt="User Image"
									/>
								</div>
								<div class="flex-grow p-3">
									<div class="flex text-sm justify-between">
										<div class="font-bold">Scott</div>
										<div class="text-gray-400">12:00 PM</div>
									</div>
									<div class="text-xs text-black font-bold">Don't forget to do your timesheet!</div>
								</div>
							</div>
							<div class="flex m-3 bg-white rounded-lg">
								<div>
									<img
										class="w-14 h-14 rounded-full"
										src="static/RTI_favicon.ico"
										alt="User Image"
									/>
								</div>
								<div class="flex-grow p-3">
									<div class="flex text-sm justify-between">
										<div>Ramesh</div>
										<div class="text-gray-400">3:00 PM</div>
									</div>
									<div class="text-xs text-gray-400">
										You: Can you send me the data for Bloomberg?
									</div>
								</div>
							</div>
							<div class="flex m-3 bg-white rounded-lg">
								<div>
									<img
										class="w-14 h-14 rounded-full"
										src="static/RTI_favicon.ico"
										alt="User Image"
									/>
								</div>
								<div class="flex-grow p-3 truncate">
									<div class="flex text-sm justify-between">
										<div class="font-bold">Dom</div>
										<div class="text-gray-400">3:00 PM</div>
									</div>
									<div class="text-xs text-black font-bold overflow-auto truncate ... ">
										How many users are under the Twitter Feed subscription?
									</div>
								</div>
							</div>
						</div>
						<div class="right w-full">
							<div class="flex justify-center bg-gray-300">
								<img
									class="w-10 h-10 mt-2 mr-1  rounded-full"
									src="static/RTI_favicon.ico"
									alt="User Image"
								/>
								<h1 class="font-serif text-lg py-4 text-center">Bot</h1>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7 relative left-30rem mt-3 mr-10"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="mt-20 mb-16">
								<div class="bg-gray-300 w-2/5 mx-4 my-2 p-2 rounded-lg">
									<div class="flex justify-start mb-2">
										<p class="semibold text-sm font-semibold italic">Bot</p>
										<span class="ml-3 inline text-sm text-gray-600">6:00 AM</span>
									</div>
									<div class="inline">Hello Marcus, hope you are doing well</div>
								</div>

								<div class="bg-gray-300 w-2/5 mx-4 my-2 p-2 rounded-lg">
									<div class="flex justify-start mb-2">
										<p class="semibold text-sm font-semibold italic">Bot</p>
										<span class="ml-3 inline text-sm text-gray-600">6:01 AM</span>
									</div>
									Keep up the great work! &#128512;
								</div>
								<div class="bg-green-300 w-2/5 mx-4 my-2 p-2 rounded-lg float-right">
									<div class="flex justify-start mb-2">
										<span class="inline text-sm text-gray-600">6:05 AM</span>
									</div>
									Thank you so much! I will &#128526;
								</div>
								<div class="fixed w-4/6 flex justify-between bottom-7 pr-9">
									<textarea
										class="flex-grow m-2 py-2 px-4 mr-1 rounded-full border-gray-300 bg-gray-200 resize-none focus:outline-none focus:ring focus:border-l-2 focus:border-teal-300"
										rows="1"
										placeholder="Message..."
									/>

									<button class="m-2 py-3 px-3 bg-teal-400 rounded-lg text-white">
										Send Message
									</button>
								</div>
								<div class="fixed w-4/6 flex justify-start bottom-2 pl-5 pr-9">
									<div class="share mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
											/>
										</svg>
									</div>
									<div class="translate mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<div class="paperclip mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<div class="link mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<div class="cloud mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
											/>
										</svg>
									</div>
									<div class="pic mr-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
