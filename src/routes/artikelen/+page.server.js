import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query ArticlePage {
      articlePage(where: {id: "clrj2exi47lp30cuwz58mp5f8"}) {
        title
        content {
          text
        }
      }
      
      articles(first:6) {
        visual {
          url
        }
        title
        intro
        slug
      }
    }
  `;
  const data = await hygraph.request(query);
  
  return data
}
