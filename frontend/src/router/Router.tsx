import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { SubmitImage } from "../components/SubmitImage";


export const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page_a" element={<SubmitImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
