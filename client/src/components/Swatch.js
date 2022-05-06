import { useState } from "react";
import { Button, List, ListItem, Box } from "@mui/material";
import ReactPaginate from "react-paginate";

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
  const [pageNumber, setPageNumber] = useState(0);
  const [swatches, setSwatches] = useState(colors.slice(0, 10));
  const swatchesPerPage = 10;
  const pagesVisited = pageNumber * swatchesPerPage;
  const displaySwatches = swatches
    .slice(pagesVisited, pagesVisited + swatchesPerPage)
    .map((color, index) => {
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
    if (pageNumber <= 0) {
      setPageNumber(colors.length);
      //displaySwatches();
    } else {
      setPageNumber(pageNumber - 1);
      //displaySwatches();
    }
  };
  const next = () => {
    if (pageNumber >= colors.length) {
      setPageNumber(0);
      //displaySwatches();
    } else {
      setPageNumber(pageNumber + 1);
      //displaySwatches();
    }
  };
  return (
    <List key={displaySwatches.index}>
      <List className="ul">{displaySwatches}</List>
      <Box sx={{ display: "flex", justifyContent: "center" }}>{pageNumber}</Box>
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
