// Import Modules
import React from "react";
import "../style/style.css";

const Intro = ()=>{
 return (
    <div className="intro">
        {/* ====== */}
        <div className="title">FULL STACK WEB DEVELOPER</div>
        {/* ====== */}
       <div className="info">
         <h2 className="phrase">
            Building the web,<br/>
            one line at a time.
        </h2>
        <h5 className="work">I create modern web experiences, share developer knowledge, and sell professional templates you can use today</h5>
       </div>
       {/* ====== */}
       <div className="access">
        <button className="access_btn">View My Work →</button>
        <button className="access_btn">browse Templates</button>
       </div>
       {/* ====== */}

    </div>
 )

};

export default Intro;