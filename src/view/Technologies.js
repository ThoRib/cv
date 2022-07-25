import html from "../icones/html.svg";
import css from "../icones/css.svg";
import bootstrap from "../icones/bootstrap.svg";
import sass from "../icones/sass.svg";
import javascript from "../icones/javascript.svg";
import jquery from "../icones/jquery.svg";
import nodejs from "../icones/nodejs.svg";
import mongodb from "../icones/mongodb.svg";
import react from "../icones/react.svg";
import php from "../icones/php.svg";
import symfony from "../icones/symfony.svg";
import mysql from "../icones/mysql.svg";
import git from "../icones/git.svg";
import ubuntu from "../icones/ubuntu.svg";
import moqups from "../icones/moqups.svg";
import illustrator from "../icones/illustrator.svg";
import inkscape from "../icones/inkscape.jpeg";
import photoshop from "../icones/photoshop.svg";
import wilbericon from "../icones/wilber-big.png";
import blender from "../icones/blender.svg";
import coding from "../icones/coding.svg";


export default () => (
    <div className="content main" id="technos">  
        <div className="main-title long-title" >
            <img src={coding} /><h1><span>Langages &</span>Technologies</h1> 
        </div>
        <ul>
            <li>
                <div><img src={html} alt="logo html" /></div>
                <p>HTML</p>
                <span className="level l4"></span>
            </li>
            <li>
                <div><img src={css} alt="logo css" /></div>
                <p>CSS</p>
                <span className="level l4"></span>
            </li>
            <li>
                <div><img src={bootstrap} alt="logo bootstrap" /></div>
                <p>Bootstrap</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={sass} alt="logo sass" /></div>
                <p>Sass</p>
                <span className="level l4"></span>
            </li>
            <li>
                <div><img src={javascript} alt="logo javascript" /></div>
                <p>JavaScript</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={jquery} alt="logo jquery" /></div>
                <p>jQuery</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={nodejs} alt="logo node.js" /></div>
                <p>Nodes.js</p>
                <span className="level l1"></span>
            </li>
            <li>
                <div><img src={mongodb} alt="logo mongodb" /></div>
                <p>MongoDB</p>
                <span className="level l1"></span>
            </li>
            <li>
                <div><img src={react} alt="logo react" /></div>
                <p>React</p>
                <span className="level l2"></span>
            </li>
            <li>
                <div><img src={php} alt="logo php" /></div>
                <p>PHP</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={symfony} alt="logo symfony" /></div>
                <p>Symfony</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={mysql} alt="logo mysql" /></div>
                <p>MySQL / SQL</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={git} alt="logo git" /></div>
                <p>Git / GitHub</p>
                <span className="level l2"></span>
            </li>
            <li>
                <div><img src={ubuntu} alt="logo ubuntu" /></div>
                <p>Ubuntu</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={moqups} alt="logo moqups" /></div>
                <p>Moqups</p>
                <span className="level l1"></span>
            </li>
            <li>
                <div><img src={illustrator} alt="logo illustrator" /></div>
                <p>Illustrator</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={inkscape} alt="logo inkscape" className="pixel"/></div>
                <p>Inkscape</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={photoshop} alt="logo photoshop" /></div>
                <p>Photoshop</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={wilbericon} alt="logo gimp" className="pixel"/></div>
                <p>Gimp</p>
                <span className="level l3"></span>
            </li>
            <li>
                <div><img src={blender} alt="logo blender" /></div>
                <p>Blender</p>
                <span className="level l3"></span>
            </li>
        </ul>
    </div>
);


