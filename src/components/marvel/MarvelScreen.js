import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="container mt-3 text-center">
      <img src="../assets/MARVEL_logo.png" alt="Logo Marvel" width="15%" />
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
