import './Works.scss';
import Grid from '../Grid/Grid';
import PopupWork from '../PopupWork/PopupWork';
import PopupWork2 from '../PopupWork2/PopupWork2';
import PopupWork3 from '../PopupWork3/PopupWork3';
import { useState } from 'react';
import {ReactComponent as WorksFile} from '../../Images/blueprint.svg';
import WorksIcon from "../../Images/blueprint.gif";
import Ardoise from '../../Images/Ardoise.png';
import CaptureArdoise from '../../Images/CaptureArdoise.jpg';
import Portfolio from '../../Images/Portfolio.png';

const Header = props => {
    const [buttonPopupWork, setButtonPopupWork] = useState(false);
    const [buttonPopupWork2, setButtonPopupWork2] = useState(false);
    const [buttonPopupWork3, setButtonPopupWork3] = useState(false);

    return (
        <div className="works-container" id="worksContainer">
            <div className="selection">
                <div className='works-main'>
                <div className='works-title'>
                    <h2>MY WORKS</h2>
                    <WorksFile/>
                    <img src={WorksIcon} video={WorksFile} alt="works"/>
                </div>
                    <h3 className='works-title2'>Click on the titles to learn more</h3>
                </div>
               

                <ul className='choice'>
                 
                    <h3><button className="site" onClick ={() => setButtonPopupWork(true)}>ARDOISE </button></h3>
                    <h3><button className="site" onClick ={() => setButtonPopupWork2(true)}>MY MULTI-MEDIA PORTFOLIO</button></h3>
                    <h3><button className="site" onClick ={() => setButtonPopupWork3(true)}>THE ONI'S ORIGIN</button></h3>

                    <PopupWork trigger={buttonPopupWork} setTrigger={setButtonPopupWork}>
                       <div className='grid-site'>
                            <img className="img-site" src={Ardoise} alt=""/>
                            <div className='text-site'>
                                <h2 className='title-site'>Ardoise</h2>
                                <p className='paragraph-site'>Website designed as part of my final project in Multi-media. All done in the React library. This project was made with the help of a full team of students, two Front-end dev and two Back-end dev. It's a schedule tool that calculates the time each teammember in a project spend doing their respective tasks. </p>
                                <h2 className='title2-site'>Link to it :</h2>
                                <h2 className='link-site'><a href="https://adroise.netlify.app/">https://adroise.netlify.app/</a></h2>
                            </div>
                        </div> 
                    </PopupWork>
                    <PopupWork2 trigger={buttonPopupWork2} setTrigger={setButtonPopupWork2}>
                    <div className='grid-site'>
                            <img className="img-site" src={Portfolio} alt=""/>
                            <div className='text-site'>
                                <h2 className='title-site'>My multi-media Portfolio</h2>
                                <p className='paragraph-site'>This is the Portfolio I made in my techic. Its contains a lot of differents projects ranging from videos, 3D models, videos games and other graphic stuff. Give it a visit if you wanna see some of my work in others areas</p>
                                <h2 className='title2-site'>Link to it :</h2>
                                <h2 className='link-site'><a href="https://jacobgodbout3.myportfolio.com/">https://jacobgodbout3.myportfolio.com/</a></h2>
                            </div>
                        </div> 
                    </PopupWork2>
                    <PopupWork3 trigger={buttonPopupWork3} setTrigger={setButtonPopupWork3}>
                        <p className='text-site'>bye</p>
                    </PopupWork3>
                </ul>
            </div>
            <Grid/>
        </div>
    );
};

export default Header;
