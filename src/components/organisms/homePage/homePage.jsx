import React from "react";
import Header from "../../molecules/header/header";
import SlideBar from "../../molecules/slidebar/slideBar";
import ListMePlaylist from "../lisMePlaylist/listMePlaylist";
import ListFavorites from "../listFavorites/listFavorites";
import ListHome from "../listHome/listHome";
import "./homePage.scss";

const HomePage = ({ organismo }) => {
  const project = () => {
    switch (organismo) {
      case "listFavorites":
        return <ListFavorites />;
      case "listHome":
        return <ListHome />;
      case "listMePlaylist":
        return <ListMePlaylist />;
      default:
        return <h1>404 - Not Found</h1>;
    }
  };


  return (
    <>
      <Header />

      <div className="o-container">

        <SlideBar />

        <div className="o-content">
          {project()}
        </div>
      </div>
    </>
  );
};

export default HomePage;
