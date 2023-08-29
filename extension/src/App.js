import './App.css';
import React, {Component} from 'react';
import ColorBox from './components/ColorBox.js';
import AddButton from './components/AddButton.js';

/* global chrome*/

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      palette: ['red', 'blue', 'green'],
      active: 'red'
    };
  }
  
  componentDidMount() {
    chrome.storage.local.get({colorPalette: ['purple', 'lightpink', 'khaki', 'powderblue', 'lime'], color: 'khaki'}, (data) => {
      chrome.storage.local.set(data)      
      this.setStateFromData(data);
    });
  }
  
  setStateFromData(data) {
    console.log("Got Data");
    console.log(data);
    this.setState({
      palette: data.colorPalette,
      active: data.color
    });
  }

  activeColorHandler(color) {
    chrome.storage.local.set({
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
      <>
        <h1>
          HALO
          <br/> <span className="largerHead">Caddy</span>
        </h1>
        <ul style={{
          listStyle: "none", 
          margin: "0 auto", 
          padding: "0 0", 
          display: "flex", 
          flexWrap: "wrap", 
          flexDirection: "row",
          justifyContent: "center" 
        }}>
          {this.state.palette.map( color => {
            console.log(color);
            return (<li style={{margin: "0 0", padding: "4rem 0px", height: "2rem", boxSizing: "border-box"}} id={color}>
              <ColorBox color={color} active={color === this.state.active} changeColor={() => this.activeColorHandler(color)}/>
            </li>);
          }
          )}
          <li style={{margin: "0 0", padding: "4rem 0px", height: "2rem", boxSizing: "border-box"}}><AddButton/></li>
        </ul>
      </>
    );
  }
}

export default App;
