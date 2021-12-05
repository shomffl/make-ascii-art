import React, { Dispatch } from "react";
import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";
import logo from "../momiji.png";

const buttonStyle = {
  border: "0.1vmax solid #F04B48",
  color: "#F04B48",
};

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
      <Button
        variant="outlined"
        size="large"
        style={buttonStyle}
        onClick={onClickRemake}
      >
        Remake
        <ReplayIcon />
      </Button>
    </div>
  );
};
