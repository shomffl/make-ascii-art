import React, { memo } from "react";
import { saveAs } from "file-saver";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const buttonStyle = {
  border: "0.1vmax solid #F04B48",
  color: "#F04B48",
};

export const DownloadImage: React.FC<{ downloadPath: any }> = memo((props) => {
  const { downloadPath } = props;
  const onClickDownload = () => {
    saveAs(downloadPath, "ascii_art");
    console.log(
      `${process.env.PUBLIC_URL}/static/images/ascii_images/${downloadPath}`
    );
  };

  return (
    <div>
      <Button
        onClick={onClickDownload}
        variant="outlined"
        size="large"
        style={buttonStyle}
      >
        Download
        <DownloadIcon />
      </Button>
    </div>
  );
});
