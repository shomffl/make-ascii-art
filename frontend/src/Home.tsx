import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("hello");
  const onClickPage = () => {
    navigate("./page_a");
  };

  const onClickGetTime = () => {
    axios.get("/home").then((res) => {
      setText(res.data.time);
    });
  };

  useEffect(() => {
    axios.get("/create_folder").then((res) => {
      console.log(res.data.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickGetTime}>get</button>
        <h1>Home</h1>
        <Link to="/page_a">PageA</Link>
        {text}
        <button onClick={onClickPage}>push</button>
      </header>
    </div>
  );
};
