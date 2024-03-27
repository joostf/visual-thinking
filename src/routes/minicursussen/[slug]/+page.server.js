import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { slug } = params;
  let query = gql`
    query MiniCourse {
      miniCourse(where: {slug: "${slug}"}) {
        slides {
          title
          content {
            html
          }
          image {
            url
          }
        }
      }
    }
  `;

  const variables = { slug };
  const request = await hygraph.request(query, variables);

  console.log('server', request)
  return {
    miniCourse: request.miniCourse,
    slug
  };
}
