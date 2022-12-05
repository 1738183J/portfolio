import { useRef } from "react";
import Main from './Components/Main/Main';
import Works from './Components/Works/Works';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import background from './Images/background.png';
import './App.scss';

function App() {

  return (
    <div className="OnePagerContainer" style={{ backgroundImage:`url(${background})`, backgroundRepeat:"repeat", position: "relative"}}>
      <Header/>
      <Main/>
      <Works/>
      <Contact/>
    </div>
  );
  
}

export default App;