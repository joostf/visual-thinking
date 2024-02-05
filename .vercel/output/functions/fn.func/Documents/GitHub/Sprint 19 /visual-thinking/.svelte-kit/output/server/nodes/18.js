import * as server from '../entries/pages/tekenmethodes/_slug_/voorbeelden/_page.server.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tekenmethodes/_slug_/voorbeelden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tekenmethodes/[slug]/voorbeelden/+page.server.js";
export const imports = ["_app/immutable/nodes/18.YUMGyb9u.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/header.RNyCXWo2.js","_app/immutable/chunks/footer.4Ce-n7mO.js"];
export const stylesheets = ["_app/immutable/assets/18.1oubb_4v.css","_app/immutable/assets/header.KLtqvJeT.css","_app/immutable/assets/footer.zHsNu2no.css"];
export const fonts = [];
