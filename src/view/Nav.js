import React, {useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import circleLeft from "../icones/angle-circle-left.svg";
import circleRight from "../icones/angle-circle-right.svg";
import burger from "../icones/three-horizontal-lines.svg";

export default () => {

    const allPages = [
        "/", 
        "/experience-professionnel",
         "/formations", 
         "/realisations-web", 
         "/technologies-web"  
        ];

    const [indexBefore, setIndexBefore] = useState(0);
    const [indexAfter, setIndexAfter] = useState(0);

    const afterBefore = (x) => {
        const max = allPages.length;
        if(x > 0 && x < max-1) {
            setIndexBefore(x-1);
            setIndexAfter(x+1);
        } else if ( x <= 0) {
            setIndexBefore(max-1);
            setIndexAfter(x+1);
        } else {
            setIndexBefore(x-1);
            setIndexAfter(0)
        }
    }
    
    useEffect(()=> {
        const here = window.location.pathname;
        afterBefore(allPages.indexOf(here));
    },[]);

    const rectractable = document.getElementById('retractable');
    const openClose = () => {
        rectractable.classList.toggle('open');
    }
    
    return(
        <div className="navbar">
            <nav> 
                <div className="arrow">
                    <Link to={allPages[indexBefore]} onClick={()=> afterBefore(indexBefore)}>
                    <img src={circleLeft} alt="précédent" />
                    </Link>
                </div>
                <div id="burger" onClick={()=> openClose()}><img src={burger} /></div>
                <ul id="retractable">
                    <li><NavLink to={allPages[0]} onClick={()=> afterBefore(0)}>Présentation</NavLink></li>
                    <li><NavLink to={allPages[1]} onClick={()=> afterBefore(1)}>Expérience</NavLink></li>
                    <li><NavLink to={allPages[2]} onClick={()=> afterBefore(2)}>Formations</NavLink></li>
                    <li><NavLink to={allPages[3]} onClick={()=> afterBefore(3)}>Réalisations</NavLink></li>
                    <li><NavLink to={allPages[4]} onClick={()=> afterBefore(4)}>Technologies</NavLink></li>
                </ul>
                <div className="arrow">
                    <Link to={allPages[indexAfter]} onClick={()=> afterBefore(indexAfter)}>
                    <img src={circleRight} alt="suivant" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}


