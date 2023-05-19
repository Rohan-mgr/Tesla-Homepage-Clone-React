import React from "react";
import ModelSMain from "../../Assets/Menu/Model-S-Main.jpg";
import { handleTitle } from "../../utility";

function ModelS(props) {
  handleTitle("Model S | Tesla");
  return (
    <div
      style={{
        zIndex: 10,
        height: "100vh",
        backgroundImage: `url(${ModelSMain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      ModelS
    </div>
  );
}

export default ModelS;
