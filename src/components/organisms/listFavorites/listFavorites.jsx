import React,{useState, useEffect} from 'react';
import Card from '../cards/card';
import axios from 'axios';
import './listFavorites.scss';

const FAVORITES_ENDPOINT = "https://api.spotify.com/v1/me/tracks";

const ListFavorites = () => {

    const [token , setToken] = useState('');
    const [data , setData] = useState({});

    useEffect(() => {
        
        if(localStorage.getItem("accessToken")) {

            setToken(localStorage.getItem("accessToken"));
        }

        const getFavorites = () => {
            axios.get(FAVORITES_ENDPOINT,{
                        headers : {
                            Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }).then(response => {
                        setData(response.data)
                        console.log(response.data)
                    })
                    .catch((error) => {
                         console.log(error);
                    });
        }
        getFavorites();
    }, [token])

    return ( 
        <div className="o-favorites-container">
            <div className="o-box-favorites">
                {data?.items 
                ? 
                data.items.map((item) => 
                
                    <Card 
                        key= {item.track.id}
                        item={item}/>
                ) 
                : 
                null
                }
               
            </div>
        </div>
     );
}
 
export default ListFavorites;