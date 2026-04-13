// Import Modules
import React from "react";
import heroBanner from "../../assets/img/banner_bg.svg";
import "../style/style.css";
import "./Hero.css";


const  Hero = (props) =>{

    return (
        <div  className="bannerHero">
            {/* style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            height: "100vh"
        }} */}
            {/* <img src={heroBanner} className="hero" alt="Website banner image"/> */}
            <div className="openDoc">
                <p className="opening openH">{props.openH}</p>
                <p className="opening openB">{props.openB}</p>
                <p className="opening openD">{props.dev}</p>
            </div>
            {/*  */}
            <div className="centralBody">
               <h3 className="hello">{props.hello}</h3>
               <h1 className="web">{props.build}</h1>
               <h2 className="skills">{props.skills}</h2>
            </div>
            {/* <div className="separator"></div> */}
            <ul className="skills_items">
                <li className="skill">{props.skillH}</li>
                <li className="skill">{props.skillC}</li>
                <li className="skill">{props.skillJ}</li>
                <li className="skill">{props.skillR}</li>
                <li className="skill">{props.skillN}</li>
            </ul>
            <div className="great">{props.great}</div>
             <div className="closeDoc">
                <p className="opening closeD">{props.closeH}</p>
                <p className="opening closeD">{props.closeB}</p>
              
            </div>

        </div>
    )

};

export default Hero;