import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <button onClick={onClickPage}>push</button>
      </header>
    </div>
  );
};
