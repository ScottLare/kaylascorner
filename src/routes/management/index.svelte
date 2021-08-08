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
			name_2="User Management"
			name_4="Help"
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
			<span slot="name2_dropdown"
				><div class="mt-4">
					<a
						class="font-mono inline text-center no-underline cursor-pointer text-rem-point85 text-gray-700 font-normal px-20 hover:text-blue-400"
						href="/management">Manage Users</a
					>
				</div></span
			>
			<span slot="name3_dropdown">
				<div>
					<a
						class="restart inline float-left m-4 text-rem-point85 text-gray-700 no-underline font-normal cursor-pointer hover:text-gray-300"
						href="/notifications">System Alerts</a
					>
					<p
						class="clear float-right m-4 text-rem-point85 text-gray-variant1 no-underline font-normal cursor-pointer hover:text-gray-variant2"
					>
						3
					</p>
					<hr
						class="clear-both ml-4point5 w-3/5 border-none h-px bg-messagesHr overflow-visible box-content border-2 border-black"
					/>
				</div>
				<ul class="clear-both list-none pl-0 pt-5 pb-5">
					<li class="py-point-6 px-4"><em class="italic font-normal">No messages</em></li>
				</ul>
			</span>
			<span slot="name4_dropdown">
				<ul class="pl-0 pt-5 list-none">
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						Cloud Billing Overview
					</li>
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						Getting Started
					</li>
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						Tools Guide
					</li>
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						User's Guide
					</li>
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						Glossary of Terms
					</li>
					<li class="pt-point-6 px-4 font-mono hover:text-blue-400" on:click={() => goto('/help')}>
						Tour
					</li>
				</ul>
			</span>
		</Dropdownlist>
		<!-- end utility -->
		<div class="row main overflow-y-auto w-full clear-both">
			<div
				class="bg-iframeback bg-no-repeat bg-scroll bg-clip-border bg-cover flex-1 flex bg-dashboard"
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
						User Management
					</h1>
					<div class="flex justify-evenly relative h-97perc max-h-92perc">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div
								id="teamCard"
								class="flex-one-one-49perc border border-blue-500 border-solid relative h-screen m-dashboardCards overflow-y-auto"
							>
								<div
									class="teamList bg-fff relative h-84perc m-teamList rounded-2px p-8 max-h-74perc"
								>
									<h1 class="text-2xl">Manage Users &#9881;</h1>
									<button
										class="p-2 bg-blue-400 text-white float-right mb-4 rounded-lg hover:bg-blue-200"
										>Add a User</button
									>
									<table class="w-full table-auto mt-7">
										<tr class="bg-blue-500 text-gray-300 uppercase text-sm leading-normal">
											<th class="py-3 px-6 text-left">Name</th>
											<th class="py-3 px-6 text-left">Role</th>
											<th class="py-3 px-6 text-left">Email</th>
											<th class="py-3 px-6 text-left">Status</th>
											<th class="py-3 px-6 text-left">Teams</th>
											<th class="py-3 px-6 text-left">Last Login</th>
											<th class="py-3 px-6 text-left">Actions</th>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Marcus Lofton</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">Manager</td>
											<td class="py-3 px-6 text-left">mlofton@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative -left-2"
													>Active</span
												></td
											>
											<td class="py-3 px-6 text-left">4 teams</td>
											<td class="py-3 px-6 text-left w-1/6">June 10 21 4:00PM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Mike Turner</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">User</td>
											<td class="py-3 px-6 text-left">mturner@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative -left-2"
													>Active</span
												></td
											>
											<td class="py-3 px-6 text-left">2 teams</td>
											<td class="py-3 px-6 text-left w-1/6">Jan 4 21 12:20PM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Lisa Walker</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">User</td>
											<td class="py-3 px-6 text-left">lisaturner@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative -left-2"
													>Active</span
												></td
											>
											<td class="py-3 px-6 text-left">5 teams</td>
											<td class="py-3 px-6 text-left w-1/6">Mar 21 21 9:04AM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>BriAnna Cherry</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">Admin</td>
											<td class="py-3 px-6 text-left">bcherry@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative -left-2"
													>Active</span
												></td
											>
											<td class="py-3 px-6 text-left">7 teams</td>
											<td class="py-3 px-6 text-left w-1/6">Jan 4 21 1:33PM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Danny Fry</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">User</td>
											<td class="py-3 px-6 text-left">dfry@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-yellow-200  rounded-full py-1 px-3 font-black text-yellow-700 relative -left-2"
													>Suspended</span
												></td
											>
											<td class="py-3 px-6 text-left">2 teams</td>
											<td class="py-3 px-6 text-left w-1/6">Feb 4 21 3:15PM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Kathleen Popper</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">User</td>
											<td class="py-3 px-6 text-left">katpop@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-green-200  rounded-full py-1 px-3 font-black text-green-700 relative -left-2"
													>Active</span
												></td
											>
											<td class="py-3 px-6 text-left">1 team</td>
											<td class="py-3 px-6 text-left w-1/6">May 12 21 10:42AM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
											<td class="py-3 px-6 text-left whitespace-nowrap"
												><div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="static/RTI_favicon.ico"
															alt="user image"
														/>
													</div>
													<span>Rena Ogobland</span>
												</div></td
											>
											<td class="py-3 px-6 text-left">User</td>
											<td class="py-3 px-6 text-left">rogobland@rti.org</td>
											<td class="py-3 px-6 text-left"
												><span
													class="bg-red-200  rounded-full py-1 px-3 font-black text-red-700 relative -left-2"
													>Terminated</span
												></td
											>
											<td class="py-3 px-6 text-left">2 teams</td>
											<td class="py-3 px-6 text-left w-1/6">June 2 21 12:00PM</td>
											<td class="py-3 px-6 text-left"
												><div class="flex">
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
				RTI Merge Version 1.0
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
