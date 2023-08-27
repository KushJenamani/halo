import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let colorPalette = ['lightpink', 'powderblue', 'gold', 'violet'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App colorPalette={colorPalette}/>
  </React.StrictMode>
);

