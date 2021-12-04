import React, { useState } from "react";
import { SubmitImage } from "./SubmitImage";
import logo from "../momiji.png";
import styled from "styled-components";
import background from "../washi.png";

export const ImageDisplay = () => {
  const [image, setImage] = useState(logo);

  return (
    <Background>
      <ContentsPosition>
        <img src={image} style={{ width: "500px" }} />
        <SubmitImage setImage={setImage} />
      </ContentsPosition>
    </Background>
  );
};

const Background = styled.header`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
