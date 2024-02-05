import { gql } from "graphql-request";
import { h as hygraph } from "../../../../../chunks/hygraph.js";
import { g as getQueryUrl } from "../../../../../chunks/url.js";
const load = async ({ params }) => {
  const { slug } = params;
  const queryUrl = getQueryUrl(gql, slug);
  return await hygraph.request(queryUrl);
};
export {
  load
};
