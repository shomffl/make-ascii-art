import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { ImageDisplay } from "../components/ImageDisplay";


export const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make" element={<ImageDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
