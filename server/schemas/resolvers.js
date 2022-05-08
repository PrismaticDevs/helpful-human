const { Swatch } = require("../models");

const resolvers = {
  Query: {
    getAllSwatches: async () => {
      const swatches = await Swatch.find({});
      return swatches;
    },
  },
  Mutation: {
    addSwatch: async (parent, args) => {
      const swatch = await Swatch.create(args);
      return swatch;
    },
  },
};
module.exports = resolvers;
