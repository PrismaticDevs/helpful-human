import React, { useState, useEffect } from "react";
import Swatches from "./components/Swatches";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [swatches, setSwatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [swatchesPerPage] = useState(20);

  useEffect(() => {
    const fetchSwatches = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setSwatches(res.data);
      setLoading(false);
    };
    fetchSwatches();
  }, []);

  //Get current Posts
  const indexOfLastSwatch = currentPage * swatchesPerPage;
  const indexOfFirstSwatch = indexOfLastSwatch - swatchesPerPage;
  const currentPosts = swatches.slice(indexOfFirstSwatch, indexOfLastSwatch);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3 d-flex justify-content-center">
        (つ◕౪◕)つ━☆ﾟ.*･｡ﾟ Helpful Human Fullstack Demo
      </h1>
      <Swatches colors={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={swatchesPerPage}
        totalPosts={swatches.length}
        paginate={paginate}
      />
      <p className="text-center text-secondary">PrismaticDevs 2022</p>
    </div>
  );
};

export default App;
