import './App.css';
import React, {Component} from 'react';
import ColorBox from './components/ColorBox.js';

/* global chrome*/

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      palette: [],
      active: ''
    };
  }
  
  componentDidMount() {
    chrome.storage.sync.get(["colorPalette", "color"], (data) => {
      this.setStateFromData(data);
    });
  }
  
  setStateFromData(data) {
    this.setState({
      palette: data.colorPalette,
      active: data.color
    });
  }

  activeColorHandler(color) {
    chrome.storage.sync.set({
      colorPalette: this.state.palette,
      color: color
    }).then();

    this.setState({
      palette: this.state.palette,
      active: color
    });
  }

  render() {
    console.log(this.state.palette);
    return (
      <ul style={{listStyle: "none", margin: "0 0", padding: "0 0", 
            display: "flex", flexWrap: "wrap", flexDirection: "row", width: "60px"
      }}>
        {this.state.palette.map( color => 
          <li style={{margin: "none"}} id={color}>
            <ColorBox color={color} active={color === this.state.active} changeColor={() => this.activeColorHandler(color)}/>
          </li>
        )}
      </ul>
    );
  }
}

export default App;
