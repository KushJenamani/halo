import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let activeColor = null;
let colorPalette = ['powderblue', 'khaki', 'lightpink', 'violet'];


function changeColor (newColor) {
  activeColor = newColor;
} 

function getColor () {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  return activeColor;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App colorPalette={colorPalette} changeColor={changeColor} getColor={getColor}/>
  </React.StrictMode>
);

