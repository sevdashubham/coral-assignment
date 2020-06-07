import { gql } from "apollo-boost";

export default gql`
 query getPostByID($id: String!) {
  post(id: $id) {
    id
    title
    date
  }
}
`;
