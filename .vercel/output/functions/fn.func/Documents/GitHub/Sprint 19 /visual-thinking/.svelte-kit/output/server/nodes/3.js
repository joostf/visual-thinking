import * as server from '../entries/pages/artikelen/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artikelen/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artikelen/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Zh55WRri.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/footer.4Ce-n7mO.js"];
export const stylesheets = ["_app/immutable/assets/3.-1aQzt5C.css","_app/immutable/assets/header.KLtqvJeT.css","_app/immutable/assets/footer.zHsNu2no.css"];
export const fonts = [];
