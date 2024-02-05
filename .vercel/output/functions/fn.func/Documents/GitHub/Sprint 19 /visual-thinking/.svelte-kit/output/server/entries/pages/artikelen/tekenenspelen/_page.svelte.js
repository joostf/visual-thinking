import { c as create_ssr_component, v as validate_component, e as each, a as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/header.js";
const css = {
  code: "main.svelte-1loyvue{display:flex;align-items:center;flex-direction:column;margin-bottom:5rem}h1.svelte-1loyvue{font-size:3.157rem;font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue)}p.svelte-1loyvue{font-size:1rem;font-family:var(--vtSecondaryFont);line-height:1.5rem;color:var(--vtDarkBlue)}.lineintro.svelte-1loyvue{border-top:1px solid var(--vtDarkBlue);width:35rem}.greybackground.svelte-1loyvue{background-color:var(--vtGrey-10);padding-left:19em;padding-right:18em;margin-top:-1.2em}.description.svelte-1loyvue{font-size:23px}.line.svelte-1loyvue{text-transform:uppercase;background-color:var(--vtDarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);font-size:0.9rem;padding-left:20%;padding-top:0.2rem;padding-bottom:0.2rem;margin-top:0%;width:100vw;display:flex;align-items:center}img.svelte-1loyvue{width:20em;height:auto}section.svelte-1loyvue{width:50%}@media(min-width: 31em) and (max-width: 55em){section.svelte-1loyvue{width:80%}.line.svelte-1loyvue{padding-left:25%}}@media(max-width: 31em){h1.svelte-1loyvue{font-size:1.7rem}section.svelte-1loyvue{width:77%}.line.svelte-1loyvue{padding-left:11%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.artikel.artikelen[2]);
  let artikel = data.artikel.artikelen;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <header data-svelte-h="svelte-bp5di1"><section class="svelte-1loyvue"><h4 class="line svelte-1loyvue">Case</h4></section></header> <main class="svelte-1loyvue"><section class="greybackground svelte-1loyvue" data-svelte-h="svelte-vghdqv"><h1 class="svelte-1loyvue">Tekenen en spelen met kinderen (en hun ouders)</h1> <section class="lineintro svelte-1loyvue"></section> <p class="description svelte-1loyvue">Door: Charley Muhren</p> <p class="description svelte-1loyvue">Mei 5, 2019</p></section> ${each(artikel, (artikel2) => {
    return `<section class="svelte-1loyvue"> <p class="svelte-1loyvue">${escape(artikel2.description.text)}</p></section> ${each(artikel2.visual, (visual) => {
      return `<section class="svelte-1loyvue"><img${add_attribute("src", visual.url, 0)} alt="artikelen" class="svelte-1loyvue"> </section>`;
    })}`;
  })} </main>`;
});
export {
  Page as default
};
