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
		searchUrl: '/about'
	};

	let data = DATA;
	let alerts;
	let showEditForm = false;
	let showDeleteForm = false;

	onMount(async () => {
		alerts = await getAlerts();
	});

	async function getAlerts() {
		let user_response = await fetch('src/lib/utils/json_files/alerts.json');

		let theseAlerts = await user_response.json();

		return theseAlerts;
	}
</script>

<Navbar />
<HeadTags {metaData} />
<body>
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
				<VerToolbar
					nav_link1="/billing"
					nav_link2="/import"
					nav_link3="/admin"
					nav_link4="/help"
					nav_link5="/settings"
					active="nav_link3"
				/>

				<!-- admin board -->
				<div
					id="default"
					class="h-full block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<div class="flex justify-evenly relative">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div id="teamCard" class="flex-one-one-49perc relative h-screen m-dashboardCards">
								<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8">
									<!--- History -->
									<div class="flex justify-between">
										<h1 class="text-4xl">Scheduled System Alerts</h1>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-8 w-8 text-blue-500 relative top-2 mr-3 cursor-pointer"
											viewBox="0 0 20 20"
											fill="currentColor"
											on:click={() => goto('/admin?alerts')}
										>
											<path
												fill-rule="evenodd"
												d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<hr class="border-2 border-gray-500 my-4 mx-6" />
									<!-- Edit Form when the pencil icon is clicked -->
									<div
										class="editForm fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showEditForm ===
										true
											? 'flex'
											: 'hidden'}"
									>
										<div class="relative mx-auto">
											<div class="relative bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
												<header class="flex items-center justify-between">
													<h2 class="font-semibold mt-4 text-3xl ml-28">Edit System Alert</h2>
													<button
														class="focus:outline-none p-2"
														on:click={() => (showEditForm = false)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 relative top-2"
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
													<form action="/doubler" method="post" class="mb-0 space-y-6 mt-4">
														<div class="mt-4">
															<label
																for="editTitle"
																class="block text-sm font-medium text-blue-700 mr-4 "
																>Title of Alert</label
															>
															<div class="mt-3">
																<input
																	id="editTitle"
																	name="editTitle"
																	type="text"
																	required
																	class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm mr-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																/>
															</div>
														</div>
														<div class="mr-3">
															<label
																for="editDescription"
																class="block text-sm font-medium text-blue-700">Description</label
															>
															<div class="mt-3">
																<input
																	id="editDescription"
																	name="editDescription"
																	type="text"
																	required
																	class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																/>
															</div>
															<div class="mr-3">
																<label
																	for="editStartDate"
																	class="block text-sm font-medium text-blue-700 mt-3"
																	>Start Date</label
																>
																<div class="mt-3 ml-2">
																	<input
																		id="editStartDate"
																		name="editStartDate"
																		type="date"
																		required
																		class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																	/>
																</div>
																<div class="mt-3 ml-3">
																	<label
																		for="editStartTime"
																		class="block text-sm font-medium text-blue-700 mt-3"
																		>Start Time</label
																	>
																	<div class="mt-3">
																		<input
																			id="editStartTime"
																			name="editStartTime"
																			type="time"
																			required
																			class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																		/>
																	</div>
																</div>
																<div class="mt-3 ml-3">
																	<label
																		for="editComments"
																		class="block text-sm font-medium text-blue-700 mt-3"
																		>Comments</label
																	>
																	<div class="mt-3">
																		<input
																			id="editComments"
																			name="editComments"
																			type="text"
																			required
																			class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																		/>
																	</div>
																</div>
																<div class="mt-3 ml-3">
																	<label
																		for="editFiles"
																		class="block text-sm font-medium text-blue-700 mt-3"
																		>Attach A File</label
																	>
																	<div class="mt-3">
																		<input
																			id="editFiles"
																			name="editFiles"
																			type="file"
																			required
																			class="w-96 border border-gray-300 px-3 py-2 rounded-lg bg-white text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																		/>
																	</div>
																</div>
																<div class="mt-8 flex justify-center">
																	<button
																		type="submit"
																		class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-10 focus:ring-blue-500"
																		on:click={() => (showEditForm = false)}>Edit Alert</button
																	>
																	<button
																		type="submit"
																		class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
																		on:click={() => (showEditForm = false)}>Cancel Alert</button
																	>
																</div>
															</div>
														</div>
													</form>
												</main>
											</div>
										</div>
									</div>
									<!-- Delete Modal when Trash Icon is clicked -->

									<div
										class="deleteForm fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showDeleteForm ===
										true
											? 'flex'
											: 'hidden'}"
									>
										<div class="relative mx-auto">
											<div class="relative bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
												<header class="flex items-center justify-between">
													<h2 class="font-semibold mt-4 text-3xl ml-16">Delete System Alert</h2>
													<button
														class="focus:outline-none p-2"
														on:click={() => (showDeleteForm = false)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 relative top-2"
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
													<h2 class="font-bold mt-3">
														Are you sure you want to delete this alert?
													</h2>
													<p class="mr-2 mt-3">Name: Software Update</p>
													<p class="mr-2 mt-3">Deleted alerts will be shown on the History page.</p>
													<div class="mt-8 flex justify-center">
														<button
															href="/"
															class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
															on:click={() => (showDeleteForm = false)}>Delete Alert</button
														>
														<button
															href="/"
															class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
															on:click={() => (showDeleteForm = false)}>Cancel Alert</button
														>
													</div>
												</main>
											</div>
										</div>
									</div>
									{#if alerts === undefined}
										Loading ....
									{:else}
										<table class="w-full mt-7">
											<tr class="bg-blue-700 text-gray-300 uppercase text-sm leading-normal">
												<th class="py-4 px-6 text-left w-1/5">
													<span>Title</span>
												</th>
												<th class="py-4 px-3 w-1/5 text-center">Description</th>
												<th class="py-4 px-3 text-center">Issued By</th>
												<th class="py-4 px-3 text-center">Status</th>
												<th class="py-4 px-3 text-center">Target Date</th>
												<th class="py-4 px-3 text-center">Target Time</th>
												<th class="py-4 px-3 text-center">Actions</th>
											</tr>
											{#each alerts.alerts as the_alert, i}
												{#if alerts.alerts[i].status === 'Incoming'}
													<tr
														class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
													>
														<td class="py-4 px-6 text-left whitespace-nowrap">
															{#if alerts.alerts[i].title === 'Upcoming Maintence'}
																<span
																	class="bg-yellow-300 text-yellow-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{:else if alerts.alerts[i].title === 'Network Outage'}
																<span
																	class="bg-purple-300 text-purple-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{:else}
																<span
																	class="bg-blue-300 text-blue-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{/if}
														</td>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].description}</td>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].issuedBy}</td>
														<td class="py-3 px-6 text-left"
															><span
																class="bg-blue-200  rounded-full py-1 px-3 font-black text-blue-700 relative left-7"
																>Incoming</span
															></td
														>
														<td class="py-4 px-3 text-center mr-2">{alerts.alerts[i].targetDate}</td
														>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].targetTime}</td>
														<td class="py-4 px-3 text-center"
															><div class="flex justify-center">
																<div>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		class="h-5 w-5 mr-3"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		on:click={() => (showEditForm = true)}
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
																		on:click={() => (showDeleteForm = true)}
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
												{/if}
											{/each}
											{#each alerts.alerts as the_alert, i}
												{#if alerts.alerts[i].status === 'Current'}
													<tr
														class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
													>
														<td class="py-4 px-6 text-left whitespace-nowrap">
															{#if alerts.alerts[i].title === 'Upcoming Maintence'}
																<span
																	class="bg-yellow-300 text-yellow-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{:else if alerts.alerts[i].title === 'Network Outage'}
																<span
																	class="bg-purple-300 text-purple-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{:else}
																<span
																	class="bg-blue-300 text-blue-700 font-bold opacity-75 px-2 py-2 rounded-full"
																	>{alerts.alerts[i].title}</span
																>
															{/if}
														</td>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].description}</td>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].issuedBy}</td>
														<td class="py-3 px-6 text-left"
															><span
																class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative left-7"
																>Current</span
															></td
														>
														<td class="py-4 px-3 text-center mr-2">{alerts.alerts[i].targetDate}</td
														>
														<td class="py-4 px-3 text-center">{alerts.alerts[i].targetTime}</td>
														<td class="py-4 px-3 text-center"
															><div class="flex justify-center">
																<div>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		class="h-5 w-5 mr-3"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		on:click={() => (showEditForm = true)}
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
																		on:click={() => (showDeleteForm = true)}
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
												{/if}
											{/each}
										</table>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="bottom-0 fixed bg-gray-variant1 h-12 w-full block clear-both font-normal font-mono-sans not-italic"
			>
				<a
					href="https://www.rti.org"
					class="RTILogo pt-0 pl-4 pr-4 float-left"
					style="padding-top: 0"
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
					RTI International is a trade name of Research Triangle Institute. RTI and the RTI logos
					are U.S. registered trademarks of Research Triangle Institute.
				</p>
			</div>
		</div>
	</div></body
>
