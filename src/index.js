import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header.jsx';
import Main from './components/Main/Main.jsx'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Main />

  </React.StrictMode>,
  document.getElementById('root')
);