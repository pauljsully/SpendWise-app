import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      username
    }
  }
`;
//might need to add profileImg in this