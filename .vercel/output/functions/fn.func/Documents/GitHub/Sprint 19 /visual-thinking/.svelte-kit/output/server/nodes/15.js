import * as server from '../entries/pages/tekenmethodes/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tekenmethodes/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tekenmethodes/+page.server.js";
export const imports = ["_app/immutable/nodes/15.YIDE8HHc.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/footer.4Ce-n7mO.js"];
export const stylesheets = ["_app/immutable/assets/15.JxYmCy6V.css","_app/immutable/assets/header.KLtqvJeT.css","_app/immutable/assets/footer.zHsNu2no.css"];
export const fonts = [];
