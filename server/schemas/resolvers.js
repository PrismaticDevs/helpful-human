const { Swatch } = require("../models");

const resolvers = {
  Query: {
    getAllSwatches: async (parent, args, context) => {
      Swatch.find({});
    },
  },
  Mutation: {
    addSwatch: async (parent, args) => {
      const Swatch = await Swatch.create(args);
      return { Swatch };
    },
  },
};
module.exports = resolvers;
