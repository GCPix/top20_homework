import React, {Component} from 'react';
import './song.css'

const Song = (({title, position, artist, image}) => {

    return(
      <div className = "song">
        <div className = "position">
          <h3>Position: {position}</h3>
        </div>
        <div className = "right">
          <div className = "image">
            <img src={image} alt={title}/>
          </div>
          <div className = "mainDetail">
            <p>Title: {title}</p>
            <p>Artist: {artist}</p>
          </div>
        </div>


      </div>
    )

})

export default Song
