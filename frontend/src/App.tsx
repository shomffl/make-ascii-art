import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
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
      </header>
    </div>
  );
};

export default App;
