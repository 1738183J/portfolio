import './Main.scss';
import Background from '../../Images/AdobeStock_522632252.jpeg';
import style from '../../Images/style.png';


function Main() {

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