
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import hero from '../../Images/hero.png';


const Header = props => {

    return (
        <div className="header-container">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <aside>
                <div className='top'>
                <span className="material-symbols-outlined">menu</span>
                <h2> MY WEBFOLIO</h2>
                </div>
                <div className="name">
                    <h3 className="nom">HI, MY NAME IS</h3>
                    <h2 className="nom2">JACOB GODBOUT</h2>
                    <h2 className="nom3">FRONT-END DEVELOPER</h2>
                </div>
            </aside>
            <div className="navbar-container">
                <Navbar/>
            <img className="hero" src = {hero} alt=""/>
            </div>
        </div>
    );
};

export default Header;
