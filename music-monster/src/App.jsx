import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';

import './app.css';

import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){
    const TOKEN = 'BQAGFF98KvZChaJL-URLj_-qeBwVSwp2M3NGDnj8cjne-mhMSC9677k35qxhW5_gbJidrx6NKzCbXqkkVwxTXuzlU6_gDBrZxW3XXBastbPdpseTiYxqTy5Di1vdjdGcoHdmUSU'
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    const HEADERS = {'Authorization': `Bearer ${ TOKEN }`}
    // {id}/top-tracks
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
        method: 'GET',
        headers: HEADERS
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=MX&`;
      fetch(FETCH_URL, {
        method: 'GET',
        headers: HEADERS
      })
      .then(response => response.json())
      .then(json => {
        const  { tracks } = json;
        this.setState({tracks});
      })
    });
  }

  render(){
    return(
      <div className="app">
        <div className="app-title">Music Monster</div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for an Artist"
                value={this.state.query}
                onChange={event => {this.setState({query:event.target.value})}}
                onKeyPress={ event => {
                    if(event.key === 'Enter'){
                      this.search();
                    }
                  }
                }
              />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          {
            this.state.artist !== null
            ?
              <div>
                <Profile artist={ this.state.artist } />
                <Gallery tracks={ this.state.tracks } />
              </div>
            : <div></div>
          }
      </div>
    )
  }
}

export default App;
