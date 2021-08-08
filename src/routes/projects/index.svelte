<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	import { goto } from '$app/navigation';
	import { DATA } from '$lib/utils/index';
	import SvelteTable from 'svelte-table';

	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';
	import Dropdownlist from '$lib/shared/components/dropdownlist/Dropdownlist.svelte';
	import VertTool from '$lib/shared/ui/components/vertTool/vertTool.svelte';
	import Navbar from '$lib/shared/components/navbar/navbar.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';

	import { onMount } from 'svelte';
	// End: Local Imports

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'About | Data Integrator',
		description: 'About page of the RTI International, Inc. Data Integrator',
		url: '/about',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/months'
	};

	let data = DATA;
	let projects;

	let showModal = false;
	let project = '';
	let fields;
	$: head = [];

	onMount(async () => {
		fields = await getFields();
		projects = await getProjects();
		const urlParams = new URLSearchParams(window.location.search);
		project = urlParams.get('project');

		for (var i = 0; i < fields.fields.length; i++) {
			let obj = fields.fields[i].name;
			let appendObj = {
				key: obj,
				title: obj,
				renderValue: (v) => {
					return `<span>${obj}</span>`;
				},
				headerClass: 'py-3 px-6'
			};
			head.push(appendObj);
		}
		console.log(head);
	});

	/* Fetch for Projects */
	async function getProjects() {
		let response = await fetch('src/lib/utils/json_files/projects.json');

		let theprojects = await response.json();
		return theprojects;
	}

	/* Fetch for fields */
	async function getFields() {
		let response = await fetch('src/lib/utils/json_files/fields.json');

		let thefields = await response.json();
		return thefields;
	}
</script>

<Navbar />
<HeadTags {metaData} />
<body class="">
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

				<!-- billing dashboard -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Billing
					</h1>

					<div class="flex justify-evenly relative h-97perc max-h-92perc -top-2 overflow-y-scroll">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-full tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div id="teamCard" class="flex-one-one-49perc relative h-full m-dashboardCards">
								<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 -top-4">
									<div class="flex justify-between">
										<div class="flex">
											<h1 class="text-4xl">{data[0].name}</h1>
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
										<h3 class="uppercase text-4xl font-mono mr-28">Project {project}</h3>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-8 w-8 text-blue-500 relative top-2 mr-3 cursor-pointer"
											viewBox="0 0 20 20"
											fill="currentColor"
											on:click={() => goto('/billing')}
										>
											<path
												fill-rule="evenodd"
												d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<hr class="border-2 border-gray-500 my-4 mx-6" />
									<div
										class="fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showModal ===
										true
											? 'flex'
											: 'hidden'}"
									>
										<div class="relative mx-auto">
											<div class="relative bg-white shadow-lg rounded-md text-gray-900 w-full">
												<header class="flex items-center justify-between">
													<h2 class="font-semibold ml-64">Get Reports</h2>
													<button
														class="focus:outline-none p-2"
														on:click={() => (showModal = false)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																fill-rule="evenodd"
																d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
																clip-rule="evenodd"
															/>
														</svg>
													</button>
												</header>
												<main class="p-2 text-center">
													<div class="flex items-center justify-center">
														<button
															class="px-3 bg-blue-700 rounded-lg mr-4 hover:bg-blue-400 text-white"
															on:click={() => goto('/import')}>This Month</button
														>
														<button
															class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
															on:click={() => goto('/import')}>Last Month</button
														>
														<button
															class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
															on:click={() => goto('/import')}>Last 3 Months</button
														>
														<button
															class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
															on:click={() => goto('/import')}>Last 6 Months</button
														>
														<button class="px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
															>Other</button
														>
													</div>
												</main>
											</div>
										</div>
									</div>
									{#if projects === undefined}
										Loading table ....
									{:else}
										{#each projects.projects as thisproject, i}
											{#if project === projects.projects[i].name}
												<div class="bg-white flex flex-col justify-center mt-16">
													<div
														class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
													>
														<!-- Card 1 -->
														<div
															class="bg-indigo-600 border-indigo-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-indigo-400 hover:border-transparent | transition-colors duration-500"
														>
															<div class="col-start-1 col-end-3 justify-start">
																<p class="text-white text-xl relative ml-6 -top-3">
																	Total Monthly Cost
																</p>
															</div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="w-12 h-12 object-cover text-white relative -left-4"
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
															<div class="mt-2">
																<p
																	class="text-white text-3xl text-justify font-semibold relative -left-24 ml-2"
																>
																	{projects.projects[i].cost.toFixed(5)}
																</p>
															</div>
														</div>
														<!-- End of Card 1-->
														<!-- Card 2 -->
														<div
															class="bg-yellow-600 border-yellow-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-yellow-400 hover:border-transparent | transition-colors duration-500"
														>
															<div class="col-span-2">
																<p class="text-white text-xl relative ml-1 -left-3 -top-3 ">
																	Total Monthly Surcharge
																</p>
															</div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="w-12 h-12 object-cover text-white relative -left-4"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fill-rule="evenodd"
																	d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
																	clip-rule="evenodd"
																/>
															</svg>
															<div class="mt-2">
																<p
																	class="text-white text-3xl text-justify font-semibold relative -left-14"
																>
																	{(projects.projects[i].cost * 0.014).toFixed(5)}
																</p>
															</div>
														</div>
														<!--End of Card 2-->

														<!-- Card 3 -->
														<div
															class="bg-pink-600 border-pink-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-pink-400 hover:border-transparent | transition-colors duration-500"
														>
															<div class="grid col-span-2">
																<p class="text-white text-lg">
																	Total Montly {data[0].name} Expenses
																</p>
															</div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="w-12 h-12 object-cover text-white relative -left-4"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M20 12H4"
																/>
															</svg>
															<div class="mt-2">
																<p
																	class="text-white text-3xl text-justify font-semibold relative -left-14"
																>
																	{projects.projects[i].expenses}
																</p>
															</div>
														</div>
														<!--End of Card 3-->
														<!-- Card 4 -->
														<div
															class="bg-green-600 border-green-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-green-400 hover:border-transparent | transition-colors duration-500 {projects
																.projects[i].isProfit === true
																? 'bg-green-600'
																: 'bg-red-600'}
															{projects.projects[i].isProfit === true ? 'border-green-600' : 'border-red-600'}
															{projects.projects[i].isProfit === true ? 'hover:bg-green-400' : 'hover:bg-red-400'}"
														>
															<div class="col-span-2">
																<p class="text-white text-xl">Total Monthly Profit / Loss</p>
															</div>
															{#if projects.projects[i].isProfit === true}
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	class="w-12 h-12 object-cover text-white relative -left-4"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M12 6v6m0 0v6m0-6h6m-6 0H6"
																	/>
																</svg>
															{:else}
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	class="w-12 h-12 object-cover text-white relative -left-4"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M20 12H4"
																	/>
																</svg>
															{/if}
															<div class="mt-2">
																<p
																	class="text-white text-3xl text-justify font-semibold relative -left-14"
																>
																	{projects.projects[i].profit_loss_cost}
																</p>
															</div>
														</div>
														<!--End of Card 4-->
													</div>
												</div>
											{/if}
										{/each}
										{#if head.length < 1}
											<div class="">Loading</div>
										{:else}
											<div class="grid grid-cols-1 mt-6">
												<div class="overflow-x-auto overflow-y-scroll">
													<SvelteTable
														columns={head}
														rows={projects.projects}
														classNameTable="w-full table-auto mt-7 w-full mt-7 overflow-y-scroll"
														classNameThead="bg-blue-500 text-white uppercase text-sm leading-normal"
														classNameRow="text-center border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
														classNameCell="py-3 px-6"
													/>
												</div>
											</div>
										{/if}
									{/if}
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
