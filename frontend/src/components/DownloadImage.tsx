import React, { useState, memo } from "react";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import logo from "../apple.png";

export const DownloadImage: React.FC<{ downloadPath: string }> = memo(
  (props) => {
    const { downloadPath } = props;
    const onClickDownload = () => {
      saveAs(
        `${process.env.PUBLIC_URL}/static/images/download_images/${downloadPath}`,
        "image"
      );
      console.log(
        `${process.env.PUBLIC_URL}/static/images/ascii_images/${downloadPath}`
      );
    };

    return (
      <div>
        <Button onClick={onClickDownload} variant="contained">
          Download
          <DownloadIcon />
        </Button>
      </div>
    );
  }
);
