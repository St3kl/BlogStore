// Import Element
import React from "react";
import {FaBars} from "react-icons/fa";
import logo_s from "../../assets/img/logo_short.png";
import logo_l from "../../assets/img/logo_long.png";
import "../style/style.css"



const Navbar = () => {
return (
<div>

<div className="header">
    {/* ++++Logo element+++++ */}
    <div className="logo">
        <div className="logo_img b_log">
            <img src={logo_l} alt="Website logo" className="log_sty" />
        </div>
        <div className="logo_img l_log">
            <img src={logo_s} alt="Website logo " className="log_sty" />
        </div>
    </div>
      {/* ++++Logo element+++++ */}
      {/* =====Menu Btn===== */}
     <button className="menu_btn">
        <FaBars className="icon_btn"/>
     </button> 
     {/* ====Menu list==== */}
     <nav className="navbar">
        <ul className="menu_items">
            <li className="list_item">Home</li>
            <li className="list_item">Projects</li>
            <li className="list_item">Blog</li>
            <li className="list_item">Store</li>
        </ul>
        <button className="cont_btn">Contact</button>
     </nav>
</div>

</div>
);

}


// Export module

export default Navbar;