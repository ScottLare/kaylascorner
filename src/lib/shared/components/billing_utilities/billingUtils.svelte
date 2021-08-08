<!-- Billing Tab-->
<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	let field_names;

	let openedTab = 'module';

	onMount(async () => {
		field_names = await getTableFields();
	});

	async function getTableFields() {
		let response = await fetch('src/lib/utils/json_files/billing_mods.json');

		let theseFields = await response.json();

		return theseFields;
	}

	function goToThisPage(val) {
		val = val.split(' ').join('');

		goto('billUtils' + '/' + val);
	}
</script>

<div class="flex justify-between">
	<h1 class="text-4xl">Billing</h1>
	<div class="flex items-center text-3xl mr-9">
		<p>
			Default Global Fiscal Year and Period is: <span class="ml-4 font-bold"
				>Fiscal Year 2021, Period 10</span
			>
		</p>
	</div>
</div>
<hr class="border-2 border-gray-500 my-6 mx-7" />
<div class="border-b-2 border-gray-400 mx-5">
	<ul class="flex cursor-pointer">
		<li
			class="py-2 px-6 rounded-t-lg relative hover:bg-blue-300 {openedTab === 'module'
				? 'bg-blue-300'
				: 'bg-gray-200'}"
			on:click={() => {
				openedTab = 'module';
			}}
		>
			Billing Module Adminstration
		</li>
		<li
			class="py-2 px-6 rounded-t-lg relative hover:bg-blue-300 {openedTab === 'project'
				? 'bg-blue-300'
				: 'bg-gray-200'}"
			on:click={() => {
				openedTab = 'project';
			}}
		>
			Validate Unchecked Project Numbers in the GL
		</li>
		<li
			class="py-2 px-6 rounded-t-lg relative hover:bg-blue-300 {openedTab === 'year'
				? 'bg-blue-300'
				: 'bg-gray-200'}"
			on:click={() => {
				openedTab = 'year';
			}}
		>
			Change Default Global Fiscal Year and Period
		</li>
	</ul>
</div>
<div id="default" class="h-full overflow-scroll block bg-blue-100 mx-5 rounded-2px flex-1 p-8">
	<div id="module" class={openedTab === 'module' ? 'block' : 'hidden'}>
		<div class="flex justify-evenly relative h-97perc -top-2 overflow-y-scroll">
			<div
				class="text-rem-1point1 mt-4 flex-one-one-49perc h-full tracking-zero-point-one-rem"
				style="text-indent: 27px;"
			>
				<div id="teamCard" class="flex-one-one-49perc relative h-full m-dashboardCards">
					<div class="teamList bg-fff relative h-full m-teamList rounded-2px p-8 -top-4">
						<div class="flex justify-center">
							<h1 class="text-4xl">Please Choose the Module to Administer</h1>
						</div>
						<hr class="border-2 border-gray-500 my-4 mx-6 mb-10" />
						{#if field_names === undefined}
							Loading .......
						{:else}
							<div class="w-4/5 mx-auto">
								<div class="grid grid-cols-2 gap-8">
									{#each field_names.modules as the_field, i}
										<!-- CARD 1 -->
										<div
											class="bg-blue-400 bg-opacity-95 p-10 rounded-xl cursor-pointer hover:bg-blue-200 hover:border-transparent | transition-colors duration-500"
											on:click={() => goToThisPage(field_names.modules[i].name)}
										>
											<div class="col-span-2">
												<p class="text-white text-2xl relative text-center mr-2 ">
													{field_names.modules[i].name}
												</p>
											</div>
										</div>
										<!-- END of Card 1 -->
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
