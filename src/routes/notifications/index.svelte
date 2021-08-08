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
	import VertTool from '$lib/shared/ui/components/vertTool/vertTool.svelte';
	import Navbar from '$lib/shared/components/navbar/navbar.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';
	import About from '../about.svelte';
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

	let data = DATA;
</script>

<Navbar />
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
				class="bg-iframeback bg-no-repeat bg-scroll bg-clip-border bg-auto flex-1 flex bg-dashboard"
			>
				<!-- Vertical Toolbar -->
				<VertTool />

				<!-- user managment board -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Notifications
					</h1>
					<div class="border-b-2 border-gray-400 ml-3 mr-3">
						<ul class="flex cursor-pointer">
							<li class="py-2 px-6 bg-white text-gray-700 rounded-t-lg">Overview</li>
							<li class="py-2 px-6 bg-white text-gray-700 rounded-t-lg">Usage Reports</li>
							<li class="py-2 px-6 bg-blue-200 rounded-t-lg">System Alerts</li>
						</ul>
					</div>
					<div class="flex justify-evenly relative h-97perc max-h-92perc -top-2">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div
								id="teamCard"
								class="flex-one-one-49perc relative h-screen m-dashboardCards overflow-y-auto"
							>
								<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 -top-4">
									<div
										class="teamList bg-fff relative h-84perc rounded-2px p-8 max-h-74perc -top-4"
									>
										<div class="flex justify-between">
											<div class="flex">
												<h1 class="text-4xl">System Alerts</h1>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-5 w-5 relative top-2 ml-2 text-blue-500"
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
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-9 w-9"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<hr class="border-2 border-gray-500 my-4 mx-6" />
										<table class="w-full mt-7">
											<tr class="bg-blue-700 text-gray-300 uppercase text-sm leading-normal">
												<th class="py-4 px-6 text-left">
													<span>Title</span>
												</th>
												<th class="py-4 px-3 text-center">Description</th>
												<th class="py-4 px-3 text-center">Actions</th>
											</tr>
											<tr
												class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
											>
												<td class="py-4 px-6 text-left whitespace-nowrap">
													<span
														class="bg-blue-300 text-blue-700 font-bold opacity-75 px-2 py-2 rounded-full"
														>Software Update</span
													>
												</td>
												<td class="py-4 px-3 text-center"
													>A new software update is avaiable. Click the settings icon to start the
													update. Be sure to save your work first.</td
												>
												<td class="py-4 px-3 text-center"
													><div class="flex justify-center">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5 mr-3"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
																/>
															</svg>
														</div>
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fill-rule="evenodd"
																	d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
													</div></td
												>
											</tr>
											<tr
												class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
											>
												<td class="py-4 px-6 text-left whitespace-nowrap">
													<span
														class="bg-green-300 text-green-700 font-bold opacity-75 px-2 py-2 rounded-full"
														>New Project</span
													>
												</td>
												<td class="py-4 px-3 text-center"
													>Project Golf has been added to the billing page. Click here for more
													information.</td
												>
												<td class="py-4 px-3 text-center"
													><div class="flex justify-center">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5 mr-3"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
																/>
															</svg>
														</div>
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fill-rule="evenodd"
																	d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
													</div></td
												>
											</tr>
											<tr
												class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
											>
												<td class="py-4 px-6 text-left whitespace-nowrap">
													<span
														class="bg-green-300 text-green-700 font-bold opacity-75 px-2 py-2 rounded-full"
														>New Project</span
													>
												</td>
												<td class="py-4 px-3 text-center truncate ..."
													>Project Foxtrot has been added to the billing page. Click here for more
													information.</td
												>
												<td class="py-4 px-3 text-center"
													><div class="flex justify-center">
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5 mr-3"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
																/>
															</svg>
														</div>
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fill-rule="evenodd"
																	d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
													</div></td
												>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="bottom-0 fixed bg-gray-variant1 h-12 w-full block clear-both font-normal font-mono-sans not-italic"
		>
			<a href="https://www.rti.org" class="RTILogo pt-0 pl-4 pr-4 float-left" style="padding-top: 0"
				><img
					class="h-auto w-80px pt-point-6 border-none"
					src="static/RTI-logo-white.svg"
					alt="RTI Footer Logo"
				/>
			</a>
			<p class="float-right text-fff pr-20 mb-0 pt-2 font-mono-sans font-normal not-italic">
				RTI Cloud Billing System 1.0
			</p>
			<p
				class="float-left text-fff text-rem-point8 mb-0 pt-2 mt-1point3 font-mono-sans font-normal not-italic"
			>
				RTI International is a trade name of Research Triangle Institute. RTI and the RTI logos are
				U.S. registered trademarks of Research Triangle Institute.
			</p>
		</div>
	</div></body
>
