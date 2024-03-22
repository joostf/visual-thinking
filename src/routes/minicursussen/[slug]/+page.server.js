import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { slug } = params;
  let query = gql`
    query MyQuery($slug: String) {
      minicursussen(where: { slug: $slug }) {
        slides {
          content {
            text
            raw
            html
            markdown
          }
          quote
          title
          type
          paragraph
          image {
            url
          }
        }
      }
    }
  `;

  const variables = { slug };
  const request = await hygraph.request(query, variables);
  console.log(variables)
  return {
    minicursussen: request.minicursussen,
  };
}
