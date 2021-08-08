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
	let months;
	let projects;

	let thisGraph;
	let thisGraph2;
	let rowData;
	let grid;
	let grid2;

	let total_yearly_cost = 0;
	let total_surcharge = 0;
	let total_expenses = 0;
	let total_profitloss = 0;

	let project_total_yearly_cost = 0;
	let project_total_surcharge = 0;
	let project_total_expenses = 0;
	let project_total_profitloss = 0;

	var openedTab = 'overview';
	var showModal = false;

	/* default Column Definitions */

	let defaultColDef = {
		editable: true,
		filter: 'agTextColumnFilter',
		floatingFilter: true,
		resizable: true,
		headerClass: ['bg-blue-700', 'text-gray-300', 'text-base']
	};

	/* Column Definitons for Ag Grid Table for Month View */

	let colDefMonth = [
		{
			headerName: 'Month',
			field: 'month',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: customMonthRow,
			flex: 1
		},
		{
			headerName: 'Azure Costs',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderCost,
			flex: 1
		},
		{
			headerName: 'GTS Surcharge',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderSurcharge,
			flex: 1
		},
		{
			headerName: 'Total Cost',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderTotalCost,
			flex: 1
		}
	];

	/* Column Definitons for Ag Grid Table for Month View */

	let colDefProject = [
		{
			headerName: 'Project Name',
			field: 'name',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: customProjectRow,
			flex: 1
		},
		{
			headerName: 'Azure Costs',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderCost,
			flex: 1
		},
		{
			headerName: 'GTS Surcharge',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderSurcharge,
			flex: 1
		},
		{
			headerName: 'Total Cost',
			field: 'cost',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			cellRenderer: renderTotalCost,
			flex: 1
		}
	];

	/* Set Grid Options intially */
	var gridOptions = {
		columnDefs: colDefMonth,
		defaultColDef: defaultColDef,
		rowSelection: 'single',
		onSelectionChanged: onSelectionChanged
	};

	var gridOptions2 = {
		columnDefs: colDefProject,
		defaultColDef: defaultColDef,
		rowSelection: 'single',
		onSelectionChanged: onSelectionChanged2
	};

	function customMonthRow(val) {
		let cost;

		for (var i = 0; i < months.months.length; i++) {
			if (months.months[i].month === val.value) {
				cost = months.months[i].cost;
			}
		}
		return (
			'<div class="grid grid-cols-2 gap-0">' +
			'<span>' +
			val.value +
			'</span>' +
			'<div class="shadow w-full bg-gray-200">' +
			'<div class="bg-blue-500 py-3 h-full" style="width:' +
			(cost / 200000.0) * 100 +
			'%' +
			'">' +
			'</div>' +
			'</div>'
		);
	}

	function customProjectRow(val) {
		let cost;

		for (var i = 0; i < projects.projects.length; i++) {
			if (projects.projects[i].name === val.value) {
				cost = projects.projects[i].cost;
			}
		}
		return (
			'<div class="grid grid-cols-2 gap-0">' +
			'<span> Project ' +
			val.value +
			'</span>' +
			'<div class="shadow w-full bg-gray-200">' +
			'<div class="bg-blue-500 py-3 h-full" style="width:' +
			(cost / 200000.0) * 100 +
			'%' +
			'">' +
			'</div>' +
			'</div>'
		);
	}

	function renderCost(val) {
		return '<span>' + formatter.format(val.value) + '</span>';
	}

	function renderSurcharge(val) {
		return '<span>' + formatter.format(val.value * 0.014) + '</span>';
	}

	function renderTotalCost(val) {
		return '<span>' + formatter.format(val.value + val.value * 0.014) + '</span>';
	}

	function onSelectionChanged() {
		var rowSelected = gridOptions.api.getSelectedRows();
		console.log(rowSelected);

		goto('months?month=' + rowSelected[0].month);
	}

	function onSelectionChanged2() {
		var rowSelected = gridOptions2.api.getSelectedRows();
		console.log(rowSelected);

		goto('projects?project=' + rowSelected[0].name);
	}

	onMount(async () => {
		logged.set(true);
		months = await getMonths();
		projects = await getProjects();

		const printMonths = async () => {
			const a = await months;
			console.log(a.months[0].month);
		};

		printMonths();

		for (var i = 0; i < months.months.length; i++) {
			total_yearly_cost = total_yearly_cost + months.months[i].cost;
			total_surcharge = total_surcharge + months.months[i].cost * 0.014;
			total_expenses = total_expenses + months.months[i].expenses;
			total_profitloss = total_profitloss + months.months[i].profit_loss_cost;
		}

		for (var i = 0; i < projects.projects.length; i++) {
			project_total_yearly_cost = project_total_yearly_cost + projects.projects[i].cost;
			project_total_surcharge = project_total_surcharge + projects.projects[i].cost * 0.014;
			project_total_expenses = project_total_expenses + projects.projects[i].expenses;
			project_total_profitloss = project_total_profitloss + projects.projects[i].profit_loss_cost;
		}

		/* Set grid */
		// let the grid know which columns and what data to use
		grid = new Grid(thisGraph, gridOptions);
		setRowDataMonth(months);
		callGraph2();
	});

	function setRowDataMonth(val) {
		if (val === undefined) {
			setTimeout(function () {
				setRowDataMonth(val);
			}, 3000);
			console.log('Still waiting for data');
		} else {
			gridOptions.api.setRowData(months.months);
		}
	}

	function setRowDataProject(val) {
		if (val === undefined) {
			setTimeout(function () {
				setRowDataProject(val);
			}, 3000);
			console.log('Still waiting for data');
		} else {
			gridOptions2.api.setRowData(projects.projects);
		}
	}

	function callGraph2() {
		grid2 = new Grid(thisGraph2, gridOptions2);
		setRowDataProject(projects);
	}

	/* Using Fetch Method 1 

	async function getMonths() {
		let response = await fetch('src/lib/utils/json_files/months.json', { mode: 'no-cors' })
			.then((response) => response.text())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}
	*/

	/* Using Fetch Method 2 */
	async function getMonths() {
		let response = await fetch('src/lib/utils/json_files/months.json');

		let themonths = await response.json();
		return themonths;
	}

	/* Fetch for Projects */
	async function getProjects() {
		let response = await fetch('src/lib/utils/json_files/projects.json');

		let theprojects = await response.json();
		return theprojects;
	}
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
						Billing
					</h1>
					<div class="border-b-2 border-gray-400 ml-3 mr-3">
						<ul class="flex cursor-pointer">
							<li
								class="py-2 px-6 rounded-t-lg relative {openedTab === 'overview'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'overview';
								}}
							>
								Overview
							</li>
							<li
								class="py-2 px-6 rounded-t-lg relative {openedTab === 'project'
									? 'bg-blue-300'
									: 'bg-white'}"
								on:click={() => {
									openedTab = 'project';
								}}
							>
								Project View
							</li>
						</ul>
					</div>
					<div id="overview" class={openedTab === 'overview' ? 'block' : 'hidden'}>
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
											<div class="flex">
												<h1 class="text-4xl">{data[0].name}</h1>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-5 w-5 relative top-2 ml-2 text-blue-500"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
													/>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<button
												class="py-3 px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
												on:click={() => (showModal = true)}
											>
												Reports</button
											>
										</div>
										<hr class="border-2 border-gray-500 my-4 mx-6" />
										<div
											class="fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showModal ===
											true
												? 'flex'
												: 'hidden'}"
										>
											<div class="relative mx-auto">
												<div class="relative bg-white shadow-lg rounded-md text-gray-900 w-full">
													<header class="flex items-center justify-between">
														<h2 class="font-semibold ml-64">Get Reports</h2>
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
													<main class="p-2 text-center">
														<div class="flex items-center justify-center">
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 hover:bg-blue-400 text-white"
																on:click={() => goto('/import?this_month')}>This Month</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last Month</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last 3 Months</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last 6 Months</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
																>Other</button
															>
														</div>
													</main>
												</div>
											</div>
										</div>
										<div class="bg-white flex flex-col justify-center mt-8">
											<div
												class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
											>
												<!-- Card 1 -->
												<div
													class="bg-indigo-600 border-indigo-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-indigo-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-start-1 col-end-3 justify-start">
														<p class="text-white text-xl relative ml-6 ">Total Yearly Cost</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
														/>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-24"
														>
															{formatter.format(total_yearly_cost)}
														</p>
													</div>
												</div>
												<!-- End of Card 1-->
												<!-- Card 2 -->
												<div
													class="bg-yellow-600 border-yellow-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-yellow-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative ml-1 ">Total Yearly Surcharge</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fill-rule="evenodd"
															d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(total_surcharge)}
														</p>
													</div>
												</div>
												<!--End of Card 2-->

												<!-- Card 3 -->
												<div
													class="bg-red-600 border-red-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-red-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="grid col-span-2">
														<p class="text-white text-lg">
															Total Yearly {data[0].name} Expenses
														</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M20 12H4"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(total_expenses)}
														</p>
													</div>
												</div>
												<!--End of Card 3-->
												<!-- Card 4 -->
												<div
													class="bg-green-600 border-green-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-green-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl">Total Yearly Profit / Loss</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 6v6m0 0v6m0-6h6m-6 0H6"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(total_profitloss)}
														</p>
													</div>
												</div>
												<!--End of Card 4-->
											</div>
										</div>
										<div class="flex justify-center mt-10">
											<div class="flex items-center mr-9 text-2xl font-mono">
												<h2>Fiscal Year:</h2>
												<p>2021</p>
											</div>
											<div class="flex items-center ml-7 text-2xl font-mono">
												<h2>Period:</h2>
												<p>10</p>
											</div>
										</div>
										<div
											class="ag-theme-alpine w-full mx-auto mt-10"
											style="height: 500px;"
											bind:this={thisGraph}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="project" class={openedTab === 'project' ? 'block' : 'hidden'}>
						<div class="flex justify-evenly relative h-97perc max-h-92perc -top-2">
							<div
								class="text-rem-1point1 mt-4 flex-one-one-49perc h-94perc tracking-zero-point-one-rem"
								style="text-indent: 27px;"
							>
								<div
									id="teamCard"
									class="flex-one-one-49perc relative h-auto m-dashboardCards overflow-scroll"
								>
									<div
										class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 max-h-74perc -top-4"
									>
										<div class="flex justify-between">
											<div class="flex">
												<h1 class="text-4xl">{data[0].name}</h1>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-5 w-5 relative top-2 ml-2 text-blue-500"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
													/>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<button
												class="py-3 px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
												on:click={() => (showModal = true)}>Reports</button
											>
										</div>
										<hr class="border-2 border-gray-500 my-4 mx-6" />
										<div
											class="fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showModal ===
											true
												? 'flex'
												: 'hidden'}"
										>
											<div class="relative mx-auto">
												<div class="relative bg-white shadow-lg rounded-md text-gray-900 w-full">
													<header class="flex items-center justify-between">
														<h2 class="font-semibold ml-64">Get Reports</h2>
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
													<main class="p-2 text-center">
														<div class="flex items-center justify-center">
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 hover:bg-blue-400 text-white"
																on:click={() => goto('/import')}>This Month</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last Month</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last 3 Months</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg mr-4 text-white hover:bg-blue-400"
																on:click={() => goto('/import')}>Last 6 Months</button
															>
															<button
																class="px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
																>Other</button
															>
														</div>
													</main>
												</div>
											</div>
										</div>
										<div class="bg-white flex flex-col justify-center mt-8">
											<div
												class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
											>
												<!-- Card 1 -->
												<div
													class="bg-indigo-600 border-indigo-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-indigo-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-start-1 col-end-3 justify-start">
														<p class="text-white text-xl relative ml-6 ">Total Yearly Cost</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
														/>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-24"
														>
															{formatter.format(project_total_yearly_cost)}
														</p>
													</div>
												</div>
												<!-- End of Card 1-->
												<!-- Card 2 -->
												<div
													class="bg-yellow-600 border-yellow-600  bg-opacity-95 p-10 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-yellow-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl relative ml-1 ">Total Yearly Surcharge</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fill-rule="evenodd"
															d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
															clip-rule="evenodd"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(project_total_surcharge)}
														</p>
													</div>
												</div>
												<!--End of Card 2-->

												<!-- Card 3 -->
												<div
													class="bg-red-600 border-red-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-red-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="grid col-span-2">
														<p class="text-white text-lg">
															Total Yearly {data[0].name} Expenses
														</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M20 12H4"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(project_total_expenses)}
														</p>
													</div>
												</div>
												<!--End of Card 3-->
												<!-- Card 4 -->
												<div
													class="bg-green-600 border-green-600  bg-opacity-95 p-8 rounded-xl grid grid-cols-2 gap-2 cursor-pointer hover:bg-green-400 hover:border-transparent | transition-colors duration-500"
												>
													<div class="col-span-2">
														<p class="text-white text-xl">Total Yearly Profit / Loss</p>
													</div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-12 h-12 object-cover text-white relative -left-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 6v6m0 0v6m0-6h6m-6 0H6"
														/>
													</svg>
													<div class="mt-2">
														<p
															class="text-white text-3xl text-justify font-semibold relative -left-14"
														>
															{formatter.format(project_total_profitloss)}
														</p>
													</div>
												</div>
												<!--End of Card 4-->
											</div>
										</div>
										<div class="flex justify-center mt-10">
											<div class="flex items-center mr-9 text-2xl font-mono">
												<h2>Fiscal Year:</h2>
												<p>2021</p>
											</div>
											<div class="flex items-center ml-7 text-2xl font-mono">
												<h2>Period:</h2>
												<p>10</p>
											</div>
										</div>
										<div
											class="ag-theme-alpine w-full mx-auto mt-10"
											style="height: 500px;"
											bind:this={thisGraph2}
										/>
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
