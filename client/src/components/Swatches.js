import React from "react";

const Swatches = ({ colors, loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        {/* <div className="spinner-border text-warning mr-3" role="status">
          <span className="sr-only">Loading...</span>
        </div> */}
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
        {colors.map((color) => (
          <li
            style={{ background: "rgb(56,234,43)" }}
            key={color.id}
            className="list-group-item text-white"
          >
            {color.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Swatches;