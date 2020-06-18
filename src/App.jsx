import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
    method: 'GET',
    headers: new Headers({
    'Authorization': 'Bearer BQCw22HzJlIaG_xdSKOZFRVTj-kYKqGwE_wOFvE1kyYcLPvRI50JRiwX_gS-ps156RJ4VP_1fQmoi65Ot90y7Rbwr6HV1Uo61_2a_EJgh5S6O4GQRZUGxXdI-JAwkDStNiHjIyMa9Gm_-TA'
    }),
    })
    .then(response => response.json())
    .then(json => console.log('json', json))
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
        <div className="profile">
          <div>Artist picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
