import { useState } from "react";
import { Button, List, ListItem, Box } from "@mui/material";
//import ReactPaginate from "react-paginate";

export default function Swatch() {
  const colors = [
    {
      hex: "#565656",
      color: "Gray",
    },
    {
      hex: "#011111",
      color: "Gray",
    },
    {
      hex: "#121216",
      color: "gray",
    },
    {
      hex: "#121213",
      color: "",
    },
    {
      hex: "#121215",
      color: "",
    },
    {
      hex: "#121214",
      color: "",
    },
    {
      hex: "#121212",
      color: "",
    },
    {
      hex: "#121211",
      color: "",
    },
    {
      hex: "#121243",
      color: "",
    },
    {
      hex: "#121254",
      color: "",
    },
    {
      hex: "#121256",
      color: "",
    },
  ];
  let [pageNumber, setPageNumber] = useState(0);
  const displaySwatches = colors.map((color, index) => {
    return (
      <List key={color.hex}>
        <ListItem
          style={{
            background: color.hex,
          }}
        >
          {color.hex}
        </ListItem>
        <Box sx={{ textAlign: "center" }}>{color.color}</Box>
      </List>
    );
  });
  const prev = () => {
    if (pageNumber < 0) {
      setPageNumber(colors.length);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };
  const next = () => {
    if (pageNumber >= colors.length) {
      setPageNumber(0);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <List key={displaySwatches.index}>
      <List className="ul">{displaySwatches}</List>
      {pageNumber}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={prev} sx={{ m: 1 }} variant="contained">
          Prev
        </Button>
        <Button onClick={next} sx={{ m: 1 }} variant="contained">
          Next
        </Button>
      </Box>
    </List>
  );
}
