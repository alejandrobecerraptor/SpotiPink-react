import React from 'react'
import './card.scss';

const Card = ({item}) => {
    return ( 
        <div className="o-card-container">
            <a href={item.track.preview_url} target="blank" ><img src={item.track.album.images[1].url} alt="background album" /></a>
            <div className="o-card-content">
                <h1>{item.track.name}</h1> 
                <h2>{item.track.artists[0].name}</h2> 
            </div>

        </div>
     );
}
 
export default Card;