import * as server from '../entries/pages/artikelen/tekenenspelen/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artikelen/tekenenspelen/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artikelen/tekenenspelen/+page.server.js";
export const imports = ["_app/immutable/nodes/5.x574yqj9.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/header.RNyCXWo2.js"];
export const stylesheets = ["_app/immutable/assets/5.ZgEGjh_S.css","_app/immutable/assets/header.KLtqvJeT.css"];
export const fonts = [];
