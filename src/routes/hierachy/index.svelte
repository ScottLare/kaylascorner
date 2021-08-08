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
				<VerToolbar nav_link1="/billing" nav_link2="/import" nav_link3="/admin" nav_link4="/help" />

				<!-- user managment board -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Hierachy
					</h1>
					<div class="border-b-2 border-gray-400 ml-3 mr-3">
						<ul class="flex cursor-pointer">
							<li class="py-2 px-6 rounded-t-lg bg-blue-300 relative">List</li>
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
								<div
									class="teamList bg-fff relative h-84perc m-teamList rounded-2px p-8 max-h-74perc -top-4"
								>
									<img src="static/hierachy.png" alt="hierachy" class="ml-40" />
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
	</div></body
>
