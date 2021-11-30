import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

export const Home = () =>{
  const [text, setText] = useState("hello");
  const onClickGetTime = () => {
    axios.get("/home").then((res) => {
      setText(res.data.time);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text}
        <button onClick={onClickGetTime}>get</button>
        <h1>Home</h1>
        <Link to="/page_a">PageA</Link>
      </header>
    </div>
  );
}
