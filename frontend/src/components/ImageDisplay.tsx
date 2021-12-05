import React, { useState } from "react";
import { SubmitImage } from "./SubmitImage";
import logo from "../momiji.png";
import styled, { keyframes } from "styled-components";
import background from "../washi.png";

export const ImageDisplay: React.FC = () => {
  const [image, setImage] = useState(logo);

  return (
    <Background>
      <ContentsPosition>
        <img src={image} style={{ width: "45vw" }} />
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
  gap: 1vmax;
`;
