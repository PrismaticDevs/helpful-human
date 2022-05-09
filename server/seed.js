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
  // Red
  {
    hex: "#D0312D",
    color: "Red",
  },
  {
    hex: "#990F02",
    color: "Cherry",
  },
  {
    hex: "#E3242B",
    color: "Rose",
  },
  {
    hex: "#60100B",
    color: "Jam",
  },
  {
    hex: "#541E1B",
    color: "Merlot",
  },
  {
    hex: "#610C04",
    color: "Garnet",
  },
  {
    hex: "#B90E0A",
    color: "Crimson",
  },
  {
    hex: "#900603",
    color: "Ruby",
  },
  {
    hex: "#900D09",
    color: "Scarlet",
  },
  {
    hex: "#4E0707",
    color: "Wine",
  },
  {
    hex: "#7E2811",
    color: "Brick",
  },
  {
    hex: "#A91B0D",
    color: "Apple",
  },
  {
    hex: "#420C09",
    color: "Mahogany",
  },
  {
    hex: "#710C04",
    color: "Blood",
  },
  {
    hex: "#5E1916",
    color: "Sangria",
  },
  {
    hex: "#7A1712",
    color: "Berry",
  },
  {
    hex: "#680C07",
    color: "Currant",
  },
  {
    hex: "#BC544B",
    color: "Blush",
  },
  {
    hex: "#D21404",
    color: "Candy",
  },
  {
    hex: "#9B1003",
    color: "Lipstick",
  },
  // Yellow
  {
    hex: "#E6DBAC",
    color: "Tan",
  },
  {
    hex: "#EEDC9A",
    color: "Beige",
  },
  {
    hex: "#F9E076",
    color: "Macaroon",
  },
  {
    hex: "#C9BB8E",
    color: "Hazel Wood",
  },
  {
    hex: "#6B85A",
    color: "Granola",
  },
  {
    hex: "#DFC98A",
    color: "Oat",
  },
  {
    hex: "#FAE29C",
    color: "Egg Nog",
  },
  {
    hex: "#C8A951",
    color: "Fawn",
  },
  {
    hex: "#F3EAAF",
    color: "Sugar Cookie",
  },
  {
    hex: "#D8B863",
    color: "Sand",
  },
  {
    hex: "#E3B778",
    color: "Sepia",
  },
  {
    hex: "#E7C37D",
    color: "Latte",
  },
  {
    hex: "#DCD7A0",
    color: "Oyster",
  },
  {
    hex: "#E3C565",
    color: "Biscotti",
  },
  {
    hex: "#FDE992",
    color: "Parmesan",
  },
  {
    hex: "#BDA55D",
    color: "Hazelnut",
  },
  {
    hex: "#DAC17C",
    color: "Sandcastle",
  },
  {
    hex: "#FDEFB2",
    color: "Buttermilk",
  },
  {
    hex: "#EDE8BA",
    color: "Sand Dollar",
  },
  {
    hex: "#FBE790",
    color: "Shortbread",
  },
  // Green
  {
    hex: "#3CB043",
    color: "Green",
  },
  {
    hex: "#B0FC38",
    color: "Chartreuse",
  },
  {
    hex: "#3A5311",
    color: "Juniper",
  },
  {
    hex: "#728C69",
    color: "Sage",
  },
  {
    hex: "#AEF359",
    color: "Lime",
  },
  {
    hex: "#5DBB63",
    color: "Fern",
  },
  {
    hex: "#98BF64",
    color: "Olive",
  },
  {
    hex: "#028A0F",
    color: "Emerald",
  },
  {
    hex: "#74B72E",
    color: "Pear",
  },
  {
    hex: "#466D1D",
    color: "Moss",
  },
  {
    hex: "#03AC13",
    color: "Shamrock",
  },
  {
    hex: "#3DED97",
    color: "Sea Foam",
  },
  {
    hex: "#234F1E",
    color: "Pine",
  },
  {
    hex: "#03C04A",
    color: "Parakeet",
  },
  {
    hex: "#99EDC3",
    color: "Mint",
  },
  {
    hex: "#354A21",
    color: "Seaweed",
  },
  {
    hex: "#597D35",
    color: "Pickle",
  },
  {
    hex: "#B2D3C2",
    color: "Pistachio",
  },
  {
    hex: "#32612D",
    color: "Basil",
  },
  {
    hex: "#607D3B",
    color: "Crocodile",
  },
  // Blue
  {
    hex: "#3944BC",
    color: "Blue",
  },
  {
    hex: "#757C88",
    color: "Slate",
  },
  {
    hex: "#63C5DA",
    color: "Sky",
  },
  {
    hex: "#0A1172",
    color: "Navy",
  },
  {
    hex: "#281E5D",
    color: "Indigo",
  },
  {
    hex: "#1338BE",
    color: "Cobalt",
  },
  {
    hex: "#48AAAD",
    color: "Teal",
  },
  {
    hex: "#016064",
    color: "Ocean",
  },
  {
    hex: "#022D36",
    color: "Peacock",
  },
  {
    hex: "#1520A6",
    color: "Azure",
  },
  {
    hex: "#0492C2",
    color: "Cerulean",
  },
  {
    hex: "#2832C2",
    color: "Lapis",
  },
  {
    hex: "#2C3E46",
    color: "Spruce",
  },
  {
    hex: "#59788E",
    color: "Stone",
  },
  {
    hex: "#1F456E",
    color: "Aegean",
  },
  {
    hex: "#241571",
    color: "Berry",
  },
  {
    hex: "#151E3D",
    color: "Denim",
  },
  {
    hex: "#051094",
    color: "Admiral",
  },
  {
    hex: "#52B2BF",
    color: "Sapphire",
  },
  {
    hex: "#82EEFD",
    color: "Arctic",
  },
  // Purple
  {
    hex: "#A32CC4",
    color: "Purple",
  },
  {
    hex: "#7A4988",
    color: "Mauve",
  },
  {
    hex: "#710193",
    color: "Violet",
  },
  {
    hex: "#630436",
    color: "Boysenberry",
  },
  {
    hex: "#E39FF6",
    color: "Lavender",
  },
  {
    hex: "#601A35",
    color: "Plum",
  },
  {
    hex: "#A1045A",
    color: "Magenta",
  },
  {
    hex: "#B65FCF",
    color: "Lilac",
  },
  {
    hex: "#663046",
    color: "Grape",
  },
  {
    hex: "#BE93D4",
    color: "Periwinkle",
  },
  {
    hex: "#4D0F28",
    color: "Sangria",
  },
  {
    hex: "#311432",
    color: "Eggplant",
  },
  {
    hex: "#67032F",
    color: "Jam",
  },
  {
    hex: "#9867C5",
    color: "Iris",
  },
  {
    hex: "#9E7BB5",
    color: "Heather",
  },
  {
    hex: "#A45EE5",
    color: "Amethyst",
  },
  {
    hex: "#290916",
    color: "Raisin",
  },
  {
    hex: "#AF69EF",
    color: "Orchid",
  },
  {
    hex: "#4C0121",
    color: "Mulberry",
  },
  {
    hex: "#2C041C",
    color: "Wine",
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
