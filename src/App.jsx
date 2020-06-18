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
            <Button variant="outline-secondary" onClick={() => this.search()}>
              <BsSearch />
            </Button>
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
