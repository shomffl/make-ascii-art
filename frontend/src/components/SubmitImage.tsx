import React, { useState, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { DownloadImage } from "./DownloadImage";
import { Remake } from "./Remake";

export const SubmitImage: React.FC<{
  setImage: Dispatch<SetStateAction<string>>;
}> = (props) => {
  const { setImage } = props;
  const [downloadPath, setDownloadPath] = useState("");
  const [openDownload, setOpenDownload] = useState(false);
  const onClickSubmit = (e: any) => {
    const form = new FormData(e.target);

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

  return (
    <>
      {openDownload ? (
        <Stack direction="row" spacing={2}>
          <DownloadImage downloadPath={downloadPath} />
          <Remake />
        </Stack>
      ) : (
        <form onSubmit={onClickSubmit}>
          <Stack direction="row" spacing={2}>
            <label>
              <input
                accept="image/*"
                type="file"
                name="file"
                style={{ display: "none" }}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
            <label>
              <Button variant="contained" type="submit">
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
