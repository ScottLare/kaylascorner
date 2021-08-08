<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import editdeleteForms from '$lib/shared/components/editdeleteForms/editdeleteForms.svelte';
	import { Grid } from 'ag-grid-community';
	import actionRenderer from '$lib/models/classes/actions';

	let users;
	let grid;
	let thisGraph;
	let showAddForm = false;
	let addFormValid = false;
	let rowData;

	let columnDefs = [
		{
			headerName: 'Name',
			field: 'name',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			flex: 1
		},
		{
			headerName: 'Role',
			field: 'role',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			flex: 1
		},
		{
			headerName: 'Email',
			field: 'email',
			cellClass: ['text-base', 'mr-4'],
			filter: true,
			flex: 1
		},
		{
			headerName: 'Status',
			field: 'status',
			cellRenderer: statusRenderer,
			sortable: true,
			filter: true,
			flex: 1
		},
		{
			headerName: 'Teams',
			field: 'teams',
			cellClass: ['font-bold', 'ml-8', 'text-base'],
			sortable: true,
			filter: true,
			flex: 1
		},
		{
			headerName: 'Last Login',
			field: 'lastLogin',
			cellClass: 'text-base',
			sortable: true,
			filter: true,
			flex: 1
		},
		{
			headerName: 'Actions',
			field: 'actions',
			cellRenderer: 'actionsCol',
			flex: 1
		}
	];

	let defaultColDef = {
		editable: true,
		filter: 'agTextColumnFilter',
		floatingFilter: true,
		resizable: true,
		headerClass: ['bg-blue-700', 'text-gray-300', 'text-base']
	};

	var gridOptions = {
		columnDefs: columnDefs,
		defaultColDef: defaultColDef,
		components: {
			actionsCol: actionRenderer
		}
	};

	onMount(async () => {
		// let the grid know which columns and what data to use
		grid = new Grid(thisGraph, gridOptions);

		users = await getUsers();

		setTable();
	});

	async function getUsers() {
		let response = await fetch('src/lib/utils/json_files/users.json');

		let theseUsers = await response.json();

		return theseUsers;
	}

	async function setTable() {
		if (users.users === undefined) {
			setTimeout(function () {
				setTable();
			}, 3000);
			console.log('Still waiting for data');
		} else {
			gridOptions.api.setRowData(users.users);
		}
	}

	/* Render the classes for Status tab */
	function statusRenderer(params) {
		if (params.value === 'Terminated') {
			return (
				'<span class="bg-red-300 text-red-700 rounded-full py-1 px-3 font-black">' +
				params.value +
				'</span>'
			);
		} else if (params.value === 'Suspended') {
			return (
				'<span class="bg-yellow-300 text-yellow-700 rounded-full py-1 px-3 font-black">' +
				params.value +
				'</span>'
			);
		} else {
			return (
				'<span class="bg-green-300 text-green-700 rounded-full py-1 px-3 font-black">' +
				params.value +
				'</span>'
			);
		}
	}

	/* Validation */
	let fields = { first_name: '', last_name: '', role: '', email: '' };
	let errors = { first_name: '', last_name: '', role: '', email: '' };

	const addformSubmit = () => {
		addFormValid = true;
		let onlyLetters = /^[a-zA-Z]*$/;
		let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//validate first name
		if (!fields.first_name.match(onlyLetters)) {
			addFormValid = false;
			errors.first_name = 'First name must contain only letters. No spaces are allowed either.';
		} else if (fields.first_name.trim().length < 1) {
			addFormValid = false;
			errors.first_name = 'First name cannot be blank';
		} else {
			errors.first_name = '';
		}

		//validate last name
		if (!fields.last_name.match(onlyLetters)) {
			addFormValid = false;
			errors.last_name = 'Last name must contain only letters. No spaces are allowed either.';
		} else if (fields.last_name.trim().length < 1) {
			addFormValid = false;
			errors.last_name = 'Last name cannot be blank';
		} else {
			errors.last_name = '';
		}

		//validate email
		if (!fields.email.match(emailRegex)) {
			addFormValid = false;
			errors.email = 'Email is not in the proper format or is empty';
		} else {
			errors.email = '';
		}

		if (addFormValid === true) {
			fields.first_name = '';
			fields.last_name = '';
			fields.role = '';
			fields.email = '';

			// Hiding form temporarily until we actually want to post the data
			showAddForm = false;
		}
	};
</script>

<div class="flex justify-between">
	<h1 class="text-4xl">User Management</h1>
	<button
		class="py-3 px-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
		on:click={() => goto('/admin')}>View History</button
	>
</div>
<hr class="border-2 border-gray-500 my-4 mx-6" />
<div class="flex justify-center">
	<button class="py-3 px-3 bg-green-400 rounded-lg text-white" on:click={() => (showAddForm = true)}
		>Add User</button
	>
</div>
<!-- Add Form after the Add User button is clicked -->
<div
	class="addForm fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showAddForm ===
	true
		? 'flex'
		: 'hidden'}"
>
	<div class="relative mx-auto">
		<div class="relative bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
			<header class="flex items-center justify-between">
				<h2 class="font-semibold mt-4 text-3xl ml-32">Add a User</h2>
				<button class="focus:outline-none p-2" on:click={() => (showAddForm = false)}>
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
				<form id="addForm" class="mb-0 space-y-6 mt-4" on:submit|preventDefault={addformSubmit}>
					<div class="mt-4">
						<label for="title" class="block text-sm font-medium text-blue-700 mr-4 "
							>User's First Name</label
						>
						<div class="mt-3">
							<input
								id="fName"
								name="fName"
								type="text"
								bind:value={fields.first_name}
								class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm mr-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>
						</div>
						<div class="font-bold text-red-700 mr-4 mt-3">{errors.first_name}</div>
					</div>
					<div class="mr-3">
						<label for="lName" class="block text-sm font-medium text-blue-700"
							>User's Last Name</label
						>
						<div class="mt-3">
							<input
								id="lName"
								name="lName"
								type="text"
								bind:value={fields.last_name}
								class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>
							<div class="font-bold text-red-700 mt-3">
								{errors.last_name}
							</div>
						</div>
					</div>
					<div class="mr-3">
						<label for="lName" class="block text-sm font-medium text-blue-700">User's Email</label>
						<div class="mt-3">
							<input
								id="email"
								name="email"
								type="email"
								bind:value={fields.email}
								class="w-96 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>
							<div class="font-bold text-red-700 mt-3">
								{errors.email}
							</div>
						</div>
					</div>
					<div>
						<label for="user_role" class="block text-sm font-medium text-blue-700 mt-3"
							>User's Role</label
						>
						<div class="mt-3">
							<select
								id="user_role"
								name="user_role"
								class="w-96 border border-gray-300 px-3 py-2 rounded-lg bg-white text-center shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							>
								<option value="user">User</option>
								<option value="manager">Manager</option>
								<option value="admin">Admin</option>
								<option value="tester">Tester</option>
							</select>
						</div>
					</div>
					<div class="flex justify-center">
						<button
							type="submit"
							class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>Add User</button
						>
					</div>
				</form>
			</main>
		</div>
	</div>
</div>
<div class="ag-theme-alpine w-full mx-auto mt-10" style="height: 500px;" bind:this={thisGraph} />
