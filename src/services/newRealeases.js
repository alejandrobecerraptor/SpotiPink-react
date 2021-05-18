
import axios from 'axios';

const NEW_RELEASES_ENDPOINT = "https://api.spotify.com/v1/browse/new-releases?country=CO";

export const getNewReleases = (token) =>{
    return axios.get(NEW_RELEASES_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        }
    }).then(response => {
        return response.data.albums
    })
    .catch((error) => {
        return error
    });
}