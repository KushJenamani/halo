import './App.css';
import React, {Component} from 'react';
import ColorBox from './components/ColorBox.js';


class App extends Component {
  constructor (props) {
    super(props);
    this.props = props;

    this.state = {
      palette: props.colorPalette,
      active: props.colorPalette[Math.floor(props.colorPalette.length / 2)]
    }

    props.changeColor(this.state.active);
  }

  activeColorHandler(color) {
    this.setState({
      palette: this.state.palette,
      active: color
    });

    this.props.changeColor(this.state.active);
  }

  render() {
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
