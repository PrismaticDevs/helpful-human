const mongoose = require("mongoose");
const Swatch = require("./models/Swatch");

mongoose
  .connect("mongodb://localhost:27017/helpful-human", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log(e);
  });

const swatches = [
  {
    hex: "#3b5998",
    color: "Facebook Blue",
  },
  {
    hex: "#8b9dc3",
    color: "Facebook Blue",
  },
  {
    hex: "#dfe3ee",
    color: "Facebook Blue",
  },
];

const seedDB = async () => {
  await Swatch.deleteMany({});
  console.log("deleted");
  await Swatch.insertMany(swatches);
  console.log("seeded");
};

seedDB().then(() => {
  mongoose.connection.close();
});
