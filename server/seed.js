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
    hex: "",
    color: "",
  },
];

const seedDB = async () => {
  await Swatch.deleteMany({});
  await Swatch.insertMany(swatches);
};

seedDB().then(() => {
  mongoose.connection.close();
});
