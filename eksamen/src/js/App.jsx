import React from 'react';
import '../css/App.css';
import ProductRender from './components/ProductRender.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import MainMenu from './components/MainMenu.jsx';

const App = () => {
  return(
    <>
      <MainMenu />
      <Footer />
    </>
  )
}

export default App;