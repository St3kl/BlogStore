// Import Modules
import React from "react";
import heroBanner from "../../assets/img/banner_bg.svg";
import "../style/style.css";


const  Hero = (props) =>{
    // convertirlo en un array de objetos
    const bg_info = {
 openHtml : "<html>",
 openBody : "<body>",
 closeHtml : "</html>",
 closeBody : "</body>",
 dev : "{ dev: true }",
 helloWorld :"// hello, world",
 build : "I build the web." ,     
 skills : "Front-end · Back-end · Everything in between",
 skillHtml : "HTML",
 skillCss : "CSS",
 skillJs : "JS",
 skillReact : "React",
 skillNode : "Node.js",
 great : "let's build something great together →",
    };
    console.log(bg_info)

// let openHtml ="<html>"
// let openBody ="<body>"
// let closeHtml ="</html>"
// let closeBody ="</body>"
// let dev ="{ dev: true }"
// let helloWorld ="// hello, world"
// let build ="I build the web."      
// let skills ="Front-end · Back-end · Everything in between"
// let skillHtml ="HTML"
// let skillCss ="CSS"
// let skillJs ="JS"
// let skillReact ="React"
// let skillNode ="Node.js"
// let great ="let's build something great together →"
    return (
        <div  className="bannerHero">
            {/* style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            height: "100vh"
        }} */}
            {/* <img src={heroBanner} className="hero" alt="Website banner image"/> */}
            <div className="openDoc">
                <p className="opening openH">{bg_info.openHtml}</p>
                <p className="opening openB">{bg_info.openBody}</p>
                <p className="opening openD">{bg_info.dev}</p>
            </div>
            {/*  */}
            <div className="centralBody">
               <h3 className="hello">{bg_info.helloWorld}</h3>
               <h1 className="web">{bg_info.build}</h1>
               <h2 className="skills">{bg_info.skills}</h2>
            </div>
            {/* <div className="separator"></div> */}
            <ul className="skills_items">
                <li className="skill">{bg_info.skillHtml}</li>
                <li className="skill">{bg_info.skillCss}</li>
                <li className="skill">{bg_info.skillJs}</li>
                <li className="skill">{bg_info.skillReact}</li>
                <li className="skill">{bg_info.skillNode}</li>
            </ul>
            <div className="great">{bg_info.great}</div>
             <div className="closeDoc">
                <p className="opening closeD">{bg_info.closeHtml}</p>
                <p className="opening closeD">{bg_info.closeBody}</p>
              
            </div>

        </div>
    )

};

export default Hero;