<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	// Start: Local Imports
	import { goto } from '$app/navigation';
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
		title: 'About | Cloud Billing System',
		description: 'About page of the RTI International, Inc. Cloud Billing System',
		url: '/about',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/about'
	};

	// Bring in DataSource Array
	import { DATA } from '$lib/utils/index';

	let data = DATA;

	/* Toggles the user profile 

	TODO: Needs to take in a id for the user so that the correct profile is shown. Current implementation is for a hardcoded user 
	*/
	function showProfile() {
		document.getElementById('marcusprofile').classList.add('block');
		document.getElementById('marcusprofile').classList.remove('hidden');
	}

	const handleEmailclick = () => {
		goto('/email');
	};

	const handleMessageclick = () => {
		goto('/message');
	};
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

				<!-- default subscription dashboard -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						{data[0].name}
					</h1>
					<p class="descr text-rem-1 inline-block tracking-zero-zero-four text-gray-variant1">
						{data[0].description}
					</p>
					<div class="flex justify-evenly relative h-97perc max-h-92perc">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							Team
							<div
								id="teamCard"
								class="flex-one-one-49perc border border-blue-500 border-solid relative h-screen m-dashboardCards overflow-y-auto"
								style="clip-path: polygon(0% 0.01%, 17% 1%, 17% 0, 100% 0, 100% 100%, 0 100%);"
							>
								<div
									class="teamList bg-fff relative h-84perc m-teamList rounded-2px p-8 max-h-74perc"
								>
									<div
										class="clear-both text-rem-1point1 tracking-zero-point-one-rem"
										style="text-indent: 27px;"
									>
										<h4
											class="w-70perc text-rem-point9 float-left font-semibold m-point5-zero font-mono-sans not-italic"
										>
											Name
										</h4>
										<h4
											class="w-30perc text-rem-point9 float-left font-semibold m-point5-zero font-mono-sans not-italic"
										>
											Role
										</h4>
									</div>
									<div class="teamContr">
										{#each data as source, i}
											{#if source.name == 'SSES'}
												{#each source.team_members as member, f}
													<div
														class="team team clear-both text-rem-1point1 tracking-zero-point-one-rem"
														style="text-indent: 27px;"
													>
														<p
															class="w-70perc text-rem-point9 float-left m-point5-zero text-gray-variant1 tracking-zero-zero-four"
														>
															<a class="hover:text-blue-300 cursor-pointer" on:click={showProfile}
																>{source.team_members[f].name}</a
															>
														</p>
														<!--- User Profile-->
														<div
															class="bg-blue-200 pt-4 px-4 rounded-md  shadow-lg max-w-xs ml-36 absolute hidden"
															id="marcusprofile"
														>
															<img
																class="w-12 h-12 object-cover rounded-full mx-auto shadow-lg relative -top-7 mb-0"
																src="static/RTI_favicon.ico"
																alt="User avatar"
															/>
															<h2 class="text-lg mx-5point2 font-bold font-serif">Profile</h2>
															<hr class="mb-2 border-2 border-black" />
															<p class="text-base mx-5 mt-0">
																<span class="mr-5">Name:</span>
																{data[0].team_members[0].name}
															</p>
															<p class="text-base mt-1 mx-5">
																<span class="mr-5">Email:</span>mlofton@rti.org
															</p>
															<p class="mx-5 text-base mb-5 overflow-hidden">
																<span class="mr-5">Title:</span>
																Software Applications Programmer / Analyst 2
															</p>
															<h2 class="text-lg mx-5point2  font-bold font-serif">Options</h2>
															<hr class="border-2 border-black mb-2" />
															<button
																class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-base text-white pt-3 pb-3 px-4 relative right-3 top-3"
																on:click={handleEmailclick}
																>Send email &nbsp;<svg
																	xmlns="http://www.w3.org/2000/svg"
																	class="h-4 w-4 inline"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																	/>
																</svg></button
															>
															<button
																class="rounded-md bg-gradient-to-r from-red-400 to-yellow-500 text-base  text-white pt-3 pb-3 px-4 ml-12 relative left-5point5 -top-9"
																on:click={handleMessageclick}
																>Send message &nbsp;<svg
																	xmlns="http://www.w3.org/2000/svg"
																	class="h-4 w-4 inline"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
																	/>
																</svg></button
															>
														</div>
														<!-- End of User Profile-->
														<p
															class="w-30perc text-rem-point9 float-left font-normal m-point5-zero font-mono-sans not-italic text-gray-variant1 tracking-zero-zero-four"
														>
															{source.team_members[i].role}
														</p>
													</div>
												{/each}
											{/if}
										{/each}
									</div>
								</div>
							</div>
						</div>
						<div
							class="dash-title text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							Reports
							<div
								id="datasources"
								class="flex-one-one-49perc border border-blue-500 border-solid relative h-screen m-dashboardCards"
								style="clip-path: polygon(0% 0.01%, 17% 1%, 17% 0, 100% 0, 100% 100%, 0 100%);"
							>
								<div
									class="bg-fff relative h-screen m-teamList rounded-2px p-8 overflow-y-scroll max-h-74perc"
								>
									<h1 class="text-blue-400 pl-32 text-xl mb-5 ml-24">Billing Details</h1>
									<table class="table-auto mt-7">
										<tr class="bg-blue-500 text-gray-300 uppercase text-xs leading-normal">
											<th class="py-3 px-6 text-left">Name</th>
											<th class="py-3 px-6 text-left ">From Date</th>
											<th class="py-3 px-10 text-left">To Date</th>
											<th class="py-3 px-2 text-left">Current Month</th>
											<th class="py-3 px-6">History</th>
											<th class="py-3 px-6 text-left">Export to Excel</th>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 1 </td>
											<td class="py-3 px-3 text-center">01-21-21</td>
											<td class="py-3 px-5 text-center">10-21-21</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 2 </td>
											<td class="py-3 px-3 text-center">03-05-21</td>
											<td class="py-3 px-5 text-center">11-05-21</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 3 </td>
											<td class="py-3 px-3 text-center">05-30-21</td>
											<td class="py-3 px-5 text-center">02-30-22</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 4 </td>
											<td class="py-3 px-3 text-center">04-25-21</td>
											<td class="py-3 px-5 text-center">11-25-22</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 5 </td>
											<td class="py-3 px-3 text-center">03-16-21</td>
											<td class="py-3 px-5 text-center">06-14-22</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 6 </td>
											<td class="py-3 px-3 text-center">01-11-21</td>
											<td class="py-3 px-5 text-center">02-01-22</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
												</div></td
											>
										</tr>
										<tr
											class="border-b border-gray-200 text-gray-600 text-sm font-light hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap"> Billing Document 7 </td>
											<td class="py-3 px-3 text-center">03-06-21</td>
											<td class="py-3 px-5 text-center">12-31-22</td>
											<td class="py-1 px-3 text-left">June</td>
											<td class="py-3 px-6 text-left"
												><button class="py-1 px-3 bg-yellow-400 rounded-full hover:bg-yellow-200"
													>View</button
												></td
											>
											<td class="py-3 px-6 text-left"
												><div class="flex">
													<button
														><svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5 ml-3"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
															/>
															<path
																d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
															/>
														</svg></button
													>
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
</body>
