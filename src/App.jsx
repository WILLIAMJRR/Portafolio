import React, { useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';

function App() {
  //theme state
  const [theme, setTheme] = useState('dark');
  return (
    <div className='dark_light modeDark bg-no-repeat bg-cover overflow-hidden '>
      <Header key={'dark'} theme={theme} setTheme={setTheme} />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Carrusel/>
      <Footer/>
    </div>
  );
}

export default App;
