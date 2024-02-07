export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1-768x557.jpg","1000_F_223334073_KYHsxG7uuqLInV73yfOiM4iZr1CVNSWY.jpg","2.jpg","4-768x451.jpg","Afbeelding_cover.jpg","Algemeen-Specifiek-1-768x536.jpg","Basisvormen-ezgif.com-video-to-gif-converter.gif","Basisvormen.mp4","Boze-bakker-ezgif.com-video-to-gif-converter.gif","Boze-bakker.mp4","Combinatie-ballonnen-768x386.jpg","Combinatie-ballonnen2-768x280.jpg","Desktop - 2.svg","Docent-768x576.jpg","Docent.webp","Fases_methode.jpg","Group 1.svg","Interview .webp","Keuze-WIllekeur-768x536.jpg","Kleurenwiel-ezgif.com-video-to-gif-converter.gif","Kleurenwiel.mp4","Plaatje-paard-ezgif.com-video-to-gif-converter.gif","Plaatje-paard.mp4","Proces-ontbijt-ezgif.com-video-to-gif-converter.gif","Proces-ontbijt.mp4","Prototype3_bewerkt-copy.jpg","Rectangle 10.svg","Rectangle 11.svg","Rectangle 12.svg","Rectangle 13.svg","Samen_tekenen_lachen.jpg","Samen_tekenen_lachen.webp","Schema_Socrates_Sneakers.png","Schrijven-video1-ezgif.com-video-to-gif-converter.gif","Schrijven-video1.mp4","Schrijven-video2-ezgif.com-video-to-gif-converter.gif","Schrijven-video2.mp4","Schrijven-video3-ezgif.com-video-to-gif-converter.gif","Schrijven-video3.mp4","Send-button-VT.svg","Simpel-poppetje-ezgif.com-video-to-gif-converter.gif","Simpel-poppetje.mp4","Spelregels-768x1086.jpg","Studenten_over_methode.jpg","Themas-1.jpg","Vakgebieden-768x536.jpg","Verhoudingen-poppetje-ezgif.com-video-to-gif-converter.gif","Verhoudingen-poppetje.mp4","account.png","account.svg","afbeelding_cover .webp","arrow-down.svg","arrow-left.svg","arrow-up.svg","arrow.svg","arrows.svg","arrows_black.svg","assets/.gitkeep","assets/highlighter_7931172.png","assets/istockphoto-1216610305-1024x1024.jpg","author.svg","basisvormen.svg","category.svg","cd-logo.svg","cep-logo.svg","com&pre.jpg","communiceren-presenteren.jpg","communiceren.svg","creatief-denken.jpg","creatief.svg","cursor-img.jpg","fave-icon-active.svg","fave-icon-inactive.svg","favicon.png","hambuger-menu.svg","icon1.svg","icon2.svg","icon3.svg","icon4.svg","iconmonstr-linkedin-3.svg","img1.svg","img2.svg","instagram.svg","leren-over-anderen.jpg","leren-over-anderen.png","leren-over-anderen.svg","leren-over-jezelf-r.jpg","leren-over-jezelf.jpg","leren-over-jezelf.svg","loa-logo.svg","lojr-logo.svg","man.svg","materials.svg","meer-dan.svg","minder-dan.svg","oeb-logo.svg","oep-logo.svg","onderzoeken-en-begrijpen.jpg","onderzoeken-en-begrijpen.svg","organiseren-en-plannen.svg","organiseren-plannen.png","page7.svg","pencil.svg","pijl-hexagon-naar-beneden.svg","placeholder.webp","portret.png","portret.webp","potloden-1.png","search.jpg","search.svg","sketchnotes.webp","tiktok.svg","time.svg","twitter.svg","visual-thinking-logo-footer.svg","vtHBO-logo.svg","vtHBO-v1.0-Logo_1.svg","youtube.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".gif":"image/gif",".mp4":"video/mp4",".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0Stf3Xew.js","app":"_app/immutable/entry/app.GMHGDrPq.js","imports":["_app/immutable/entry/start.0Stf3Xew.js","_app/immutable/chunks/entry.7jxS7SXT.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/entry/app.GMHGDrPq.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/artikelen",
				pattern: /^\/artikelen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/artikelen/interview",
				pattern: /^\/artikelen\/interview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/artikelen/tekenenspelen",
				pattern: /^\/artikelen\/tekenenspelen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/artikelen/tekenmethode",
				pattern: /^\/artikelen\/tekenmethode\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/carousel",
				pattern: /^\/carousel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/kennisclips",
				pattern: /^\/kennisclips\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/minicursussen",
				pattern: /^\/minicursussen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/minicursussen/basisvormen",
				pattern: /^\/minicursussen\/basisvormen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/minicursussen/handlettering",
				pattern: /^\/minicursussen\/handlettering\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/minicursussen/mensen-tekenen",
				pattern: /^\/minicursussen\/mensen-tekenen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/minicursussen/structuur-en-kleur",
				pattern: /^\/minicursussen\/structuur-en-kleur\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/over",
				pattern: /^\/over\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/tekenmethodes",
				pattern: /^\/tekenmethodes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]",
				pattern: /^\/tekenmethodes\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]/stappenplan",
				pattern: /^\/tekenmethodes\/([^/]+?)\/stappenplan\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/tekenmethodes/[slug]/voorbeelden",
				pattern: /^\/tekenmethodes\/([^/]+?)\/voorbeelden\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/tekenruimte",
				pattern: /^\/tekenruimte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
