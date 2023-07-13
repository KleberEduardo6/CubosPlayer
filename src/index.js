import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/index.jsx';
import Main from './components/Main/index.jsx'; 
import Footer from './components/Footer/index.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <Header />
    <Main />
    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);