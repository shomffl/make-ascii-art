import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import logo from "./apple.png";

export const PageA: React.FC = () => {
  const [image, setImage] = useState(logo);
  const onClickSubmit = (e: any) => {
    const form = new FormData(e.target);
    const file = form.get("file");
    console.log(file);

    e.preventDefault();
    const Upload = () => {
      axios
        .post("/make", form, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => {
          setImage(`${process.env.PUBLIC_URL}/static/images/ascii_images/${res.data.name}`);
          console.log(res);
        });
    };
    Upload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} style={{width: "500px"}}/>
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
      </header>
    </div>
  );
};
