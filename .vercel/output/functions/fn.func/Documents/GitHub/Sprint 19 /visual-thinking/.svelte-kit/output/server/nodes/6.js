import * as server from '../entries/pages/artikelen/tekenmethode/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artikelen/tekenmethode/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artikelen/tekenmethode/+page.server.js";
export const imports = ["_app/immutable/nodes/6.XMGycLDJ.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js"];
export const stylesheets = ["_app/immutable/assets/6.DoRfybDt.css","_app/immutable/assets/header.KLtqvJeT.css"];
export const fonts = [];
