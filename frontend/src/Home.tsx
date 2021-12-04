import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import styled, { keyframes } from "styled-components";
import fugaku from "./fugaku.png";
import fugaku_ascii from "./fugaku_ascii.png";
import black from "./black.png";

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

        {/* <StyledButton onClick={onClickPage} style={{height: "50px"}}>push</StyledButton> */}
      </Background>
    </div>
  );
};

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 50vh;
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

const fadeIn = keyframes`
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
  animation-name: ${fadeIn};
  animation-duration: 4s;
  animation-timing-function: ease-in;
  background-image: url(${fugaku_ascii});
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;
