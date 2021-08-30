import React from "react";
import Header from "./Header.js";
import TotalValues from "./TotalValues.js";

export default function Banner() {
  return (
    <div className="container-fluid px-0 py-0 my-0 text-center">
      <Header />
      <TotalValues />
    </div>
  );
}
