import React, { useMemo } from "react";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCardSmall } from "../heroes/HeroCardSmall";

export const SearchScreen = ({ history }) => {
    
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValue;

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div className="container mt-5" style={{ height: "100vh", color: "white" }}>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmitSearch}>
            <input
              type="text"
              placeholder="Search hero..."
              autoComplete="off"
              className="form-control mb-2"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="form-control btn btn-primary btn-block"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && (
            <div className="alert alert-primary">
              Here the results will be shown
            </div>
          )}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-warning">
              There is no a hero " <a className="alert-link"> {q} </a> " !
            </div>
          )}

          <div className="row  d-flex animate__animated animate__fadeIn justify-content-center ">
            {heroesFiltered.map((hero) => (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <HeroCardSmall key={hero.id} {...hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
