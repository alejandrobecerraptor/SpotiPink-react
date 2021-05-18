import React,{Fragment} from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./slideBar.scss";

const SlideBar = () => {

  return (

    <Fragment>
   
      <div className="m-slidebar">
        <div>
          <ul>
            <li>
              <NavLink to="/home">
                <FaIcons.FaSpotify className="m-icons" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">
                <FaIcons.FaStar className="m-icons" />
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlist">
                <FaIcons.FaPlay className="m-icons" />
                Playlists
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

    </Fragment>
    
    
  );
};

export default SlideBar;
