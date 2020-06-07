import { gql } from "apollo-boost";

export default gql`
 query getPosts($page: Int!) {
  posts(page: $page, limit: 50) {
    id
    date
    title
    image
    user {
      id
      firstname
    }
  }
}
`;
