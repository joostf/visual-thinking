

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/minicursussen/basisvormen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.bxe09dig.js","_app/immutable/chunks/scheduler.CisLO15p.js","_app/immutable/chunks/index.twK4Xdmn.js","_app/immutable/chunks/header.RNyCXWo2.js"];
export const stylesheets = ["_app/immutable/assets/10.iZLSIb1Y.css","_app/immutable/assets/header.KLtqvJeT.css"];
export const fonts = [];
