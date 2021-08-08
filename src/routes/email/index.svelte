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
					class="h-screen overflow-scroll block mr-2 bg-teal-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-teal-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Email
					</h1>
					<div class="bg-teal-300 w-full flex p-6" />
					<form class="w-full bg-teal-300">
						<input
							class="border-b-2 w-full text-3xl font-serif"
							type="text"
							placeholder="To:"
							name="to"
						/><br />
						<input
							class="border-b-2 w-full text-3xl font-serif"
							type="text"
							placeholder="Subject:"
							name="subject"
						/><br />
						<textarea class="w-full h-96 pl-4 pt-4" name="message" />
						<div class="inline mt-0">
							<input
								class="bg-teal-800 py-4 px-4 text-white"
								type="submit"
								name="send"
								value="Send"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
