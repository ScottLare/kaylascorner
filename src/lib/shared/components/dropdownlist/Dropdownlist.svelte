<script>
	// variables for the names of each dropdown
	export let name_1 = '';
	export let name_2 = '';
	export let name_3 = '';
	export let name_4 = '';

	//variables for the text color for each dropdown name
	export let text_color1 = 'text-orange-variant1';
	export let text_color2 = 'text-black';
	export let text_color3 = 'text-black';
	export let text_color4 = 'text-black';

	// variables for the inner text of each dropdown
	export let name_inner_1 = '';
	export let name_inner_2 = '';
	export let name_inner_3 = '';
	export let name_inner_4 = '';

	// variable for background color of dropdown nav
	export let bg_color = 'bg-teal-200';

	// variable for opening dropdowns
	export let open = false;
	export let dropdown = '';
	export let lastClicked = '';

	function OpenDropdowns(name) {
		open = !open;
		dropdown = name;

		if (lastClicked == name) {
			open = open;
		} else {
			open = true;
			lastClicked = name;
		}
	}
</script>

<div
	class="row utility {bg_color} flex flex-nowrap justify-evenly w-full clear-both font-mono-sans font-normal not-italic"
>
	<!--- Subscriptions menu item -->
	<div
		class="menuItem {text_color1} ml-2 flex flex-one-one-30perc bg-fff m-menuitem rounded-2px py-0 px-point-6 h-42px justify-between items-center font-semibold cursor-pointer"
		on:click={() => OpenDropdowns('sub')}
		id="sub"
	>
		{name_1}:
		<p
			class="dashboardChecked inline-block text-gray-variant1 font-normal leading-4 text-rem-point95 pl-point-7 tracking-zero-zero-four"
		>
			<!-- populated by js -->
			{name_inner_1}
		</p>
		<img
			class="downChevron h-17px w-27px border-none ease-linear transition-onlytransform duration-point5 delay-0"
			id="subArrow"
			src="static/downChevron.svg"
			alt="Checkmark"
		/>
		<!-- Subscriptions Dropdown-->
		<div
			class="dropdown top-32 left-5 fixed z-10 bg-index-left shadow-menuItemDropdown min-w-250 h-auto font-normal {dropdown ===
				'sub' && open === true
				? 'block'
				: 'hidden'}"
			id="Drop1"
		>
			<slot name="name1_dropdown" />
		</div>
	</div>
	<!--- Resources menu item -->
	<div
		class="menuItem {text_color2} flex flex-one-one-30perc bg-fff m-menuitem rounded-2px py-0 px-point-6 h-42px justify-between items-center font-semibold cursor-pointer"
		on:click={() => OpenDropdowns('resources')}
		id="resources"
	>
		{name_2}
		<p
			class="resourceChecked dashboardChecked inline-block text-gray-variant1 font-normal leading-4 text-rem-point95 pl-point-7 tracking-zero-zero-four"
		>
			{name_inner_2} &nbsp;&nbsp;
			<!--
			<span class="bg-server bg-no-repeat h-18-important float-right w-18px mr-4 relative -top-1" /> -->
		</p>
		{#if name_2 != ''}
			<img
				class="downChevron h-17px w-27px border-none ease-linear transition-onlytransform duration-point5 delay-0"
				id="resourcesArrow"
				src="static/downChevron.svg"
				alt="Checkmark"
			/>
		{/if}
		<!-- Resources Dropdown-->
		<div
			class="dropdown top-32 left-30 fixed z-10 bg-index-left shadow-menuItemDropdown min-w-250 h-28 {dropdown ===
				'resources' && open === true
				? 'block'
				: 'hidden'}"
			id="Drop2"
		>
			<slot
				name="name2_dropdown"
			/><!--<span
					class="bg-server bg-no-repeat h-18-important float-right w-18px mr-4 relative top-6 -left-2"
				/> -->
		</div>
	</div>
	<!-- Notifications Menu Item-->
	<div
		class="menuItem flex flex-one-one-30perc bg-fff m-menuitem rounded-2px py-0 px-point-6 h-42px justify-between items-center font-semibold"
		id="messages"
		on:click={() => OpenDropdowns('notif')}
	>
		<span
			class="m-0 p-0 flex flex-one-one-30perc bg-fff rounded-2px h-42px justify-between items-center font-semibold cursor-pointer {text_color3}"
			>{name_3}&nbsp;
			<p class="mr-28">{name_inner_3}</p>
			{#if name_3 != ''}
				<img
					class="downChevron h-17px w-27px border-none ease-linear transition-onlytransform duration-point5 delay-0"
					id="messagesArrow"
					src="static/downChevron.svg"
					alt="Checkmark"
				/>
			{/if}
			<!-- Notifications Dropdown-->
			<div
				class="dropdown top-32 fixed z-10 bg-index-left shadow-menuItemDropdown min-w-250 {dropdown ===
					'notif' && open === true
					? 'block'
					: 'hidden'}"
				id="Drop3"
			>
				<slot name="name3_dropdown" />
			</div>
		</span>
	</div>
	<!-- Dropdown 4-->
	<div
		class="menuItem mr-2 flex flex-one-one-30perc bg-fff m-menuitem rounded-2px py-0 px-point-6 h-42px justify-between items-center font-semibold cursor-pointer"
		on:click={() => OpenDropdowns('help')}
		id="openwindows"
	>
		<span
			class="m-0 p-0 flex flex-one-one-30perc bg-fff rounded-2px h-42px justify-between items-center font-semibold {text_color4}"
			>{name_4}&nbsp;
			<p class="mr-16">{name_inner_4}</p>
			<!-- Circle Icon
			<span class="h-5 w-5 bg-red-500 rounded-full relative -left-48 -top-8" />
			-->
			<img
				class="downChevron h-17px w-27px border-none ease-linear transition-onlytransform duration-point5 delay-0"
				id="openwindowsArrow"
				src="static/downChevron.svg"
				alt="Checkmark"
			/>
			<!-- Open Windows  Dropdown-->
			<div
				class="dropdown top-32 fixed z-10 bg-index-left shadow-menuItemDropdown min-w-250 h-auto font-normal {dropdown ===
					'help' && open === true
					? 'block'
					: 'hidden'}"
				id="Drop4"
			>
				<slot name="name4_dropdown" />
			</div>
		</span>
	</div>
</div>
