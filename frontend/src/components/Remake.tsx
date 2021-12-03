import React, { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import logo from "../apple.png";



export const Remake: React.FC<{
  setImage: Dispatch<React.SetStateAction<string>>;
  setOpenDownload: Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const { setImage, setOpenDownload } = props;
  const onClickRemake = () => {
    setImage(logo);
    setOpenDownload(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={onClickRemake}>
        Remake
        <ReplayIcon />
      </Button>
    </div>
  );
};
