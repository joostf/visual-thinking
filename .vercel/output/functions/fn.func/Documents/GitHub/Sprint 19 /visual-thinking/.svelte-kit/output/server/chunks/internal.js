import { c as create_ssr_component, d as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n\n	<link rel="stylesheet" href="https://use.typekit.net/brx3lyu.css" />\n	<!-- rigid square font -->\n	<link rel="stylesheet" href="https://use.typekit.net/kdb0mcl.css" />\n	<!-- yrsa font -->\n	<title>Visual Thinking</title>\n</head>\n\n<body data-sveltekit-preload-data="hover">\n	<div>' + body + '</div>\n</body>\n</html>\n\n<style>\n  html {\n    width: 100vw;\n  }\n\n  body,\n  html {\n    overflow-x: hidden;\n  }\n\n  /* @media (max-width: 31em) {\n		body,\n		html {\n			overflow-x: visible;\n		}\n\n		html {\n			width: 100%;\n		}\n	} */\n\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  :root {\n    font-size: 20px;\n\n    /* Visual Thinking: Primary Colors:\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    */\n    --vtDarkBlue: #090940;\n    --vtLightBlue: #67c5d1;\n    --vtYellow: #feb51e;\n    --vtRed: #f96c4f;\n    --vtWhite: #ffffff;\n\n    /* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    */\n    --vtDarkBlue-80: #3a3a66;\n    --vtDarkBlue-50: #6b6b8c;\n    --vtDarkBlue-30: #9d9db3;\n    --vtDarkBlue-10: #ceced9;\n\n    --vtLightBlue-80: #85d1da;\n    --vtLightBlue-50: #a4dce3;\n    --vtLightBlue-30: #c2e8ed;\n    --vtLightBlue-10: #e1f3f6;\n\n    --vtYellow-80: #fec44b;\n    --vtYellow-50: #fed378;\n    --vtYellow-30: #ffe1a5;\n    --vtYellow-10: #fff0d2;\n\n    --vtRed-80: #fa8972;\n    --vtRed-50: #fba795;\n    --vtRed-30: #fdc4b9;\n    --vtRed-10: #fee2dc;\n\n    /* Visual Thinking: Grijstinten:\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik!\n     Word vaak gebruikt voor backgrounds en borders. \n    */\n    --vtGrey: #cecece;\n    --vtGrey-80: #c0beb9;\n    --vtGrey-50: #e0dedc;\n    --vtGrey-10: #f9f8f8;\n\n    /* Visual Thinking: Secondary colors,\n    Zie kleuren styleguide of eventueel Figma designs voor gebruik! \n    Word gebruikt als steunkleuren bv: kleurcoderen van categorieën\n    */\n\n    --vtSec-Red: #af1301;\n    --vtSec-Red-30: #fbc5b4;\n    --vtSec-Green: #169861;\n    --vtSec-Green-30: #63c09f;\n    --vtSec-LightBlue: #4fbbc2;\n    --vtSec-DarkBlue: #31439c;\n    /* <--- deze kleur is de blauwe balk van de tekenmethodes detailpagina */\n    --vtSec-Brown: #8b3a00;\n    --vtSec-Orange: #fe6f07;\n\n    /* Visual Thinking: Fonts,\n    */\n\n    --vtPrimaryFont: "rigid-square", sans-serif;\n    --vtSecondaryFont: "yrsa", serif;\n  }\n\n  blockquote {\n    color: var(--vtSec-Orange);\n    font-family: var(--vtPrimaryFont);\n    margin-top: -1rem;\n  }\n</style>\n',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "pedvb1"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_prerendering as k,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
