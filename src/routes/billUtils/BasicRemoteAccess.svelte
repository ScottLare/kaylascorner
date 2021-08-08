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
				<VertTool />

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
										<h1 class="text-4xl">Basic Remote Access</h1>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-8 w-8 text-blue-500 relative top-2 mr-3 cursor-pointer"
											viewBox="0 0 20 20"
											fill="currentColor"
											on:click={() => goto('/admin?alerts')}
										>
											<!--Need to change above routing to go to billing ultilites page-->
											<path
												fill-rule="evenodd"
												d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<hr class="border-2 border-gray-500 my-4 mx-6" />
									<div class="p-2 text-center">
										<h2 class="font-mono text-2xl">Edit Basic Remote Access Module Properties</h2>
										<form
											action="/doubler"
											method="post"
											class="mb-0 space-y-6 mt-4 grid grid-cols-3"
										>
											<div class="mt-4 col-span-3">
												<label for="editTitle" class="block text-sm font-medium text-blue-700 mr-4 "
													>Description (Appears on Invoice)</label
												>
												<div class="mt-3">
													<input
														id="editTitle"
														name="editTitle"
														type="text"
														placeholder="Basic Remote Access"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm mr-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													/>
												</div>
											</div>
											<div>
												<label for="editDescription" class="block text-sm font-medium text-blue-700"
													>Revenue Account Number</label
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
											</div>
											<div>
												<label for="exe" class="block text-sm font-medium text-blue-700"
													>EXE Filename</label
												>
												<div class="mt-3 ml-2">
													<input
														id="exe"
														name="exe"
														type="text"
														required
														class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													/>
												</div>
											</div>
											<div>
												<label for="editStartTime" class="block text-sm font-medium text-blue-700"
													>Service_Keyname</label
												>
												<div class="mt-3">
													<input
														id="keyname"
														name="keyname"
														type="text"
														required
														class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													/>
												</div>
											</div>
											<div class="mt-3 ml-3">
												<label for="rate" class="block text-sm font-medium text-blue-700 mt-3"
													>Service Rate</label
												>
												<div class="mt-3">
													<input
														id="rate"
														name="rate"
														type="text"
														required
														class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													/>
												</div>
											</div>
											<div class="col-span-2">
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Rate Description</label
												>
												<div class="mt-3">
													<input
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													/>
												</div>
											</div>
											<div>
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Service Uses Rate Multiplier</label
												>
												<div class="mt-3">
													<select
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													>
														<option value="no" selected>NO</option>
														<option value="yes">YES</option>
													</select>
												</div>
											</div>
											<div>
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Update General Ledger Every</label
												>
												<div class="mt-3">
													<select
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													>
														<option value="month" selected>Monthly</option>
														<option value="year">Yearly</option>
														<option value="semi">Semi-Yearly</option>
													</select>
												</div>
											</div>
											<div>
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Select Output Type</label
												>
												<div class="mt-3">
													<select
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													>
														<option value="month" selected>Monthly</option>
														<option value="year">Yearly</option>
														<option value="semi">Semi-Yearly</option>
													</select>
												</div>
											</div>
											<div>
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Service in Debug Mode</label
												>
												<div class="mt-3">
													<select
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													>
														<option value="no">NO</option>
														<option value="yes" selected>YES</option>
													</select>
												</div>
											</div>
											<div>
												<label
													for="rateDescrip"
													class="block text-sm font-medium text-blue-700 mt-3"
													>Service Enabled</label
												>
												<div class="mt-3">
													<select
														id="rateDescrip"
														name="rateDescrip"
														type="text"
														required
														class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
													>
														<option value="no">NO</option>
														<option value="yes" selected>YES</option>
													</select>
												</div>
											</div>
											<div>
												<button class="py-3 px-3 rounded-lg bg-green-500 hover:bg-green-300 mt-9"
													>Modify Service Definition</button
												>
											</div>
										</form>
									</div>
									<hr class="border-2 border-gray-500 mt-12 mb-4 mx-6" />
									<div class="p-2 text-center">
										<h2 class="font-mono text-2xl">Basic Remote Access .EXE Runtime Parameters</h2>
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
