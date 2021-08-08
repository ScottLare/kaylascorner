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

				<!-- default help dashboard -->
				<div
					id="helpDashboard"
					class="row body overflow-y-auto dashboardContent h-screen block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<div id="helpCards" class="h-full relative flex">
						<div
							class="left flex-one-one-60perc bg-index-left overflow-y-scroll py-4 px-8 my-2 mx-point8 h-4/5"
						>
							<div class="helpContent h-full overflow-scroll">
								<!--- help content populated by js from helpcontent.js -->
								<!--Hardcoded for Now : Marcus-->
								<h1
									class="intromerge text-rem-1point9 text-blue-500 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0 font-mono-sans"
									id="intro"
								>
									Cloud Billing System™ Overview
								</h1>
								<p
									class="introtext text-rem-1 leading-1point3 text-gray-variant1 font-normal font-mono-sans my-4 mx-0 w-94perc"
								>
									The Cloud Billing System is an integration platform created by RTI to enable
									researchers and policy makers to monitor costs.
								</p>
								<p
									class="introtext text-rem-1 leading-1point3 text-gray-variant1 font-mono-sans font-normal my-4 mx-0 w-94perc"
								>
									With the Cloud Billing System, you can import billing documents, view costs, and
									more.
								</p>
								<h1
									class="text-rem-1point9 text-blue-400 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0 font-mono-sans"
									id="gettingStarted"
								>
									Getting Started with Cloud Billing System&trade;
								</h1>
								<p>Content coming soon ......</p>
								<h1
									class="merge-tools text-rem-1point9 text-blue-400 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0"
									id="tools"
								>
									Cloud Billing System&trade; Tools Guide
								</h1>
								<p>Content coming soon ......</p>
								<h1
									class="text-rem-1point9 text-blue-400 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0"
									id="userguide"
								>
									Cloud Billing System&trade; User's Guide
								</h1>
								<p>Content coming soon ......</p>
								<h1
									class="text-rem-1point9 text-blue-400 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0"
									id="glossary"
								>
									Cloud Billing System&trade; Glossary of Terms
								</h1>
								<p>Content coming soon ......</p>
								<h1
									class="text-rem-1point9 text-blue-400 inline-block pt-0 pr-4 pb-0 pl-0 my-point6 mx-0"
									id="glossary"
								>
									Cloud Billing System&trade; Tour
								</h1>
								<p>Content coming soon ......</p>
							</div>
						</div>
						<div
							class="right flex-zero-one-30perc bg-blue-500 p-16 my-2 mx-point8 text-rem-1point3 float-right font-mono-sans font-normal not-italic h-4/5"
						>
							<h2 class="text-rem-1point7 text-white font-mono-sans">Cloud Billing System</h2>
							<p
								class="active text-yellow-400 m-1point5 cursor-pointer tracking-zero-zero-four font-semibold font-mono-sans"
							>
								<a href="/">Overview</a>
							</p>
							<p
								class="text-white m-1point5 cursor-pointer tracking-zero-zero-four"
								id="helpGettingStarted"
							>
								<a href="/">Getting Started</a>
							</p>
							<p class="text-white m-1point5 cursor-pointer tracking-zero-zero-four" id="helpTools">
								<a href="/">Tools Guide</a>
							</p>
							<p class="text-white m-1point5 cursor-pointer tracking-zero-zero-four" id="helpUser">
								<a href="/">User's Guide</a>
							</p>
							<p
								class="text-white m-1point5 cursor-pointer tracking-zero-zero-four"
								id="helpGlossary"
							>
								<a href="/">Glossary of Terms</a>
							</p>
							<p id="helpTour" class="text-white m-1point5 cursor-pointer tracking-zero-zero-four">
								Tour
							</p>
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
		</div>
	</div></body
>
