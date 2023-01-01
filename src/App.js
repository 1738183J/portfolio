import React from "react";
import Main from './Components/Main/Main';
import Works from './Components/Works/Works';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Background from './Images/background2.png';

import './App.scss';

function App() {

  return (
    <div className="OnePagerContainer" id="homeContainer" alt="" style={{ backgroundImage:`url(${Background})` , backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}> 
      <div className="shadow">
      <Header/>
      <Main/>
      <Works/>
      <Contact/>
      </div>
      <footer><i>@Jacob Godbout 2023</i></footer>
    </div>
  );
  
}

export default App;