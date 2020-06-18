import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    fetch(FETCH_URL, {
    method: 'GET',
    headers: new Headers({
    'Authorization': 'Bearer BQCw22HzJlIaG_xdSKOZFRVTj-kYKqGwE_wOFvE1kyYcLPvRI50JRiwX_gS-ps156RJ4VP_1fQmoi65Ot90y7Rbwr6HV1Uo61_2a_EJgh5S6O4GQRZUGxXdI-JAwkDStNiHjIyMa9Gm_-TA'
    }),
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      console.log('artist', artist);
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=MY&`
      fetch(FETCH_URL, {
        method: 'GET',
        headers: new Headers({
        'Authorization': 'Bearer BQCi-TDmepD8L32oZD6PX9l_ClvsQDiGFyQUY0yiNAPc5ioDwAgae8JdeyRdxX1zb47dABRgIKtOloQvFvl7O1laOvKr2GSBfnZ0mGn0o8P4xPmr7YnBFe35jFLUBC7Q2Ab5DeVFAwEgArc'
      }),
      })
      .then(response => response.json())
      .then(json => {
        console.log('artist\'s top tracks:', json);
        const { tracks } = json;
        this.setState({tracks});
      })
    })
    .catch(error => console.log('error', error))
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
            type="text"
            placeholder="Search an artist..."
            value={this.state.query}
            onChange={ event => {this.setState({query: event.target.value})}}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search()
              }
            }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={() => this.search()}>
                <BsSearch />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ?
            <div>
              <Profile
                artist={this.state.artist}
              />
              <Gallery
                tracks ={this.state.tracks}
              />
            </div>
          : <div></div>
        }
      </div>
    )
  }
}

export default App;
