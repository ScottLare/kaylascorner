<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	import { goto } from '$app/navigation';
	import { DATA } from '$lib/utils/index';
	import { Grid } from 'ag-grid-community';
	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';
	import Dropdownlist from '$lib/shared/components/dropdownlist/Dropdownlist.svelte';
	import VertTool from '$lib/shared/ui/components/vertTool/vertTool.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';
	import { logged } from '$lib/utils/userLogged';

	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

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

	import { onMount } from 'svelte';
	import Navbar from '$lib/shared/components/navbar/navbar.svelte';

	let data = DATA;
	let openedTab = 'roles';
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
				<!-- Vertical Toolbar-->
				<VertTool />
				<!-- billing dashboard -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Settings
					</h1>
					<div class="border-b-2 border-gray-400 ml-3 mr-3">
						<ul class="flex cursor-pointer">
							<li
								class="py-2 px-6 rounded-t-lg relative {openedTab === 'roles'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'roles';
								}}
							>
								Roles
							</li>
							<li
								class="py-2 px-6 rounded-t-lg relative {openedTab === 'preferences'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'preferences';
								}}
							>
								User Preferences
							</li>
						</ul>
					</div>
					<div id="roles" class={openedTab === 'roles' ? 'block' : 'hidden'}>
						<div
							class="flex justify-evenly relative h-97perc max-h-92perc -top-2 overflow-y-scroll"
						>
							<div
								class="text-rem-1point1 mt-4 flex-one-one-49perc h-full tracking-zero-point-one-rem"
								style="text-indent: 27px;"
							>
								<div id="teamCard" class="flex-one-one-49perc relative h-full m-dashboardCards">
									<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 -top-4">
										<div class="flex justify-between">
											<h1 class="text-4xl">Your Active Roles:</h1>
										</div>
										<div class="grid grid-cols-2 mt-10">
											<!--User Card -->
											<div
												class=" bg-gradient-to-r from-blue-300 to-purple-500 p-10 rounded-xl cursor-pointer grid grid-cols-2 gap-2 "
											>
												<h2 class="text-white text-7xl mt-16">User</h2>
												<img src="static/monkey_piece.png" class="h-60 w-60 relative -top-4" />
											</div>
											<div class="p-2 text-center">
												<p class="mt-2">
													This role is by default given to all users in the cloud billing systems.
												</p>
												<h2 class="mt-3 font-semibold">Permissions of the User Role:</h2>
												<ul class="mt-3">
													<li class="list-item">
														&#128309; &nbsp; Access to the Billing, Import, and Documentation tool
													</li>
													<li class="list-item">
														&#128309; &nbsp; Read Only permissions on documents
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to change settings related to your UI
														Experience
													</li>
												</ul>
											</div>
											<!-- End of User Card-->
											<!--Admin Card -->
											<div
												class=" bg-gradient-to-r from-green-300 to-blue-500 p-10 rounded-xl cursor-pointer mt-20 grid grid-cols-2 gap-2 "
											>
												<h2 class="text-white text-7xl mt-16">Admin</h2>
												<img src="static/cat_in_suit.png" class="h-60 w-60 relative -top-4" />
											</div>
											<div class="p-2 text-center mt-16">
												<p class="mt-2">This role must be requested.</p>
												<h2 class="mt-3 font-semibold">Permissions of the Admin Role:</h2>
												<ul class="mt-3">
													<li class="list-item">
														&#128309; &nbsp; Access to the Billing, Import, and Documentation tool
														as well as <span class="font-bold">Admin</span> tool
													</li>
													<li class="list-item">
														&#128309; &nbsp; Read and Write permissions on documents
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to change settings related to your UI
														Experience
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to send system alerts to all users in the Cloud
														Billing System
													</li>
												</ul>
											</div>
											<!-- End of Admin Card-->
											<!--Manager Card -->
											<div
												class=" bg-gradient-to-r from-yellow-300 to-green-500 p-10 rounded-xl cursor-pointer mt-20 grid grid-cols-2 gap-2 "
											>
												<h2 class="text-white text-7xl mt-16">Manager</h2>
												<img src="static/cat_in_chair.png" class="h-64 w-64 relative -top-4" />
											</div>
											<div class="p-2 text-center mt-16">
												<p class="mt-2">This role must be requested.</p>
												<h2 class="mt-3 font-semibold">Permissions of the Manager Role:</h2>
												<ul class="mt-3">
													<li class="list-item">
														&#128309; &nbsp; Access to the Billing, Import, and Documentation tool
														as well as <span class="font-bold">Admin</span> tool
													</li>
													<li class="list-item">
														&#128309; &nbsp; Read and Write permissions on documents
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to change settings related to your UI
														Experience
													</li>
													<li>
														&#128309; &nbsp; Ability to send system alerts to all users in the Cloud
														Billing System
													</li>
												</ul>
											</div>
											<!-- End of Manager Card-->
										</div>
										<div class="flex justify-between mt-10">
											<h1 class="text-4xl">Available Roles:</h1>
										</div>
										<div class="grid grid-cols-2 mt-10">
											<!--Tester Card -->
											<div
												class=" bg-gradient-to-r from-purple-300 to-blue-500 p-10 rounded-xl cursor-pointer grid grid-cols-2 gap-2 "
											>
												<h2 class="text-white text-7xl mt-16">Tester</h2>
												<img src="static/monkey_thumbs.png" class="h-60 w-60 relative -top-4" />
											</div>
											<div class="p-2 text-center">
												<p class="mt-2">This role must be requested.</p>
												<h2 class="mt-3 font-semibold">Permissions of the Tester Role:</h2>
												<ul class="mt-3">
													<li class="list-item">
														&#128309; &nbsp; Access to the Billing, Import, and Documentation tool
														as well as <span class="font-bold">Admin</span> tool
													</li>
													<li class="list-item">
														&#128309; &nbsp; Read and Write permissions on documents
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to change settings related to your UI
														Experience
													</li>
													<li class="list-item">
														&#128309; &nbsp; Ability to run tests on the Cloud Billing System
													</li>
												</ul>
											</div>
											<!-- End of Tester Card-->
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
