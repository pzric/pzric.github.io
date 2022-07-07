import './App.css';
import React, {useState, useEffect} from 'react';
import Cover from './inc/Cover';
import Navbar from './inc/Navbar';
import About from './inc/About';
//import Slider from './inc/Slider';
//import Info from './inc/Info';
//import Footer from './inc/Footer';
//import Skill from './inc/Skill';

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
    </div>
  );
}

export default App;
