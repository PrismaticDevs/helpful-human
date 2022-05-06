const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Swatch {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    isAdmin: Boolean
    createdCourses: [Course]
    enrolledCourseIds: [ID]
    enrolledCourses: [Course]
  }

  type Query {
    getAllSwatches: Swatch
  }
  type Mutation {
    addSwatch(hex: String!, color: String!): Swatch
  }
`;
// export the typeDef
module.exports = typeDefs;
