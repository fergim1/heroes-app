import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="container d-flex animate__animated animate__fadeIn">
      <div className="row justify-content-center ">
        {heroes.map((hero) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <HeroCard key={hero.id} {...hero} />
          </div>
        ))}
      </div>
    </div>
  );
};
