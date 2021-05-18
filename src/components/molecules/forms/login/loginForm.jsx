import React from "react";
import Button from "../../../atoms/buttons/button";
import "./loginForm.scss";
import { handleLogin } from "../../../../services/spoty";

const LoginForm = () => {

  return (
    <div className="m-login-box">
      <form>
        <input placeholder="Username" type="text" />
        <input placeholder="Password" type="password" />
        <div className="m-button-box">
          <button className="m-btn-login">Log in</button>
          <button className="m-btn-login">Sign Up</button>
        </div>
      </form>

      <div className="m-button-spotify">

        <Button
          titulo="LOGIN WITH SPOTIFY"
          clase="a-button a-button-apotify"
          href={handleLogin} />
          
      </div>
    </div>
  );
};

export default LoginForm;
