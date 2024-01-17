import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import About from './component/About';
import Projects from './component/Projects';
import Chatbot from './component/chatbot';
function App() {
  

  return (

    <div >
      <NavBar  />
     <About/>
     <Projects/>
     <Chatbot />
    </div>
  );
}

export default App;
