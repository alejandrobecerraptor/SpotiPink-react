import React, { useState, useEffect } from "react";
import PlayList from "../playList/playlist";
import axios from "axios";
import "./listMePlaylist.scss";

export const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const ListMePlaylist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }

    const getPlaylist = () => {
      axios
        .get(PLAYLIST_ENDPOINT, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPlaylist();
  }, [token]);

  return (
    <div className="o-meplaylist-container">
      <div className="o-box-favorites">
        {data?.items
          ? data.items.map((item) => <PlayList key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default ListMePlaylist;
