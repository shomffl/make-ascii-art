import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import styled, { keyframes } from "styled-components";
import fugaku from "./fugaku.png";
import fugaku_ascii from "./fugaku_ascii.png";
import black from "./black.png";

const buttonStyle = {
  fontSize: "1.5vw",
  borderRadius: "30px",
  border: "2px solid silver",
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const onClickPage = () => {
    navigate("./make");
  };

  useEffect(() => {
    axios.get("/create_folder").then((res) => {
      console.log(res.data.message);
    });
  }, []);

  return (
    <div>
      <Background>
        <BlackImage1 src={black} style={{ animationDelay: "1s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.1s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.2s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.3s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.4s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.5s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.6s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.7s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.8s" }} />
        <BlackImage1 src={black} style={{ animationDelay: "1.9s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.9s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.8s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.7s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.6s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.5s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.4s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.3s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.2s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1.1s" }} />
        <BlackImage2 src={black} style={{ animationDelay: "1s" }} />
        <TitlePosition>
          <Title>PASSME ASCII</Title>
          <StyledButton
            onClick={onClickPage}
            variant="contained"
            style={buttonStyle}
          >
            Start
          </StyledButton>
        </TitlePosition>
      </Background>
    </div>
  );
};


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  70%{
    opacity:0;
  }
  to {
    opacity: 1;
  }
`;

const TitlePosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${fadeIn};
  animation-duration: 8s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 45vh;
  font-size: 7vmax;
`;

const circleanime = keyframes`
 0%{
    transform: scale(0.68);
  }
  100%{
    transform: scale(1.2);
    opacity: 0;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 40vh;
  height: 9vh;
  width: 13vw;
  border: 1px solid;
  border-radius: 30px;
  background: linear-gradient(45deg, #402721 30%, #a69292 90%);

  &: hover {
    background: linear-gradient(45deg, silver 30%, #a69292 90%);
  }

  &::after {
    content: "";
    position: absolute;
    border: 2px solid #a69292;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
  }
  &::before {
    content: "";
    position: absolute;
    border: 1px solid #a69292;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
    animation-delay: 0.3s;
  }
`;

const SlideLeft = keyframes`

  from {
    transform: translateX(0%);
  }
  30% {
        transform: translateX(100%);
  }
70% {
        transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }

`;

const SlideRight = keyframes`

  from {
    transform: translateX(0%);
  }
  30% {
        transform: translateX(-100%);
  }
70% {
        transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }

`;

const BlackImage1 = styled.img`
  animation-name: ${SlideLeft};
  height: 5vh;
  width: 100vw;
  animation-duration: 4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  vertical-align: bottom;
  position: relative;
  left: -100vw;
`;
const BlackImage2 = styled.img`
  animation-name: ${SlideRight};
  height: 5vh;
  width: 100vw;
  animation-duration: 4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  vertical-align: bottom;
  position: relative;
  right: -100vw;
`;

const changeImage = keyframes`
  from {
     background-image: url(${fugaku});
  }
  70%{
      background-image: url(${fugaku});
  }
  to {
  }
`;

const Background = styled.header`
  animation-name: ${changeImage};
  animation-duration: 4s;
  animation-timing-function: ease-in;
  background-image: url(${fugaku_ascii});
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;
