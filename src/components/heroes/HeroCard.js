import React from "react";
import { Link } from "react-router-dom";
import "./heroCard.css";

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  return (
    <div
      className="card m-2 text-center bg-dark border-0"
      style={{ width: "13rem" }}
    >
      <div className="overflow">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
      </div>

      <div className="card-body text-center text-light">
        <h5 className="card-title">{superhero}</h5>

        <p className="card-text text-secondary">{alter_ego}</p>

        <p>
          <small className="card-text text-secondary">{first_appearance}</small>
        </p>

        <Link to={`/hero/${id}`} className="btn btn-outline-secondary border-0">
          <small className="text-info">Ver más</small>
        </Link>

      </div>
      
    </div>
  );
};
