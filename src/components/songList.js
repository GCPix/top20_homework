import React, {Component} from 'react';
import Song from './song'
import './songList.css'

const SongList = ((props) => {
  const songNodes = props.top20.map((song, index) => {return (<Song title = {song.title.label} position = {index+1} artist = {song["im:artist"].label} image = {song["im:image"][0].label} key = {index}/>)
})
  return(
    <div className = "songList">
    <h1>Songs:</h1>
    <h1>{songNodes}</h1>
    </div>
  )


})

export default SongList;
