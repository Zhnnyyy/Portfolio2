import React from "react";
const bg = require("../../assets/construction.png");
function Project() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img src={bg} width={500} height={500} />
    </div>
  );
}

export default Project;
