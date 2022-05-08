import { gql } from "@apollo/client";

export const GET_SWATCHES = gql`
  {
    swatches {
      _id
      hex
      color
    }
  }
`;
