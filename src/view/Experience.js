import briefcase from "../icones/briefcase.svg";

export default () => (
    <div className="content main">
        <div className="main-title long-title" >
            <img src={briefcase} /><h1>Expérience<span> Professionnelle</span></h1>
        </div>
        <div>
            <div className="exp-form" >
                <h2>Office Dépôt - Vendeur imprimerie</h2>
                <p>septembre 2006 - octobre 2022</p>
                <p>Réalisation de produits de communications personnalisés auprès d'une clientèle BtoB - Responsabilité du département - Formation des salariés - Suivi des commandes.</p>
            </div>
            <div className="exp-form" >
                <h2>eBrigade - Stage Développeur web</h2>
                <p>juillet 2022 - septembre 2022</p>
                <p>Développement front-end et back-end</p> 
                <p>PHP - JavaScript - HTML - CSS - Bootstrap - Git </p>
            </div>
            <div className="exp-form" >
                <h2>Micro Entrepreneur - Concepteur / Développeur Web</h2>
                <p>juin 2017 - février 2021</p>
                <p>Prospection clients - Conception et réalisation de sites web vitrines</p>
                <p>HTML - CSS - JavaScript - PHP - SQL</p>
            </div>
            <div className="exp-form" >
                <h2>Bnb Sitter - Stage Intégrateur web</h2>
                <p>avril 2015 - juin 2015</p>
                <p>Intégration des pages web du site</p> 
                <p>HTML - CSS - Bootstrap - Git - PHP - JavaScript</p>
            </div>
        </div>
    </div>
);


