import './Works.scss';
import Grid from '../Grid/Grid';

const Header = props => {

    return (
        <div className="works-container">
            <div className="selection">
                <h2>MY WORKS</h2>
                <ul className='choice'>
                    <li>ALL</li>
                    <li>WEB</li>
                    <li>GRAPHICS</li>
                    <li>VIDEOS</li>
                    <li>OTHERS</li>
                </ul>
            </div>
            <Grid/>
        </div>
    );
};

export default Header;
