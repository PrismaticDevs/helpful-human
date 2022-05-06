const { Schema, model } = require("mongoose");

const swatchSchema = new Schema({
  hex: {
    type: String,
  },
  color: {
    type: String,
  },
});
