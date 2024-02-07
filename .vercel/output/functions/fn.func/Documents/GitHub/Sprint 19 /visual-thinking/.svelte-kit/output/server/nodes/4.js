import * as server from '../entries/pages/artikelen/interview/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artikelen/interview/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artikelen/interview/+page.server.js";
export const imports = ["_app/immutable/nodes/4.K5tIoQIH.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js"];
export const stylesheets = ["_app/immutable/assets/4.LcNDamtW.css","_app/immutable/assets/header.KLtqvJeT.css"];
export const fonts = [];
