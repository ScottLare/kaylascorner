<script lang="ts">
	// Start: Local Imports
	// Components
	import Header from '$lib/shared/ui/components/header/Header.svelte';

	// Models
	import type { IHeaderNavLink } from '$lib/models/interfaces/iheader-nav-link.interface';
	// End: Local Imports

	/**
	 * @type {IHeaderNavLink}
	 */
	const navLinks: IHeaderNavLink[] = [
		{
			path: '/billing',
			label: 'Home'
		},
		{
			path: '/help',
			label: 'Docs'
		},
		{
			path: '/settings',
			label: 'Settings'
		}
	];
</script>

<Header title="RTI International" {navLinks} />
