import openBook from "../icones/open-book.svg";

export default () => (
    <div className="content main">
        <div className="main-title" >
            <img src={openBook} /><h1>Formation</h1>
        </div>
        <div>
            <div className="exp-form">
                <h2>Next Formation - Développeur Web et Web Mobile - RNCP</h2>
                <p>février 2022 - septembre 2022</p>
                <p>JavaScript - jQuery - Bootstrap - React - React Native - Node JS - PHP - PHP Objet - Symfony - Git</p>
            </div>
            <div className="exp-form">
                <h2>Opquast - Qualité Web</h2>
                <p>Mars 2022</p>
                <p>Certification expert qualité web</p>
            </div>
            <div className="exp-form">
                <h2>Next Formation - Infographiste Multimédia 3D - RNCP</h2>
                <p>Septembre 2014 - Juin 2015</p>
                <p>Illustrator - Photoshop - 3DSMax - HTML/CSS - jQuery</p>
            </div>
            <div className="exp-form">
                <h2>ETPA Toulouse - BTS Photographie</h2>
                <p>1993 - 1994</p>
                <p>Technologies de la photographie argentique</p>     
            </div>
        </div>
    </div>
);