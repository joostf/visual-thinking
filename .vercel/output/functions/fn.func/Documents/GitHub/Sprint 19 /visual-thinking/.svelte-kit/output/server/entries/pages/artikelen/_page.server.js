import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
  let query = gql`
      query Assets {
        introTeksts {
          title
          description {
            text
          }
        }
        artikelenHomepages(first: 6) {
          img {
            url
          }
          title
          description
          pageName
        }
      }
  `;
  return await hygraph.request(query);
}
export {
  load
};
