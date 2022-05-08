const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Swatch {
    hex: String
    color: String
  }
  type Query {
    getAllSwatches: Swatch
  }
  type Mutation {
    addSwatch(hex: String, color: String): Swatch
  }
`;
// export the typeDef
module.exports = typeDefs;
