// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_LATEST_INFLATION = gql`
  query {
    inflations(first: 1, orderBy: timestamp, orderDirection: desc) {
      id
      rate
      timestamp
    }
  }
`;
