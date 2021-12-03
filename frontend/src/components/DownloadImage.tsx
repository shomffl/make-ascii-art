import React, { useState, memo } from "react";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export const DownloadImage: React.FC<{ downloadPath: any }> = memo(
  (props) => {
    const { downloadPath } = props;
    const onClickDownload = () => {
      saveAs(
        downloadPath,
        "ascii_art"
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
