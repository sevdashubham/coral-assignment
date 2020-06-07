import { gql } from "apollo-boost";

export default gql`
 query getPosts($page: Int!) {
  posts(page: $page) {
    id
    date
    title
    user {
      id
      firstname
    }
  }
}
`;
