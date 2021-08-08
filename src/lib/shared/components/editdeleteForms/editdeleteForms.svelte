<script>
	let showEditForm = false;

	const editformSubmit = () => {
		//Hide form temporarily
		showEditForm = false;
	};

	/* Validation */
	let fields = { first_name: '', last_name: '', role: '', email: '' };
	let errors = { first_name: '', last_name: '', role: '', email: '' };
</script>

<div class="flex ml-12">
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
		>
			<path
				fill-rule="evenodd"
				d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</div>
<!-- Edit Form  -->
<div
	class="editForm fixed w-full inset-0 h-full z-30 bg-black bg-opacity-50 duration-300 overflow-y-auto overflow-x-hidden items-center {showEditForm ===
	true
		? 'flex'
		: 'hidden'}"
>
	<div class="relative mx-auto">
		<div class="relative bg-blue-300 shadow-lg rounded-md text-gray-900 w-full">
			<header class="flex items-center justify-between">
				<h2 class="font-semibold mt-4 text-3xl ml-32">Edit User</h2>
				<button class="focus:outline-none p-2" on:click={() => (showEditForm = false)}>
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
				<form id="addForm" class="mb-0 space-y-6 mt-4" on:submit|preventDefault={editformSubmit}>
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
							class="w-4/5 mb-2 flex justify-center py-2 px-4 border ml-3 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>Edit User</button
						>
					</div>
				</form>
			</main>
		</div>
	</div>
</div>
