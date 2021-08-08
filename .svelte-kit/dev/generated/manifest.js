const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/notifications/index.svelte"),
	() => import("../../../src/routes/management/index.svelte"),
	() => import("../../../src/routes/billUtils/BasicRemoteAccess.svelte"),
	() => import("../../../src/routes/dashboard/index.svelte"),
	() => import("../../../src/routes/hierachy/index.svelte"),
	() => import("../../../src/routes/projects/index.svelte"),
	() => import("../../../src/routes/schedule/index.svelte"),
	() => import("../../../src/routes/settings/index.svelte"),
	() => import("../../../src/routes/billing/index.svelte"),
	() => import("../../../src/routes/history/index.svelte"),
	() => import("../../../src/routes/message/index.svelte"),
	() => import("../../../src/routes/import/index.svelte"),
	() => import("../../../src/routes/months/index.svelte"),
	() => import("../../../src/routes/about/index.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/admin/index.svelte"),
	() => import("../../../src/routes/email/index.svelte"),
	() => import("../../../src/routes/todos/index.svelte"),
	() => import("../../../src/routes/help/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/notifications/index.svelte
	[/^\/notifications\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/sitemap.xml.ts
	[/^\/sitemap\.xml$/],

	// src/routes/management/index.svelte
	[/^\/management\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/billUtils/BasicRemoteAccess.svelte
	[/^\/billUtils\/BasicRemoteAccess\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/hierachy/index.svelte
	[/^\/hierachy\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/projects/index.svelte
	[/^\/projects\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/schedule/index.svelte
	[/^\/schedule\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/settings/index.svelte
	[/^\/settings\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/billing/index.svelte
	[/^\/billing\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/history/index.svelte
	[/^\/history\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/message/index.svelte
	[/^\/message\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/import/index.svelte
	[/^\/import\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/months/index.svelte
	[/^\/months\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/admin/index.svelte
	[/^\/admin\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/email/index.svelte
	[/^\/email\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/todos/index.json.ts
	[/^\/todos\.json$/],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/todos/[uid].json.ts
	[/^\/todos\/([^/]+?)\.json$/],

	// src/routes/help/index.svelte
	[/^\/help\/?$/, [c[0], c[21]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];