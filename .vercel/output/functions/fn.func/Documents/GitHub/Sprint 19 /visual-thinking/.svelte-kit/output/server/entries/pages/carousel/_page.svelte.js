import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Carousel } from "../../../chunks/carousel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
