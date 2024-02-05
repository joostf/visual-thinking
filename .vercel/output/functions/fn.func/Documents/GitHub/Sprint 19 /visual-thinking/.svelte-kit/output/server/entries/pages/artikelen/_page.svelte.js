import { c as create_ssr_component, b as add_attribute, e as each, a as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
import { F as Footer } from "../../../chunks/footer.js";
const css$2 = {
  code: "button.svelte-1fo2wt5{background-color:var(--vtDarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);border-radius:0.5em;list-style:none;border:none;margin:1em;padding:1em;margin-top:0em;margin-left:8em}button.svelte-1fo2wt5:hover{background-color:var(--vtRed)}",
  map: null
};
const BlogButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$2);
  return `<section><a${add_attribute("href", page, 0)}><button class="svelte-1fo2wt5" data-svelte-h="svelte-q4tk3m">Lees meer</button></a> </section>`;
});
const css$1 = {
  code: ".introtitel.svelte-15jwtax{margin-left:0em;font-size:3.157rem}.introtext.svelte-15jwtax{font-size:19px;margin-bottom:-1em}section.svelte-15jwtax{display:grid;grid-template-columns:auto;align-items:center;justify-items:center;padding:10%;justify-content:center;padding-bottom:1em;gap:2em}article.svelte-15jwtax{height:30em;width:16em;border:4px solid var(--vtYellow);border-radius:0.5em}img.svelte-15jwtax{width:100%;height:40%;border-top-right-radius:1em;border-top-left-radius:1em}h1.svelte-15jwtax,h2.svelte-15jwtax{font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue);line-height:1.2em;margin-top:0em;padding:0.6em;font-size:20px;margin-left:0.3em;height:12%;display:flex;align-items:end}p.svelte-15jwtax{font-family:var(--vtSecondaryFont);font-size:17px;line-height:1.5em;padding:1em;margin-top:-2em;height:26%}@media screen and (min-width: 760px){.introtitel.svelte-15jwtax{margin-left:3em;font-size:3.157rem}.introtext.svelte-15jwtax{width:45%;margin-left:5em;margin-bottom:-4em}section.svelte-15jwtax{grid-template-columns:1fr 1fr;padding-bottom:1em;max-width:fit-content;margin:auto}}@media screen and (min-width: 600px){.introtitel.svelte-15jwtax{margin-left:0.5em;font-size:3.157rem}.introtext.svelte-15jwtax{width:55%;margin-left:3em;margin-bottom:-2em}}@media screen and (min-width: 1280px){.introtitel.svelte-15jwtax{margin-left:2em;font-size:3.157rem;max-width:35rem}.introtext.svelte-15jwtax{width:38%;margin-left:9em}section.svelte-15jwtax{grid-template-columns:1fr 1fr 1fr;padding-left:7em;padding-right:7em;margin-top:-4em}}@media screen and (min-width: 2280px){.introtitel.svelte-15jwtax{margin-left:18.1em}.introtext.svelte-15jwtax{width:23%;margin-left:29em}section.svelte-15jwtax{gap:8em;margin-top:-8em}}",
  map: null
};
const BlogBorder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return ` ${each(data.introTeksts, (intro) => {
    return `<h1 class="introtitel svelte-15jwtax">${escape(intro.title)}</h1> <p class="introtext svelte-15jwtax">${escape(intro.description.text)}</p>`;
  })}  <section class="svelte-15jwtax">${each(data.artikelenHomepages, (artikelenHomepages) => {
    return `<article class="svelte-15jwtax"><img${add_attribute("src", artikelenHomepages.img.url, 0)} alt="artikelen" class="svelte-15jwtax"> <h2 class="svelte-15jwtax">${escape(artikelenHomepages.title)}</h2> <p class="svelte-15jwtax">${escape(artikelenHomepages.description)}</p> ${validate_component(BlogButton, "BlogButton").$$render(
      $$result,
      {
        page: "/artikelen/" + artikelenHomepages.pageName
      },
      {},
      {}
    )} </article>`;
  })} </section>`;
});
const css = {
  code: ".line.svelte-h1iypo{text-transform:uppercase;background-color:var(--vtDarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);font-size:0.9rem;padding-left:9%;padding-top:0.2rem;padding-bottom:0.2rem;margin-top:0%;width:100vw;display:flex;align-items:center}@media(min-width: 31em) and (max-width: 55em){.line.svelte-h1iypo{padding-left:20%}}@media(max-width: 31em){.line.svelte-h1iypo{padding-left:11%}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-1w5kkjo"><section><h4 class="line svelte-h1iypo">Artikelen</h4></section> </header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})} ${validate_component(BlogBorder, "BlogBorder").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
