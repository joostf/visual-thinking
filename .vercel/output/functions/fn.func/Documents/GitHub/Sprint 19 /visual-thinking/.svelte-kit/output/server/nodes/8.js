import * as server from '../entries/pages/kennisclips/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kennisclips/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kennisclips/+page.server.js";
export const imports = ["_app/immutable/nodes/8.EflHusD2.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js","_app/immutable/chunks/footer.4Ce-n7mO.js","_app/immutable/chunks/carousel.XCRzeT6i.js"];
export const stylesheets = ["_app/immutable/assets/8.fsnuZfqq.css","_app/immutable/assets/header.KLtqvJeT.css","_app/immutable/assets/footer.zHsNu2no.css"];
export const fonts = [];
