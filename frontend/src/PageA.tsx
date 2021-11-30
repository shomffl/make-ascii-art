import React from "react";
import { Link } from "react-router-dom";


export const PageA: React.FC = () => {
  return (
    <div>
      <h1>PageA</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
