import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\n\t\t<link rel=\"stylesheet\" href=\"/global.css\" />\n\t\t<link rel=\"stylesheet\" href=\"/node_modules/ag-grid-community/dist/styles/ag-grid.css\" />\n\t\t<link rel=\"stylesheet\" href=\"/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css\" />\n\t\t<link\n\t\t\trel=\"stylesheet\"\n\t\t\thref=\"/node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css\"\n\t\t/>\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-ef8e8ad9.js",
			css: ["/./_app/assets/start-a97448ed.css","/./_app/assets/vendor-5c4ecc1b.css"],
			js: ["/./_app/start-ef8e8ad9.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/singletons-bb9012b7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"KaylasCorner3.png","size":2574752,"type":"image/png"},{"file":"RTI-logo-white.svg","size":5041,"type":"image/svg+xml"},{"file":"RTI_favicon.ico","size":34494,"type":"image/vnd.microsoft.icon"},{"file":"background_iframe_pages.svg","size":20787,"type":"image/svg+xml"},{"file":"banner_back.svg","size":1832,"type":"image/svg+xml"},{"file":"bloombergBackground_1.png","size":2352530,"type":"image/png"},{"file":"bloombergSvelteBkgrd_1.png","size":724336,"type":"image/png"},{"file":"cat_in_chair.png","size":65764,"type":"image/png"},{"file":"cat_in_suit.png","size":46104,"type":"image/png"},{"file":"cloudbillingbkgrd_1.png","size":3559141,"type":"image/png"},{"file":"cloudbillingbkgrd_2.png","size":2754178,"type":"image/png"},{"file":"cloudbillingbkgrd_3.png","size":3043905,"type":"image/png"},{"file":"cloudbillingbkgrd_4.png","size":4560097,"type":"image/png"},{"file":"cloudbillingbkgrd_5.png","size":4965311,"type":"image/png"},{"file":"downChevron.svg","size":533,"type":"image/svg+xml"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"global.css","size":42071,"type":"text/css"},{"file":"hierachy.png","size":101787,"type":"image/png"},{"file":"icon-server-on.svg","size":494,"type":"image/svg+xml"},{"file":"icon_dashboard.svg","size":2174,"type":"image/svg+xml"},{"file":"icon_files.svg","size":845,"type":"image/svg+xml"},{"file":"icon_help.svg","size":1856,"type":"image/svg+xml"},{"file":"icon_settings.svg","size":1475,"type":"image/svg+xml"},{"file":"iframe_back.png","size":173298,"type":"image/png"},{"file":"logo-192.png","size":4917,"type":"image/png"},{"file":"logo-256.png","size":23465,"type":"image/png"},{"file":"logo-512.png","size":14046,"type":"image/png"},{"file":"manifest.json","size":403,"type":"application/json"},{"file":"monkey_piece.png","size":77854,"type":"image/png"},{"file":"monkey_thumbs.png","size":89342,"type":"image/png"},{"file":"redCheckIcon.svg","size":514,"type":"image/svg+xml"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"},{"file":"unsplashImage.jpg","size":1559260,"type":"image/jpeg"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/notifications\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/notifications/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/sitemap\.xml$/,
						params: empty,
						load: () => import("../../src/routes/sitemap.xml.ts")
					},
		{
						type: 'page',
						pattern: /^\/management\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/management/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/billUtils\/BasicRemoteAccess\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/billUtils/BasicRemoteAccess.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/dashboard\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/dashboard/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/hierachy\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/hierachy/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/projects\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/projects/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/schedule\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/schedule/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/settings\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/settings/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/billing\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/billing/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/history\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/history/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/message\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/message/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/import\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/import/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/months\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/months/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/admin\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/admin/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/email\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/email/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../src/routes/todos/index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../src/routes/todos/[uid].json.ts")
					},
		{
						type: 'page',
						pattern: /^\/help\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/help/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/notifications/index.svelte": () => import("../../src/routes/notifications/index.svelte"),"src/routes/management/index.svelte": () => import("../../src/routes/management/index.svelte"),"src/routes/billUtils/BasicRemoteAccess.svelte": () => import("../../src/routes/billUtils/BasicRemoteAccess.svelte"),"src/routes/dashboard/index.svelte": () => import("../../src/routes/dashboard/index.svelte"),"src/routes/hierachy/index.svelte": () => import("../../src/routes/hierachy/index.svelte"),"src/routes/projects/index.svelte": () => import("../../src/routes/projects/index.svelte"),"src/routes/schedule/index.svelte": () => import("../../src/routes/schedule/index.svelte"),"src/routes/settings/index.svelte": () => import("../../src/routes/settings/index.svelte"),"src/routes/billing/index.svelte": () => import("../../src/routes/billing/index.svelte"),"src/routes/history/index.svelte": () => import("../../src/routes/history/index.svelte"),"src/routes/message/index.svelte": () => import("../../src/routes/message/index.svelte"),"src/routes/import/index.svelte": () => import("../../src/routes/import/index.svelte"),"src/routes/months/index.svelte": () => import("../../src/routes/months/index.svelte"),"src/routes/about/index.svelte": () => import("../../src/routes/about/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/admin/index.svelte": () => import("../../src/routes/admin/index.svelte"),"src/routes/email/index.svelte": () => import("../../src/routes/email/index.svelte"),"src/routes/todos/index.svelte": () => import("../../src/routes/todos/index.svelte"),"src/routes/help/index.svelte": () => import("../../src/routes/help/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-6218079e.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/__layout.svelte-6218079e.js","/./_app/chunks/vendor-be29eaa4.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-6d559c20.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/error.svelte-6d559c20.js","/./_app/chunks/vendor-be29eaa4.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-6dd89ffc.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/index.svelte-6dd89ffc.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/userLogged-c5a11fa4.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/HeadTags-5a730f67.js"],"styles":null},"src/routes/notifications/index.svelte":{"entry":"/./_app/pages/notifications/index.svelte-2703c077.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/notifications/index.svelte-2703c077.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/management/index.svelte":{"entry":"/./_app/pages/management/index.svelte-9f923816.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/management/index.svelte-9f923816.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/billUtils/BasicRemoteAccess.svelte":{"entry":"/./_app/pages/billUtils/BasicRemoteAccess.svelte-9df007a9.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/billUtils/BasicRemoteAccess.svelte-9df007a9.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/dashboard/index.svelte":{"entry":"/./_app/pages/dashboard/index.svelte-10f0b8ca.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/dashboard/index.svelte-10f0b8ca.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/hierachy/index.svelte":{"entry":"/./_app/pages/hierachy/index.svelte-15466be5.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/hierachy/index.svelte-15466be5.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js"],"styles":null},"src/routes/projects/index.svelte":{"entry":"/./_app/pages/projects/index.svelte-82428bfc.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/projects/index.svelte-82428bfc.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/schedule/index.svelte":{"entry":"/./_app/pages/schedule/index.svelte-644b74fc.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/schedule/index.svelte-644b74fc.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/settings/index.svelte":{"entry":"/./_app/pages/settings/index.svelte-97921bff.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/settings/index.svelte-97921bff.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/billing/index.svelte":{"entry":"/./_app/pages/billing/index.svelte-88857d2b.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/billing/index.svelte-88857d2b.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/userLogged-c5a11fa4.js","/./_app/chunks/navbar-bd10f642.js"],"styles":null},"src/routes/history/index.svelte":{"entry":"/./_app/pages/history/index.svelte-ecc6c0a1.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/history/index.svelte-ecc6c0a1.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/message/index.svelte":{"entry":"/./_app/pages/message/index.svelte-b4156c26.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/message/index.svelte-b4156c26.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js"],"styles":null},"src/routes/import/index.svelte":{"entry":"/./_app/pages/import/index.svelte-a8313657.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/import/index.svelte-a8313657.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/months/index.svelte":{"entry":"/./_app/pages/months/index.svelte-63cd572a.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/months/index.svelte-63cd572a.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/about/index.svelte":{"entry":"/./_app/pages/about/index.svelte-df31eac2.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/about/index.svelte-df31eac2.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/HeadTags-5a730f67.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-c2f89151.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/about.svelte-c2f89151.js","/./_app/chunks/vendor-be29eaa4.js"],"styles":null},"src/routes/admin/index.svelte":{"entry":"/./_app/pages/admin/index.svelte-b44d58f6.js","css":["/./_app/assets/about.svelte_svelte&type=style&lang-ef439505.css","/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/admin/index.svelte-b44d58f6.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null},"src/routes/email/index.svelte":{"entry":"/./_app/pages/email/index.svelte-be4d56fd.js","css":["/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/email/index.svelte-be4d56fd.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js"],"styles":null},"src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-99488b35.js","css":["/./_app/assets/pages/todos/index.svelte-3427d116.css","/./_app/assets/vendor-5c4ecc1b.css"],"js":["/./_app/pages/todos/index.svelte-99488b35.js","/./_app/chunks/vendor-be29eaa4.js"],"styles":null},"src/routes/help/index.svelte":{"entry":"/./_app/pages/help/index.svelte-61d0e759.js","css":["/./_app/assets/vendor-5c4ecc1b.css","/./_app/assets/navbar-b726bc29.css"],"js":["/./_app/pages/help/index.svelte-61d0e759.js","/./_app/chunks/vendor-be29eaa4.js","/./_app/chunks/verToolbar-b52ad12a.js","/./_app/chunks/logger-e2015d7d.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/HeadTags-5a730f67.js","/./_app/chunks/vertTool-e28a0615.js","/./_app/chunks/navbar-bd10f642.js","/./_app/chunks/userLogged-c5a11fa4.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}