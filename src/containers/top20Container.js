import React, {Component} from 'react';
import SongList from '../components/songList';
import './top20Container.css'

class TopTwenty extends Component {
  constructor() {
    super();
    this.state = {
      top20:[]
    };
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response=>response.json())
    .then(data=>{this.setState({top20: data.feed.entry})
    })
  }

  render(){
  return(
    <div className = "top-20">
      <SongList
      top20 = {this.state.top20}/>
    </div>
  )
  }
}

export default TopTwenty;
