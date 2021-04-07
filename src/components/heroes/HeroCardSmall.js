import React from "react";
import { Link } from "react-router-dom";
import "./heroCard.css";

export const HeroCardSmall = ({ id, superhero }) => {
  return (
    <div
      className="card m-2 text-center bg-dark border-0"
      style={{ width: "8rem" }}
    >
      <div className="overflow">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
      </div>

      <div className="card-body text-center text-light">
        <h7 className="card-title">{superhero}</h7>
        <br />

        <Link
          to={`/hero/${id}`}
          className="btn btn-outline-secondary border-1 mt-2  btn-sm"
        >
          <small className="text-info">Ver más</small>
        </Link>
      </div>
    </div>
  );
};
