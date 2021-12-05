import React, { useState, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { DownloadImage } from "./DownloadImage";
import { Remake } from "./Remake";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const buttonStyle = {
  border: "0.1vmax solid #F04B48",
  color: "#F04B48",
};

export const SubmitImage: React.FC<{
  setImage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const { setImage, setLoading } = props;
  const [downloadPath, setDownloadPath] = useState("");
  const [openDownload, setOpenDownload] = useState(false);
  const [canClickSend, setCanClickSend] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [canClickSelect, setCanClickSelect] = useState(false);

  const onClickSubmit = (e: any) => {
    const form = new FormData(e.target);
    setOpenSnackbar(false);
    setCanClickSelect(true);
    setCanClickSend(true);
    setLoading(true);

    e.preventDefault();
    const Upload = () => {
      axios
        .post("/make", form, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => {
          setImage(res.data.name);
          setDownloadPath(res.data.name);
          setOpenDownload(true);
          setLoading(false);
        });
    };
    Upload();
  };

  const imageSelected = (e: any) => {
    setCanClickSend(false);
    setOpenSnackbar(true);
    setCanClickSelect(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(e) => setOpenSnackbar(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      {openDownload ? (
        <Stack direction="row" spacing={2}>
          <DownloadImage downloadPath={downloadPath} />
          <Remake
            setImage={setImage}
            setOpenDownload={setOpenDownload}
            setCanClickSelect={setCanClickSelect}
          />
        </Stack>
      ) : (
        <form onSubmit={onClickSubmit} onChange={imageSelected}>
          <Snackbar
            open={openSnackbar}
            message="image was selected!!"
            action={action}
          />
          <Stack direction="row" spacing={2}>
            <label>
              <input
                accept="image/*"
                type="file"
                name="file"
                style={{ display: "none" }}
                disabled={canClickSelect}
              />
              <Button
                variant="outlined"
                size="large"
                component="span"
                style={buttonStyle}
                disabled={canClickSelect}
              >
                Select
              </Button>
            </label>
            <label>
              <Button
                variant="outlined"
                size="large"
                type="submit"
                style={buttonStyle}
                disabled={canClickSend}
              >
                <span>Send</span>
                <SendIcon />
              </Button>
            </label>
          </Stack>
        </form>
      )}
    </>
  );
};
