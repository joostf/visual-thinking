import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
import { F as Footer } from "../../../chunks/footer.js";
const css = {
  code: "main.svelte-1277oyj{display:flex;align-items:center;flex-direction:column;margin-bottom:5rem}h1.svelte-1277oyj{font-size:3.157rem;font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue)}section.svelte-1277oyj{width:50%}em.svelte-1277oyj{font-weight:bold;font-style:normal}p.svelte-1277oyj,em.svelte-1277oyj{font-size:1rem;font-family:var(--vtSecondaryFont);line-height:1.5rem;color:var(--vtDarkBlue)}.line.svelte-1277oyj{text-transform:uppercase;background-color:var(--vtSec-DarkBlue);color:var(--vtWhite);font-family:var(--vtPrimaryFont);font-size:0.9rem;padding-left:18.5%;padding-top:0.2rem;padding-bottom:0.2rem;margin-top:0%;width:100vw;display:flex;align-items:center}@media(min-width: 31em) and (max-width: 55em){section.svelte-1277oyj{width:80%}.line.svelte-1277oyj{padding-left:25%}}@media(max-width: 31em){h1.svelte-1277oyj{font-size:1.7rem}section.svelte-1277oyj{width:77%}.line.svelte-1277oyj{padding-left:14.5%}}",
  map: null
};
const Over = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-1qjy4m3"><section class="svelte-1277oyj"><h4 class="line svelte-1277oyj">Over</h4></section></header> <main class="svelte-1277oyj" data-svelte-h="svelte-1w0i0rf"><h1 class="svelte-1277oyj">Over het platform</h1> <section class="svelte-1277oyj"><p class="svelte-1277oyj">“Hoe kan ik studenten meer laten tekenen en ze laten inzien dat een
            tekening een heel geschikt communicatiemiddel is?” vroeg Charley
            Muhren, docent aan de HvA en ontwerper van de tekenmethode Tekenen,
            spelen, delen, zich af voordat ze aan dit platform begon.</p> <p class="svelte-1277oyj">Ze ontving een Comeniusbeurs voor haar plan om een platform te
            ontwikkelen waarmee studenten al aan het begin van hun studie zouden
            leren om tekenen te gebruiken als communicatiemiddel en heeft de
            afgelopen anderhalf jaar onderzocht welke tekenmethodes geschikt
            zouden zijn voor studenten en docenten om te gebruiken tijdens hun
            studie. Door de werkvormen te categoriseren aan de hand van
            leerdoelen die weer gekoppeld zijn aan de taxonomie van
            ‘Betekenisvol leren’ (Dee Fink, 2003), kunnen zowel studenten als
            docenten gemakkelijk zoeken in welke situatie en met welk doel een
            tekenmethode te gebruiken is.</p> <p class="svelte-1277oyj">In de kennisclips wordt uitgelegd waarom tekenen voor bepaalde
            doelen goed te gebruiken is en wat de resultaten van de methodes
            kunnen zijn.</p> <p class="svelte-1277oyj">In de mini-cursussen worden de basisprincipes van ‘visual thinking’
            uitgelegd en wordt verwezen naar andere visual thinkers en bronnen.</p> <em class="svelte-1277oyj">Concept en onderzoek:</em> Charley Muhren<br> <em class="svelte-1277oyj">Design research, interaction- en webdesign:</em> Elias Poolman
        <br> <em class="svelte-1277oyj">Visuele identiteit en webdesign:</em> Ramon Boers <br> <em class="svelte-1277oyj">Webdevelopment:</em> t.b.a.</section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Over, "Over").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
