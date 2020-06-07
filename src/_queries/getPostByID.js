import { gql } from "apollo-boost";

export default gql`
 query getPostByID($id: ID!) {
  post(id: $id) {
    id
    title
    date
  }
}
`;
