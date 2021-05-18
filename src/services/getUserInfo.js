import axios from "axios";

const INFO_USER_ENDPOINT = "https://api.spotify.com/v1/me";

export const getUserInfo = (token) =>{
    return axios.get(INFO_USER_ENDPOINT, {
        headers: {
            Authorization: "Bearer " + token,
        }
    }).then(response => {
        return response.data
    })
    .catch((error) => {
        return error
    });
}