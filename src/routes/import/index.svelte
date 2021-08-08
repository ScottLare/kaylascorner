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
	import Navbar from '$lib/shared/components/navbar/navbar.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';

	import { onMount } from 'svelte';
	import About from '../about.svelte';
	import ApplicationTitles from '$lib/shared/components/application-titles/ApplicationTitles.svelte';

	// End: Local Imports

	/**
	 * @type {IMetaTagdata}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'About | Data Integrator',
		description: 'About page of the RTI International, Inc. Data Integrator',
		url: '/about',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/about'
	};

	let data = DATA;

	let fields;

	let requestingThisMonth = false;

	let a = 0;

	let showModal = false;

	let currentMonth_values;
	let thisGraph;
	let rowData;
	let grid;
	$: head = [];
	let gridOptions;

	/* default Column Definitions */

	let defaultColDef = {
		editable: true,
		filter: 'agTextColumnFilter',
		floatingFilter: true,
		resizable: true,
		headerClass: ['bg-blue-700', 'text-gray-300', 'text-base']
	};

	onMount(async () => {
		fields = await getFields();

		const urlParams = new URLSearchParams(window.location.search);
		requestingThisMonth = urlParams.has('this_month');

		if (requestingThisMonth) {
			getCurrentMonth();
		}

		setColumns(fields);
	});

	function setColumns(val) {
		if (val === undefined) {
			setTimeout(function () {
				setColumns(val);
			}, 3000);
			console.log('Still waiting for data');
		} else {
			for (var i = 0; i < fields.fields.length; i++) {
				let obj = fields.fields[i].name;
				let appendObj = {
					headerName: obj,
					field: obj,
					cellClass: 'text-base',
					sortable: true,
					filter: true
				};
				head.push(appendObj);
			}
			console.log(head);
			gridOptions = setGridOptions(head);
			grid = new Grid(thisGraph, gridOptions);
			gridOptions.api.hideOverlay();

			// Function Needed to Resize the Columns appropriately

			var allColumnIds = [];
			gridOptions.columnApi.getAllColumns().forEach(function (column) {
				allColumnIds.push(column.colId);
			});

			gridOptions.columnApi.autoSizeColumns(allColumnIds, false);
		}
	}
	/* Set the grid options for the AG-Grid */

	function setGridOptions(val) {
		var gridOptions = {
			columnDefs: val,
			rowData: rowData,
			defaultColDef: defaultColDef
		};

		return gridOptions;
	}

	/* Fetch for fields */
	async function getFields() {
		let response = await fetch('src/lib/utils/json_files/fields.json');

		let thefields = await response.json();
		return thefields;
	}

	async function getCurrentMonth() {
		//let response = await fetch('http://localhost:8080/api/azure/start-processing');

		//let response1 = await fetch('http://localhost:8080/api/azure/download-processed-response');

		let response = await fetch('src/lib/utils/json_files/azureresponse.json');

		let values = await response.json();

		console.log('This is the response from go API ' + JSON.stringify(values));

		currentMonth_values = values;

		setRows(currentMonth_values);

		//console.log(currentMonth_values);
		//console.log(parseInt('07', 10) + 3);
	}

	function setRows(val) {
		if (val === undefined) {
			setTimeout(function () {
				setRows(val);
			}, 3000);
		} else {
			for (var i = 0; i < currentMonth_values.data.length; i++) {
				currentMonth_values.data[i]['FiscalYear'] = currentMonth_values.data[i].Date.substring(
					6,
					10
				);
			}
			for (var i = 0; i < currentMonth_values.data.length; i++) {
				currentMonth_values.data[i]['Period'] = ParseValue(
					currentMonth_values.data[i].Date.substring(0, 2)
				);
			}
			gridOptions.api.setRowData(currentMonth_values.data);
		}
	}

	/* Function needed to get the Period based on the date given from the json */
	function ParseValue(val) {
		a = parseInt(val);

		if (a < 10) {
			a = a + 3;
		} else {
			a = a - 9;
		}

		return a;
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
				<VertTool />

				<!-- default subscription dashboard -->
				<div
					id="default"
					class="h-screen overflow-scroll block mr-2 bg-blue-100 m-dashboardContent rounded-2px flex-1 p-8"
				>
					<h1
						class="text-rem-1point9 text-blue-500 inline-block p-dashboardContenth1 m-dashboardContenth1"
					>
						Data Import Tool
					</h1>
					<div class="flex justify-evenly relative h-97perc max-h-92perc -top-2">
						<div
							class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
							style="text-indent: 27px;"
						>
							<div
								id="teamCard"
								class="flex-one-one-49perc relative h-screen m-dashboardCards overflow-y-auto"
							>
								<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 -top-4">
									<div class="flex justify-center">
										<button
											class="bg-green-600 bg-opacity-95 text-white py-6 px-12 rounded-lg hover:bg-green-400"
											on:click={getCurrentMonth}>Current Month</button
										>
										<button
											class="bg-indigo-600 text-white py-6 px-12 rounded-lg hover:bg-indigo-400 mx-40"
											>Last Month</button
										>
										<button
											class="bg-blue-600 text-white py-6 px-12 rounded-lg hover:bg-blue-400"
											on:click={() => (showModal = true)}>Date Picker</button
										>
									</div>
									<!-- Modal for Date Picker-->
									<div
										class="fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showModal ===
										true
											? 'flex'
											: 'hidden'}"
									>
										<div class="relative mx-auto">
											<div class="bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
												<header class="flex items-center justify-between">
													<h2 class="font-semibold mt-4 text-3xl ml-44">Other</h2>
													<button
														class="focus:outline-none p-2"
														on:click={() => (showModal = false)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-5 w-5"
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
												<div class="p-2 text-center">
													<div class="flex items-center justify-center">
														<form>
															<div class="mr-3 mt-3">
																<label
																	for="fromDate"
																	class="block text-lg font-medium ml-6 text-blue-700 mt-3"
																	>From Date</label
																>
																<div class="mt-3 ml-2">
																	<input
																		id="fromDate"
																		name="fromDate"
																		type="date"
																		required
																		class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																	/>
																</div>
															</div>
															<div class="mr-3 mt-6">
																<label
																	for="toDate"
																	class="block text-lg font-medium ml-6 text-blue-700 mt-3"
																	>To Date</label
																>
																<div class="mt-3 ml-2">
																	<input
																		id="toDate"
																		name="toDate"
																		type="date"
																		required
																		class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
																	/>
																</div>
															</div>
															<div class="mt-8 flex justify-center">
																<button
																	type="submit"
																	class="w-2/5 mb-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-7 focus:ring-blue-500"
																	on:click={() => (showModal = false)}>Get Report</button
																>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- Using AG Grid-->
									<div
										class="ag-theme-alpine w-full mx-auto mt-20"
										style="height: 500px;"
										bind:this={thisGraph}
									/>
								</div>
								<div class="flex justify-between mt-8">
									<button
										class="py-1 px-5 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:text-black"
										disabled>Export to Excel</button
									>
									<button
										class="py-1 px-5 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:text-black"
										disabled>Send to Accounting</button
									>
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
