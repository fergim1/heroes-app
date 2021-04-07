import React from "react";
import { HeroList } from "../heroes/HeroList";

export const DcScreen = () => {
  return (
    <div className="container mt-3 text-center">
      <img src="../assets/DC_logo.png" alt="Logo DC" width="10%" />
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
