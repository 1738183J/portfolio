import './Works.scss';
import Grid from '../Grid/Grid';
import {ReactComponent as WorksFile} from '../../Images/blueprint.svg';
import WorksIcon from "../../Images/blueprint.gif";

const Header = props => {

    return (
        <div className="works-container" id="worksContainer">
            <div className="selection">
                <div className='works-title'>
                    <h2>MY WORKS</h2>
                    <WorksFile/>
                    <img src={WorksIcon} video={WorksFile}/>
                </div>
                <ul className='choice'>
                 
                    <li>ARDOISE</li>
                    <li>MY MULTI-MEDIA PORTFOLIO</li>
                    <li>THE ONI'S ORIGIN</li>
                </ul>
            </div>
            <Grid/>
        </div>
    );
};

export default Header;
