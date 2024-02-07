import { c as create_ssr_component, b as add_attribute, a as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
import { F as Footer } from "../../../chunks/footer.js";
import { C as Carousel } from "../../../chunks/carousel.js";
const css = {
  code: ':root{--vtDarkBlue:#090940;--vtLightBlue:#67c5d1;--vtYellow:#feb51e;--vtRed:#f96c4f;--vtWhite:#ffffff;--vtDarkBlue-80:#3a3a66;--vtDarkBlue-50:#6b6b8c;--vtDarkBlue-30:#9d9db3;--vtDarkBlue-10:#ceced9;--vtLightBlue-80:#85d1da;--vtLightBlue-50:#a4dce3;--vtLightBlue-30:#c2e8ed;--vtLightBlue-10:#e1f3f6;--vtYellow-80:#fec44b;--vtYellow-50:#fed378;--vtYellow-30:#ffe1a5;--vtYellow-10:#fff0d2;--vtRed-80:#fa8972;--vtRed-50:#fba795;--vtRed-30:#fdc4b9;--vtRed-10:#fee2dc;--vtGrey-80:#c0beb9;--vtGrey-50:#e0dedc;--vtGrey-10:#f9f8f8;--vtPrimaryFont:"rigid-square", sans-serif;--vtSecondaryFont:"yrsa", serif}h1.svelte-39zv2o{font-size:3.157rem;font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue);line-height:3rem;text-align:center}p.svelte-39zv2o{text-align:left;line-height:1.5rem;font-family:var(--vtSecondaryFont);font-size:1rem;margin-left:auto;margin-right:auto;max-width:40em;text-transform:none;padding-bottom:3em}.clips-container.svelte-39zv2o{display:flex;justify-content:center;align-items:center;padding-top:3.3em;background-color:var(--vtGrey-10)}.line.svelte-39zv2o{text-transform:uppercase;background-color:var(--vtSec-LightBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);font-size:0.9rem;padding-left:9%;padding-top:0.2rem;padding-bottom:0.2rem;margin-top:0%;width:100vw;display:flex;margin-bottom:0;align-items:center}button.svelte-39zv2o{background-color:transparent;border:transparent;padding:2em}.right-arrow.svelte-39zv2o{cursor:pointer;border:none}.left-arrow.svelte-39zv2o{cursor:pointer;transform:rotate(180deg)}iframe.svelte-39zv2o{aspect-ratio:16 / 9;width:100%;height:auto;transition:opacity 0.3s ease-in}@media(min-width: 31em) and (max-width: 55em){.line.svelte-39zv2o{padding-left:19.5% !important}h1.svelte-39zv2o{font-size:2.1em !important}p.svelte-39zv2o{padding-left:2.5em;padding-right:2.5em}}@media(max-width: 31em){.line.svelte-39zv2o{padding-left:11% !important}h1.svelte-39zv2o{font-size:1.157em !important\n    }p.svelte-39zv2o{padding-left:2rem;padding-right:2rem}button.svelte-39zv2o{padding:0.6em}}@media screen and (min-width: 1120px){.youtubelink.svelte-39zv2o{width:884px;height:497px}}',
  map: null
};
const Kennisclips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = 0;
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-f5qnp8"><section><h4 class="line svelte-39zv2o">Kennisclips</h4></section></header> <main><section class="clips-container svelte-39zv2o"><button class="svelte-39zv2o" data-svelte-h="svelte-ud420q"><img class="left-arrow svelte-39zv2o" src="./arrows_black.svg" alt="Knop met pijl naar volgende video" loading="lazy"></button> <iframe class="youtubelink svelte-39zv2o" title="kennisclips"${add_attribute("src", data.categories[index].youTubeLink, 0)}></iframe> <button class="svelte-39zv2o" data-svelte-h="svelte-14l7o6b"><img class="right-arrow svelte-39zv2o" src="./arrows_black.svg" alt="Knop met pijl naar volgende video" loading="lazy"></button></section> <section class="text-container"><h1 class="svelte-39zv2o">${escape(data.categories[index].title)}</h1> <p class="svelte-39zv2o"><!-- HTML_TAG_START -->${data.categories[index].content.html}<!-- HTML_TAG_END --></p></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Kennisclips, "Kennisclips").$$render($$result, { data }, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
