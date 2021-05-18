import axios from 'axios';

export const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

export const getPlaylist = (token) => {
    return axios.get(PLAYLIST_ENDPOINT,{
                headers : {
                    Authorization: "Bearer " + token,
                },
            }).then(response => {
                return response.data;
            })
            .catch((error) => {
                return error
            });
}