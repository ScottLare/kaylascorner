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
	import About from '../about.svelte';
	import BillingUtils from '$lib/shared/components/billing_utilities/billingUtils.svelte';
	import UserMange from '$lib/shared/components/userManage/userMange.svelte';
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
	let users;
	let alerts;
	let data = DATA;
	let isActiveAlerts = false;
	let openedTab = 'overview';
	let showAddForm = false;
	let showEditForm = false;
	let showDeleteForm = false;

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		isActiveAlerts = urlParams.has('alerts');

		if (isActiveAlerts) {
			openedTab = 'alerts';
		}

		users = await getUsers();
		alerts = await getAlerts();
	});

	async function getUsers() {
		let response = await fetch('src/lib/utils/json_files/users.json');

		let theseUsers = await response.json();

		return theseUsers;
	}

	async function getAlerts() {
		let user_response = await fetch('src/lib/utils/json_files/alerts.json');

		let theseAlerts = await user_response.json();

		return theseAlerts;
	}

	/* Validation for the Add Form for Alerts */
	let fields = { title: '', description: '', date: '', time: '', comments: '', file: null };
	let errors = { title: '', description: '', date: '', time: '' };
	let addFormValid = false;

	const addformSubmit = () => {
		addFormValid = true;
		var onlyLetters = /^[a-zA-Z\s]*$/;
		var dateFormat = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

		//validate title
		if (fields.title.trim().length < 1) {
			addFormValid = false;
			errors.title = 'Title field cannot be empty';
		} else if (!fields.title.match(onlyLetters)) {
			errors.title = 'Title field cannot contain numbers or special characters';
		} else {
			errors.title = '';
		}

		//validate description
		if (fields.description.trim().length < 4) {
			addFormValid = false;
			errors.description = 'Description must be at least 4 characters long';
		} else {
			errors.description = '';
		}

		//validate date
		if (fields.date.trim().length < 1) {
			addFormValid = false;
			errors.date = 'Date cannot be empty';
		} else if (!fields.date.match(dateFormat)) {
			addFormValid = false;
			errors.date = 'Date is not in the proper format, yyyy-mm-dd';
		} else {
			errors.date = '';
		}

		//validate time
		if (fields.time.trim().length < 1) {
			addFormValid = false;
			errors.time = 'Time cannot be empty';
		} /*else if (!fields.date.match(dateFormat)) {
			addFormValid = false;
			errors.time = 'The time is not in the proper format, hh:mm';
		}*/ else {
			errors.time = '';
			console.log(fields.time);
		}

		if (addFormValid === true) {
			showAddForm = false;
			fields.title = '';
			fields.description = '';
			fields.date = '';
			fields.time = '';
			fields.comments = '';
			fields.file = null; /*TODO - Figure out why files won't reset after submit */
		}
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
				<!-- Vertical Toolbar-->
				<VertTool />

				<!-- admin board -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Admin
					</h1>
					<div class="border-b-2 border-gray-400 mx-2">
						<ul class="flex cursor-pointer">
							<li
								class="py-2 px-6 text-gray-700 rounded-t-lg hover:bg-blue-300  {openedTab ===
								'overview'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'overview';
								}}
							>
								Overview
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'usermanage'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'usermanage';
								}}
							>
								User Management
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'alerts'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'alerts';
								}}
							>
								Active System Alerts
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'sql'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'sql';
								}}
							>
								SQL Utilities
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'web'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'web';
								}}
							>
								Web Utilities
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'ftp'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'ftp';
								}}
							>
								FTP Charges
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'disk'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'disk';
								}}
							>
								Disk Shares
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'project'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'project';
								}}
							>
								Project Servers
							</li>
							<li
								class="py-2 px-6 rounded-t-lg hover:bg-blue-300 {openedTab === 'billing'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'billing';
								}}
							>
								Billing Utilities
							</li>
						</ul>
					</div>
					<div class="flex justify-evenly relative h-97perc">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div id="teamCard" class="bg-fff relative h-full m-teamList rounded-2px p-8 -top-8">
								<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8">
									<!--- Overview Tab-->
									<div class="overview {openedTab === 'overview' ? 'block' : 'hidden'}">
										<h1 class="text-2xl">Overview</h1>
										<div class="bg-white flex flex-col justify-center mt-8">
											<div
												class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4"
											>
												<!-- CARD 1 -->
												<div
													class="bg-green-600 bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-green-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative right-10 ">Total Projects</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-16 h-16 object-cover text-white"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
														/>
														<path
															d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
														/>
														<path
															d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
														/>
													</svg>
													<div class="mt-2">
														<p class="text-white text-4xl text-justify font-semibold">400</p>
													</div>
												</div>
												<!-- END of Card 1 -->
												<!-- Card 2 -->
												<div
													class="bg-indigo-600 border-indigo-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-indigo-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative right-10 ">Total Subscribers</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-16 h-16 object-cover text-white"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
														/>
													</svg>
													<div class="mt-2">
														<p class="text-white text-4xl text-justify font-semibold">250</p>
													</div>
												</div>
												<!-- END of Card 2  -->
												<!-- Card 3 -->
												<div
													class="bg-yellow-500 bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-yellow-300 hover:border-transparent transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative right-10 ">Total Users</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-16 h-16 object-cover text-white"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fill-rule="evenodd"
															d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-4xl text-justify relative right-10 font-semibold"
														>
															450
														</p>
													</div>
												</div>
												<!-- END of Card 3 -->
												<!-- Card 4 -->
												<div
													class="bg-pink-600 bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-pink-400 hover:border-transparent transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative right-10 ">Total Alerts Sent</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-16 h-16 object-cover text-white"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fill-rule="evenodd"
															d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p class="text-white text-4xl text-justify font-semibold">750</p>
													</div>
													<!-- END of Card 4 -->
												</div>
											</div>
										</div>
									</div>
									<!-- End of Overview Tab-->
									<!--- Usage Report Tab-->
									<div class="usageReports {openedTab === 'usage' ? 'block' : 'hidden'}">
										<h1 class="text-2xl">Usage</h1>
									</div>
									<!-- End of Usage Report-->
									<!--- Active Alerts -->
									<div class="activeAlerts {openedTab === 'alerts' ? 'block' : 'hidden'}">
										<div class="flex justify-between">
											<h1 class="text-4xl">Active System Alerts</h1>
											<div>
												<button
													class="py-3 px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400 mr-10"
													on:click={() => goto('/schedule')}>View Scheduled Alerts</button
												>
												<button
													class="py-3 px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
													on:click={() => goto('/history')}>View History</button
												>
											</div>
										</div>
										<hr class="border-2 border-gray-500 my-4 mx-6" />
										<div class="flex justify-center">
											<button
												class="py-3 px-3 bg-green-400 rounded-lg text-white"
												on:click={() => (showAddForm = true)}>Add Alert</button
											>
										</div>
										<!-- Add Form after the Add Alert button is clicked -->
										<div
											class="addForm fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showAddForm ===
											true
												? 'flex'
												: 'hidden'}"
										>
											<div class="relative mx-auto">
												<div class="relative bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
													<header class="flex items-center justify-between">
														<h2 class="font-semibold mt-4 text-3xl ml-24">Add a System Alert</h2>
														<button
															class="focus:outline-none p-2"
															on:click={() => (showAddForm = false)}
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
														<form
															id="addForm"
															class="mb-0 space-y-6 mt-4"
															on:submit|preventDefault={addformSubmit}
														>
															<div class="mt-4">
																<label
																	for="title"
																	class="block text-sm font-medium text-blue-700 mr-4 "
																	>Title of Alert</label
																>
																<div class="mt-3">
																	<input
																		id="title"
																		name="title"
																		type="text"
																		bind:value={fields.title}
																		class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm mr-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																	/>
																</div>
																<div class="font-bold text-red-700 mr-4 mt-3">{errors.title}</div>
															</div>
															<div class="mr-3">
																<label
																	for="description"
																	class="block text-sm font-medium text-blue-700">Description</label
																>
																<div class="mt-3">
																	<input
																		id="description"
																		name="description"
																		type="text"
																		bind:value={fields.description}
																		class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																	/>
																	<div class="font-bold text-red-700 mt-3">
																		{errors.description}
																	</div>
																</div>
																<div class="mr-3">
																	<label
																		for="startDate"
																		class="block text-sm font-medium text-blue-700 mt-3"
																		>Start Date</label
																	>
																	<div class="mt-3 ml-2">
																		<input
																			id="startDate"
																			name="startDate"
																			type="date"
																			bind:value={fields.date}
																			class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																		/>
																		<div class="font-bold text-red-700 mt-3">
																			{errors.date}
																		</div>
																	</div>
																	<div class="mt-3 ml-3">
																		<label
																			for="startTime"
																			class="block text-sm font-medium text-blue-700 mt-3"
																			>Start Time</label
																		>
																		<div class="mt-3">
																			<input
																				id="startTime"
																				name="startTime"
																				type="time"
																				bind:value={fields.time}
																				class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																			/>
																			<div class="font-bold text-red-700 mt-3">
																				{errors.time}
																			</div>
																		</div>
																	</div>
																	<div class="mt-3 ml-3">
																		<label
																			for="comments"
																			class="block text-sm font-medium text-blue-700 mt-3"
																			>Comments</label
																		>
																		<div class="mt-3">
																			<input
																				id="comments"
																				name="comments"
																				bind:value={fields.comments}
																				type="text"
																				class="w-96 border border-gray-300 px-3 py-2 rounded-lg text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																			/>
																		</div>
																	</div>
																	<div class="mt-3 ml-3">
																		<label
																			for="files"
																			class="block text-sm font-medium text-blue-700 mt-3"
																			>Attach A File</label
																		>
																		<div class="mt-3">
																			<input
																				id="files"
																				name="files"
																				bind:value={fields.file}
																				type="file"
																				class="w-96 border border-gray-300 px-3 py-2 rounded-lg bg-white text-justify shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																			/>
																		</div>
																	</div>
																	<div class="mt-8 flex justify-center">
																		<button
																			type="submit"
																			class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-10 focus:ring-blue-500"
																			>Send Alert</button
																		>
																		<button
																			type="submit"
																			class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
																			on:click={() => (showAddForm = false)}>Cancel Alert</button
																		>
																	</div>
																</div>
															</div>
														</form>
													</main>
												</div>
											</div>
										</div>
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
														<p class="mr-2 mt-3">
															Deleted alerts will be shown on the History page.
														</p>
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
											Loading ........
										{:else}
											<table class="w-full mt-7">
												<tr class="bg-blue-700 text-gray-300 uppercase text-sm leading-normal">
													<th class="py-4 px-6 text-left">
														<span>Title</span>
													</th>
													<th class="py-4 px-3 text-center">Description</th>
													<th class="py-4 px-3 text-center">Actions</th>
												</tr>
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
															<td class="py-4 px-3 text-center"
																><div class="flex justify-center">
																	<div>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			class="h-5 w-5 mr-3 text-purple-500 cursor-pointer"
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
																			class="h-5 w-5 text-red-600 cursor-pointer"
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
									<!-- User Management -->
									<div class="userManagement {openedTab === 'usermanage' ? 'block' : 'hidden'}">
										<UserMange />
									</div>
									<!--- Billing Tab-->
									<div class="billing {openedTab === 'billing' ? 'block' : 'hidden'}">
										<BillingUtils />
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
