import React, { Dispatch } from "react";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import logo from "../momiji.png";

export const Remake: React.FC<{
  setImage: Dispatch<React.SetStateAction<string>>;
  setOpenDownload: Dispatch<React.SetStateAction<boolean>>;
  setCanClickSelect: Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const { setImage, setOpenDownload, setCanClickSelect } = props;
  const onClickRemake = () => {
    setImage(logo);
    setOpenDownload(false);
    setCanClickSelect(false);
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
