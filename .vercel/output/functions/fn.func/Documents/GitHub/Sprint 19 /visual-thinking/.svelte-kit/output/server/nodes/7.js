import * as server from '../entries/pages/carousel/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/carousel/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/carousel/+page.server.js";
export const imports = ["_app/immutable/nodes/7.M23VrAEr.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/carousel.XCRzeT6i.js"];
export const stylesheets = [];
export const fonts = [];
