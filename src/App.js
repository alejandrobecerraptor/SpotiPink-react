import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/login";
import Home from './components/pages/home/home'
import { getTokenFromUrl  } from "../src/services/spoty";
// import {getUserInfo} from "./services/getUserInfo";
import Favorites from "./components/pages/favorites/favorites";
// import SpotifyWebApi from 'spotify-web-api-js';
import MePlayList from "./components/pages/mePlayList/mePlayList";


// const spotify =  new SpotifyWebApi();


function App() {

  // const [token,setToken] = useState("");
  // let value = "";


  // useEffect(() => {
  //   const hash = getTokenFromUrl();
  //   window.location.hash = "";
  //   const _token = hash.access_token;
    

  // if(_token){

  //   setToken(_token);
  //   // // console.log("token : ",access_token);
  //   // console.log('entre');
  //   console.log(_token)
      

  //   localStorage.clear();
  //   localStorage.setItem("accessToken", _token);
      
  // }

  // // value = setToken(localStorage.getItem('accessToken'));

  // // let value = JSON.parse(localStorage.getItem('citas'));
  // // console.log(value);
  //   // console.log("mi token ", token)

  //     spotify.setAccessToken(_token);

  //     spotify.getMe().then((user) => {
  //       console.log(user);
    
  //     })

  
  // }, []);

 
// console.log("mi token del storage: ",token)




  useEffect(() => {
    const hash = getTokenFromUrl();
    const token = hash.access_token;

    if(token) {

    localStorage.clear();
    localStorage.setItem("accessToken", token);

    }
    
  }, [])

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/playlist" component={MePlayList} />
      </Switch>
    </Router>
  );
}

export default App;
