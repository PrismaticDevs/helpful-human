import React from "react";

const Swatches = ({ colors, loading }) => {
  return loading ? (
    <div className="d-flex justify-content-center">
      <h2>Loading</h2>
      <div className="spinner-border text-info ml-3" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container d-flex justify-content-center">
      <ul className="list-group mb-4 w-50">
        {colors.map((color) => (
          <li
            style={{ background: "rgb(56,234,43)", cursor: "pointer" }}
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

// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
