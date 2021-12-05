import React, { useState } from "react";
import { SubmitImage } from "./SubmitImage";
import logo from "../momiji.png";
import styled from "styled-components";
import background from "../washi.png";
import ReactLoading from "react-loading";

export const ImageDisplay: React.FC = () => {
  const [image, setImage] = useState(logo);
  const [loading, setLoading] = useState(false);

  return (
    <Background>
      <ContentsPosition>
        {loading ? (
          <StyledReactLoading type="spin" width="35vw" color="silver" />
        ) : null}
        <img src={image} style={{ width: "45vw" }} />
        <SubmitImage setImage={setImage} setLoading={setLoading}/>
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

const StyledReactLoading = styled(ReactLoading)`
  position: absolute;
  top: 10%;
`;

const ContentsPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vmax;
`;
