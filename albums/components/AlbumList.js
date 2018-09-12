import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};

  componentWillMount() {
    console.log("AlbumList will mount");
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
        console.log(this.state.albums);
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => {
     return <AlbumDetail key={album.title} album={ album } />
    });
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
}

export default AlbumList;
