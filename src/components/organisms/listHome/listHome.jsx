import React,{useEffect,useState} from "react";
import {getNewReleases} from "../../../services/newRealeases";
import CardAlbums from "../cardsAlbums/cardsAlbums";

import "./listHome.scss";

const ListHome = () => {
 const [response,setResponse] = useState();
 const [token,setToken] = useState();
  useEffect(() => {
    
    const _token = localStorage.getItem("accessToken");
    setToken(_token);
    const printNewReleases = async () => {
      const _response = await getNewReleases(token);
      console.log("soy los albums",_response);
      setResponse(_response);
    };
    printNewReleases();
  }, [token]);


  return (
    <div className="o-home-container">
      <div className="o-home-content-up"></div>
      <div className="o-home-content-down">
        <div className="o-home-titulo">
          <h1>WELCOME TO SPOTIPINK</h1>
        </div>
        <div className="o-home-newReleases">
          <h2>these are the new releases for the month of May</h2>
          <div className="o-home-cards">
            {response?.items
            ? response.items.map((item) => 
            <CardAlbums key={item.id} item={item} />
            )
            : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHome;
