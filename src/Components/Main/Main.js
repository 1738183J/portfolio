import './Main.scss';
import hero2 from '../../Images/hero2.png';

function Main() {

  return (
    <div className="home-container">
        <div className='home-photo'>
            <div className='petit-cercle'></div>
            <div className='cercle'></div>
            <img src = {hero2} alt=""/>
        </div>
        <div className='home-presentation'>
            <h3>WHO AM I ?</h3>
            <p>
            Je me spécialise dans tout ce qui est artistique tel que l'illustration, l'infographie, l'animation d'effets spéciaux et la modélisation de personnage et d'environnement 2D et 3D. 
            </p>
            <p>
            J'ai effectué un stage en développement d'animations After effect et de montage vidéo chez BoomBox group. Je suis détenteur d'un diplôme en technique d'intégration multimédia depuis Mai 2022
            </p>
        </div>
    </div>
  );
  
}

export default Main;