<script lang="ts" context="module">
	export async function load({ fetch }) {
		try {
			await fetch('/sitemap.xml');

			return true;
		} catch (error) {
			console.error(error);
		}
	}

	//adding for material UI for Sveltekit
	let name = '';
	let showCard = false;
	//import Textfield from '@smui/textfield';
	//import Button from '@smui/button';

	// added below func from https://dev.to/danawoodman/getting-form-body-data-in-your-sveltekit-endpoints-4a85
	let submit;
	/*
		// Send a POST request to src/routes/contact.js endpoint
		submit = fetch('/contact', {
			method: 'POST',
			body: JSON.stringify({ foo: 'bar' }),
			headers: { 'content-type': 'application/json' }
		})
			.then((resp) => resp.json())
			.finally(() => setTimeout(() => (submit = null), 5000));

		*/
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	// Start: Svelte Imports
	import { onMount } from 'svelte';
	// End: Svelte Imports

	import { logged } from '$lib/utils/userLogged';

	// Start: Local Imports

	// Core services
	import { JSONHttpUtil } from '$lib/core';

	// Utils
	import { Logger, LoggerUtils } from '$lib/utils/logger';

	// Components
	import HeadTags from '$lib/shared/components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Home | Data Integrator',
		description:
			'The Data Integrator project is created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).  The concept and original template was first found and forked from https://github.com/navneetsharmaui/sveltekit-starter.  Code and Contributions have MIT License  Copyright (c) 2021 Navneet Sharma (@asnavneetsharma)',
		keywords: ['RTI', 'Data Integrator']
	};

	const logger: Logger = LoggerUtils.getInstance('Index');

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>(
			'https://jsonplaceholder.typicode.com/photos?_limit=20'
		);
		logger.debug(data);

		logged.set(false);
	});

	const handleloginclick = () => {
		goto('/billing');
	};

	var activeform = 'login';

	/* Validation for the Add Form for Alerts */
	let loginfields = { email: '', password: '' };
	let loginerrors = { email: '', password: '' };

	/* Validation for the Add Form for Alerts */

	let signupfields = {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	let signuperrors = {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	let loginValid = false;
	let nextValid = false;
	let signupValid = false;

	let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

	const handleSubmit = () => {
		loginValid = true;

		//validate email
		if (!loginfields.email.match(emailRegex)) {
			loginValid = false;
			loginerrors.email = 'Email is not in the proper format or is empty';
		} else {
			loginerrors.email = '';
		}

		//validate password
		if (!loginfields.password.match(passwordRegex)) {
			loginValid = false;
			loginerrors.password =
				'Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numeric character, and 1 special character';
		} else if (loginfields.password.trim().length < 1) {
			loginValid = false;
			loginerrors.password = 'Please enter your password ';
		} else if (loginfields.password.trim().length < 8) {
			loginValid = false;
			loginerrors.password = 'Password must be at least 8 characters or longer';
		} else {
			loginerrors.password = '';
		}

		if (loginValid === true) {
			goto('billing');
		}
	};

	/* Validation for First Page of Sign Up Form */

	const handleNext = () => {
		nextValid = true;

		var onlyLetters = /^[a-zA-Z\s]*$/;

		// validate first name
		if (!signupfields.first_name.match(onlyLetters)) {
			signuperrors.first_name = 'First name must only contain letters and have no spaces';
			nextValid = false;
		} else if (signupfields.first_name.trim().length < 1) {
			signuperrors.first_name = 'First name must not be empty';
			nextValid = false;
		} else {
			signuperrors.first_name = '';
		}

		// validate last name
		if (!signupfields.last_name.match(onlyLetters)) {
			signuperrors.last_name = 'Last name must only contain letters and have no spaces';
			nextValid = false;
		} else if (signupfields.last_name.trim().length < 1) {
			signuperrors.last_name = 'Last name must not be empty';
			nextValid = false;
		} else {
			signuperrors.last_name = '';
		}

		if (nextValid === true) {
			step = '2';
		}
	};

	/* Validation after submission of Sign Up Form */

	const handleSignUp = () => {
		signupValid = true;

		//validate email
		if (!signupfields.email.match(emailRegex)) {
			signupValid = false;
			signuperrors.email = 'Email is not in the proper format or is empty';
		} else {
			signuperrors.email = '';
		}

		//validate password
		if (!signupfields.password.match(passwordRegex)) {
			signupValid = false;
			signuperrors.password =
				'Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numeric character, and 1 special character';
		} else if (signupfields.password.trim().length < 1) {
			signupValid = false;
			signuperrors.password = 'Please enter your password ';
		} else if (signupfields.password.trim().length < 8) {
			signupValid = false;
			signuperrors.password = 'Password must be at least 8 characters or longer';
		} else {
			signuperrors.password = '';
		}

		//validate confirm password
		if (signupfields.confirmPassword !== signupfields.password) {
			signupValid = false;
			signuperrors.confirmPassword = 'Passwords do not match';
		} else {
			signuperrors.confirmPassword = '';
		}

		if (signupValid === true) {
			goto('billing');
		}
	};

	// For Step Form in Sign Up
	let step = '1';
	let firstranOnce = false;
	let lastranOnce = false;
	let emailranOnce = false;
	let passwordranOnce = false;
	let confirmPasswordranOnce = false;
	let total = 0;

	function updateProgress(field) {
		if (field === 'first') {
			if (firstranOnce === false) {
				total = total + 1;
				firstranOnce = true;
			} else {
				if (signupfields.first_name === '') {
					firstranOnce = false;
					total = total - 1;
				}
			}
		} else if (field === 'last') {
			if (lastranOnce === false) {
				total = total + 1;
				lastranOnce = true;
			} else {
				if (signupfields.last_name === '') {
					lastranOnce = false;
					total = total - 1;
				}
			}
		} else if (field === 'email') {
			if (emailranOnce === false) {
				total = total + 1;
				emailranOnce = true;
			} else {
				if (signupfields.email === '') {
					emailranOnce = false;
					total = total - 1;
				}
			}
		} else if (field === 'password') {
			if (passwordranOnce === false) {
				total = total + 1;
				passwordranOnce = true;
			} else {
				if (signupfields.password === '') {
					passwordranOnce = false;
					total = total - 1;
				}
			}
		} else {
			if (confirmPasswordranOnce === false) {
				total = total + 1;
				confirmPasswordranOnce = true;
			} else {
				if (signupfields.confirmPassword === '') {
					confirmPasswordranOnce = false;
					total = total - 1;
				}
			}
		}
		if (total === 0) {
			document.getElementById('progress1').style.width = '0%';
			document.getElementById('progress1').innerHTML = '0%';
		} else if (total === 1) {
			document.getElementById('progress1').style.width = '20%';
			document.getElementById('progress1').style.backgroundColor = 'orange';
			document.getElementById('progress1').innerHTML = '20%';
		} else if (total === 2) {
			document.getElementById('progress1').style.width = '40%';
			document.getElementById('progress1').style.backgroundColor = 'pink';
			document.getElementById('progress1').innerHTML = '40%';
		} else if (total === 3) {
			document.getElementById('progress1').style.width = '60%';
			document.getElementById('progress1').style.backgroundColor = 'purple';
			document.getElementById('progress1').innerHTML = '60%';
		} else if (total === 4) {
			document.getElementById('progress1').style.width = '80%';
			document.getElementById('progress1').style.backgroundColor = 'blue';
			document.getElementById('progress1').innerHTML = '80%';
		} else if (total === 5) {
			document.getElementById('progress1').style.width = '100%';
			document.getElementById('progress1').style.backgroundColor = 'green';
			document.getElementById('progress1').innerHTML = '100%';
		} else {
			console.log('We have recieved some weird error. Let the debugging begin');
		}
	}
</script>

<div class="max-w-md w-full fixed  {activeform === 'login' ? 'block' : 'hidden'}" id="login-form">
	<div class="border-4 border-globe2 bg-white shadow rounded-lg">
		<div class="flex justify-center mt-4 mb-8 mr-10">
			<img class="border rounded-xl" src="static/RTI_favicon.ico" alt="RTI logo" />
			<h1 class="text-4xl font-bold mt-3 ml-10 text-black">Login</h1>
		</div>
		<form on:submit|preventDefault={handleSubmit} class="mb-0 space-y-6 w-full mx-auto">
			<div class="mt-4">
				<label for="email" class="block text-sm font-medium text-blue-500">Email Address</label>
				<div class="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						bind:value={loginfields.email}
						class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>

					<div class="font-bold text-red-700 mr-9 mt-3">{loginerrors.email}</div>
				</div>
			</div>
			<div>
				<label for="password" class="block text-sm font-medium text-blue-500 ">Password</label>
				<div class="mt-1">
					<input
						id="password"
						name="password"
						type="password"
						bind:value={loginfields.password}
						class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					/>
					<div class="font-bold text-red-700 mr-9 mt-3">{loginerrors.password}</div>
				</div>

				<input
					id="rememberMe"
					name="rememberMe"
					type="checkbox"
					class="rounded border-gray-300 text-blue-500 focus:ring-blue-500 mt-4"
				/><label for="rememberMe" class="ml-2 inline-block text-sm text-blue-900">Remember me</label
				>
				<a class="font-bold text-sm text-blue-500 mt-3 float-right mr-10 mb-4" href="/">
					Forgot Password?
				</a>
			</div>
			<div class="ml-16">
				<button
					type="submit"
					class="w-4/5 mb-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>Log In</button
				>
			</div>
			<div class="mt-5 text-black">
				<p>
					Don't have an account? <a
						on:click={() => (activeform = 'signup')}
						class="text-blue-500 cursor-pointer">Create One</a
					>
				</p>
			</div>
		</form>
	</div>
</div>
<!--Sign up Form-->
<div class="max-w-md w-full fixed {activeform === 'signup' ? 'block' : 'hidden'}" id="signup-form">
	<div class="border-4 border-blue-500 bg-white shadow rounded-lg">
		<div class="flex justify-center mt-4 mb-6 mr-10">
			<img class="border rounded-xl" src="static/RTI_favicon.ico" alt="RTI logo" />
			<h1 class="text-4xl font-bold mt-3">Sign Up</h1>
		</div>
		<div class="mt-5 text-black ">
			<p>
				Already have an account? <a
					href="/"
					on:click={() => (activeform = 'login')}
					class="text-blue-400 cursor-pointer">Sign in</a
				>
			</p>
		</div>
		<h1 class="inline-block font-semibold text-2xl mt-2">Create your account</h1>
		<form
			on:submit|preventDefault={handleSubmit}
			action="/doubler"
			method="post"
			class="mb-0 space-y-6 mt-4"
		>
			<!-- Progress Bar  -->
			<div class="px-10">
				<div class="shadow w-full bg-gray-400 mt-2 rounded-lg">
					<div
						class=" w-0 text-sm leading-none py-1 text-center text-white rounded-full"
						id="progress1"
					>
						0%
					</div>
				</div>
			</div>
			<!-- End of Progress Bar -->
			<div id="step1" class={step === '1' ? 'block' : 'hidden'}>
				<div class="mt-4">
					<label for="fName" class="block text-sm font-medium text-blue-700 ">First Name</label>
					<div class="mt-3">
						<input
							id="fName"
							name="fName"
							type="text"
							bind:value={signupfields.first_name}
							class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm mr-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							on:input={() => updateProgress('first')}
						/>
					</div>
					<div class="font-bold text-red-700 mt-3">{signuperrors.first_name}</div>
				</div>
				<div class="mt-4">
					<label for="lName" class="block text-sm font-medium text-blue-700">Last Name</label>
					<div class="mt-3">
						<input
							id="lName"
							name="lName"
							type="text"
							bind:value={signupfields.last_name}
							class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							on:input={() => updateProgress('last')}
						/>
						<div class="font-bold text-red-700 ml-10 mt-3">
							{signuperrors.last_name}
						</div>
					</div>
				</div>
				<!-- Next Button -->
				<div class="flex justify-center">
					<button
						class=" w-48 mb-2 py-2 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						on:click={() => handleNext()}>Next</button
					>
				</div>
			</div>
			<div id="step2" class={step === '2' ? 'block' : 'hidden'}>
				<!--- Email Address-->
				<div class="mt-4">
					<label for="email" class="block text-sm font-medium text-blue-700">Email Address</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							bind:value={signupfields.email}
							class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							on:input={() => updateProgress('email')}
						/>
						<div class="font-bold text-red-700 mt-3">{signuperrors.email}</div>
					</div>
				</div>
				<!-- End of Email -->
				<!-- Password -->
				<div>
					<label for="password" class="block text-sm font-medium text-blue-700">Password</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							bind:value={signupfields.password}
							class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							on:input={() => updateProgress('password')}
						/>
						<div class="font-bold text-red-700 mt-3">{signuperrors.password}</div>
					</div>
					<!-- End of Password-->
					<!-- Confirm Password -->
					<div>
						<label for="confirmPassword" class="block text-sm font-medium text-blue-700"
							>Confirm Password</label
						>
						<div class="mt-1">
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								bind:value={signupfields.confirmPassword}
								class="w-4/5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								on:input={() => updateProgress('confirmPassword')}
							/>
							<div class="font-bold text-red-700 mt-3">{signuperrors.confirmPassword}</div>
						</div>
						<!-- End of Password-->
						<input
							id="rememberMe"
							name="rememberMe"
							type="checkbox"
							class="rounded border-gray-300 text-gray-500 focus:ring-blue-500 mt-4"
						/><label for="rememberMe" class="ml-2 inline-block text-md text-black mt-5"
							>I agree to the <a href="/" class="text-blue-400 hover:text-blue-300">Terms</a> and
							<a href="/" class="text-blue-400 hover:text-blue-300">Privacy Policy</a>
						</label>
					</div>
					<div class="mt-7 flex justify-between">
						<button
							id="previous"
							class="w-48 mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
							on:click={() => (step = '1')}
						>
							Go Back
						</button>
						<button
							type="submit"
							class=" w-48 mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							on:click={() => handleSignUp()}>Sign Up</button
						>
					</div>
				</div>
			</div>
		</form>
	</div>
	<br />
</div>
