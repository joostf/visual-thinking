import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
async function load() {
  let query = gql`
  query Assets {
    artikel(where: {id: "clrqfdkc562vu0bvzgjf9cc6i"}) {
      title
      description
      artikelen {
        title
        description {
          text
        }
        visual {
          url(transformation: {document: {output: {format: webp}}})
        }
      }
    }
  }  
  `;
  console.log(query);
  return await hygraph.request(query);
}
export {
  load
};
