import React from "react";
import Nav from "../nav/nav";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/ri";
import "./header.scss";

const Header = () => {
  return (
    <header className="m-header">
      <div className="m-header-into">
        <span>
          <NavLink to="/home" className="m-titulo-logo">
            SpotiPink <FaIcons.RiSpotifyLine className="m-icons" />
          </NavLink>
        </span>

        <Nav />
        
      </div>
    </header>
  );
};

export default Header;
