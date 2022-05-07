import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-warning mr-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <h2>Loading</h2>
        <div className="spinner-border text-info ml-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center">
      <ul className="list-group mb-4 w-50">
        {posts.map((post) => (
          <li
            style={{ background: "rgb(56,234,43)" }}
            key={post.id}
            className="list-group-item text-white"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
