import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
            type="text"
            placeholder="Search an artist..."
            />
            <Button variant="outline-secondary">
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
