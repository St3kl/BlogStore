// Import Modules
import React from "react";
import "../style/style.css";
 const Footer =()=>{
 let footer_title = "<LCODE/>"
    return (
        <div className="footer">
            <div className="footer_title">{footer_title}</div>
            <div className="info">Building the web, one line at a time.</div>
            <div className="separator"></div>
            <div className="copy_right">© 2025 LCODE. All rights reserved</div>
        </div>
    )

 };

 export default Footer;