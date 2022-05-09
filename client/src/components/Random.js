import React, { useState, useEffect } from "react";

const Random = () => {
  let [color, setColor] = useState("#");
  const randomColor = () => {
    for (let i = 0; i < 6; i++) {
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += bit.toString(16);
    }
    console.log(color);
    setColor(color);
  };
  return (
    <div className="d-inline align-items-center">
      <button className="btn btn-primary" onClick={() => randomColor()}>
        Random Color
      </button>
      <br />
      <br />
      <div
        style={{
          background: color,
          padding: "3em",
          color: "white",
          borderRadius: "1em",
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default Random;
