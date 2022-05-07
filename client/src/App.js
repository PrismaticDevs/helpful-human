import React, { useState, useEffect } from "react";
import Swatches from "./components/Swatches";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [swatchesPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Get current Posts
  const indexOfLastSwatch = currentPage * swatchesPerPage;
  const indexOfFirstSwatch = indexOfLastSwatch - swatchesPerPage;
  const currentPosts = posts.slice(indexOfFirstSwatch, indexOfLastSwatch);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1
        className="text-primary mb-3 d-flex justify-content-center
      "
      >
        Helpful Human Fullstack Demo
      </h1>
      <Swatches colors={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={swatchesPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
