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

export const SubmitImage: React.FC<{
  setImage: Dispatch<SetStateAction<string>>;
}> = (props) => {
  const { setImage } = props;
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
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(e) => setOpenSnackbar(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      {openDownload ? (
        <Stack direction="row" spacing={2}>
          <DownloadImage downloadPath={downloadPath} />
          <Remake setImage={setImage} setOpenDownload={setOpenDownload} setCanClickSelect={setCanClickSelect}/>
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
                variant="contained"
                component="span"
                disabled={canClickSelect}
              >
                Select
              </Button>
            </label>
            <label>
              <Button variant="contained" type="submit" disabled={canClickSend}>
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
