import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
  query MyQuery {
    minicursussenPaginas {
      id
      slug
      title
    }
  }
  `;

  const request = await hygraph.request(query)

  return{
    request
  };
}
