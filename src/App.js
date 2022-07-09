import './App.css';
import React, {useState, useEffect} from 'react';
import Cover from './inc/Cover';
import Navbar from './inc/Navbar';
import About from './inc/About';
import Experience from './inc/Experience';
import Skill from './inc/Skill';
import Project from './inc/Project';

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
      <Experience />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
