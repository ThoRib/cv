import photoId from "../images/photo-id.jpg";
import phone from "../icones/phone-outline.svg";
import email from "../icones/email.svg";
import pin from "../icones/map-pin-point.svg";
import linkedin from "../icones/linkedin.svg";

export default () => (
    <div className="content" id="side-bar">
        <div id="global-id">
            <div id="photo-id">
                <img src={photoId} alt="photo identité" />
            </div>
            <div id="title-id">   
                <h1>Thomas Ribardière<br /><span>Développeur Web<br />Webmaster</span></h1>
            </div>
        </div>
        <div id="contact">
            <div><img src={phone} /><p>06 40 93 57 83</p></div>
            <div><img src={email} /><p>thomas.ribardiere@orange.fr</p></div>
            <div><img src={pin} /><p>Bry sur Marne - France</p></div>
            <div><img src={linkedin} /><a href="https://www.linkedin.com/in/thomasribardiere/" target="_blank"><p>in/thomasribardiere/</p></a></div>
        </div>
    </div>
);

