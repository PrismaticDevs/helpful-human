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
        {colors.map((color, index) => (
          <div key={index}>
            <h6 key={color.hex} style={{ margin: 0 }}>
              {color.hex}
            </h6>
            <li
              style={{
                background: color.hex,
                listStyleType: "none",
                marginBottom: ".5em",
              }}
              key={color.color}
              className="list-group-item text-white"
            >
              {color.color}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Swatches;
