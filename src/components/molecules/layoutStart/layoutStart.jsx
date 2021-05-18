import React from "react";
import LoginForm from "../forms/login/loginForm";
import * as FaIcons from "react-icons/fa";
import "./layoutStart.scss";

const LayoutStart = () => {
  return (
    <div className="m-container-start">
      <div className="m-card-start">
        <div className="m-logotipo">
          <h1>SpotiPink</h1>
          <FaIcons.FaSpotify className="m-icon" />
        </div>

        <div className="m-form-login">

          <LoginForm />

        </div>
      </div>
    </div>
  );
};

export default LayoutStart;
