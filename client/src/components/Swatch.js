import { useState } from "react";
import { Button, List, ListItem, Box } from "@mui/material";

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
      color: "Moop",
    },
  ];
  const [pageNumber, setPageNumber] = useState(0);
  const [swatches] = useState(colors);
  const swatchesPerPage = 10;
  const pagesVisited = pageNumber * swatchesPerPage;
  const displaySwatches = swatches
    .slice(pagesVisited, pagesVisited + swatchesPerPage)
    .map((color) => {
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={prev} sx={{ m: 1 }} variant="contained">
          Prev
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 3,
            mr: 3,
          }}
        >
          {pageNumber + 1}
        </Box>
        <Button onClick={next} sx={{ m: 1 }} variant="contained">
          Next
        </Button>
      </Box>
    </List>
  );
}
