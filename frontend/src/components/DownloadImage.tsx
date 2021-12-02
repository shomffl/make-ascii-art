import React, { useState } from "react";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";;

export const DownloadImage = () => {
  return (
    <div>
      <Button variant="contained" type="submit">
        Download
        <DownloadIcon/>
      </Button>
    </div>
  );
};
