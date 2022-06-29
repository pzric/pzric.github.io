import './App.css';
import React, {useState, useEffect} from 'react';
import Cover from './inc/Cover';
import Navbar from './inc/Navbar';
import About from './inc/About';
import Slider from './inc/Slider';
import Info from './inc/Info';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => { 
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]) 

  return (
    <div className='App'>
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
    </div>
  );
}

export default App;
