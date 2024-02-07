import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: `:root{--vtPrimaryFont:"rigid-square", sans-serif;--vtSecondaryFont:"yrsa", serif;--vtDarkBlue:#090940}section.svelte-ky2ve8{margin:0;padding:0;width:100vw}.footer.svelte-ky2ve8{padding-top:3em;display:grid;grid-template-columns:repeat(3, 1fr);align-items:center;gap:10px;background-color:rgb(240, 240, 240);font-family:var(--vtPrimaryFont);width:100vw}a.svelte-ky2ve8{text-decoration:none;color:var(--vtDarkBlue)}li.svelte-ky2ve8{list-style-type:none;margin-bottom:0.5em}img.svelte-ky2ve8{grid-column:1;margin-right:1em}.logo-footer.svelte-ky2ve8{max-width:16em;width:100vw;margin-left:3em}.footer-menu.svelte-ky2ve8{grid-column:2}.social-media.svelte-ky2ve8{grid-column:3}@media(max-width: 880px){.footer.svelte-ky2ve8{padding-top:3em;align-items:center;justify-content:center;gap:10px;display:grid;grid-template-columns:none;grid-template-rows:repeat(3, 1fr);grid-template-areas:'l'
    'f'
    's'}.logo-footer.svelte-ky2ve8{grid-area:l}.footer-menu.svelte-ky2ve8{grid-area:f}.social-media.svelte-ky2ve8{grid-area:s}}`,
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-ky2ve8" data-svelte-h="svelte-1wf8etr"><nav class="footer svelte-ky2ve8"><a href="/" class="svelte-ky2ve8"><img src="/visual-thinking-logo-footer.svg" class="logo-footer svelte-ky2ve8" alt="footer-logo"></a> <ul class="footer-menu svelte-ky2ve8"><h4><a href="/over" class="svelte-ky2ve8"><li class="svelte-ky2ve8">Over</li></a> <a href="/artikelen" class="svelte-ky2ve8"><li class="svelte-ky2ve8">Artikelen</li></a> <a href="/tekenmethodes" class="svelte-ky2ve8"><li class="svelte-ky2ve8">Tekenmethodes</li></a> <a href="/kennisclips" class="svelte-ky2ve8"><li class="svelte-ky2ve8">Kennisclips</li></a></h4></ul> <ul class="social-media svelte-ky2ve8"><h4>Contact</h4> <a href="https://www.instagram.com/charley_muhren/" class="svelte-ky2ve8"><img src="/instagram.svg" alt="instagram" class="svelte-ky2ve8"></a> <a href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa" class="svelte-ky2ve8"><img src="/youtube.svg" alt="youtube" class="svelte-ky2ve8"></a> <a href="https://www.linkedin.com/in/charleymuhren/" class="svelte-ky2ve8"><img src="/iconmonstr-linkedin-3.svg" alt="linkedIn" class="svelte-ky2ve8"></a> <h5>© Charley Muhren, 2022</h5></ul></nav> </section>`;
});
export {
  Footer as F
};
