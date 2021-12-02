import React, { useState } from "react";
import { SubmitImage } from "./SubmitImage";
import logo from "../apple.png";

export const ImageDisplay = () => {
  const [image, setImage] = useState(logo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} style={{ width: "500px" }} />
        <SubmitImage setImage={setImage} />

      </header>
    </div>
  );
};
