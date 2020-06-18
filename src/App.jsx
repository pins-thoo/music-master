import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Master</div>
        <div>
          <input placeholder="Search artist.."/>
          <button>button</button>
        </div>
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
