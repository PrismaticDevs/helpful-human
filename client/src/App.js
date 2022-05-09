import React, { useState, useEffect, setActive } from "react";
import Swatches from "./components/Swatches";
import Random from "./components/Random";
import Pagination from "./components/Pagination";
//import axios from "axios";
import "./App.css";
import { colors } from "./components/data";

const App = () => {
  const [swatches, setSwatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [swatchesPerPage] = useState(20);

  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  };

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    const fetchSwatches = async () => {
      setLoading(true);
      const res = colors;
      setSwatches(res.data);
      setLoading(false);
    };
    fetchSwatches();
  }, []);

  //Get current Posts
  const indexOfLastSwatch = currentPage * swatchesPerPage;
  const indexOfFirstSwatch = indexOfLastSwatch - swatchesPerPage;
  const currentPosts = colors.slice(indexOfFirstSwatch, indexOfLastSwatch);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3 d-flex justify-content-center">
        (つ◕౪◕)つ━☆ﾟ.*･｡ﾟ Helpful Human
      </h1>
      <h3 className="text-primary mb-3 d-flex justify-content-center">
        Applicant Interview Challenge
      </h3>
      <Swatches colors={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={swatchesPerPage}
        totalPosts={colors.length}
        paginate={paginate}
      />
      <div className="d-flex justify-content-center">
        <Random />
      </div>
      <p className="text-center text-secondary">PrismaticDevs ★ 2022 </p>
    </div>
  );
};

export default App;
