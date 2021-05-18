export const authEndpoint =
"https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:3000/home";

// const clientId = "16e94f50750b409c8fdbf8faf8d8fcae";

// const scopes = [
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state"
// ]

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//----------------------------------------------------------------

const CLIENT_ID = "0f02223af124484eb0cfefde0191e4b9";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/home";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "playlist-read-private" , "user-library-read" , "user-read-email"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER); 

export const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue)
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, { });
  
    return paramsSplitUp;
  
  };

 export const  handleLogin = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;



