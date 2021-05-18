import React from 'react'
import './playlist.scss';

const PlayList = ({item}) => {
    return ( 
        <div className="o-card-playlist-container">
            <img src={item.images[0].url} alt="card of the song" />
            <div className="o-card-playlist-content">
                <h1>{item.name}</h1>
            </div>
        </div>
     );
}
 
export default PlayList;