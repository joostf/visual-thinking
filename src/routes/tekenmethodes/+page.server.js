import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ url }) {
    let category = url.searchParams.get('categorie') || null;
    let filter = '';

    if (category !== null) {
        filter = `, where: {categories_some: {slug: "${category}"}}`
    }

    let query = gql`
    query VisualThinking {
        methods(first: 100, ${filter}) {
          id
          slug
          title
          categories {
            title
            id
          }
          template {
            url(transformation: {document: {output: {format: webp}}})
            height
            width
          }
        }
      }`;


    return await hygraph.request(query);
}