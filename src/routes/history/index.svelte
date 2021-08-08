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
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<div class="flex justify-evenly relative h-97perc max-h-92perc">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div
								id="teamCard"
								class="flex-one-one-49perc relative h-screen m-dashboardCards overflow-y-auto"
							>
								<div class="teamList bg-fff relative h-fullc m-teamList rounded-2px p-8">
									<!--- History -->
									<div class="flex justify-between">
										<h1 class="text-4xl">History of System Alerts</h1>
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
									{#if alerts === undefined}
										Loading ......
									{:else}
										<table class="w-full mt-7">
											<tr class="bg-blue-700 text-gray-300 uppercase text-sm leading-normal">
												<th class="py-4 px-6 text-left w-1/5">
													<span>Title</span>
												</th>
												<th class="py-4 px-3 text-center w-1/5 truncate ...">Description</th>
												<th class="py-4 px-3 text-center">Issued By</th>
												<th class="py-4 px-3 text-center">Action</th>
												<th class="py-4 px-3 text-center">Date</th>
												<th class="py-4 px-3 text-center">Time</th>
											</tr>
											{#each alerts.alerts as thealert, i}
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
														>{#if alerts.alerts[i].action === 'Deleted'}
															<span
																class="bg-red-200  rounded-full py-1 px-3 font-black text-red-700 relative left-16"
																>Deleted</span
															>
														{:else}
															{#if alerts.alerts[i].action === 'Updated'}
																<span
																	class="bg-blue-200  rounded-full py-1 px-3 font-black text-blue-700 relative left-16"
																	>Updated</span
																>
															{:else}
																<span
																	class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative left-16"
																	>Added</span
																>
															{/if}
														{/if}
													</td>
													<td class="py-4 px-3 text-center">{alerts.alerts[i].targetDate}</td>
													<td class="py-4 px-3 text-center">{alerts.alerts[i].targetTime}</td>
												</tr>
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
