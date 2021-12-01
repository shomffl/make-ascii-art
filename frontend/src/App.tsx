import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { PageA } from "./PageA";

export const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/page_a"  element={<PageA/>} />
      </Routes>
    </BrowserRouter>
  );
};
