import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

import { types } from "../../types/types";

export const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogOut = () => {
    dispatch({
      type: types.logout,
    });

    history.replace("/login");
  };

  const {
    user: { name },
  } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/" style={{ marginLeft: "20px" }}>
        Heroes App
      </Link>

      <div className="navbar-collapse" style={{ marginLeft: "50px" }}>
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>

        <div
          className="navbar-collapse collapse w-100 order-3 dual-collapse2 "
          style={{ marginLeft: "450px" }}
        >
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-primary">{name}</span>
            <button
              className="btn btn-primary btn-sm"
              style={{ marginLeft: "15px" }}
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
