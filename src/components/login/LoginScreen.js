import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./loginScreen.css";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogIn = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Fernando",
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="containerForm " style={{ height: "100vh", color: "white" }}>
      <form id="formLogin">
        <div className="form-group mb-3 mt-3">
          <h4 style={{ color: "black" }}> Sign In</h4>
        </div>
        <div className="form-group mb-3 mt-3">
          <input
            type="text"
            autocomplete="off"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="User"
          />
        </div>
        <div className="form-group mb-3 ">
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Password"
          />
        </div>
        <div className="form-group mb-3 ">
          <button className="btn btn-primary" onClick={handleLogIn}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
