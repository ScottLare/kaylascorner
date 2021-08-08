export * from './logger';

import type { BillingData } from '$lib/models/interfaces/datasources';

export const DATA: BillingData[] = [
	{
		name: 'GTS',
		description: 'Billing details for the GTS team',
		team_members: [
			{ name: 'Scott Lare', role: 'Contributor', isAdmin: 'yes' },
			{ name: 'Ramesh Upadhyaya ', role: 'Contributor', isAdmin: 'no' }
		],
		current_data_sources: [{ name: 'COVID Data 1', server_status: 'off' }],
		avail_data_sources: ['COVID Data 10'],
		html_id: 'gts'
	},
	{
		name: 'SSES',
		description: 'Billing details for the SSES Team',
		team_members: [
			{ name: 'Marcus Lofton', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Gabby Lamb', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Thomas Blade', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Kenan Williams', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Elizabeth Turner', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Verlinda Davis', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Eugene Vargos', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Rebecca Lawerence', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Amy Fox', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Joshua Yang', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Donald Zootori', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Kel Shatori', role: 'Contributor', isAdmin: 'no' },
			{ name: 'Austin Williams', role: 'Contributor', isAdmin: 'no' }
		],
		current_data_sources: [{ name: 'Billing Document 1', server_status: 'off' }],
		avail_data_sources: ['Bloom Data 10'],
		html_id: 'sses'
	},
	{
		name: 'RCD',
		description: 'Billing deatils for the RCD team',
		team_members: [{ name: 'Scott Lare', role: 'Contributor', isAdmin: 'yes' }],
		current_data_sources: [{ name: 'Marrlot Data 1', server_status: 'off' }],
		avail_data_sources: ['Marrlot Data 10'],
		html_id: 'rcd'
	},
	{
		name: 'IDG',
		description: 'Billing details for the IDG team',
		team_members: [],
		current_data_sources: [],
		avail_data_sources: [],
		html_id: 'idg'
	},
	{
		name: 'LAB58',
		description: 'Billing details for the LAB58 team',
		team_members: [],
		current_data_sources: [],
		avail_data_sources: [],
		html_id: 'lab58'
	}
];
