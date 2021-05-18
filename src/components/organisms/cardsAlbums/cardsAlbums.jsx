import React from 'react'
import './cardsAlbums.scss';

const CardAlbums = ({item}) => {
    return ( 
        <div className="o-cardAlbum-container">
            <a href={item.external_urls.spotify} target="blank" ><img src={item.images[1].url} alt="background album" /></a>
            <div className="o-cardAlbum-content">
                <h1>{item.name}</h1> 
                <h2>{item.artists[0].name}</h2> 
            </div>

        </div>
     );
}
 
export default CardAlbums;