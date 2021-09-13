import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import ProductCard from "./components/ProductCard";


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
