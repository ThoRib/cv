import website from "../icones/website.svg";
import siteAtelier3D from "../images/site-atelier3d.jpg";
import siteBloc2Notes from "../images/site-bloc-2-notes.jpg";
import sitePerso from "../images/site-perso.jpg";
import sitePhotos from "../images/site-photos.jpg"; 
import rightArrow from "../icones/round-black-right-arrow.svg";

export default () => (
    <div className="content main">    
        <div className="main-title" >
            <img src={website} /><h1>Réalisations Web</h1>
        </div>
        <div id="content-real">
            <div className="realisations">
                <img src={sitePerso} alt="Site personnel" />
                <div>
                    <a href="https://www.thomas-ribardiere.fr" target="_blank">
                        <p>Mon site personnel</p>
                        <img src={rightArrow} />
                    </a>
                </div>
            </div>
            <div className="realisations">
                <img src={siteBloc2Notes} alt="Site Bloc2Notes" />
                <div>
                    <a href="https://bloc2notes.thomas-ribardiere.fr/" target="_blank">
                        <p>Projet Bloc2Notes</p>
                        <img src={rightArrow} />
                    </a>
                </div>
            </div>
            <div className="realisations">
                <img src={sitePhotos} alt="Site Photographies" />
                <div>
                    <a href="https://photographies.thomas-ribardiere.fr/" target="_blank">
                        <p>Projet CMS Photographies</p>
                        <img src={rightArrow} />
                    </a>
                </div>
            </div>
            <div className="realisations">
                <img src={siteAtelier3D} alt="Site Atelier 3D" />
                <div>
                    <a href="https://www.atelier3d.org/" target="_blank">
                        <p>Site Atelier 3D</p>
                        <img src={rightArrow} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);


