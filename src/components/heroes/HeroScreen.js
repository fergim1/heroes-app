import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row m-5" style={{ height: "100vh" }}>
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          style={{ maxWidth: "15rem" }}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 text-white">
        <h1> {superhero}</h1>
        <hr />
        <div className="animate__animated animate__fadeIn">
          <h7 className="list-group-item">
            {" "}
            <b>Alter ego : </b> {alter_ego}
          </h7>
          <h7 className="list-group-item">
            {" "}
            <b>Publisher : </b> {publisher}
          </h7>
          <h7 className="list-group-item">
            {" "}
            <b>First appearance : </b> {first_appearance}
          </h7>
          <h7 className="list-group-item">
            {" "}
            <b>Characters : </b> {characters}
          </h7>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
