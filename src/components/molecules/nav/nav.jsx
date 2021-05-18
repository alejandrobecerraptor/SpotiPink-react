import React from "react";
import * as FaIcons from "react-icons/im";
import { useHistory } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  let history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    history.push("/");

    console.log("DEslogueado");
  }

  return (
    <nav className="m-nav">
      <ul>
        <li>
          <a href="#">
            Alejandro Becerra 
            <div className="m-icon-logaout">
            <FaIcons.ImExit />
          </div>
          </a>
          
          <ul>
            <li>
              <a onClick={handleLogout}>Logaout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
