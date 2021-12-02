import React from "react";
import { DownloadImage } from "./DownloadImage";
import { Remake } from "./Remake";
import { SubmitImage } from "./SubmitImage";

export const ImageDisplay = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SubmitImage />
        <DownloadImage />
        <Remake />
      </header>
    </div>
  );
};
