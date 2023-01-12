import './Main.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import Css from '../../Images/css-3.png';
import Html from '../../Images/html-5.png';
import Bootstrap from '../../Images/bootstrap.png';
import Javascript from '../../Images/js.png';
import Wordpress from '../../Images/wordpress.png';
import Background from '../../Images/AdobeStock_522632252.jpeg';
import style from '../../Images/style.png';
import skills from '../../Images/suitcase.png';
import IconsPopup from '../IconsPopup';
import IconsPopupLeft from '../IconsPopupLeft';


function Main() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="home-container" id="aboutContainer" style={{ backgroundImage:`url(${Background})`,  backgroundColor:'#d6d6d6', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='home-photo'>
            <img src = {style} alt=""/>
        </div>
        <div className='home-presentation'>
       
            <div className="main-title">
              <h3>WHO AM I ?</h3>
            </div>
            <p>
            I specialize in everything artistic such as Web design, illustration, computer graphics, special effects animation and character modeling and 2D and 3D environment.
            </p>
            <p>
            I recently did an internship in After effect animation development and video editing at BoomBox group. I own a diploma in multimedia integration technique since May 2022.

            </p>
            <div className='icons-presentation'>
              <p> <FaArrowDown/> Click here to see my experience with web languages and libraries</p>
              <button className="bagage" onClick ={() => setButtonPopup(true)}> <img src = {skills} alt="" className='skill-icon'/></button>
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <div className='grid-popup'>
                      <IconsPopup icon = {Html} text = {"Like anyone, Html is the first web language I'v learned to master. Even tho it can be simple, I do think I have more to learn from this language"}/>
                  </div>
                  <div className='grid-popup2'>
                      <IconsPopupLeft icon = {Css} text = {"I usually use a lot more of scss, which is more common in the react library, I'v learned to clarify and clean my css pages while doing a lot of school works "}/>
                      <IconsPopup icon = {Bootstrap} text = {"When efficiency calls and time is missing, I have learned to use libraries such as Boostrap, to make work easier"}/>
                  </div>
                  <div className='grid-popup3'>
                      <IconsPopupLeft icon = {Javascript} text = {"As a front-end developer, I tended to not lean as much into javascript in the past, but I understand its importance and I have learned to master it. It also helps that I use React a lot"}/>
                      <IconsPopup key={4} icon = {Wordpress} text = {"Even tho its not considered like true web, Wordpress is one of the tools in my arsenal, I'v learn to use to make some easier website"}/>
                  </div>
            </Popup>
        </div>
    </div>
  );
  
}

export default Main;